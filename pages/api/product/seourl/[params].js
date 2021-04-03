import dbConnect from "../../../../configs/dbConnect";
import Product from "../../../../models/Product";

const handler = async (req, res) => {
  const { query } = req;
  let result;
  result = await Product.findOne({ seourl: query.params });
  return res.json({
    status: 200,
    message: "success",
    data: result,
  });
};

export default dbConnect(handler);
