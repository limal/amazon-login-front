import React, { useState } from "react";
import { AmazonLoginButton } from "./amazon/AmazonLoginButton";
import { useLocation } from "react-router";
import queryString from "query-string";

export const Home = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: ""
  });
  const location = useLocation();
  const query = queryString.parse(location.search);

  if (query.access_token && query.access_token.length) {
    setTimeout(() => {
      window.amazon.Login.retrieveProfile(query.access_token, response => {
        setProfile({
          name: response.profile.Name,
          email: response.profile.PrimaryEmail
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
              Name: <strong>{profile.name}</strong>
              <br />
              Email: <strong>{profile.email}</strong>
            </div>
          ) : null}
        </React.Fragment>
      ) : (
        <AmazonLoginButton />
      )}
    </div>
  );
};
