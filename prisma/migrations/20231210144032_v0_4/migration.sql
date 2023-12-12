/*
  Warnings:

  - The `restrictedShippingCodes` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `addressLine` on the `ShippingAddress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[merchantId,email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[merchantId,phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shippingId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_phone_key";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "shippingId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "restrictedShippingCodes",
ADD COLUMN     "restrictedShippingCodes" TEXT[];

-- AlterTable
ALTER TABLE "ShippingAddress" DROP COLUMN "addressLine",
ADD COLUMN     "addressLine1" TEXT,
ADD COLUMN     "addressLine2" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_merchantId_email_key" ON "User"("merchantId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "User_merchantId_phone_key" ON "User"("merchantId", "phone");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shippingId_fkey" FOREIGN KEY ("shippingId") REFERENCES "ShippingAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
