/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-20 18:23:29
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-20 22:12:41
 */

/*
 * @brief:将func加载道window.onload中，html初始化完成后立刻执行
 * @param {*} func 需要添加的函数名
 * @return {*}
 * @note:
 * @see:
 */
function addLoadEvent(func) {
  var oldonload = window.onload;
  window.onload =
    typeof oldonload != "function"
      ? func
      : function () {
          oldonload();
          func();
        };
}

/**
 * @brief: XMLHttpRequest 用于同源数据请求
 * @param {*}
 * @return {*}
 * @note: request.onreadystatechange 旧版请求
 * @see:
 */
function getDataByXMLHttpRequest() {
  //   const url = "http://localhost/sales.json";//可用
  //   const url = "http://gumball.wickedlysmart.com";//跨域被拦截
  //   const url = "http://gumball.wickedlysmart.com/gumball/gumball.html";//跨域被拦截
  const url = "sales.json";
  const request = new XMLHttpRequest();
  request.open("GET", url);
  //--------------------------------------------------------------------------------------------
  //   request.onreadystatechange = function () {
  //     if (request.readyState == 4 && request.status == 200) {
  //     }
  //   };
  //--------------------------------------------------------------------------------------------
  request.onload = function () {
    if (request.status == 200) {
      updateSalesForXMLHttpRequest(request.responseText);
    }
  };
  request.send(null);
}

function updateSalesForXMLHttpRequest(responseText) {
  const salesDiv = document.getElementById("sales");
  const sales = JSON.parse(responseText);
  for (const sale of sales) {
    let div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = `${sale.name} sold ${sale.sales} gumballs`;
    salesDiv.appendChild(div);
  }
}

function updateSalesForJSONP(sales) {
  const salesDiv = document.getElementById("sales");
    for (const sale of sales) {
    let div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = `${sale.name} sold ${sale.sales} gumballs`;
    salesDiv.appendChild(div);
  }
}

// XMLHttpRequest 测试
// addLoadEvent(getDataByXMLHttpRequest);
