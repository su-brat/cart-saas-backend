const express = require("express");
const router = express.Router();

const { fetchOrderShippingAddress } = require("../../controllers/order");

/* GET address with orderid. */
router.get(
  "/:orderid/addresses",
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
  fetchOrderShippingAddress,
);

module.exports = router;
