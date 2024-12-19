<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Users List</title>
</head>
<body>
<h1>Users</h1>
<table border="1">
    <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach var="user" items="${users}">
        <tr>
            <td>${user.user_id}</td>
            <td>${user.user_name}</td>
            <td>${user}</td>
        </tr>
    </c:forEach>
    </tbody>
</table>
</body>
</html>