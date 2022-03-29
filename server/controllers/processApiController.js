const { data_process_api } = require("../models/index.js")

const getProcessApi = async (req, res, next) => {
    try {
        const response = await data_process_api.findAll();
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

const createProcessApi = async (req, res, next) => {
    try {
        const { org_id, merchant_id, client_id, client_secret, public_key, private_key, host_name, ip_address, service_name } = req.body;
        console.log(org_id, merchant_id, client_id, client_secret, public_key, private_key, host_name, ip_address, service_name, '<-------------');

        const newProcessApi = await data_process_api.create({
            org_id, merchant_id, client_id, client_secret, public_key, private_key, host_name, ip_address, service_name
        });
        res.status(201).json(newProcessApi);
    } catch (err) {
        next(err);
    }
};

module.exports = { getProcessApi, createProcessApi }