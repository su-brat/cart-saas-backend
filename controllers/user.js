const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handlePrismaClientErrorResponseStatus = require("../services/errorHandling");

async function fetchUserAddresses(req, res, next) {
  try {
    const addressList = await prisma.shippingAddress.findMany({
      where: { userId: parseInt(req.params.userid) },
    });

    res
      .send({
        userId: req.params.userid,
        addressList: addressList,
      })
      .status(200);
  } catch (err) {
    handlePrismaClientErrorResponseStatus(err);
    next(err);
  }
}

async function fetchUserActiveOrders(req, res, next) {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: parseInt(req.params.userid), status: "Active" },
    });
    res.send({
      orders: orders,
    });
  } catch (err) {
    handlePrismaClientErrorResponseStatus(err);
    next(err);
  }
}

module.exports = {
  fetchUserAddresses,
  fetchUserActiveOrders,
};
