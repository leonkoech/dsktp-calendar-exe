// import { DefaultColorsModel } from "@/app/models/defaultColors";

import { CustomConfigurations } from "@/app/models/defaultConfigs";
import { defaultColors } from "@/app/modules/defaultStyles";

type Props = {
   formData:  CustomConfigurations,
  refreshForm: Function,
  customizationStep: number,
  nextCustomStep: Function,
  setCustomizeCompletion: Function,
  submitForm: Function,
  };

const Display = ({
  formData,
  refreshForm,
  customizationStep,
  nextCustomStep,
  setCustomizeCompletion,
  submitForm
}: Props) => {
  return (
    <div
      className="w-full p-4 mr-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col justify-between "
      style={{ background: `${formData.canvasColor}` }}
    >
      <span className="text-xs" style={{ filter: `invert(100%)` }}>
        Change canvas color to emulate your computer background
      </span>
      <div>
        <div
          style={{
            width: `100%`, // Use a larger size for the box
            height: `100px`, // Use a larger size for the box
            border: `${formData.borderWidth}px solid ${formData.borderColor}`,
            background: `${formData.backgroundColor}`,
            borderRadius: `${formData.borderRadius}px`
          }}
          className="flex flex-col justify-start p-2 text-start"
        >
          <span
            style={{
              color: `${formData.textColor}`,
              fontSize: `${formData.textSize}px`
            }}
          >
            12:00 - 13:00
          </span>
          <div className="flex flex-col ">
            <span
              style={{
                color: `${formData.textColor}`,
                fontSize: `${formData.textSize}px`,
                fontWeight: "bold"
              }}
            >
              This is a title
            </span>
            <span
              style={{
                color: `${formData.textColor}`,
                fontSize: `${formData.textSize}px`
              }}
            >
              This is a description
            </span>
          </div>
        </div>
      </div>

      <form></form>
      <button
        type="button"
        onClick={() => {
          submitForm();
          if(customizationStep < Object.keys(defaultColors).length  -1){
          
            nextCustomStep(customizationStep + 1);
             refreshForm(customizationStep + 1);
          }
          else{
            setCustomizeCompletion(true);
          
          }
         
        }}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-12 py-1.5 text-center me-2 mb-2"
      >
        Looks Good!
      </button>
    </div>
  );
};

export default Display;
