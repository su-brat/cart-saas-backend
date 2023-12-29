const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const {
  getValidatedOrderIdOrThrowError,
} = require("../services/paramValidation");

async function fetchOrderShippingAddress(req, res, next) {
  try {
    const orderId = getValidatedOrderIdOrThrowError(req.params.orderid);
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { shippingAddress: true },
    });
    res
      .send({
        orderId: req.params.orderid,
        address: order?.shippingAddress,
      })
      .status(200);
  } catch (err) {
    next(err);
  }
}

module.exports = { fetchOrderShippingAddress };
