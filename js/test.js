const axios = require("axios"); 
const cheerio = require("cheerio");
const log = console.log;
const getHtml = async () => { 
    try { 
        return await axios.get("https://www.naver.com/"); // axios.get 함수를 이용하여 비동기로 네이버의 html 파일을 가져온다. 
    } catch (error) {
         console.error(error);
         } 
        }; 
        getHtml() 
        .then(html => {
             let ulList = []; 
             const $ = cheerio.load(html.data); 
             const $bodyList = $("div.ah_list.PM_CL_realtimeKeyword_list_base ul.ah_l").children("li.ah_item"); 
             $bodyList.each(function(i, elem) { 
                 ulList[i] = { 
                     title: $(this).find('span.ah_k').text(),
                      url: $(this).find('a.ah_a').attr('href') 
                    }; 
                });
                 const data = ulList.filter(n => n.title);
                  return data; 
                })
                 .then(res => log(res));

