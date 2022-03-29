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

        const newProcessApi = await data_process_api.create({
            org_id, merchant_id, client_id, client_secret, public_key, private_key, host_name, ip_address, service_name
        });
        res.status(201).json(newProcessApi);
    } catch (err) {
        next(err);
    }
};

const editProcessApi = async (req, res, next) => {
    try {
        const instanceId = req.params.id
        // console.log(id, '<-----------');
        const { org_id, merchant_id, client_id, client_secret, public_key, private_key, host_name, ip_address, service_name } = req.body;

        const findInstance = await data_process_api.findByPk(instanceId);
        if (!findInstance) {
            throw { name: "notFound" };
        }

        const updatedProcessApi = await data_process_api.update(
            {
                org_id, merchant_id, client_id, client_secret, public_key, private_key, host_name, ip_address, service_name
            },
            {
                where: {id:instanceId},
                returning: true
            }
        );

        res.status(200).json(updatedProcessApi[1][0]);
    } catch (err) {
        next(err);
    }
};

module.exports = { getProcessApi, createProcessApi, editProcessApi }