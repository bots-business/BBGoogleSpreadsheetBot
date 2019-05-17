/*CMD
  command: onsuccess
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can inspect options:
// Bot.sendMessage(inspect(options));

let rowIndex = options.rowIndex;
User.setProperty("rowIndex", rowIndex, "integer");

Bot.sendMessage("Data posted to [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1cTGIgdMfWe2_elWhtLhQhgcM4YbSZq2HUIWv_3GuOPs/edit?usp=sharing)");
Bot.sendMessage("Posted at row: " + rowIndex + "\nInserted values: " + options.inserted);

Bot.sendMessage("You can edit your data /post and /read it from table");
