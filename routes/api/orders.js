var express = require("express");
var router = express.Router();

var { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET address with orderid. */
router.get("/:orderid/addresses", async function (req, res, next) {
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

  const order = await prisma.order.findUnique({
    where: { id: parseInt(req.params.orderid) },
    include: { shippingAddress: true },
  });

  res
    .send({
      orderId: req.params.orderid,
      address: order.shippingAddress,
    })
    .status(200);
});

module.exports = router;
