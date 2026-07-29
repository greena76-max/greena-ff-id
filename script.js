function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;
  
  sheet.appendRow([
    p.sellerName, 
    p.whatsappNumber, 
    p.freeFireUid, 
    p.accountLevel, 
    p.accountRank, 
    p.loginType, 
    p.accountPrice, 
    p.screenshotLink
  ]);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
