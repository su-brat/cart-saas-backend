var express = require("express");
var router = express.Router();

/* GET address with userid. */
router.get("/user/:userid", function (req, res, next) {
  /*  #swagger.parameters['userid'] = {
    in: 'path',
    description: 'Get all the shipping address for a specific user.',
    example: 'cs93948sf89'
  } */
  /* #swagger.responses[200] = {
    description: 'List of shipping address for the user.',
    schema: {
      userId: 'cs93948sf89',
      addressList: ['address1', 'address2']
    }
  } */

  // TODO: Replace the underlying code with appropriate logic

  res
    .send({
      userId: req.params.userid,
      addressList: ["address1", "address2"],
    })
    .status(200);
});

/* GET address with orderid. */
router.get("/order/:orderid", function (req, res, next) {
  /*  #swagger.parameters['orderid'] = {
    in: 'path',
    description: 'Get the selected shipping address for the specific order.',
    example: '19836478689'
  } */
  /* #swagger.responses[200] = {
    description: 'Shipping address for the order.',
    schema: {
      orderId: '19836478689',
      address: 'address1'
    }
  } */

  // TODO: Replace the underlying code with appropriate logic

  res
    .send({
      orderId: req.params.orderid,
      address: "address1",
    })
    .status(200);
});

module.exports = router;
