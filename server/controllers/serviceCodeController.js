const { service_code : serviceCode } = require("../models")

const getServiceCode = async (req, res, next) => {
    try {
        const response = await serviceCode.findAll();
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

const createServiceCode = async (req, res, next) => {
    try {
        const {service_code, name, version, http_method, path} = req.body

        const newServiceCode = await serviceCode.create({
            service_code, name, version, http_method, path
        })

        res.status(201).json(newServiceCode);
    } catch (err) {
        next(err)
    }
}

const findServiceCode = async (req, res, next) => {
    try {
        const instanceId = req.params.id;

        const response = await serviceCode.findByPk(instanceId);
        if (!response) {
            throw { name: "notFound" };
        }
        res.status(200).json(response);
    } catch (err) {
        next(err)
    }
}

const editServiceCode = async (req, res, next) => {
    try {
        const instanceId = req.params.id
        const {service_code, name, version, http_method, path} = req.body

        const findInstance = await serviceCode.findByPk(instanceId);
        if (!findInstance) {
            throw { name: "notFound" };
        }

        const updatedServiceCode = await serviceCode.update(
            {
                service_code, name, version, http_method, path
            },
            {
                where: { id: instanceId },
                returning: true
            }
        );

        res.status(200).json(updatedServiceCode[1][0]);
    } catch (err) {
        next(err)
    }
}

const deleteServiceCode = async (req, res, next) => {
    try {
        const instanceId = req.params.id

        const findInstance = await serviceCode.findByPk(instanceId);
        if (!findInstance) {
            throw { name: "notFound" };
        }

        const deletedServiceCode = await serviceCode.destroy({
            where: { id: instanceId },
        });

        res.status(200).json({ message: `Service code with Id ${findInstance.id} deleted` });
    } catch (err) {
        next(err)
    }
}

module.exports = { getServiceCode, createServiceCode, findServiceCode, editServiceCode, deleteServiceCode } 