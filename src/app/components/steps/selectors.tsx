"use client";
import { useState } from "react";
import Display from "./display";
import { defaultColors } from "@/app/modules/defaultStyles";
import { DefaultColorsModel, DefaultResults } from "@/app/models/defaultConfigs";

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
    borderColor: defaultColors[type].borderColor,
    borderWidth: defaultColors[type].borderWidth,
    textColor: defaultColors[type].textColor,
    textSize: defaultColors[type].textSize,
    backgroundColor: defaultColors[type].backgroundColor,
    borderRadius: defaultColors[type].borderRadius,
    canvasColor: defaultColors[type].canvasColor,
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  function refreshForm(idx: any) {
    var precompType = Object.keys(defaultColors)[
      idx
    ] as keyof DefaultColorsModel;
    setFormData({
      borderColor: defaultColors[precompType].borderColor,
      borderWidth: defaultColors[precompType].borderWidth,
      textColor: defaultColors[precompType].textColor,
      textSize: defaultColors[precompType].textSize,
      backgroundColor: defaultColors[precompType].backgroundColor,
      borderRadius: defaultColors[precompType].borderRadius,
      canvasColor: defaultColors[precompType].canvasColor,
    });
  }

  const submitForm = () => {
    const prev = result;
    const customizationCopy = result?.customization ?? {};
    const customizationNew = { ...customizationCopy, [type]: formData };
    const newResults = {
      ...prev,
      customization: customizationNew
    }
    setResults({...newResults});
  };
  return (
    <div className="w-full grid grid-cols-9 gap-4">
      <div className="p-4 col-span-3">
        <form>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              Border Color
            </label>
            <input
              type="text"
              id="borderColor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="red"
              value={formData.borderColor}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              Border Width
            </label>
            <input
              type="number"
              id="borderWidth"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={formData.borderWidth}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              Border Radius
            </label>
            <input
              type="number"
              id="borderRadius"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={formData.borderRadius}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              Text Color
            </label>
            <input
              type="text"
              id="textColor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="red"
              value={formData.textColor}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              Text Size
            </label>
            <input
              type="number"
              id="textSize"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={formData.textSize}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              Background Color
            </label>
            <input
              type="string"
              id="backgroundColor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="transparent"
              value={formData.backgroundColor}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              Canvas Color
            </label>
            <input
              type="string"
              id="canvasColor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="transparent"
              value={formData.canvasColor}
              onChange={handleChange}
              required
            ></input>
          </div>
        </form>
      </div>
      <div className="col-span-1"></div> {/* Spacing */}
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
