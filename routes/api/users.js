var express = require("express");
var router = express.Router();

var { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET address with userid. */
router.get("/:userid/addresses", async function (req, res, next) {
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

  const addressList = await prisma.shippingAddress.findMany({
    where: { userId: parseInt(req.params.userid) },
  });

  res
    .send({
      userId: req.params.userid,
      addressList: addressList,
    })
    .status(200);
});

module.exports = router;
