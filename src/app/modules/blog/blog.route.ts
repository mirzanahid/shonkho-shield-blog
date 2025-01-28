import express from "express";

import { BlogControllers } from "./blog.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/", BlogControllers.createBlog);
router.patch("/:id", BlogControllers.updateBlog);
router.delete("/:id", auth('admin'), BlogControllers.deleteBlog);
router.get("/", BlogControllers.getAllBlogs);

export const BlogRouters = router;
