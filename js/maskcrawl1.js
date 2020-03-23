
var client = require('cheerio-httpcli'); 
var URL =require('url');
let url = 'https://smartstore.naver.com/aer-shop'; 
var param = {}; 

client.fetch(url, param, function(err, $, res){
  if(err){
       console.log(err);
        return; 
     }
 $(".area_status").each(function(idx) { 
   
    result=$("span.blind").text();
     }); 
     console.log(result)
     soldout="일시품절";
     if(result.includes(soldout)==true){
       console.log("품절");
     }
 });
