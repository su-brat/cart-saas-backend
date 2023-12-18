const express = require("express");
const router = express.Router();

const { fetchUserAddresses } = require("../../controllers/user");

/* GET address with userid. */
router.get(
  "/:userid/address",
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
  fetchUserAddresses,
);

module.exports = router;
