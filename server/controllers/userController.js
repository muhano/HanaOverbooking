const { user } = require("../models")
const {compareHash} = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt");
const date = new Date();
const idnDate = date.toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
const created_at = new Date(idnDate)
const updated_at = new Date(idnDate)


const userRegister = async (req, res, next) => {
    try {
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

module.exports = { userRegister, userLogin }