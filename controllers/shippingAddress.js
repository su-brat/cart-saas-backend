const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function postShippingAddress(req, res, next) {
  try {
    const shippingAddressId = await prisma.shippingAddress.create({
      data: {
        userId: req.body.userId,
        pincode: req.body.pincode,
        state: req.body.state,
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
      },
    });

    res
      .send({
        shippingAddressId: shippingAddressId,
      })
      .status(201);
  } catch (err) {
    next(err);
  }
}

async function patchShippingAddress(req, res, next) {
  try {
    const {
      userId,
      pincode,
      state,
      email,
      name,
      phone,
      addressLine1,
      addressLine2,
    } = req.body;
    const existingAddress = await prisma.shippingAddress.findUnique({
      where: {
        id: req.body.shippingAddressId,
      },
    });
    await prisma.shippingAddress.update({
      data: {
        userId: userId ? userId : existingAddress.userId,
        pincode: pincode ? pincode : existingAddress.pincode,
        state: state ? state : existingAddress.state,
        email: email ? email : existingAddress.email,
        name: name ? name : existingAddress.name,
        phone: phone ? phone : existingAddress.phone,
        addressLine1: addressLine1
          ? addressLine1
          : existingAddress.addressLine1,
        addressLine2: addressLine2
          ? addressLine2
          : existingAddress.addressLine2,
      },
      where: {
        id: req.body.shippingAddressId,
      },
    });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  postShippingAddress,
  patchShippingAddress,
};
