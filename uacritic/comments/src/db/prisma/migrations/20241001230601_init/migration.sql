/*
  Warnings:

  - Added the required column `category` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "itemId" INTEGER NOT NULL;
