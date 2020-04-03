const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET
router.get('/', async (req, res) => {
   const posts = await loadPostsCollection();
   res.send(await posts.find({}).toArray());
})

// POST
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

// DELETE
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
    res.status(200).send();
})


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://npolyakoff:Bandit177rus@ds013280.mlab.com:13280/express-vue-playground', {
        useNewUrlParser: true
    });
    return client.db('express-vue-playground').collection('posts');
}

module.exports = router;
