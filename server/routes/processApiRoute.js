const router = require('express').Router()


router.get('/processapis', (req, res) => {
    res.send("data process apis");
})



module.exports = router