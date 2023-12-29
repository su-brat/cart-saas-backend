const express = require("express");
const router = express.Router();

const {
  fetchUserAddresses,
  fetchUserActiveOrders,
} = require("../../controllers/user");

/* GET address with userid. */
router.get(
  "/:userid/address",
  /*  #swagger.parameters['userid'] = {
    in: 'path',
    description: 'Get all the shipping address for a specific user.',
    example: '9237493'
  } */
  /* #swagger.responses[200] = {
    description: 'List of shipping address for the user.',
    schema: {
      "userId": "2",
      "addressList": [
        {
          "id": 2,
          "userId": 2,
          "name": "Alex Rider",
          "phone": "9876543210",
          "email": "alex@somemail.com",
          "addressLine1": "567 Pine Street",
          "addressLine2": null,
          "pincode": "67890",
          "state": "New York"
        }
      ]
    }
  } */
  fetchUserAddresses,
);

/* GET active cart orders with userid. */
router.get(
  "/:userid/active-order",
  /*  #swagger.parameters['userid'] = {
    in: 'path',
    description: 'Get all active cart orders for a specific user.',
    example: '9237493'
  } */
  /* #swagger.responses[200] = {
    description: 'List of active cart orders for the user.',
    schema: {
      "userId": 1,
      "orders": [
        {
          "id": 1,
          "userId": 1,
          "shippingId": 1,
          "status": "Active",
          "createdAt": "2023-12-25T17:52:30.348Z",
          "OrderItem": [
            {
              "orderId": 1,
              "productId": 1,
              "quantity": 2
            }
          ]
        }
      ]
    }
  } */
  fetchUserActiveOrders,
);

module.exports = router;
