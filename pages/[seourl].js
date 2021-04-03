import { serverHost } from "../configs/index";

export default function Product({ data }) {
  return (
    <div>
      Product page
      <h1>{data.name}</h1>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { seourl } = params;
  const result = await fetch(`${serverHost}/api/product/seourl/${seourl}`);
  let product = await result.json();
  product = JSON.parse(JSON.stringify(product.data));
  console.log(product);
  return {
    props: {
      data: product,
    },
  };
}

export async function getStaticPaths() {
  let paths;
  const result = await fetch(`${serverHost}/api/product`);
  let products = await result.json();
  products = JSON.parse(JSON.stringify(products.data));
  paths = products.map((product) => {
    return { params: { seourl: product.seourl } };
  });
  return {
    paths,
    fallback: true,
  };
}
