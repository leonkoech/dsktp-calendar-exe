"use client";
import {
  CustomOptions,
  DefaultResults,
  InputCustomization
} from "@/app/models/defaultConfigs";
import {
  inputOptionsValues,
  optionalSettings
} from "@/app/modules/defaultStyles";
import { useState } from "react";
import InputField from "../shared/input";

type Props = {
  setResults: Function;
  result: DefaultResults;
  submit: Function;
};
const Optional = ({ setResults, result, submit }: Props) => {
  const [formData, setFormData] = useState({
    maxComponentCount: optionalSettings.maxComponentCount,
    maxFetchCount: optionalSettings.maxFetchCount,
    fetchTime: optionalSettings.fetchTime
  } as CustomOptions);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const submitForm = () => {
    const prev = result;
    setResults({
      ...prev,
      options: formData
    });
    console.log(result)
    submit(result);
  };
  return (
    <div className="flex flex-grow w-full flex-col justify-around  items-center p-3 space-x-2 text-sm font-medium text-center">
      <div className="w-4/5">
        <span className="text-xs">
          These are optional settings. It is recommended to leave them as they
          are unless you know what you are doing
        </span>
        <br></br>
        <br></br>
        <form>
          {inputOptionsValues.map((input: InputCustomization, index: number) => (
            index == 1?
            <InputField
              key={input.id}
              input={input}
              formData={formData}
              handleChange={handleChange}
              readonly = {true}
            />
            :
            <InputField
              key={input.id}
              input={input}
              formData={formData}
              handleChange={handleChange}
            />
          ))}
        </form>
      </div>
      <div>
        <button
          type="button"
          onClick={submitForm}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-12 py-1.5 text-center me-2 mb-2"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default Optional;
