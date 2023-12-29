const express = require("express");
const router = express.Router();

const { fetchOrderShippingAddress } = require("../../controllers/order");

/* GET address with orderid. */
router.get(
  "/:orderid/address",
  /*  #swagger.parameters['orderid'] = {
    in: 'path',
    description: 'Get the selected shipping address for the specific order.',
    example: '19836478689'
  } */
  /* #swagger.responses[200] = {
    description: 'Shipping address for the order.',
    schema: {
      "orderId": "1",
      "address": {
        "id": 1,
        "userId": 1,
        "name": "John Doe",
        "phone": "9384934837",
        "email": "john@example.com",
        "addressLine1": "789 Oak Street",
        "addressLine2": "11th Block",
        "pincode": "12345",
        "state": "California"
      }
    }
  } */
  fetchOrderShippingAddress,
);

module.exports = router;
