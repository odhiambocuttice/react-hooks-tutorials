import UseFetch from "../Customhooks/UseFetch";
import Product from "./Product";

const Index = () => {
  const url = "https://course-api.com/react-prop-types-example";
  const { products } = UseFetch(url);
  return (
    <div>
      <h2>products</h2>
      {/* <img src={defaultImage} /> */}
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
