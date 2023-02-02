const { Product } = require("./Product");

exports.get = (req, res) => {
  console.log(req.query);
  Product.find({ ...req.qeury, isEnabled: true }, (err, get) => {
    if (get) {
      return res.json(get);
    } else {
      return res.status(404).send({ message: "not found!" });
    }
  });
};

exports.post = (req, res) => {
  const {
    inStock,
    imageFilename,
    reviewStar,
    numberOfReviews,
    description,
    specialPrice,
    discountedPrice,
  } = req.body;
  const product = new Product({
    inStock: inStock,
    imageFilename: imageFilename,
    reviewStar: reviewStar,
    numberOfReviews: numberOfReviews,
    description: description,
    specialPrice: specialPrice,
    discountedPrice: discountedPrice,
  });

  product.save();

  return res.json(req.body);
};
