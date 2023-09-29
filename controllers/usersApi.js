const bodyParser = require("body-parser");
const userSchema = require("../models/userSchema");

//Create a new user
exports.adduser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body)
    const obj = {
      name: body.name,
      email: body.email,
      password: body.password,
      profileImage: body.profileImage,
      state: body.state,
      district: body.district,
      mobile: body.mobile,
      pincode: body.pincode,
    };

    const userdata = await userSchema.create(obj);
    res.json({
      status: true,
      data: userdata,
      message: "User Added",
    });
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};

// Get all user
exports.getuser = async (req, res) => {
  try {
    const allUser = await userSchema.find();
    res.json({
      status: true,
      data: allUser,
      message: "Users Data found",
    });
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};

// Get a specific employee
exports.getoneuser = async (req, res) => {
  try {
    const _id = req.params.id;
    const oneUser = await userSchema.findOne({ _id });
    if (!oneUser) {
      const error = new Error("User does not exist");
    }
    res.json({
      status: true,
      data: oneUser,
      message: "User Found",
    });
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};

// update a specific employee 
exports.updateuser = async (req, res) => {
  try {
    const _id = req.params.id;
    const body = req.body;
    const obj = {
      name: body.name,
      email: body.email,
      password: body.password,
      profileImage: body.profileImage,
      state: body.state,
      district: body.district,
      mobile: body.mobile,
      pincode: body.pincode,
    };
    const updateUser = await userSchema.updateOne({_id}, {  $set: obj } );
    res.json({
      status: true,
      data: updateUser,
      message: "User data updated",
    });
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};


// delete a specific employee 
exports.deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;  
    const deletedUser = await userSchema.deleteOne({_id});
    res.json({
      status: true,
      data: deletedUser,
      message: "User data deleted",
    });
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};
