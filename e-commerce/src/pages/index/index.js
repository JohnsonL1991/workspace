console.log('index.js');
require(['../../js/config'],function(){
    require(['jquery','waves','hover'],function($,waves){
        console.log($);
        console.log(waves);
        console.log($.prototype.hoverdir);
    })
})