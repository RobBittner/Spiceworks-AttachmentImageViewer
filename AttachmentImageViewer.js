/*
Attachment Image Viewer
Rob Bittner

Version History
0.1 (September 22, 2011)
  Beta Testing phase
1.0 (September 22, 2011)
  Initial Release
1.1 (September 27, 2011)
  Added preview and new window popup for full image
1.11 (September 27, 2011
  Fixed the full window creation
1.2  (September 29, 2011)
: Added support for ico.  It was uber-difficult.  
      I had to /actually/ type the following "ico|"!!
      yowza, I'm not paid enough.. (:
2.0 (November 4, 2011)
  Cleaned up Documentation (a little)
  
Feature List
------------
Hover for full image
Move all attachments into one "Comment"
Parameterize Image Thumbnail size

*/
SPICEWORKS.app.helpdesk.ticket.ready(function () {
  if (!document.getElementById) return;

  var previewing;

  var ticketSummary = document.getElementById("item_summary_content");
  var anchors = ticketSummary.getElementsByTagName("a");
  var attachmentRegExp = /\/tickets\/attachment/i;
  var imageRegExp = /\.(bmp|gif|ico|jpg|jpeg|png|tif|tiff)/i;
  var imageDelegate = function (image) {
    var imageWindow = window.open("");
    imageWindow.document.write('<html><head><title>Ticket Attachment</title></head><body><img src="' + image.src + '"></body></html>');
    imageWindow.document.close();
  }
  var FullImage = document.createElement("img");
  FullImage.style.position = "relative";

  var showFullImage = function (image) {

  }

  for (i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    //console.log(anchor.href + " " + anchor.innerHTML);
    if (attachmentRegExp.test(anchor.href) &&
        imageRegExp.test(anchor.innerHTML)) {
      //console.log("processing");
      var li = anchor.parentNode.parentNode.parentNode;
      li.appendChild(document.createElement("br"));
      var imgThumb = document.createElement("img");
      imgThumb.style.width = "50px";
      imgThumb.style.height = "50px";
      imgThumb.style.cursor = "pointer";
      imgThumb.title = "Click To Download";
      imgThumb.src = anchor.href;
      imgThumb.onclick = function () { imageDelegate(this); };
      /*
      imgThumb.onmouseover = function () {
        previewing = null;
        var thumb = this;
        previewing = setTimeout(function () { previewing = null; thumb.style.width = ""; thumb.style.height = ""; }, 500);
      };
      imgThumb.onmouseout = function () {
        previewing = null;
        var thumb = this;
        previewing = setTimeout(function () { previewing = null; thumb.style.width = "50px"; thumb.style.height = "50px"; }, 500);
      }
      */
      li.appendChild(imgThumb);
    }
  }
  console.log("Attachment Image Viewer Loaded");
});
