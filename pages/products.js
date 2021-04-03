import { serverHost } from "../configs";
import Link from "next/link";

export default function Products({ data }) {
  return (
    <div>
      <h1>Products page</h1>
      <hr />
      {data &&
        data.map((product) => {
          return (
            <div key={product._id}>
              <Link
                href={{
                  pathname: "/[seourl]",
                  query: { seourl: product.seourl },
                }}
              >
                <a href={`/${product.seourl}`}>
                  <h5>{product.name}</h5>
                  <p>{product.price}</p>
                </a>
              </Link>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export async function getServerSideProps() {
  const result = await fetch(`${serverHost}/api/product`);
  const products = await result.json();
  console.log(products);
  return {
    props: {
      data: JSON.parse(JSON.stringify(products.data)),
    },
  };
}
