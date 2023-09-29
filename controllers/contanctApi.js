const contactSchema = require("../models/contactSchema");

exports.contact = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const obj = {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
    };

    const userdata = await contactSchema.create(obj);
    res.json({
      status: true,
      data: userdata,
      message: "Message Sent!",
    });
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};
