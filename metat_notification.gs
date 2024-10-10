function sendFormByEmail(e) {
  // Recipient email address or list of addresses
  var email = "dot@dotat.at";

  // Various google shenanigans
  var s = SpreadsheetApp.getActiveSheet();
  var headers = s.getRange(1, 1, 1, s.getLastColumn()).getValues()[0];
  var message = "";
  var subject = "inscription de ";

  // Loop through the array 'e' and append form values to the body of the email
  for (var i in headers)
    if (e.namedValues[headers[i]])
      message +=
        headers[i] + ": \n" + e.namedValues[headers[i]].toString() + "\n\n";

  // Email title from form values
  subject +=
    e.namedValues[headers[1]].toString() +
    " - " +
    (e.namedValues[headers[8]] ? e.namedValues[headers[8]].toString() : "");

  // Send the email
  MailApp.sendEmail(email, subject, message);

  // Based off of a script originally posted by Amit Agarwal - www.labnol.org
}
