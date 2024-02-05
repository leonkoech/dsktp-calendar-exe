"use client";
import { useState } from "react";
import Customize from "./customize";
import { defaultColors } from "@/app/modules/defaultStyles";
import { DefaultColorsModel, DefaultResults } from "@/app/models/defaultConfigs";

type Props = {
  currentStep: number;
  setStep: Function;
  setResults: Function;
  result: DefaultResults;
};

const Component = ({ currentStep, setStep, setResults, result }: Props) => {
  const [customizationStep, nextCustomStep] = useState(0);
  const [customizeActivated, setCustomizeActivity] = useState(false);
  const [customizeCompleted, setCustomizeCompletion] = useState(false);

  return (
    <div className="flex flex-grow w-full flex-col justify-around  items-center p-3 space-x-2 text-sm font-medium text-center">
      {customizeActivated ? (
        customizeCompleted ? (
          <div className="w-4/5">
            <span className="text-xs">
              You completed setting up your component, congrats!<br></br>{" "}
              <br></br> <br></br>
            </span>
            <button
              type="button"
              onClick={() => setStep(currentStep + 1)}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-12 py-1.5 text-center me-2 mb-2"
            >
              Next
            </button>
          </div>
        ) : (
          <Customize
            type={Object.keys(defaultColors)[customizationStep] as keyof DefaultColorsModel}
            customizationStep={customizationStep}
            nextCustomStep={nextCustomStep}
            setCustomizeCompletion={setCustomizeCompletion}
            result={result}
            setResults={setResults}
          />
        )
      ) : (
        <div className="w-4/5">
          <span className="text-xs">
            Here you get to choose how your component will look on the desktop
            based on your background etc. This is just for aesthetic reasons.
            But you will get to see a 'pre compiled' example of how it will look
            like.<br></br>
            You have a few options: <br></br>
            <br></br>
            <span className="text-left">
              1. background, border size and color, and font color<br></br>
              2. For these options, you select them for active, current and
              upcoming tasks.<br></br>
              <br></br>
            </span>
            Click Next to proceed.
            <br></br>
            <br></br>
          </span>
          <button
            type="button"
            onClick={() => setCustomizeActivity(true)}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-12 py-1.5 text-center me-2 mb-2"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Component;
