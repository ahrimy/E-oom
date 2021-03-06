const auth = require("../controllers/auth.controller");

module.exports = function(app) {
  var router = require("express").Router();
  
    router.post("/signup",auth.signup);

    router.post("/signin", auth.signin);

    //check ID valid (중복확인)
    router.get("/email/:user_email",auth.isValidID);
    //check Nickname valid (중복확인)
    router.get("/nickname/:user_nickname",auth.isValidNick);
    
    app.use('/api/auth', router);
};