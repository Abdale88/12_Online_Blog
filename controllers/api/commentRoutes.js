const router = require('express').Router();
const { Comments} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res)=>{
    try {
        const newComment = await Comments.create({
            
            comment: req.body.comment,
            user_id: req.session.user_id,
            blog_id: req.body.blog_id
            // ...req.body
        });
        res.status(200).json(newComment);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;