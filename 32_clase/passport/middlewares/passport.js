const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


app.use(passport.initialize())
app.use(passport.session())

const auth = async (req, res, next) => {
    if (req.session.user) {
      next();
    }
    else {
      res.redirect('/login.html');
    }
  };
const isValisPassword = async (user,password)=>{
    const valid = await bCrypt.compare(password, users.password)
    return valid
}

passport.use('login', new LocalStrategy(
    async(username,password,done)=>{
    const user = await users.find(p=>p.username === username)
    if(!user){
        return done(null,false)
    }else{
        const pass = await users.filter(p=>p.password===password)
        if(match){
            return done(null,user)
        }else{
            return done(null,false,{message:'incorrect Password'})
        }

    }
}))

passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    users.findById(id,(err,user)=>{
        done(err,user)
    })
})

app.get('/login',auth,(req,res)=>{
    let user= req.user;
    if(user){ res.render('/logueado',{user})}
       
    else{
        console.log('user no logueado')
        res.render('/login')
    }
})
function postLogin(req,res){
    let user = req.user;
    res.render('logueado')
}
app.post('/login',passport.authenticate('login',{failureRedirect:'/falloLogin'}),postLogin)

