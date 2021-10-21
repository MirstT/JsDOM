/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-20 18:23:29
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-21 10:16:02
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

let lastReportTime = 0;
function updateSalesForJSONP(sales) {
  const salesDiv = document.getElementById("sales");
  for (const sale of sales) {
    let div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = `${sale.name} sold ${sale.sales} gumballs`;
    // salesDiv.appendChild(div);
    //头插总比尾插好看啊
    salesDiv.insertBefore(div,salesDiv.firstChild);

    //获取lastReportTime 避免获取重复数据
    if (sales.length > 0) {
      lastReportTime = sales[sales.length - 1].time;
    }
  }
}

// XMLHttpRequest 测试
// addLoadEvent(getDataByXMLHttpRequest);

function handleRefresh() {
  //避免缓存影响,停止获取数据，让浏览器认为是一个新url
  //设置lastReportTime
  const url = `http://gumball.wickedlysmart.com/?callback=updateSalesForJSONP&lastreporttime=${lastReportTime}&random=${new Date().getTime()}`;
  const newScriptElement = document.createElement("script");
  newScriptElement.setAttribute("src", url);
  newScriptElement.setAttribute("id", "jsonp");
  const oldScriptElement = document.getElementById("jsonp");
  // 使用替换法而非添加，避免过度添加影响性能
  if (oldScriptElement == null) {
    document.body.appendChild(newScriptElement);
  } else {
    document.body.replaceChild(newScriptElement, oldScriptElement);
  }
}

function getNewData() {
  setInterval(handleRefresh, 3000);
}

addLoadEvent(getNewData);
