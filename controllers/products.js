const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    msg: "Successful GET in PRODUCTS"
  })

})



module.export = router
