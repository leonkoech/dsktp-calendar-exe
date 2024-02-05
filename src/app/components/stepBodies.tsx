"use client";
import { useState } from "react";
import Calendar from "./steps/calendar";
import Component from "./steps/component";
import Optional from "./steps/optional";
import { DefaultResults } from "../models/defaultConfigs";
import { defaultResults } from "../modules/defaultStyles";

type Props= {
    currentStep: number,
     setStep: Function
}

const StepBodies = ({currentStep, setStep}:Props) =>{
    const [result, setResults] = useState({...defaultResults} as DefaultResults)
return (
    <div  className="flex flex-grow w-full flex-col justify-between content-evenly items-center p-3 space-x-2 text-sm font-medium text-center">
        {
            currentStep == 0? <Calendar setStep={setStep} currentStep={currentStep} /> : currentStep == 1? <Component result={result} setResults={setResults} setStep={setStep} currentStep={currentStep}/>: <Optional result={result} setResults={setResults} />
        }
    
    </div>
    )
}

export default StepBodies;