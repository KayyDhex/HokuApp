if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/fiat/f-input/f-input?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tabBar/tabBar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/home/home?hash=9ad7ae52185b0a280f57f8538d461c2e1a3fb5f4');
require('../../pages/info/info?hash=9ad7ae52185b0a280f57f8538d461c2e1a3fb5f4');
require('../../pages/profile/profile?hash=9ad7ae52185b0a280f57f8538d461c2e1a3fb5f4');
require('../../pages/minigame/minigame?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}