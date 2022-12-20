// @ts-nocheck
const path = require('path');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();

//Routes
router.use('/auth', authRoutes);

router.get('/', async (req, res) => {
  const user=req.user;
  if(user){
    return res.redirect('/profile')
  }else{
    return res.sendFile(path.resolve(__dirname,'../views/layouts/main.hbs'))
  }
});

router.get('/signin', async (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/layouts/login.hbs'));
});

router.get('/profile',auth, async (req, res) => {
  const user=req.user
  res.render('profile',{sessionUser:user})
});

router.get('/logout', auth,(req, res, next) => {
  req.logOut((done)=>{
  res.redirect('/')
    done()
  })
  
});

module.exports = router;