import Post from '../models/post';

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();

    res.status(201).json({
      status: true,
      message: 'Post created successfully',
      payload: newPost,
    });
  } catch (error) {
    res.status(409).json({
      status: false,
      message: error.message,
      payload: null,
    });
  }
};
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: true,
      message: 'Posts retrieved successfully',
      payload: posts,
    });
  } catch (error) {
    res.status(409).json({
      status: false,
      message: error.message,
      payload: null,
    });
  }
};
