import React from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import Form from "./Form";
import Preview from "./Preview";
import crossIcon from "../../assets/modal/crossIcon.svg";
import Schedule from "./Schedule";

function CreatorMintForm(props) {
  const { steps, step, next, back, isFirstStep, isLastStep } = useMultistepForm(
    [<Form />, <Schedule />, <Preview />]
  );

  function onSubmit(event) {
    event.preventDefault();
    next();
    console.log(event.target);
  }

  return (
    <main className="h-screen w-screen fixed z-[999] bg-black text-white bg-opacity-50 backdrop-blur-lg overflow-auto">
      <section className="z-[9999] relative lg:top-20 lg:w-fit lg:max-w-[1200px] lg:h-fit bg-[#19162F] mx-auto px-4 lg:px-[120px] py-12 lg:py-20 lg:rounded-2xl">
        {/* Modal close button */}
        <button
          onClick={() => props.setShowMintForm(false)}
          className="absolute top-6 right-6"
        >
          <img src={crossIcon} alt="close-modal icon" />
        </button>

        <form onSubmit={onSubmit}>
          {/* Actual content */}
          {step}

          {/* Next/Prev Buttons */}
          <div className="w-full flex justify-end gap-4 mt-6">
            {!isFirstStep && (
              <button
                onClick={back}
                className="w-full lg:w-fit px-6 py-3 border border-[#D0AAFF] text-[#D0AAFF] font-readex-pro font-semibold rounded-lg"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="w-full lg:w-fit px-6 py-3 bg-[#D0AAFF] text-black font-readex-pro font-semibold rounded-lg"
            >
              {isLastStep ? "Schedule NFT" : "Next"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default CreatorMintForm;
