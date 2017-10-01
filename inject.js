var th = document.getElementsByTagName('body')[0];
var s = document.createElement('script');
s.setAttribute('type', 'text/javascript');
s.setAttribute('src', chrome.runtime.getURL('injected.js'));
th.appendChild(s);