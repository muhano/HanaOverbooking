const { data_process_core } = require("../models/index.js")

const getProcessCore = async (req, res, next) => {
    try {
        const response = await data_process_core.findAll();
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

const findProcessCore = async (req, res, next) => {
    try {
        const instanceId = req.params.id;

        const response = await data_process_core.findByPk(instanceId);
        if (!response) {
            throw { name: "notFound" };
        }
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

const createProcessCore = async (req, res, next) => {
    try {
        const { org_name, org_id, merchant_name, merchant_id, terminal_name, terminal_id, cif, account, limit, channel, partners_id } = req.body;

        const newProcessCore = await data_process_core.create({
            org_name, org_id, merchant_name, merchant_id, terminal_name, terminal_id, cif, account, limit, channel, partners_id
        });
        res.status(201).json(newProcessCore);
    } catch (err) {
        next(err);
    }
};

const editProcessCore = async (req, res, next) => {
    try {
        const instanceId = req.params.id

        const { org_name, org_id, merchant_name, merchant_id, terminal_name, terminal_id, cif, account, limit, channel, partners_id } = req.body;

        const findInstance = await data_process_core.findByPk(instanceId);
        if (!findInstance) {
            throw { name: "notFound" };
        }

        const updatedProcessCore = await data_process_core.update(
            {
                org_name, org_id, merchant_name, merchant_id, terminal_name, terminal_id, cif, account, limit, channel, partners_id
            },
            {
                where: { id: instanceId },
                returning: true
            }
        );

        res.status(200).json(updatedProcessCore[1][0]);
    } catch (err) {
        next(err);
    }
};

const deleteProcessCore = async (req, res, next) => {
    try {
        const instanceId = req.params.id;

        const findInstance = await data_process_core.findByPk(instanceId);
        if (!findInstance) {
            throw { name: "notFound" };
        }

        const deletedProcessCore = await data_process_core.destroy({
            where: { id: instanceId },
        });

        res.status(200).json({ message: `Data with Id ${findInstance.id} deleted` });
    } catch (err) {
        next(err);
    }
};

module.exports = { getProcessCore, createProcessCore, editProcessCore, deleteProcessCore, findProcessCore }