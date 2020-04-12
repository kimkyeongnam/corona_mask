/***** Check the mask day of week *****/

function chk_buy_mask() {
    let date = new Date();
    let day = date.getDay();

    // Monday
    if (day == 1) {
        document.getElementById("chk_buy").innerText = "오늘 마스크 구매 가능자는 '끝자리 0, 5년 출생자' 입니다.";
    }

    // Tuesday
    else if (day == 2) {
        document.getElementById("chk_buy").innerText = "오늘 마스크 구매 가능자는 '끝자리 1, 6년 출생자' 입니다.";
    }
    // Wednesday
    else if (day == 3) {
        document.getElementById("chk_buy").innerText = "오늘 마스크 구매 가능자는 '끝자리 2, 7년 출생자' 입니다.";
    }
    // Thursday
    else if (day == 4) {
        document.getElementById("chk_buy").innerText = "오늘 마스크 구매 가능자는 '끝자리 3, 8년 출생자' 입니다.";
    }
    // Friday
    else if (day == 5) {
        document.getElementById("chk_buy").innerText = "오늘 마스크 구매 가능자는 '끝자리 4, 9년 출생자' 입니다.";
    }
    // Satureday & Sunday
    else if (day == 6 || day == 0) {
        document.getElementById("chk_buy").innerText = "오늘은 자유롭게 마스크를 구매할 수 있습니다.";
    }
}




/***** Page load: search & map page load *****/
function search(select_value) {
    let mylocation; // init setting

    // bar search: specific area
    if (select_value == 'bar'){
        // !!!parsing!!! : find location value
        mylocation = [37.55998, 126.9858296]; //temp setting //명동
        
        // road map page
        location.href = "./mask_search.html" + '#' + mylocation;
    }

    //button click: current location search
    else if (select_value == 'button') {
        // success getting current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                mylocation = [position.coords.latitude, position.coords.longitude];
                
                // road map page
                location.href = "./mask_search.html" + '#' + mylocation;
            });
        } 
        // fail getting current location
        else {
            message = 'geolocation을 사용할수 없어요..'
            mylocation = [37.54404, 127.09637]; // 광진구 구의동
            displayMarker(locPosition, message);
        }
    }
}