const instanceAxios = require('../apis/axios')

const clientValidation = async (req, res, next) => {
    try {
        const {'x-client-key' : clientKey, 'x-timestamp' : timeStamp, 'x-signature' : clientSignature} = req.headers;
        const {client_secret, public_key, private_key, grant_type} = req.body;
        if (!clientKey || !timeStamp || !clientSignature) {
            throw { name: "noHeader"}
        }

        if (!Date.parse(timeStamp)) {
            throw { name: "invalidDate"}
        }

        if ( !grant_type ) {
            throw { name: "noBody"}
        }

        const response = await instanceAxios({
            url: '/user/clientvalidation',
            method: 'post',
            headers: {
                'X-CLIENT-KEY' : clientKey,
                'X-TIMESTAMP' : timeStamp ,
                'X-SIGNATURE' : clientSignature
            },
            data: { grant_type }
        })

        // if (response.data.message === 'Client not found') {
        //     throw { name: "clientNotFound"}
        // }

        // if (response.data.message === 'False client secret') {
        //     throw { name: "falseClientSecret"}
        // }

        // if (response.data.message === 'Mismatch X-signature') {
        //     throw { name: "XSignatureMismatch"}
        // }

        res.status(200).json({accessToken: response.data})
    } catch (err) {
        next(err)
    }
}

module.exports = {clientValidation}