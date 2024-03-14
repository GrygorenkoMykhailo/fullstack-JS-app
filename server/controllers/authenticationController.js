const UserModel = require('../models/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports.register_post = async (req,res) => {
    const {username,email,password} = req.body;
    
    try{
        if(await UserModel.userExists(email)){
            res.status(409).send();
        } else{
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    const id = await UserModel.addUser(username,email,salt,hash);
                    res.status(302).json({id: id});
                })
            })
        }
    }catch(e){
        res.status(500).send(JSON.stringify({error: e.message}));
    }
}

module.exports.login_post = async (req,res) => {
    const {email,password} = req.body;

    try{
        const user = await UserModel.getUser(email);
        if(user === null){
            res.status(404).send();
        }else{
            bcrypt.compare(password, user.HashedPassword, (err,result) => {
                if(result){
                    res.status(302).json({id: user.Id});
                }else{
                    res.status(401).send();
                }
            })
        }
    }catch(e){
        res.status(500).send(JSON.stringify({error: e.message}));
    }
}