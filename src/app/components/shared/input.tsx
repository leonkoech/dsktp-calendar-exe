import {
  CustomConfigurations,
  CustomOptions,
  InputCustomization
} from "@/app/models/defaultConfigs";

type Props = {
  input: InputCustomization;
  formData: CustomConfigurations | CustomOptions;
  handleChange: any;
  readonly?: boolean;
};

const InputField = ({ input, formData, handleChange, readonly }: Props) => {
  return (
    <div>
      <label className="block my-1 text-xs font-medium text-gray-900 dark:text-white">
        {input.title}
      </label>
      <input
        type={input.type}
        id={input.id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={formData[`${input.id}`] as string}
        pattern={input.pattern}
        value={formData[`${input.id}`] as string}
        onChange={handleChange}
        readOnly={readonly}
        required
      ></input>
    </div>
  );
};

export default InputField;
