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

const findProcessApi = async (req, res, next) => {
    try {
        const instanceId = req.params.id;

        const response = await data_process_api.findByPk(instanceId);
        if (!response) {
            throw { name: "notFound" };
        }
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const editProcessApi = async (req, res, next) => {
    try {
        const instanceId = req.params.id
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
                where: { id: instanceId },
                returning: true
            }
        );

        res.status(200).json(updatedProcessApi[1][0]);
    } catch (err) {
        next(err);
    }
};

const deleteProcessApi = async (req, res, next) => {
    try {
        const instanceId = req.params.id;

        const findInstance = await data_process_api.findByPk(instanceId);
        if (!findInstance) {
            throw { name: "notFound" };
        }

        const deletedProcessApi = await data_process_api.destroy({
            where: { id: instanceId },
        });

        res.status(200).json({ message: `Data with Id ${findInstance.id} deleted` });
    } catch (err) {
        next(err);
    }
};

module.exports = { getProcessApi, createProcessApi, editProcessApi, deleteProcessApi, findProcessApi }