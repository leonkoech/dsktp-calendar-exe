import Calendar from "./steps/calendar";
import Component from "./steps/component";
import Optional from "./steps/optional";

const StepBodies = ({currentStep, setStep}:any) =>{
return (
    <div  className="flex flex-grow w-full flex-col justify-between content-evenly items-center p-3 space-x-2 text-sm font-medium text-center">
        {
            currentStep == 0? <Calendar setStep={setStep} currentStep={currentStep} /> : currentStep == 1? <Component setStep={setStep} currentStep={currentStep}/>: <Optional />
        }
    
    </div>
    )
}

export default StepBodies;