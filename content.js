chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
 		getFuckingValues();
  }
}	
);
function getFuckingValues(){
	iFrameObj=document.getElementsByTagName('iframe')[0];
	var valBoxA=iFrameObj.contentWindow.document.getElementById('fst').value;
	var valBoxB=iFrameObj.contentWindow.document.getElementById('snd').value;
	iFrameObj.contentWindow.document.getElementById('sum').value=((valBoxA*1)+(valBoxB*1));
}