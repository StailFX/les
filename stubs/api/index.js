const router = require("express").Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from BroJS mock backend!" });
});

module.exports = router;
