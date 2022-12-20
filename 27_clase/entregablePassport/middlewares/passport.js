const passport = require('passport');
const LocalStrategy=require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const UsersDao = require('../models/daos/Users.dao');

const User = new UsersDao();

const salt =()=> bcrypt.genSaltSync(10);
const createHash=(password)=> bcrypt.hashSync(password,salt())
const isValidPassword =(user,password)=>bcrypt.compareSync(password,user.password)

passport.use('signup', new LocalStrategy({
    passReqToCallback:true
},async(req,username,password,done)=>{
    try {
       const userItem ={
        email:req.body.email,
        name:username,
        password:createHash(password)
       }
      const user = await User.createUser(userItem)
      return done(null,user)
    } catch (error) {
        console.log(error)
        return done(error);
    }
}))

passport.use('signin',new LocalStrategy(async(username,password,done)=>{
    try{
        const user =await User.getbyEmail(username);
        if(!isValidPassword(user,password)){
            return done(null,false)
        }
        return done(null,user)

    }catch{

    }
}))

passport.serializeUser((user,done)=>{
    done(null,user._id)
})


passport.deserializeUser(async(id,done)=>{
    const user=await User.getById(id)
    
    done(null,user)
})