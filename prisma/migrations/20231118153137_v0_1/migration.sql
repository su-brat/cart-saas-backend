/*
  Warnings:

  - The `availabilityStatus` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gender` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `status` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "AvailabilityStatus" AS ENUM ('IN_STOCK', 'OUT_OF_STOCK');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('Success', 'Active', 'Partial', 'Failed');

-- AlterTable
ALTER TABLE "Merchant" ALTER COLUMN "displayAddress" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "quantity" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "availabilityStatus",
ADD COLUMN     "availabilityStatus" "AvailabilityStatus" NOT NULL DEFAULT 'OUT_OF_STOCK',
ALTER COLUMN "restrictedShippingCodes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ShippingAddress" ADD COLUMN     "email" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "phone" TEXT,
ALTER COLUMN "addressLine" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "fullName" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender",
ALTER COLUMN "dob" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;
