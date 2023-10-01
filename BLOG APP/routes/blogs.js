const express=require('express')
const router=express.Router();

//Import cantroller
const {createComment} =require("../cantrollers/commentCantroller")
const {createPost,getAllPosts}=require('../cantrollers/postCantroller')
const {likePost,unlikePost}=require('../cantrollers/likeCantroller');

//Mapping Create
router.post('/comments/create',createComment);
router.post('/posts/create',createPost);
router.get('/posts/getAll',getAllPosts);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);

//export
module.exports=router;

