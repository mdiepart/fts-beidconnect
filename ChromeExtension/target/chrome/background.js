function _reply(e,n){n.src="beidconnect.background",n.extensionVersion=chrome.runtime.getManifest().version,chrome.tabs.sendMessage(e,n)}function _fail_with(e,n){var i={};i.correlationId=e.correlationId,i.result=n,_reply(e.tab,i)}function _forward(e){var n=e.tab,i=JSON.parse(JSON.stringify(e));e.pin&&(e.pin="********"),console.log("SEND "+n+": "+JSON.stringify(e)),chrome.runtime.sendNativeMessage(NATIVE_HOST,i,function(i){i?(console.log("RECV "+n+": "+JSON.stringify(i)),_reply(n,i)):(console.log("ERROR "+n+": "+JSON.stringify(chrome.runtime.lastError)),chrome.runtime.lastError.message&&chrome.runtime.lastError.message.indexOf("native messaging host not found")!=-1?_fail_with(e,"timeout"):_fail_with(e,"technical_error"))})}var NATIVE_HOST="be.bosa.beidconnect",EXTENSION_ID="pencgnkbgaekikmiahiaakjdgaibiipp";console.log("BeIDConnect event page activated"),chrome.runtime.onMessage.addListener(function(e,n,i){return n.id!==EXTENSION_ID?void console.log("Ignoring message not originating from our extension"):void(n.tab&&(e.tab=n.tab.id,_forward(e)))});