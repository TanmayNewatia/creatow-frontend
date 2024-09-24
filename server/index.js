import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  Account,
  Aptos,
  AptosConfig,
  Network,
  Deserializer,
  SimpleTransaction,
} from "@aptos-labs/ts-sdk";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const privateKey = "0x669ef5afd8f3e962f5490d6b093e8e2864edef65736270e13e95ecd5d04c4314"
const moduleAddress =
  "0x95247dbc3fcf380dd597bd9419d4821f2c70384bff0fa00dd3682716a9195f4f";
const INITIAL_BALANCE = 100_000_000; // 100 APT
const PORT = process.env.PORT || 3002;

const aptosConfig = new AptosConfig({ network: Network.DEVNET });
const aptos = new Aptos(aptosConfig);

// Generate a sponsor account (in a real scenario, this would be a secure, persistent account)
const sponsor = Account.generate();

// Helper function to serialize BigInt
// const serializeBigInt = (obj) => {
//   if (typeof obj === 'bigint') {
//     return obj.toString();
//   } else if (Array.isArray(obj)) {
//     return obj.map(serializeBigInt);
//   } else if (typeof obj === 'object' && obj !== null) {
//     return Object.fromEntries(
//       Object.entries(obj).map(([key, value]) => [key, serializeBigInt(value)])
//     );
//   }
//   return obj;
// };

app.post("/sponsor-transaction", async (req, res) => {
  try {
    const { transactionBytes } = req.body;
    console.log(transactionBytes);

    // Fund the sponsor account (in a real scenario, this would be done separately)
    await aptos.fundAccount({
      accountAddress: sponsor.accountAddress,
      amount: INITIAL_BALANCE,
    });

    // Deserialize raw transaction
    const txnbytes = new Uint8Array(transactionBytes);
    const deserializer = new Deserializer(txnbytes);
    console.log(deserializer);
    const transaction = SimpleTransaction.deserialize(deserializer);

    console.log(transaction);
    // Sponsor signs as fee payer
    const sponsorAuth = aptos.transaction.signAsFeePayer({
      signer: sponsor,
      transaction,
    });

    const sponsorAuthBytes = sponsorAuth.bcsToBytes();

    res.json({
      sponsorAuthBytes: Array.from(sponsorAuthBytes),
      signedTransaction: Array.from(transaction.bcsToBytes()),
      sponsorAddress: sponsor.accountAddress.toString(),
    });
  } catch (error) {
    console.error("Error processing sponsored transaction:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/drop-nft", async (req, res) => {
    const alice = Account.generate();
    await aptos.fundAccount({
        accountAddress: alice.accountAddress,
        amount: INITIAL_BALANCE,
      });
  try {
    const transaction = await aptos.transaction.build.simple({
      sender: alice.accountAddress,
      // withFeePayer: true,
      data: {
        function: `${moduleAddress}::creatow_14::drop_nft`,
        functionArguments: [
          req.body.collectionId,
          req.body.receivers,
          req.body.pre_mint_amount,
        ],
      },
    });
    const senderAuthenticator = aptos.transaction.sign({
      signer: alice,
      transaction,
    });

    const response = await aptos.transaction.submit.simple({
      transaction,
      senderAuthenticator,
    });

    const executedTransaction = await aptos.waitForTransaction({
      transactionHash: response.hash,
    });
    res.json(executedTransaction);
  } catch (error) {
    console.error("Error processing sponsored transaction:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sponsor server running on port ${PORT}`);
  console.log(`Sponsor's address is: ${sponsor.accountAddress}`);
});
