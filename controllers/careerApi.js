const careerSchema = require("../models/careerSchema");

exports.career = async (req, res) => {
  try {
  
    let uploadedResume = "";
    if (req.file) {
      uploadedResume = req.file.filename;
    }
    const body = req.body;
    console.log(body);
    const obj = {
      name: body.name,
      designation: body.designation,
      resume: uploadedResume,
    };

    const userdata = await careerSchema.create(obj);
    res.json({
      status: true,
      data: userdata,
      message: "Apply",
    });
  } catch (error) {
    res.json({
      status: false,
      data: [],
      message: error.message,
    });
  }
};
