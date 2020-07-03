$('.date').datepicker({
    language: "zh-CN",
    autoclose: true,
    todayHighlight: true,
    toggleActive: true
});


var build_name = decodeURI(getQueryString("build")); //只需要转一次码  

console.log(build_name);//此处打印出来是中文。
$('.build')[0].placeholder = build_name


function getQueryString(name) {  
    //正则表达式，获取地址中的参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);  

    if (r != null) return unescape(r[2]); return null; 

}
