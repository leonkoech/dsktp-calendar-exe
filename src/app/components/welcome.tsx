"use client";
import terms from "../modules/terms";
import React from "react";

type Props = {
  termsBool: boolean, 
  setTerms: Function, 
  setSetup:  any;
}
const Welcome = ({ termsBool, setTerms, setSetup }: Props) => {

  return (
    <>
      <div className="flex flex-grow w-full flex-col justify-between content-evenly items-center p-3 space-x-2 text-sm font-medium text-center">
        <div className="flex flex-col">
          <span className="text-4xl mb-5 mt-12">Dsktp Calendar</span>
          <span className="text-xs">"Make Every Minute Count"</span>
        </div>
        <div className="h-56  w-9/12 border border-solid border-slate-800 overflow-auto my-5 p-5">
          <p className="text-xs">{terms}</p>
        </div>
        <div className="flex flex-row justify-center content-center items-center">
          <div className="flex items-center">
            <input
              type="checkbox"
              // className="h-3 w-3 mx-3"
              checked={termsBool}
              onChange={() => setTerms(!termsBool)}
              id="link-checkbox"
              value=""
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              // for="link-checkbox"
              className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          {/* <input
            type="checkbox"
            className="h-3 w-3 mx-3"
            checked={termsBool}
            onChange={() => setTerms(!termsBool)}
          ></input>{" "}
          <span className="text-xs leading-tight">
            Check the box to accept the terms of use.
          </span> */}
        </div>
        <div>
          {termsBool ? (
            <button
              type="button"
              onClick={setSetup}
              disabled={!termsBool}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-12 py-1.5 text-center me-2 mb-2"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-12 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Welcome;
