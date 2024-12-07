const Post = require('../models/Post');

// Créer un post
exports.createPost = async (req, res) => {
    try {
        const { content } = req.body;
        const post = new Post({ content });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir tous les posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Liker un post
exports.likePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { $inc: { likes: 1 } },
            { new: true }
        );
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ajouter un commentaire
exports.addComment = async (req, res) => {
    try {
        const { content } = req.body;
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { $push: { comments: { content } } },
            { new: true }
        );
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
