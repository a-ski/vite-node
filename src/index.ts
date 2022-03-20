import express from "express";
import mongoose from "mongoose";

function pretendMongooseUsage() {
  new mongoose.Schema({});
}

export const viteNodeApp = express();
