const Task = require("../models/task");

const taskController = {};

//코드 뜻 : createTask는 '함수 형식'일 것이다( -.- = () => {}), FE에서 req,res하는 함수일 것이다.
taskController.createTask = async (req, res) => {
    try {
      const { task, isComplete } = req.body;
      //   const newTask = await Task.create({ task, isComplete });
      const newTask = new Task({ task, isComplete });
      await newTask.save();
      return res.status(200).json({ status: "success", data: newTask });
    } catch (error) {
      res.status(400).json({ status: "fail", error });
    }
  };
  
taskController.getTasks = async (req, res) => {
    try{
        const taskList= await Task.find({})
            .select("-__v"); // "__v"를 데이터에서 지워줌 깔끔하게 보여짐.
        res.status(200).json({ status: "Success" , data : taskList });

    } catch(error) {
        res.status(400).json({ status: "fail", error:err });
    }
};

taskController.updateTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        throw new Error("App can not find the task");
      }
      const fields = Object.keys(req.body);
      fields.map((item) => (task[item] = req.body[item]));
      await task.save();
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ status: "fail", error });
    }
  };
  taskController.deleteTask = async (req, res) => {
    try {
      const deleteItem = await Task.findByIdAndDelete(req.params.id);
      res.status(200).json({ status: "success", data: deleteItem });
    } catch (error) {
      res.status(400).json({ status: "fail", error });
    }
  };




module.exports = taskController;