/***** Check the mask day of week *****/
function birth_year_chk(){
    let year = document.getElementById("selectYear").value;
    let date = new Date();
    let day = date.getDay();
    let result = 0;

    /* non-check birth year */
    if(year == 10){
        document.getElementById("birth_year").innerText = "출생년도를 확인해주세요";
    }

    /* check birth year */
    else{
        // Monday
        if(day == 1){
            if(year == 1 || year == 6)
                result = 1;
        else 
            result = 0;
        }

        // Tuesday
        else if(day == 2){
            if(year == 2 || year == 7) 
            result = 1;
        else 
            result = 0;
        }

        // Wednesday
        else if(day == 3){
            if(year == 3 || year == 8)
                result = 1;
            else 
                result = 0;
        }

        // Thursday
        else if(day == 4){
            if(year == 4 || year == 9) 
                result = 1;
            else 
                result = 0;
        }

        // Friday
        else if(day == 5){
            if(year == 5 || year == 0)
                result = 1;
            else
                result = 0;
        }


        // print message(can buy VS. cannot buy)
        if(result){
            document.getElementById("birth_year").innerText = "마스크를 구매하실 수 있습니다.";
        }
        else{
            document.getElementById("birth_year").innerText = "오늘은 마스크를 구매하실 수 없습니다.";
        }
    }
}