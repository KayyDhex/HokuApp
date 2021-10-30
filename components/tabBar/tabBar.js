Component({
  data:{
    selected: 0,
    color: "#999999",
    selectedColor: "#06c261",
    list:[
      {
      pagePath:"../../pages/info/info",
      name:"Food",
      icon: "../../assets/3h.png"
    },
    {
      pagePath:"../../pages/home/home",
      name:"Home",
      icon: "../../assets/2h.png"
    },
    {
      pagePath:"../../pages/profile/profile",
      name:"Profile",
      icon: "../../assets/1h.png"
    }
    ]
  },
  methods:{
    onClick(e){

    }
  }
})