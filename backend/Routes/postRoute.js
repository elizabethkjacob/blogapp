const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const posts = require("../model/post");

router.use(express.json());
function verifytoken(req,res,next){
  console.log("cyftyfty")
    const token = req.headers.token;
    try {
        if(!token) throw 'unauthorized access';
        let payload = jwt.verify(token,'reactblogapp');
        if(!payload)throw 'unauthorized access';
       // res.send(200).send(payload)
        next()
    } catch (error) {
      res.status(401).send('caught in error')
    }
    }

//to add blog
router.post('/add',verifytoken,async(req,res)=>{
    try {
        const post = req.body;
        const data = await posts(post).save();
        res.status(200).send({message:"blog added"})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})

router.get('/view',verifytoken,async(req,res)=>{
  try {
       const data = await posts.find();
        res.status(200).send(data)
        console.log(data)
  }catch (error) {
       console.log(error)
  }
})
router.get('/posts/:id', async (req, res) => { 
  try {
    const post = await posts.findById(req.params.id);
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// UPDATE
router.put('/posts/:id', verifytoken, async (req, res) => {
  try {
    const updatedPost = await posts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post updated successfully', data: updatedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// delete 
router.delete('/posts/:id', verifytoken, async(req, res) => {
  try {
    console.log("here")
      const deletedPost = await posts.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
          return res.status(404).json({ error: 'Post not found' });
      }
      res.json({ message: 'Post deleted successfully', data: deletedPost });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router






//router.get('/view',async(req,res)=>{
   // try {
      //  const response = await posts.find();
       //  res.status(200).send({message:"data send",data})
       //  console.log(data)
     //} catch (error) {
       //  console.log(error)
     //}
 //})
 