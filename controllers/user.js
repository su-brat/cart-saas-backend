const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const {
  getValidatedUserIdOrThrowError,
} = require("../services/paramValidation");

async function fetchUserAddresses(req, res, next) {
  try {
    const userId = getValidatedUserIdOrThrowError(req.params.userid);
    const addressList = await prisma.shippingAddress.findMany({
      where: { userId: userId },
    });
    res
      .send({
        userId: req.params.userid,
        addressList: addressList,
      })
      .status(200);
  } catch (err) {
    next(err);
  }
}

async function fetchUserActiveOrders(req, res, next) {
  try {
    const userId = getValidatedUserIdOrThrowError(req.params.userid);
    const orders = await prisma.order.findMany({
      where: { userId: userId, status: "Active" },
      include: {
        OrderItem: true, // Include list of order items
      },
    });
    res.send({
      userId: userId,
      orders: orders,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  fetchUserAddresses,
  fetchUserActiveOrders,
};
