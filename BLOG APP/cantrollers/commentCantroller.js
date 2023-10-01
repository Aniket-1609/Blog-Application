const Post=require('../models/Posts');
const Comment=require('../models/Comments');

exports.createComment=async(req,res) =>{
    try{
        //fetch data from req body
        const {post,user,body}=req.body;
        
        //create a comment object
        const comment=new Comment({
            post,user,body
        });

        //save the new comment into the database
        const savedComment =await comment.save();

        //this comment has to be saved inside the post also
        //so find the post first
        const updatedPost = await Post.findByIdAndUpdate(post,{$push :{comment : savedComment._id}},{new:true}).populate("comment").exec();

        res.status(200).json({
            post:updatedPost,
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        });
    }
}