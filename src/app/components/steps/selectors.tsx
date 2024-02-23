"use client";
import { useState } from "react";
import Display from "./display";
import {
  defaultColors,
  inputCustomizationValues
} from "@/app/modules/defaultStyles";
import {
  CustomConfigurations,
  DefaultColorsModel,
  DefaultResults,
  InputCustomization
} from "@/app/models/defaultConfigs";
import InputField from "../shared/input";

type Props = {
  type: keyof DefaultColorsModel; // Use keyof to restrict 'type' to valid keys of DefaultColors
  customizationStep: number;
  nextCustomStep: Function;
  setCustomizeCompletion: Function;
  setResults: Function;
  result: DefaultResults;
};
const Selector = ({
  type,
  customizationStep,
  nextCustomStep,
  setCustomizeCompletion,
  setResults,
  result
}: Props) => {
  const [formData, setFormData] = useState({
    ...defaultColors[type]
  } as CustomConfigurations);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  function refreshForm(idx: any) {
    var preCompType = Object.keys(defaultColors)[
      idx
    ] as keyof DefaultColorsModel;
    setFormData({
      ...defaultColors[preCompType]
    } as CustomConfigurations);
  }

  const submitForm = () => {
    const prev = result;
    const customizationCopy = result?.customization ?? {};
    const customizationNew = { ...customizationCopy, [type]: formData };
    const newResults = {
      ...prev,
      customization: customizationNew
    };
    setResults({ ...newResults });
  };
  return (
    <div className="w-full grid grid-cols-9 gap-4">
      <div className="p-4 col-span-4">
        <form>
          {inputCustomizationValues.map((input: InputCustomization) => (
            <InputField
              key={input.id}
              input={input}
              formData={formData}
              handleChange={handleChange}
            />
          ))}
        </form>
      </div>
      <div className="p-4 col-span-5">
        <Display
          formData={formData}
          refreshForm={refreshForm}
          customizationStep={customizationStep}
          nextCustomStep={nextCustomStep}
          setCustomizeCompletion={setCustomizeCompletion}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};

export default Selector;
