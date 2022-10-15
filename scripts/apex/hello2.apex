Http http = new Http();
HttpRequest req = new HttpRequest();
req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId());
req.setHeader('Content-Type', 'application/json');

req.setEndpoint(URL.getSalesforceBaseUrl().toExternalForm() + '/services/data/v35.0/tooling/query?q=Select+Id,Active+From+ValidationRule');
req.setMethod('GET');
HttpResponse res = http.send(req);
System.debug(res);
String result = res.getBody();
System.debug(result);