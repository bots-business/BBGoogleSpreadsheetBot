/*CMD
  command: /read
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var rowIndex = User.getProperty("rowIndex");
if(!rowIndex){ Bot.sendMessage("You need /post data in first") }

Libs.GoogleSpreadSheet.getRow({
  sheetName: "Users",
  rowIndex: rowIndex,
  onSuccess: "onSuccessRead",
  onError: "onError"
})
