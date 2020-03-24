
var client = require('cheerio-httpcli'); 
var URL =require('url');
let url = 'https://smartstore.naver.com/dkpharm_naturesvitamin/category/ebc4bcef2a0f46bca28e03e81d0d1cfa?cp=1';
var param = {}; 
client.fetch(url, param, function(err, $, res){
  if(err){
       console.log(err);
        return; 
     }
 $(".area_status").each(function(idx) { 
   
    result=$("span.blind").text();
     }); 

     sold="일시품절";
     if(result.includes(sold)==true){
      
    /*   soldoutm1= document.getElementById('soldout')
      
    
    innerhtml.createReadStream(soldoutm1)*/
      console.log("품절");
     }
     else{
      
       console.log("재고있음");
     }
 });
