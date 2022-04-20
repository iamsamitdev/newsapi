// Import Express
const express = require('express')

// Create Router Object
const router = express.Router()

// Create Routing Method
router.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

router.get('/about', (req, res) => {
    res.json(
        {
            name:'Samit',
            email:'samit@email.com'
        }
    )
})

module.exports = router