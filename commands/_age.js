/*CMD
  command: /age
  help: 
  need_reply: true
  auto_retry_time: 
  answer: How old are you?
  keyboard: 
  aliases: 
CMD*/

User.setProperty("age", message, "string");

Bot.runCommand("/like");

