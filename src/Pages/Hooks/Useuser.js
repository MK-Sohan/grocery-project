import React, { useEffect, useState } from "react";

const Useuser = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user.email;
    // console.log(email);
    const newUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside use token", data);
          const accessToken = data.token;
          localStorage.setItem("accesstoken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token, setToken];
};

export default Useuser;
