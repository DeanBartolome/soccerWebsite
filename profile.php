<html>
    <head>
        <meta charset="UTF-8">
        <script src="football/js/jquery-3.2.1.js"></script>
        <script src="football/js/bootstrap.js"></script>
        <title>Team Profile</title>
    </head>
    <body>
        <?php
        include('header.html');
        ?>
        <div class="container" id='align'>
            <div class="row" id="row">
                <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <br><img id="teamImg" width="200" height="200">
                </div>
                <div class="col-xs-8 col-sm-6 col-md-5 col-lg-6">
                    <h3 id="teamName"></h3>
                </div>
            </div>
            <hr>
            
            <ul class="nav nav-tabs">
                <li class='active'><a data-toggle="tab" href="#overview">Overview</a></li>
                <li><a data-toggle="tab" href="#fixture">Fixtures</a></li>
                <li><a data-toggle='tab' href='#result'>Results</a></li>
                <li><a data-toggle='tab' href='#squad'>Squad</a></li>
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
                
                <div id="fixture" class="tab-pane fade">
                <div class ="row">
                    <div class="col-xs-offset-1 col-xs-10"><br>
                    <table class="table table-striped" id="fixtureList">
                    </table>
                    </div>
                </div> 
                </div>
                
                <div id='result' class='tab-pane fade'>
                    <div class='row'>
                        <div class="col-xs-offset-1 col-xs-10"><br>
                        <table class="table table-striped" id="resultList">
                        </table>
                        </div>
                    </div>
                </div>
                
                <div id='squad' class='tab-pane fade'>
                    <div class='row' id='squadList'>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
		<script src='../js/profile.js'></script>
    </body>
</html>
