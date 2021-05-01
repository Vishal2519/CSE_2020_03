# CSE_2020_03 
Save this file in a directory and run the following command to start a http server 

```bash
python -m SimpleHTTPServer
```

Note that any server(ex: xampp) would be fine but just know which port it is running at, currently this command would run a server at port 8000

Enter localhost:8000 in your address bar and navigate to your directory where you have saved this file

Authroize it with a google account and click on the subject line to view the message 

This file will not work without a localhost

If you are going to use your own API key and OAuth Client ID then follow these steps on your google cloud console:

Select a Project -> Credentials -> Client ID (which you would be using) -> Authorized JavaScript Origins URI -> enter http://localhost:8000

References: 
https://developers.google.com/gmail/api/quickstart/js 

https://www.sitepoint.com/mastering-your-inbox-with-gmail-javascript-api/
