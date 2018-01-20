const debug = process.env.NODE_ENV === 'development' ? true : false;
// 测试环境地址
if (debug) {
    // var host = 'https://api.guangyangyundong.com/api';
    // var host = 'http://120.77.72.16:8080/api';
    //   var host = 'http://192.168.1.107:8080/api';
    //  var host = 'http://192.168.2.131:8080/panda_loan';
   //var host = 'http://192.168.2.116:8080';
   //var host = 'http://192.168.199.166:8080';
    var host = 'http://119.23.12.36:8081/panda_loan';
} else {
    //正式环境地址
    var host = 'https://api.pinganzhiyuan.com/panda_loan';
}
console.warn('当前resource: ', host);

let resources = {
    host: host,
    // graphQL查询Api
    graphQlApi: `${host}\/graphql`,
    users(id) {
        return `${host}\/users\/${id}`
    },
    imageCode() {
        return `${host}\/imageCaptchas`
    },
    smsCaptcha(){
        return `${host}\/smsCaptcha`
    },
    token(){
        return `${host}\/tokens`
    }
};

export default resources;