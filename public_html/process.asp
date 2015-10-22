<%@ Language="VBscript" %>
<html>
<head>
<title>Submitted data</title>
</head>

<body>
<%

Dim name, email, comment

name=Request.Form("name")
email=Request.Form("email")
comment=Request.Form("comment")


Response.Write("Name: " & name & "<br>")
Response.Write("E-mail: " & email & "<br>")
Response.Write("Comments: " & comment & "<br>")
%> 
</body>
</html>