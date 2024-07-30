import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import smallpfp from "../../assets/profile/leaderboard/smallPfpPlaceholder.svg";

function DropsTable() {
  return (
    <div className="w-full max-w-[1260px] text-white">
      <Table>
        <TableCaption>leaderboard</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Collections</TableHead>
            <TableHead className="text-center">Collectors</TableHead>
            <TableHead className="text-center">Sparks</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">No. of Mints</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-semibold">
          <TableRow>
            <TableCell className="text-center">
              <div className="w-fit flex justify-start items-center gap-4">
                <div className="w-6 aspect-square bg-[#493481] rounded-md text-center flex justify-center items-center">
                  <p className="text-sm">{1}</p>
                </div>
                <img src={smallpfp} alt="" />
                <p>ALTA</p>
              </div>
            </TableCell>
            <TableCell className="text-center">100</TableCell>
            <TableCell className="text-center">21K</TableCell>
            <TableCell className="text-center">30/09/2023</TableCell>
            <TableCell className="text-center">12</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default DropsTable;
