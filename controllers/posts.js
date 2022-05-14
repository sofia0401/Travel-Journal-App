import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// backend logic
export const getPosts = async (req, res) => {
    // returns all posts
    try {
        let postMessages = await PostMessage.find();
        postMessages = postMessages.reverse();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createPost = async (req, res) => {
    // creates new post
    const body = req.body;
    const newPost = new PostMessage({ ...body, creator: req.userId, createdAt: new Date().toISOString() });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });   
    }
}

export const updatePost = async (req, res) => {
    // edits post
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    // deletes post
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    try {
        await PostMessage.findByIdAndRemove(id);
        res.status(204).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(409).json({ message: error.message });   
    }
}

export const likePost = async (req, res) => {
    // likes post
    const { id } = req.params;

    if (!req.userId) return res.json({ message: 'Unauthenticated'});

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        // like the post
        post.likes.push(req.userId);
    } else {
        // dislike the post
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
}