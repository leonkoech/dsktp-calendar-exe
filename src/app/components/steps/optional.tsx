"use client";
import { CustomOptions, DefaultResults } from "@/app/models/defaultConfigs";
import { optionalSettings } from "@/app/modules/defaultStyles";
import { useState } from "react";

type Props = {
  setResults: Function, 
  result: DefaultResults
}
const Optional = ({setResults, result}: Props) => {
const [formData, setFormData] = useState({
  maxComponentCount: optionalSettings.maxComponentCount,
  maxFetchCount: optionalSettings.maxFetchCount,
  fetchTime: optionalSettings.fetchTime
} as CustomOptions)

const handleChange = (e: any) => {
  const { id, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [id]: value,
  }));
};

const submitForm = () =>{ 
  const prev = result;
  setResults({
    ...prev,
    options: formData
  })
  console.log(result)
}
  return (
    <div className="flex flex-grow w-full flex-col justify-around  items-center p-3 space-x-2 text-sm font-medium text-center">
      <div className="w-4/5">
        <span className="text-xs">
          These are optional settings. It is recommended to leave them as they
          are unless you know what you are doing
        </span><br></br><br></br>
        <form>
        <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              Maximum Component Display Count
            </label>
            <input
              type="number"
              id="maxComponentCount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="7"
              value={formData.maxComponentCount}
              onChange={handleChange}
              required
            ></input>
          </div><br></br>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              How many times should data be fetched from your calendar everyday (max 3)
            </label>
            <input
              type="number"
              id="maxFetchCount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              value={formData.maxFetchCount}
              onChange={handleChange}
              required
            ></input>
          </div><br></br>
          <div>
            <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
              What time should data be fetched from your calendar everyday in 24H format (HH:MM) 
            </label>
            <input
              type="text"
              id="fetchTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="07:30"
              value={formData.fetchTime}
              onChange={handleChange}
              required
            ></input>
          </div>
          
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
