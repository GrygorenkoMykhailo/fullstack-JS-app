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