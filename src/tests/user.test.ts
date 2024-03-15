import request from "supertest";
import initApp from "../app";
import mongoose from "mongoose";
import { Express } from "express";
import User, { IUser } from "../models/user_model";

let app: Express;
let accessTokenCookie = "";
let userId = "";

const user: IUser = {
  fullName: "John Doe",
  email: "john@student.com",
  password: "1234567890",
  imgUrl: "https://www.google.com",
};


beforeAll(async () => {
  app = await initApp();
  console.log("beforeAll");
  await User.deleteMany();

  User.deleteMany({ 'email': user.email });
  await request(app).post("/auth/register").send(user);
  const response = await request(app).post("/auth/login").send(user);
  accessToken = response.body.accessToken;
});

afterAll(async () => {
  await mongoose.connection.close();
});

interface IUser {
  name: string;
  _id: string;
}

const User: IUser = {
  name: "John Doe",
  _id: "1234567890",
};

describe("User tests", () => {
  const addUser = async (User: IUser) => {
    const response = await request(app).post("/User")
      .set("Authorization", "JWT " + accessToken)
      .send(User);
    expect(response.statusCode).toBe(201);
  };
  test("Test Get All Users - empty response", async () => {
    const response = await request(app).get("/User").set("Authorization", "JWT " + accessToken);
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual([]);
  });

  test("Test Post User", async () => {
    addUser(User);
  });

  test("Test Get All Users with one User in DB", async () => {
    const response = await request(app).get("/User").set("Authorization", "JWT " + accessToken);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    const st = response.body[0];
    expect(st.name).toBe(User.name);
    expect(st._id).toBe(User._id);
  });

  test("Test Post duplicate User", async () => {
    const response = await request(app).post("/User").set("Authorization", "JWT " + accessToken).send(User);
    expect(response.statusCode).toBe(406);
  });

});