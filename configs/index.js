import dbConnect from "./dbConnect";
const dev = process.env.NODE_ENV !== "production";

const serverHost = dev
  ? "http://localhost:3000"
  : "https://next-static-rendering.vercel.app/";

export { serverHost, dbConnect };
