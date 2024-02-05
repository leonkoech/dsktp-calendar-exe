import Selector from "./selectors";
import { DefaultColorsModel, DefaultResults } from "@/app/models/defaultConfigs";

type Props={
  type: keyof DefaultColorsModel,
  customizationStep: number,
  nextCustomStep: Function,
  setCustomizeCompletion: Function;
  setResults: Function;
  result: DefaultResults
}

const Customize = ({
  type,
  customizationStep,
  nextCustomStep,
  setCustomizeCompletion,
  setResults,
  result
}: Props) => {
  return (
    <div className="w-full">
      <>
        <span className="text-xl capitalize">{type} Event Customization</span>
        <br></br>
        <span className="text-xs">
          These are events that have not yet occurred, but will.{" "}
        </span>
      </>
      <Selector
        type={type}
        customizationStep={customizationStep}
        nextCustomStep={nextCustomStep}
        setCustomizeCompletion={setCustomizeCompletion}
        result={result}
        setResults={setResults}
      />
    </div>
  );
};

export default Customize;
