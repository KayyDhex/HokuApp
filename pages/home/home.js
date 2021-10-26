const app = getApp();

my.showTabBar({
    animation: true
})

Page({
  handleTapGames(){
    console.log("games");
  },
  handleTapCalendar(){
    console.log("calendar");
  },
  handleTapsendMesagge(){
    console.log("Send Message");
  },
});