var express = require("express");
var router = express.Router();

var { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

/* POST address. */
router.post("/", async function (req, res, next) {
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
    if (err instanceof Prisma.PrismaClientKnownRequestError) err.status = 400;
    else err.status = 500;
    next(err);
  }
});

/* PATCH address. */
router.patch("/", async function (req, res, next) {
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
    if (err instanceof Prisma.PrismaClientKnownRequestError) err.status = 400;
    else err.status = 500;
    next(err);
  }
});

module.exports = router;
