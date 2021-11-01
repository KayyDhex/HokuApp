const app = getApp();
import {getQueryMenu} from '../../server/signup'
Page({
  data: {
    username: "",
    password:"",
    genre: ""
  },
  onLoad() {},
  signUp() {
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
  uploadData () {
    console.log(this.data.password);
    getQueryMenu({
      user: this.data.username,
      password : this.data.password
    });
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
