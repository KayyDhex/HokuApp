const app = getApp();

Page({
  data:{
    inputUser: '',
    inputPassword: ''
  },
  bindKeyInputUser(e){
    this.setData({
      inputUser: e.detail.value
    });
  },
  bindKeyInputPassword(e){
      this.setData({
      inputPassword: e.detail.value
    });
  },
  signUp(){
    my.redirectTo({
     url: '../sign-up/sign-up'
   })
  },
  logIn(){
   my.redirectTo({
     url: '../home/home'
   });
  }
  });
  /*
  my.request({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      success: function(res){
        console.log(res);
      }
    });
  */