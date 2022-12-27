const { addUser, getAllUser } = require("../helper/user.helper")
const { userModel } = require('../model/user.model')

exports.addNewUser = async (req, res) => {
    try {
        const { status, message, data } = await addUser(req.body);
        return status ? res.send({ status, subCode: 200, message }) : res.send({ status, subCode: 400, message })
    } catch (error) {
        return ({ status: false, subCode: 400, message: error.message })
    }
}

exports.getAllUserList = async (req, res) => {
    try {
        const { status, message, data } = await getAllUser();
        return status ? res.send({ status, subCode: 200, message, data }) : res.send({ status, subCode: 400, message })
    } catch (error) {
        return ({ status: false, subCode: 400, message: error.message })
    }
}

exports.editUser = async (req, res) => {
    try {
        console.log("==========");
        const id = req.params.id
        const data = await userModel.findById(id)
        if (data) {
            const username = req.body.username
            const email = req.body.email
            const password = req.body.password
            const number = req.body.number
            if (username) {
                data.username = username
            } if (email) {
                data.email = email
            } if (password) {
                data.password = password
            } if (number) {
                data.number = number
            }
            const editData = new userModel(data)
            await editData.save() ? res.send({ status: true, subCode: 200, message: "user edited", data }) : res.send({ status: false, subCode: 400, message: "user cannot be edited" })
        }
    } catch (error) {
        return ({ status: false, subCode: 400, message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const data = await userModel.findByIdAndDelete(id)
        return await res.send({ status: true, subCode: 200, message: "user deleted" })
    } catch (error) {
        return ({ status: false, subCode: 400, message: error.message })
    }
} 