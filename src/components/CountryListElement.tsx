import React from "react";
import { Link } from "react-router-dom";

import { ShortCountry } from "../types";

import classes from "./CountryListElement.module.css";

const CountryListElement: React.FC<{
  country: ShortCountry;
}> = (props) => {
  const { country } = props;

  return (
    <li className={classes.listItem}>
      <Link to={`/${country.code}`} style={{ textDecoration: "none" }}>
        <div className={classes.linkWrap}>
          <p>{country.name}</p>
          <p style={{ marginBottom: "0" }}>{country.code}</p>
        </div>
      </Link>
    </li>
  );
};

export default CountryListElement;
