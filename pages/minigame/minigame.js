const app = getApp();
var randomNum = () => Math.floor( Math.random() * (3 - 1 + 1) + 1);

Page({
  data:{
    score: 0,
    scoreHoku: 0,
    textGame: 'Hello! Has not been played yet.'
  },
  playRock(){
    var num = randomNum();
    if(num!=1){
      if(num==2){
      this.setData({
      scoreHoku: this.data.scoreHoku + 1,
      textGame: 'Hoku plays paper and you Rock, you Lose! :('
    });
      }else{
      this.setData({
      score: this.data.score + 1,
      textGame: 'Hoku plays scissors and you Rock, you Win! :)'
    });
      }
    }else{
      this.setData({
      textGame: 'Hoku plays Rock and you Rock, same :|'
    });
    }
  },
  playPaper(){
    var num = randomNum();
    if(num!==2){
      if(num==1){
        this.setData({
        score: this.data.score + 1,
        textGame: 'Hoku plays Rock and you Paper, you Win! :)'
      });
      }else{
        this.setData({
        scoreHoku: this.data.scoreHoku + 1,
        textGame: 'Hoku plays scissors and you Paper, you Lose! :('
      });
      }
    }else{
      this.setData({
      textGame: 'Hoku plays Paper and you Paper, same :|'
    });
    }
  },
  playScissors(){
    var num = randomNum();
    if(num!==3){
      if(num===2){
        this.setData({
        score: this.data.score + 1,
        textGame: 'Hoku plays Paper and you Scissors, you Win! :)'
        });
      }else{
        this.setData({
        scoreHoku: this.data.scoreHoku + 1,
        textGame: 'Hoku plays Rock and you Scissors, you Lose! :('
        });
      }
    }else{
      this.setData({
      textGame: 'Hoku plays Scissors and you Scissors, same :|'
    });
    }
  }
});