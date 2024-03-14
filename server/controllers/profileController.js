const TodoModel = require('../models/todo');
const UserModel = require('../models/user');

module.exports.get_user_data = async (req,res) => {
    const id = req.params.id;

    try{
        let user = await UserModel.getUserWithTodos(id);

        if(user === null){
            res.status(404).send();
        }
        else{
            res.status(200).json(user);
        }
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

module.exports.post_user_todo = async(req,res) => {
    const {Title,Description,CreationDate, ExpiringDate, UserId} = req.body;
    try{
        await TodoModel.AddTodo(Title,Description,CreationDate, ExpiringDate, UserId);
        res.status(201).send();
    }catch(e){
        res.status(500).json({error: e.message});
    }
}

module.exports.update_user_todo = async(req,res) => {
    const {id, title, description, expiringDate} = req.body;

    try{
        await TodoModel.UpdateTodo(id,title,description,expiringDate);
        res.status(200).send();
    }catch(e){
        res.status(500).json({error: e.message});
    }
}

module.exports.delete_user_todo = async(req,res) => {
    const {id} = req.params;

    try{
        await TodoModel.DeleteTodo(id);
        res.status(200).json();
    }catch(e){
        res.status(500).json({error: e.message});
    }
}