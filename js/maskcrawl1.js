var client = require('cheerio-httpcli'); 
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
