const instanceAxios = require('../apis/axios')

const clientValidation = async (req, res, next) => {
    try {
        
        const clientKey = req.headers['x-client-key'];
        const {client_secret} = req.body;
        if (!clientKey) {
            throw { name: "noHeader"}
        }
        if (!client_secret) {
            throw { name: "noBody"}
        }

        const response = await instanceAxios({
            url: '/user/clientvalidation',
            method: 'post',
            headers: {'X-CLIENT-KEY': clientKey},
            data: { client_secret }
        })

        if (response.data.message === 'Client not found') {
            throw { name: "clientNotFound"}
        }

        res.status(200).json({accessToken: response.data})
    } catch (err) {
        next(err)
    }
}

module.exports = {clientValidation}