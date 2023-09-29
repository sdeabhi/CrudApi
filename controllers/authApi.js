const authSchema = require("../models/authSchema");

//Register a new user
exports.register = async (req, res) => {
  try {
    let imangeName = "";
    if (req.file) {
      imangeName = req.file.filename;
    }
    const body = req.body;
    console.log(body);
    const obj = {
      name: body.name,
      username: body.username,
      image: imangeName,
      city: body.city,
      state: body.state,
      address: body.address,
      pincode: body.pincode,
      mobile: body.mobile,
      email: body.email,
      password: body.password,
    };

    const userdata = await authSchema.create(obj);
    res.json({
      status: true,
      data: userdata,
      message: "User Registered",
    });
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};

//Login an existing user
exports.login = async (req, res) => {
  try {
    const user = await authSchema.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      res.status(404).json("user password not found");
    } else {
      res.json({
        status: true,
        data: user,
        message: "User Logged In",
      });
    }
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};

exports.forgetpassword = async (req, res) => {
  try {
    const email = req.body.email;
    // const _id = req.body._id;
    const password = req.body.password;
    const useremail = await authSchema.findOne({ email });
    if (!useremail) {
      res.status(404).json("email not found");
    } else {
      const updatePassword = await authSchema.updateOne(
        { _id : useremail._id},
        { $set: { password: password } }
      );
      res.json({
        status: true,
        data: updatePassword,
        message: "Password Updated",
      });
    }
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};
