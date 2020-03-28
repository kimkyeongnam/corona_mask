$.ajax({
    crossOrigin : true,
    dataType : "json",
    url : "https://smartstore.naver.com/aer-shop/products/4722827602",
    success : function(data) {
        find_stock(data);
    }
});

function find_stock(html_data){
    let parser = new DOMParser();
    let htmlDoc = parser.parseFromString(html_data, 'text/html'); 
    let mask = htmlDoc.getElementsByClassName('_tpl_suboption')[0];
    console.log(mask);
}