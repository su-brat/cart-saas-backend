const express = require("express");
const router = express.Router();

const {
  postShippingAddress,
  patchShippingAddress,
} = require("../../controllers/shippingAddress");

/* POST address. */
router.post(
  "/",
  /*  #swagger.parameters['body'] = {
    in: 'body',
    description: 'Add new address.',
    schema: {
      userId: 1234,
      pincode: '122055',
      state: 'California',
      email: 'johndoe@mymail.com',
      name: 'John Doe',
      phone: '9679993888',
      addressLine1: '17 Park Street',
      addressLine2: '24th Block'
    }
  } */
  /* #swagger.responses[201] = {
    description: 'Shipping address created with returned id.',
    schema: {
      shippingAddressId: '19836478689'
    }
  } */
  postShippingAddress,
);

/* PATCH address. */
router.patch(
  "/",
  /*  #swagger.parameters['body'] = {
    in: 'body',
    description: 'Patch existing address.',
    schema: {
      shippingAddressId: 2354,
      userId: 1234,
      pincode: '122055',
      state: 'California',
      email: 'johndoe@mymail.com',
      name: 'John Doe',
      phone: '9679993888',
      addressLine1: '17 Park Street',
      addressLine2: '24th Block'
    }
  } */
  /* #swagger.responses[204] = {
    description: 'Shipping address updated.',
  } */
  patchShippingAddress,
);

module.exports = router;
