
export interface JobPlatform {
  name: string;
  logo: JSX.Element;
  searchUrlTemplate: string;
}

export interface CareerSuggestions {
  suggestedTitles: string[];
  searchKeywords: string[];
}
