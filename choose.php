<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
        <script src="js/jquery-3.2.1.js"></script>
        <script src="js/bootstrap.js"></script>
        <style>
            body{
                background-color: black;
            }
            .container{
                background-color: white;
            }
        </style>
        <title>Premier League: Team</title>
    </head>
    <body>
<?php
    include ('header.html');
?>

        <div class="container" id="align">
            <div class="row" id='team'>
            </div>
        </div>
        <script src="js/choose.js"></script>
    </body>
    <button onclick="listCookies()">Show cookies</button>
</html>
