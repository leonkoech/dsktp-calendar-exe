 type DefaultColorsModel = {
    upcoming: CustomConfigurations;
    current:CustomConfigurations;
    inactive:CustomConfigurations,
    
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
  }
type CustomOptions = {
  maxComponentCount: number,
  maxFetchCount: number,
  fetchTime: string
}

type DefaultResults = {customization: DefaultColorsModel,options:CustomOptions }
  export type {DefaultColorsModel, CustomConfigurations, CustomOptions, DefaultResults}