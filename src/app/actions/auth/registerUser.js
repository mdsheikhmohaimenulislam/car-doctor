"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export default async function registerUser(payload) {
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  //   Validation User
  const { email, password } = payload;
  if (!email || !password) return null;
  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();
    return result;
  }
  return null;
}
