import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/default.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  console.log(image);
  return (
    <article className="product">
      {/* <img src={url} alt={name} /> */}
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      <h4>${price || 10}</h4>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defualtProps = {
//   name: "Defualt name",
//   price: 10,
//   image: defaultImage,
// };
export default Product;
