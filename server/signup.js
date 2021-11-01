export default {
  getQueryMenu : (data) => {
    my.request({
  url: 'http://localhost:5000/backend-hoku/us-central1/app/signup',
  method: 'POST',
  data: data,
  dataType: 'json',
  success: function(res) {
    console.log('success');
    //my.alert({content: 'success'});
  },
  fail: function(res) {
    console.log('fail');
    my.alert({content: 'fail'});
  },
  complete: function(res) {
    console.log('complete');
    //my.hideLoading();
    //my.alert({content: 'complete'});
  }
});
  },
}