import"./modulepreload-polyfill.c7c6310f.js";let e;Office.onReady(()=>{e=Office.context.mailbox.item}).then(()=>{});function o(i){e==null||e.subject.getAsync({},()=>{let t;Office.context.ui.displayDialogAsync("https://chenyijun777.github.io/yooffice_test//dialog.html",{height:30,width:20,displayInIframe:!0},l=>{t=l.value,t.addEventHandler(Office.EventType.DialogMessageReceived,n=>{t.close(),n.message==="send"?i.completed({allowEvent:!0}):i.completed({allowEvent:!1})})})})}function d(){return typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:void 0}const a=d();a.validateSubjectAndCC=o;
