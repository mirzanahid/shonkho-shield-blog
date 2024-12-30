import express from "express";

import { BlogControllers } from "./blog.controller";

const router = express.Router();

router.post("/", BlogControllers.createBlog);
router.patch("/:id", BlogControllers.updateBlog);
router.delete("/:id", BlogControllers.deleteBlog);

export const BlogRouters = router;
