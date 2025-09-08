"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  // Make sure dbConnect is awaited
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  const user = await userCollection.findOne({ email });
  if (!user) return null;

  // Compare plain password with hashed password
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) return null;

  return user;
};
