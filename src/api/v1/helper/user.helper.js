const { userModel } = require("../model/user.model");

exports.addUser = async (bodyData) => {
    try {
        const { username, email,  password, number } = bodyData
        let data = { username, email, password, number }
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
        return userList[0] ? { status: true, message: "user added ", data: userList } : { status: false, message: "no user found", data: {} }
    } catch (error) {
        console.log(error);
        return { status: false, message: error.message, data: {} }
    }
}