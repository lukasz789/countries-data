import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { getCountryDetailsQuery } from "../queries/queries";

import { CountryDetails, QueryVariableCountryDetails } from "../types";

import classes from "./Country.module.css";

const Country: React.FC = () => {
  const params = useParams();

  const { loading, error, data } = useQuery<
    CountryDetails,
    QueryVariableCountryDetails
  >(getCountryDetailsQuery, {
    variables: {
      code: params.code || "",
    },
  });

  if (loading || !data)
    return (
      <p style={{ textAlign: "center", fontWeight: "bold" }}>Loading....</p>
    );

  if (error)
    return (
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        Something went wrong, please refresh the page or try again soon.
      </p>
    );

  return (
    <div className={`container ${classes.tableWrap}`}>
      <h1 className={classes.caption}>{data.country.name}</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Emoji</th>
            <th>
              <span>Lang</span>
              <span className={classes.languagesText}>uages</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.country.name}</td>
            <td>{data.country.code}</td>
            <td>{data.country.emoji}</td>
            <td>
              {data.country.languages.map((language) => (
                <p key={language.name}>{language.name}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Country;
