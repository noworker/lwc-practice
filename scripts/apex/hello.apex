Http http = new Http();
HttpRequest req = new HttpRequest();
req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId());
req.setHeader('Content-Type', 'application/json');
req.setEndpoint(URL.getSalesforceBaseUrl().toExternalForm() + '/services/data/v55.0/tooling/sobjects/ValidationRule/');
req.setMethod('POST');


Map<String, String> record = new Map<String, String>();
record.put('Active', 'true');
record.put('Description', 'hogehoge');
req.setBody(JSON.serialize(record));
HttpResponse res = http.send(req);
System.debug(res);
String result = res.getBody();
System.debug(result);