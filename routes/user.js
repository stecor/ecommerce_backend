const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken')

const router = require('express').Router()

// router.get('/usertest', (req, res) => {
//   res.send('user test is successfull')
// })

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString()
  }
})

module.exports = router
