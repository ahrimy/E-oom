module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();
    
    //Check the email if it's alreadt exist
    router.get("/getNum/:user_email",users.findNumByEmail);
    //Create a new User
    router.post("/create",users.create);

    //Retrieve all Users
    router.get("/",users.findAll);

    //Retrieve a single user with user_email
    router.get("/email/:user_email",users.findByEmail);

    router.get("/num/:user_num",users.findByNum);

    router.put("/edit/:user_num",users.updateAll);

    app.use('/api/users', router);
}