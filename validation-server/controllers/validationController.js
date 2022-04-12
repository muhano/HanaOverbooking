const instanceAxios = require('../apis/axios')

const clientValidation = async (req, res, next) => {
    try {
        res.send('validasi client di controller')

        const response = await instanceAxios({
            method: 'get'
        })

        console.log(response, '<-------')
    } catch (err) {
        next(err)
    }
}

module.exports = {clientValidation}