/*CMD
  command: /post
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please write your country
  keyboard: 
  aliases: 
CMD*/

User.setProperty("country", message, "string");
Bot.runCommand("/age")
