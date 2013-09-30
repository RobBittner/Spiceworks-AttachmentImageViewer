SPICEWORKS.app.helpdesk.ticket.ready(function(){
  var ticketSummary = document.getElementById("item_summary_content");
  var anchors = ticketSummary.getElementsByTagName("a");
  var attachmentRegExp = /\/tickets\/attachment/i;
  var imageRegExp = /\.(png|jpg|jpeg|gif|bmp|tif|tiff)/i;
  for(i =0; i<anchors.length; i++) {
    var anchor = anchors[i];
    if (attachmentRegExp.test(anchor.href) && 
        imageRegExp.test(anchor.innerText)  ) {
      var li = anchor.parentNode.parentNode.parentNode;
      li.appendChild(document.createElement("br"));
      var img = document.createElement("img");
      img.src=anchor.href;
      li.appendChild(img);
    }
  }
});?
