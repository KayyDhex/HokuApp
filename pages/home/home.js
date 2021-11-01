const app = getApp();

Page({
  handleTapGames(){
    my.navigateTo({
      url: '../minigame/minigame'
    });
  },
  handleTapCalendar(){
    console.log("calendar");
    
  },
  handleTapsendMesagge(){
    console.log("Send Message");
    
  },
});