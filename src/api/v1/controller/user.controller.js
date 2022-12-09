const { addUser, getAllUser } = require("../helper/user.helper")

exports.addNewUser = async (req, res) => {
    try {
        const { status, message, data } = await addUser(req.body);
        return status ? res.send({ status, subCode: 200, message }) : res.send({ status, subCode: 400, message })
    } catch (error) {
        return ({ status:false, subCode: 400, message:error.message })
    }
}

exports.getAllUserList = async (req, res) => {
    try {
        const { status, message, data } = await getAllUser();
        return status ? res.send({ status, subCode: 200, message , data}) : res.send({ status, subCode: 400, message })
    } catch (error) {
        return ({ status: false, subCode: 400, message: error.message })
    }
}