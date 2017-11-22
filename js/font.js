(function(doc, win) {
    var htm = document.documentElement.clientWidth;
    doc.documentElement.style.fontSize = htm / 375 * 100 + "px";
}(document, window))