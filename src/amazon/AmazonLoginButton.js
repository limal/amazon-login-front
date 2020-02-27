import React from "react";

// Test CI
export const AmazonLoginButton = () => {
  const login = () => {
    console.log("%c* login", "background: #f00; color: #fff");
    const options = {};
    options.popup = false;
    options.scope = "profile postal_code";
    options.scope_data = {
      profile: { essential: true }
    };
    // window.amazon.Login.authorize(options, "https://amazon.wolnik.co.uk"); // http://localhost:1234
    window.amazon.Login.authorize(options, "http://localhost:1234");
    return false;
  };

  return (
    <div>
      <a className="login-with-amazon" id="LoginWithAmazon" onClick={login}>
        <img
          border="0"
          alt="Login with Amazon"
          src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
          width="156"
          height="32"
        />
      </a>
    </div>
  );
};
