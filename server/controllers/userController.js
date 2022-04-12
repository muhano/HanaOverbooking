const { user, data_process_api } = require("../models")
const {compareHash} = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt");
const date = new Date();
const idnDate = date.toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
const created_at = new Date(idnDate)
const updated_at = new Date(idnDate)


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
        const clientId = req.headers['x-client-key'];
        if (!clientId) {
            throw { name: "noHeader"}
        }

        const findClient = await data_process_api.findOne({
            where: {client_id : clientId}
        })
        if (!findClient) {
            res.status(200).json('Client not found')
        }
        
        res.status(200).json('Success')
    } catch (err) {
        next(err)
    }
}

module.exports = { userRegister, userLogin, clientValidation }