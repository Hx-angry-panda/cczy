//轮播
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    speed: 1000,
    autoplay: {
        delay: 3000
    },
})

//预约看房
var build_name = $('.title h3')[0].innerHTML
var urlParameter = encodeURI(encodeURI(build_name))
$('.book').click(function(){
    window.location.href = encodeURI(`book_btn.html?build=${encodeURIComponent(build_name)}`)
})

//地图
$('.address').click(function(){
    window.location.href = `http://api.map.baidu.com/geocoder?address=${$('.title h3')[0].innerHTML}&output=html&src=webapp.baidu.openAPIdemo`
})