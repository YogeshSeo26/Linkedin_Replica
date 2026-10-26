
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads")); // relative path instead of absolute path

const start = async () => {
    const connectDB = await mongoose.connect(process.env.MONGODB_URI);

    app.listen(process.env.PORT || 9080, () => {
        console.log(`Server is running on port ${process.env.PORT || 9080}`);
    });
};

start();