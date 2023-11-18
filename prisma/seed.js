const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Started seeding..");

  // Create users
  const user1 = await prisma.user.create({
    data: {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      gender: "Male",
      dob: "1990-01-01",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "9876543210",
      gender: "Female",
      dob: "1995-05-15",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      fullName: "Nun Doe",
      gender: "Female",
      dob: "1998-04-25",
    },
  });

  const user4 = await prisma.user.create({
    data: {
      fullName: "Pun Doe",
      gender: "Other",
      dob: "1999-01-03",
    },
  });

  // Create merchants
  const merchant1 = await prisma.merchant.create({
    data: {
      name: "Best Mart",
      adminId: "best-mart",
      displayAddress: "123 Main Street, Cityville",
    },
  });

  const merchant2 = await prisma.merchant.create({
    data: {
      name: "Super Deals",
      adminId: "super-deals",
      displayAddress: "456 Broad Street, Townsville",
    },
  });

  // Create products
  const product1 = await prisma.product.create({
    data: {
      merchantId: merchant1.id,
      name: "Product A",
      price: 19.99,
      availabilityStatus: "IN_STOCK",
    },
  });

  const product2 = await prisma.product.create({
    data: {
      merchantId: merchant2.id,
      name: "Product B",
      price: 29.99,
      availabilityStatus: "OUT_OF_STOCK",
    },
  });

  // Create orders
  const order1 = await prisma.order.create({
    data: {
      userId: user1.id,
      status: "Active",
    },
  });

  const order2 = await prisma.order.create({
    data: {
      userId: user2.id,
      status: "Success",
    },
  });

  // Create order items
  await prisma.orderItem.createMany({
    data: [
      { orderId: order1.id, productId: product1.id, quantity: 2 },
      { orderId: order2.id, productId: product2.id, quantity: 1 },
    ],
  });

  // Create shipping addresses
  const shippingAddress1 = await prisma.shippingAddress.create({
    data: {
      userId: user1.id,
      name: user1.name,
      email: user1.email,
      addressLine: "789 Oak Street",
      pincode: "12345",
      state: "California",
    },
  });

  const shippingAddress2 = await prisma.shippingAddress.create({
    data: {
      userId: user2.id,
      name: user2.name,
      phone: user2.phone,
      addressLine: "567 Pine Street",
      pincode: "67890",
      state: "New York",
    },
  });

  console.log("Seeding completed.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
