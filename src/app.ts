import express, { Express } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoute from "./routes/auth_route";
import userRoute from "./routes/user_route";
import reviewRoute from "./routes/review_route";
import commentRoute from "./routes/comment_route";


const initApp = (): Promise<Express> => {
    const promise = new Promise<Express>((resolve) => {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.post("/register", authRoute);
        app.post("/login", authRoute);
        app.get("/users", userRoute);
        app.get("/refresh", authRoute);
        app.get("/logout", authRoute);
        app.get("/reviews", reviewRoute);
        app.get("/comments", commentRoute);

        // app.use("/auth", authRoute);
        resolve(app);
        });
    });
return promise;
};

export default initApp;