# Android

## fix:Android 手机 webview 不能直接显示 pdf

新建 html 和对应的 js 文件：

```html
<!DOCTYPE html>
<html lang="en">
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=4.0,user-scalable=yes"
  />
  <title>Document</title>
  <style type="text/css">
    canvas {
      width: 100%;
      height: 100%;
      border: 1px solid black;
    }
  </style>
  <script src="https://unpkg.com/pdfjs-dist@1.9.426/build/pdf.min.js"></script>
  <script type="text/javascript" src="./index.js"></script>
</html>
```

```js
// var url = location.search.substring(1);
var url = "http://192.168.5.101:5500/leverage-agreement-CN.pdf"; //pdf文件地址
PDFJS.cMapUrl = "https://unpkg.com/pdfjs-dist@1.9.436/cmaps/";
PDFJS.cMapPacked = true;

var pdfDoc = null;

// function getPdfUrl(url){
//     return url;
// }
function createPage() {
  var div = document.createElement("canvas");
  document.body.appendChild(div);
  return div;
}

function renderPage(num) {
  pdfDoc.getPage(num).then(function (page) {
    var viewport = page.getViewport(2.0);
    var canvas = createPage();
    var ctx = canvas.getContext("2d");

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    page.render({
      canvasContext: ctx,
      viewport: viewport,
    });
  });
}

PDFJS.getDocument(url).then(function (pdf) {
  pdfDoc = pdf;
  for (var i = 1; i <= pdfDoc.numPages; i++) {
    renderPage(i);
  }
});
```
