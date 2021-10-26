const app = getApp();

Page({
  signUp(){
    console.log("Hola mundo");
  },
  logIn(){
    my.redirectTo({
      url: '../home/home'
    });
  }
  });