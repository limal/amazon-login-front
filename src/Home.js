import React, { useState } from "react";
import { AmazonLoginButton } from "./amazon/AmazonLoginButton";
import { useLocation } from "react-router";
import queryString from "query-string";

export const Home = () => {
  const [profile, setProfile] = useState({
    customerId: "",
    name: "",
    email: "",
    postcode: ""
  });
  const location = useLocation();
  const query = queryString.parse(location.hash); // for popup-less use location.hash instead of location.search

  console.log('%c* location.search', 'background: #fc0; color: #333', location.hash);
  console.log('%c* query', 'background: #f00; color: #fff', query);

  if (query.access_token && query.access_token.length) {
    setTimeout(() => {
      window.amazon.Login.retrieveProfile(query.access_token, response => {
        setProfile({
          customerId: response.profile.CustomerId,
          name: response.profile.Name,
          email: response.profile.PrimaryEmail,
          postcode: response.profile.PostalCode
        });
        if (window.console && window.console.log) window.console.log(response);
      });
    }, 500);
  }

  return (
    <div>
      {query.access_token && query.access_token.length ? (
        <React.Fragment>
          {profile.name.length ? (
            <div>
              CustomerId: <strong>{profile.customerId}</strong>
              <br />
              Name: <strong>{profile.name}</strong>
              <br />
              Email: <strong>{profile.email}</strong>
              <br />
              Postcode: <strong>{profile.postcode}</strong>
            </div>
          ) : null}
        </React.Fragment>
      ) : (
        <AmazonLoginButton />
      )}
    </div>
  );
};
