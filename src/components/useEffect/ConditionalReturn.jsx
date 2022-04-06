import { useState, useEffect } from "react";

const ConditionalReturn = () => {
  const url = "https://api.github.com/users/odhiambocuttice";
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default User");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default ConditionalReturn;
