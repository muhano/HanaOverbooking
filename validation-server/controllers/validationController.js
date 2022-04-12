const instanceAxios = require('../apis/axios')

const clientValidation = async (req, res, next) => {
    try {
        
        const clientKey = req.headers['x-client-key'];
        if (!clientKey) {
            throw { name: "noHeader"}
        }


        const response = await instanceAxios({
            url: '/user/clientValidation',
            method: 'post',
            headers: {'X-CLIENT-KEY': clientKey},

        })

        if (response.data.message === 'Client not found') {
            throw { name: "clientNotFound"}
        }

        res.status(200).json(response.data)
    } catch (err) {
        next(err)
    }
}

module.exports = {clientValidation}