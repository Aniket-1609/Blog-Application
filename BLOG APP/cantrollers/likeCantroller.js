const Post=require('../models/Posts');
const Like=require('../models/Likes');

exports.likePost=async(req,res)=>{
    try{
        const {post,user}=req.body;
        const like=new Like({
            post,user
        });
        const savedLike=await like.save();

        //update the post collection
        const updatedPost=await Post.findByIdAndUpdate(post,{$push :{like:savedLike._id}},{new:true}).populate('like').exec();

        res.json({
            post:updatedPost
        })
    }
    catch(err){
        return res.status(400).json({
            error:err
        })
    }
}

exports.unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body;
     
        //find and delete the like collection me se
        //findOneAndDelete mtlb ki pehla jo like mila is id se wo delete krdo

        const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

        //update post collection
        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{like: deletedLike._id}},{new:true})

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(400).json({
            error:error
        })
    }
}