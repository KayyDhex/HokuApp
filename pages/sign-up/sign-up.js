const app = getApp();

Page({
  data: {
    username: "",
    password:"",
    genre: ""
  },
  onLoad() {},
  signUp() {
    set
    my.navigateTo({
      url:'../mode-selection/mode-selection'
    })
  },
  logIn() {
    my.navigateTo({
      url:'../login/login'
    })
  },
  checkPassword (){

  },
  bindKeyInputUsername(e){
    this.setData({
      username: e.detail.value
    });
  },
  bindKeyInputPassword(e){
    this.setData({
      password: e.detail.value
    });
  },
  bindChangeInputGenre(e){
    this.setData({
      genre: e.detail.value
    });
  }
});
