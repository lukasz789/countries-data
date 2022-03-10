import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { getCountriesQuery } from "../queries/queries";

import { CountriesData, SelectValue } from "../types";

import CountryListElement from "./CountryListElement";

import classes from "./CountriesList.module.css";
import LoadingSpinner from "./UI/LoadingSpinner";

import Select, {
  // ActionMeta,
  SingleValue,
} from "react-select";

const options = [
  {
    value: "",
    label: "-",
  },
  {
    value: "AF",
    label: "Africa",
  },
  {
    value: "AN",
    label: "Antarctica",
  },
  {
    value: "AS",
    label: "Asia",
  },
  {
    value: "EU",
    label: "Europe",
  },
  {
    value: "NA",
    label: "North America",
  },
  {
    value: "OC",
    label: "Oceania",
  },
  {
    value: "SA",
    label: "South America",
  },
];

const CountriesList: React.FC = () => {
  const [continent, setContinent] = useState("");
  const [countrySearchName, setCountrySearchName] = useState("");

  const { loading, error, data } = useQuery<CountriesData>(getCountriesQuery);

  if (loading || !data) return <LoadingSpinner />;

  if (error)
    return (
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        Something went wrong, please refresh the page or try again soon.
      </p>
    );

  const changeContinentHandler = (
    newSelections: SingleValue<SelectValue>
    // actionMeta: ActionMeta<SelectValue> // holds history of "changes" in select ; mostly usable for multi-value-select, not single
  ) => {
    if (newSelections) {
      setContinent(newSelections.value);
    }
  };

  const countryNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCountrySearchName(event.target.value);
  };

  const countriesFilteredByContinents = data.countries.filter((country) => {
    if (continent && country.continent.code === continent) {
      return country;
    } else if (!continent) {
      return country;
    }
    return false;
  });

  const countriesList = countriesFilteredByContinents
    .filter((country) => {
      if (countrySearchName === "") {
        return country;
      } else if (
        country.name.toLowerCase().includes(countrySearchName.toLowerCase())
      ) {
        return country;
      }
      return false;
    })
    .map((country) => (
      <CountryListElement key={country.code} country={country} />
    ));

  return (
    <>
      <input
        placeholder="Country..."
        type="text"
        onChange={countryNameChangeHandler}
        maxLength={20}
        className={`form-control ${classes.input}`}
      />
      <Select
        options={options}
        onChange={changeContinentHandler}
        className={classes.select}
        placeholder="Continent..."
      />

      <div className={classes.listWrap}>
        <ul className={classes.countryList}>{countriesList}</ul>
      </div>
    </>
  );
};

export default CountriesList;
