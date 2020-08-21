module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();
    //signin
    router.post("/signin",user.signIn);
    //signup
    router.post("/signup",user.signUp);
    //check ID valid (중복확인)
    router.get("/checkid/:user_email",user.isValidID);
    //check Nickname valid (중복확인)
    router.get("/checknickname/:user_nickname",user.isValidNick);

    //get Users
    router.get("/",user.getAll);

    //check PW
    router.post("/checcd kpw",user.checkPW);
    //get User Info
    router.get("/userinfo/:user_num",user.getOne);
    //update User
    router.put("/update",user.updateUser);
    //update PW
    router.put("/updatepw",user.updatePW);

    //find ID
    router.post("/findid",user.findID);
    //find PW (랜덤 비번 생성)
    router.post("/findpw",user.findPW);
    //check ID,Phone
    router.post("/check",user.checkInfo);
    //set new PW
    router.put("/newpw",user.newPW);
    

    app.use('/api/users', router);
}