// importing jwt package
const jwt = require("jsonwebtoken");

const db = require("./db");


const register = ( uname,email, pswd) => {
    return db.BCT.findOne({
      email
    }).then((acc) => {
      console.log(acc);
      if (acc) {
        return {
          status: false,
          message: "Account Already exists!!......please login",
          statusCode: 404,
        };
      } else {
        let accr = new db.BCT({
        
          usname: uname,
          email:email,
          password: pswd,
          
        });
        accr.save();
        return {
          status: true,
          message: "Registration completed!!",
          statusCode: 201,
        };
      }
    });
  };

const adddp = ( ) => {
    return db.Dp.find({
    
      
    }).then((acc) => {
      console.log(acc);
      if (acc) {
        return {
          status: false,
          message: "Account Already exists!!......please login",
          statusCode: 404,
        };
      } else {
        let accr = new db.Dp({
        
         dp:dp,
          
        });
        accr.save();
        return {
          status: true,
          message: "Registration completed!!",
          statusCode: 201,
        };
      }
    });
  };


  const login = (uname, pswd) => {
    return db.BCT.findOne({
      usname: uname,
      password: pswd,
    }).then((res) => {
      console.log(res + "from login in ds");
      if (res) {
        currentUser = res.usname;
        // currentusid = usid;
        // token = jwt.sign(
          //acno of current user
        //   { currentusid: usid },
        //   "secretsuperkey1234"
        // );
  
        return {
          status: true,
          message: "Login successfull",
          statusCode: 200,
          currentUser,
        //   currentusid,
        //   token,
        };
      } else {
        return {
          status: false,
          message: "invalid password or account number",
          statusCode: 400,
        };
      }
    });
  };
  


// get event
const allevent=()=>{
  return db.Emplooye.find().then(
      (result)=>{
          if(result){
              return {
                  StatusCode:200,
                  event:result
              }
          }
          else{
              return{
              StatusCode:404,
              message:'NO data Available'
              }
          }
      }
  )
}

const addevent=(place,time,title,content)=>{
  console.log(title)
  return db.Emplooye.findOne({
      title
  }).then((result)=>{
      if(result){
          return{
          statusCode:404,
          message:" already Exist"
          }
      }
      else{
          const newEMP=new db.Emplooye({
            place,
            time,
            title,
            content
          })
          newEMP.save()
          return{
              statusCode:200,
              message:"NEW Event Registerd"
          }
      }
  })
}

  module.exports = {
    register,
    login,
    allevent,
    addevent,
    adddp
    

   
  };
  