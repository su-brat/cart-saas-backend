const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createError = require("http-errors");

const handlePrismaClientErrorResponseStatus = require("../services/errorHandling");

async function fetchOrderShippingAddress(req, res, next) {
  try {
    const order = await prisma.order.findUnique({
      where: { id: parseInt(req.params.orderid) },
      include: { shippingAddress: true },
    });

    if (!order) return next(createError(404));

    res
      .send({
        orderId: req.params.orderid,
        address: order?.shippingAddress,
      })
      .status(200);
  } catch (err) {
    handlePrismaClientErrorResponseStatus(err);
    next(err);
  }
}

module.exports = { fetchOrderShippingAddress };
