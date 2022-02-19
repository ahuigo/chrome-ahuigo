// listen for checkForWord request, call getTags which includes callback to sendResponse
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === 'getTitle') {
      getTitle(request, sender, sendResponse);
      // this is required to use sendResponse asynchronously
      return true;
    }
  }
);

// Returns title
function getTitle(request, sender, sendResponse) {
  var hnode = document.getElementsByTagName('h1')[0];
    let title = hnode.innerText || "no title"
  return sendResponse({ title: title });
}

function cleanZhihu(){
    // copy selector
    switch(location.pathname){
        case '/hot':
        case '/':
            location.href='https://gfw.go101.org/article/101.html'
            break
        default:
            document.querySelector('#root  header').remove()
    }
}
(function init(){
    switch(location.hostname){
        case 'www.zhihu.com':
        case 'zhihu.com': cleanZhihu();break;
    }
    console.log(location.href)
})()

