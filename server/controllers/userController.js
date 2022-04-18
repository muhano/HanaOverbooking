const { user, data_process_api } = require("../models")
const {compareHash} = require("../helpers/bcrypt")
const { signToken, signClientToken, verifyClientToken } = require("../helpers/jwt");
const date = new Date();
const idnDate = date.toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
const created_at = new Date(idnDate)
const updated_at = new Date(idnDate)
const jwt = require('jsonwebtoken');


const userRegister = async (req, res, next) => {
    try {
        const date = new Date();
        const idnDate = date.toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
        const created_at = idnDate
        const updated_at = idnDate
        const { email, password } = req.body;

        const newUser = await user.create({
            email,
            password,
            created_at, 
            updated_at
        });
        res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (err) {
        next(err)
    }
}

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw { name: "badRequest" };
        }
        const userData = await user.findOne({ where: { email } });
        if (!userData) {
            throw { name: "wrongLogin" };
        }

        const isValid = compareHash(password, userData.password);
        if (!isValid) {
            throw { name: "wrongLogin" };
        }

        const payload = {
            id: userData.id,
            email: userData.email,
        };

        const token = signToken(payload);

        res.status(200).json({ access_token: token });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const clientValidation = async (req, res, next) => {
    try {
        const {'x-client-key' : clientId, 'x-timestamp' : timeStamp, 'x-signature' : clientSignature} = req.headers;
        const { grant_type} = req.body

        // console.log(clientId, timeStamp, clientSignature, grant_type, '<-----------');

        if (!clientId || !timeStamp || !clientSignature) {
            throw { name: "noHeader"}
        }

        if (!Date.parse(timeStamp)) {
            throw { name: "invalidDate"}
        }

        if ( !grant_type ) {
            throw { name: "noBody"}
        }

        const findClient = await data_process_api.findOne({
            where: { client_id : clientId }
        })
        if (!findClient) {
            throw { name: "clientNotFound"}
        }

        if (findClient.client_secret !== grant_type) {
            throw { name: "falseClientSecret"}
        }

        const public_key = findClient.public_key

        const isValidSignature = verifyClientToken(clientSignature, public_key)
        // console.log(isValidSignature, '<----------');

        const validSignature = isValidSignature.split('|')
        // console.log(timeStamp);
        // console.log(validSignature, '<----------');
        if (validSignature[0] !== clientId || validSignature[1] !== timeStamp) {
            throw { name: "XSignatureMismatch"}
        }

        const payload = {
            client_id: findClient.client_id,
            service_name: findClient.service_name
        };

        const token = signClientToken(payload);
        
        res.status(200).json(token)
    } catch (err) {
        next(err)
    }
}

module.exports = { userRegister, userLogin, clientValidation }