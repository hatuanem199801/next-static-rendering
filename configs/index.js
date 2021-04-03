import dbConnect from "./dbConnect";
const dev = process.env.NODE_ENV !== "production";

const serverHost = dev
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_API_URL;

export { serverHost, dbConnect };
