import User, { IUser } from "../models/user_model";
import { BaseController } from "./base_controller";
import { Response } from "express";
import { AuthResquest } from "../common/auth_middleware";

class UserController extends BaseController<IUser> {
  constructor() {
    super(User);
  }

  async get(req: AuthResquest, res: Response) {
    console.log("Get all Users: ");
    super.get(req, res);
  }

  async getById(req: AuthResquest, res: Response) {
    console.log("Get User by Id:" + req.params.id);
    super.getById(req, res);
  }

  async post(req: AuthResquest, res: Response) {
    console.log("Post User: " + req.body);
    const _id = req.user._id;
    req.body.userId = _id;
    super.post(req, res);
  }

  async putById(req: AuthResquest, res: Response) {
    console.log("Put User by Id:" + req.params.id);
    super.putById(req, res);
  }

  async deleteById(req: AuthResquest, res: Response) {
    console.log("Delete User by Id:" + req.params.id);
    super.deleteById(req, res);
  }
}

export default new UserController();