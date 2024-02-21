type DefaultColorsModel = {
  upcoming: CustomConfigurations;
  current: CustomConfigurations;
  inactive: CustomConfigurations;

  // Add more categories if needed
};

type CustomConfigurations = {
  borderColor: string;
  borderWidth: number;
  textColor: string;
  textSize: number;
  backgroundColor: string;
  borderRadius: number;
  canvasColor: string;
};
type CustomOptions = {
  maxComponentCount: number;
  maxFetchCount: number;
  fetchTime: string;
};

type InputCustomization = {
  title: string;
  id: keyof (CustomConfigurations | CustomOptions);
  type: string;
  pattern: string | undefined;
  readonly: boolean | undefined;
};

type DefaultResults = {
  customization: DefaultColorsModel;
  options: CustomOptions;
};
type TypeOfInput = "text" | "number";

type InputCustomizationEngineValueTypeModel =
  | {
      type?: TypeOfInput;
      pattern?: string | undefined;
    }
  | { list?: string[] };

type InputCustomizationEngineTypeModel = {
  text: InputCustomizationEngineValueTypeModel;
  number: InputCustomizationEngineValueTypeModel;
};
type InputCustomizationEngineModel = {
  customization: InputCustomizationEngineTypeModel;
  options: InputCustomizationEngineTypeModel;
  default: InputCustomizationEngineTypeModel;
};

export type {
  DefaultColorsModel,
  CustomConfigurations,
  CustomOptions,
  DefaultResults,
  InputCustomization,
  InputCustomizationEngineModel,
  TypeOfInput
};
