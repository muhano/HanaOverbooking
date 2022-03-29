const { data_process_fee } = require("../models/index.js")

const getProcessFee = async (req, res, next) => {
    try {
        const response = await data_process_fee.findAll();
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

const createProcessFee = async (req, res, next) => {
    try {
        const { org_name, org_id, merchant_name, merchant_id, terminal_name, terminal_id, cif, account, limit, channel, partners_id } = req.body;

        const newProcessFee = await data_process_fee.create({
            org_name, org_id, merchant_name, merchant_id, terminal_name, terminal_id, cif, account, limit, channel, partners_id
        });
        res.status(201).json(newProcessFee);
    } catch (err) {
        next(err);
    }
};

const editProcessFee = async (req, res, next) => {
    try {
        const instanceId = req.params.id

        const { org_name, org_id, merchant_name, merchant_id, terminal_name, terminal_id, cif, account, limit, channel, partners_id } = req.body;

        const findInstance = await data_process_fee.findByPk(instanceId);
        if (!findInstance) {
            throw { name: "notFound" };
        }

        const updatedProcessFee = await data_process_fee.update(
            {
                org_name, org_id, merchant_name, merchant_id, terminal_name, terminal_id, cif, account, limit, channel, partners_id
            },
            {
                where: { id: instanceId },
                returning: true
            }
        );

        res.status(200).json(updatedProcessFee[1][0]);
    } catch (err) {
        next(err);
    }
};

const deleteProcessFee = async (req, res, next) => {
    try {
        const instanceId = req.params.id;

        const findInstance = await data_process_fee.findByPk(instanceId);
        if (!findInstance) {
            throw { name: "notFound" };
        }

        const deletedProcessFee = await data_process_fee.destroy({
            where: { id: instanceId },
        });

        res.status(200).json({ message: `Data with Id ${findInstance.id} deleted` });
    } catch (err) {
        next(err);
    }
};

module.exports = { getProcessFee, createProcessFee, editProcessFee, deleteProcessFee }