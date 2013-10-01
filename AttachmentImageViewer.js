/*
Attachment Image Viewer
Rob Bittner
Setember 22, 2011

Version History
.1 & 1.0 : Initial Release
1.1 : Added preview and new window popup for full image
1.11 : Fixed the full window creation
1.2 : Added support for ico.  It was uber-difficult.  
      I had to /actually/ type the following "ico|"!!
      yowza, I'm not paid enough.. (:
*/
SPICEWORKS.app.helpdesk.ticket.ready(function(){
  

  var ticketSummary = document.getElementById("item_summary_content");
  var anchors = ticketSummary.getElementsByTagName("a");
  var attachmentRegExp = /\/tickets\/attachment/i;
  var imageRegExp = /\.(bmp|gif|ico|jpg|jpeg|png|tif|tiff)/i;
  var imageDelegate= function(image) {
    var imageWindow = window.open("");
    imageWindow.document.write('<html><head><title>Ticket Attachment</title></head><body><img src="' + image.src + '"></body></html>');
    imageWindow.document.close();
  }

  for(i=0; i<anchors.length; i++) {
    var anchor = anchors[i];
    //console.log(anchor.href + " " + anchor.innerHTML);
    if (attachmentRegExp.test(anchor.href) && 
        imageRegExp.test(anchor.innerHTML)  ) {
      //console.log("processing");
      var li = anchor.parentNode.parentNode.parentNode;
      li.appendChild(document.createElement("br"));
      var img = document.createElement("img");
      img.style.width="50px";
      img.style.height="50px";
      img.style.cursor="pointer";
      img.title="Click for full version";
      img.src=anchor.href;
      img.onclick=function(){ imageDelegate(this); };
      li.appendChild(img);
    }
  }
});?
