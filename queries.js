const Model = require("./schema.js")
async function createPosts(req, res) {
    const post = new Model ({
        userid: req.body.userid,
        username: req.body.username,
        image: req.body.image,
        likes: req.body.likes,
        timestamp: Date.now()
    })

    const saveUser = await post.save()
    res.status(200).json(saveUser)
}

async function getComments(req, res) {
    const comment = await Model.find()
    res.status(200).json(comment)
}

module.exports = {
    createPosts
}

