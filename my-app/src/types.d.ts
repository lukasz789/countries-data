export interface ShortCountry {
  name: string;
  code: string;
  continent: Continent;
}

export interface CountriesData {
  countries: ShortCountry[];
}

export interface Continent {
  code: string;
}

export interface QueryVariableCountryDetails {
  code: string;
}

export interface CountryDetails {
  country: {
    name: string;
    code: string;
    emoji: string;
    languages: Language[];
  };
}

export interface Language {
  name: string;
}

export interface CountryOption {
  label: string;
  value: string;
}

export type SelectValue = {
  label: string;
  value: string;
};
