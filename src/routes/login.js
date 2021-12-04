const express = require('express');
const jwt = require('jsonwebtoken');
const SignupData = require("../models/userdata")
let app = express.Router();


app.post('/api/signup', function(req, res) {
    console.log(req.body)
    var signup = {
        email: req.body.email,   //in get method we use query instead of body
        password: req.body.password,  
      }
           var signupdata = SignupData(signup);  
    signupdata.save(); //save to db
    res.send()
})

//postlogin mongo validation

app.post('/api/login', function (req, res) {
     
    console.log(req.body);
    let userData = req.body
    var dbemail='admin';
    var dbpassword = '1234';
    
    // login check admin/user
    if (userData.email == 'admin' && userData.password == '12345') {
        // res.send({ status: true });
          let payload = {subject: dbemail+dbpassword}
          let admintoken = jwt.sign(payload, 'adminKey')
        res.send({ admintoken })
        console.log("admin loggedin")

    } else {
        SignupData.findOne({ email:userData.email, password:userData.password }, function (err, user) {
            if (err) {
                res.send({ status: false, data: 'Response error. No Internet' });

            }
            else if (user) {
                console.log("user data", user)
            
                // res.send({ status: true });
                let payload2 = {subject: userData.email+userData.password}
                let usertoken = jwt.sign(payload2, 'userKey')
                res.send({ usertoken })
                console.log("userloggedin")

            } else {
                console.log("login failed")
                res.send();
                return false;
                
            }

        });
    }
});

    
module.exports = app;