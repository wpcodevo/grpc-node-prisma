/*
  Warnings:

  - A unique constraint covering the columns `[verification_code]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `verification_code` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "verification_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_verification_code_key" ON "users"("verification_code");
