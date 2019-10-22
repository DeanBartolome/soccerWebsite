<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
        <script src="js/jquery-3.2.1.js"></script>
        <script src="js/bootstrap.js"></script>
        <link rel="stylesheet" type="text/css" href="/football/css/teamProfile.css">
        <title>Team Profile</title>
    </head>
    <body>
        <?php
        include('header.html');
        ?>
        <div class="container" id='align'>
            <div class="row" id="row">
                <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div class="img" id="crest">
                </div>
                <div class="col-xs-10 col-sm-12 col-md-15 col-lg-16">
                <h1 id="teamName"></h1>
                </div>
               
            </div>

            
            <ul class="nav nav-tabs">
                <li class='active'><a data-toggle="tab" href="#overview">Overview</a></li>
                <li><a data-toggle="tab" href="#fixture">Fixtures</a></li>
                <li><a data-toggle='tab' href='#result'>Results</a></li>
            </ul>
            
            <div class="tab-content">
                <div id = "overview" class="tab-pane fade in active">
                <div class="row">
                    <div class="col-xs-12 col-sm-3 col-md-4 col-lg-3">
                        <h3 align="center">Last 5 games played</h3>
                        <p align="center" id="lastGames"></p>
                    </div>
                
                    <div class="col-xs-12 col-sm-7 col-md-5 col-lg-8" id="test">
                        <h3> The Lastest Game </h3>
                        <table class="table" id="game">
                            <tbody>
                         </tbody>
                        </table>
                    </div>
                </div>
                </div>
                

                <div id = "fixture" class="tab-pane fade in active">
                <div class="row">
                    <div class="col-xs-12 col-sm-16 col-md-16 col-lg-16" id="upComing">
                        <h3>Upcoming Games</h3>
                        <table class="table" id="upComingGames">
                            <tbody>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                <hr>
                <div id = "result" class="tab-pane fade in active">
                <div class="row">
                    <div class="col-xs-10 col-sm-8 col-md-6 col-lg-9" id="pastGame">
                    <h3>Past Games</h3>
                        <table class="table" id="pastGames">
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                
            </div>
            
        </div>
		<script src='js/profile.js'></script>
    </body>
</html>
