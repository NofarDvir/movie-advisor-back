import Review, { IReview } from "../models/review_model";
import { BaseController } from "./base_controller";
import { Response } from "express";
import { AuthResquest } from "../common/auth_middleware";

class ReviewController extends BaseController<IReview>{
    constructor() {
        super(Review)
    }

    async get(req: AuthResquest, res: Response) {
        console.log("Get all Reviews: ");
        super.get(req, res);
    }

    async getById(req: AuthResquest, res: Response) {
        console.log("Get Review by Id:" + req.params.id);
        super.getById(req, res);
    }

    async post(req: AuthResquest, res: Response) {
        console.log("Post Review: " + req.body);
        const _id = req.user._id;
        req.body.userId = _id;
        super.post(req, res);
    }

    async putById(req: AuthResquest, res: Response) {
        console.log("Put Review by Id:" + req.params.id);
        super.putById(req, res);
    }

    async deleteById(req: AuthResquest, res: Response) {
        console.log("Delete Review by Id:" + req.params.id);
        super.deleteById(req, res);
    }
}

export default new ReviewController();