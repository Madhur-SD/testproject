const { userModel } = require("../model/user.model");

exports.addUser = async (bodyData) => {
    try {
        const { fullName, username, plans, status, } = bodyData
        let data = { fullName, username, plans, status }
        const saveData = new userModel(data);
        await saveData.save()
        return { status: true, message: "user added ", data: {} }
    } catch (error) {
        return { status: false, message: error.message, data: {} }
    }
}

exports.getAllUser = async (bodyData) => {
    try {
        const userList = await userModel.find();
        // console.log(userList);
        return userList[0] ? { status: true, message: "user added ", data:userList } : { status: false, message: "no user found user", data: {} }
    } catch (error) {
        return { status: false, message: error.message, data: {} }
    }
}