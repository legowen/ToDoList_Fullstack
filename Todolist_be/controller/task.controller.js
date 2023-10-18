const Task = require("../models/task");

const taskController = {};

//코드 뜻 : createTask는 '함수 형식'일 것이다( -.- = () => {}), FE에서 req,res하는 함수일 것이다.
taskController.createTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body;
        const newTask = new Task ({ task, isComplete });
        await newTask.save();
        res.status(200).json({ status:'Success', data : newTask })
    }catch(err){
        res.status(400).json({ status:'fail', error:err })
    }
};

taskController.getTask= async (req, res) => {
    try{
        const taskList= await Task.find({})
        res.status(200).json({ status: "Success" , data : taskList })

    }catch(err){
        res.status(400).json({ status: "fail", error:err })
    }
}




module.exports = taskController;