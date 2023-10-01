const Post=require('../models/Posts');


exports.createPost=async(req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({
            title,body
        }); 

        const savedPost=await post.save();
        res.json({
            post:savedPost
        });
    }
    catch(error){
        return res.status(400).json({
            error:error,
        });
    }
}

exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate('comment').exec();

        res.json({
            posts,
        });
    }
    catch(error){
        return res.status(400).json({
            error:error
        })
    }
}