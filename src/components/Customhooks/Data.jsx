import UseFetch from "./UseFetch";

const Data = () => {
  // const url = "https://api.github.com/users/odhiambocuttice";
  const url = "https://course-api.com/react-prop-types-example";
  const { loading, products } = UseFetch(url);
  return (
    <div>
      <h2>{loading ? "loading..." : products}</h2>
    </div>
  );
};
export default Data;
