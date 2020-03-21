const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://smartstore.naver.com/aer-shop/products/4722827602");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const data = $("div.selectbox-list ul").find('li.selectbox-item').text();

    /*$bodyList.each(function(i, elem) {
      ulList[i] = {
          mask1: $(this).find('li.selectbox-item').text(),
         mask2: $(this).find('li.selectbox-item').text(),
         mask3: $(this).find('li.selectbox-item').text()
      };
    });
    */
    //const data = ulList.filter(n => n.mask1);
    return data;
  })
  .then(res => log(res));