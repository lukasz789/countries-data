import { gql } from "@apollo/client";

export const getCountryDetailsQuery = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      languages {
        name
      }
    }
  }
`;

export const getCountriesQuery = gql`
  {
    countries {
      name
      code
      continent {
        code
      }
    }
  }
`;

export const getFilteredCountries = gql`
  query Countries($code: String!) {
    countries(filter: { continent: { eq: $code } }) {
      name
    }
  }
`;
