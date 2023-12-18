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

module.exports = { fetchUserAddresses };
