/*Request:
type of request (around client and server)
post >>like request through submittting forms
delete
get
put
to send request:  url and type
*/
/*Respone:
status code
2xx: successful request
4xx || 5xx: error
    4xx: client error: format error, url error, request error
    5xx: server error: server not available server down
 */
/*chrome, microsoft edge, safari, firefox, ios opera */

//Practise
//1:
var label = "senecacollege";
var tld = ".ca";
var domainName = label + tld;
console.log(domainName);

//2:
var isSeneca;
if (domainName === "senecacollege.ca") {
  isSeneca = true;
} else {
  isSeneca = false;
}
console.log(isSeneca);

//3:
var isNotSeneca = !isSeneca;
console.log(isNotSeneca);

//4:
var byte1 = 192;
var byte2 = 168;
var byte3 = 2;
var byte4 = 1;

//5:
byte1.toString();
console.log(byte1);
/*byte1.toString(2);
console.log(byte1);
byte1.toString(16);
console.log(byte1);*/

//6:
var ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log(ipAddress);

//7:
var ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + byte4;
console.log(ipInt);

//8:
var ipBinary = ipInt.toString(2);
console.log(ipBinary);

//9:
var statusCode = 418; //HTML status code for 'I am teapot'

//10:
if (statusCode >= 400 && statusCode < 500) {
  console.log("Status Code is 4xx");
} else console.log("Status Code is not 4xx");

//11:
var statusCode = 103;
switch (statusCode) {
  case 100:
    console.log("Continue");
    break;
  case 101:
    console.log("Switching Protocols");
    break;
  case 102:
    console.log("Processing");
    break;
  case 103:
    console.log("Early Hints");
    break;
  default:
    console.log("unknown information response");
    break;
}

//12:
function is2xx(status) {
  if (status >= 200 && status < 300) return true;
  return false;
}
console.log(is2xx(200));
