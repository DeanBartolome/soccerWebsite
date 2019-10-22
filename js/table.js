
$.ajax({
    headers: { 'X-Auth-Token': 'fe2f25337ff340a28c5f6684c2fc279d' },
    url: 'https://api.football-data.org/v2/competitions/PL/standings?standingType=HOME',
    dataType: 'json',
    type: 'GET',
    }).done(function(response) {   
        var count = 20;
        var teamId = getTeam();
        console.log(response)
        var htmlString ='<table class="table table-striped"><thead>';
        var htmlStringSmall = '<table class="table table-striped"><thead>';
        htmlStringSmall += '<tr><td align="center">Position</td><td>Club</td><td align="center">Played</td><td align="center">Win</td><td align="center">Lost</td><td align="center">Draw</td>'
        htmlStringSmall += '<td align="center">Points</td></tr></thead><tbody>';
        htmlString += '<tr><td align="center">Position</td><td>Club</td><td align="center">Played</td><td align="center">Win</td><td align="center">Lost</td>';
        htmlString += '<td align="center">Draw</td><td align="center">GF</td><td align="center">GA</td><td align="center">GD</td><td align="center">Points</td></tr></thead><tbody>';
        for (i=0; i< count; i++){
            if(teamId == response.standings[0].table[i].team.id){
             htmlString += '<tr class="success"><td align="center">'+response.standings[0].table[i].position + '</td>';
            }
            else{
                htmlString += '<tr><td align="center">'+response.standings[0].table[i].position + '</td>';
            }
            htmlString += '<td>'+ response.standings[0].table[i].team.name+' <img src="' + response.standings[0].table[i].team.crestUrl+ '" height="20"></td>';
            htmlString += '<td align="center">'+response.standings[0].table[i].playedGames + '</td>';
            htmlString += '<td align="center">'+ response.standings[0].table[i].won + '</td>';
            htmlString += '<td align="center">'+ response.standings[0].table[i].lost + '</td>';
            htmlString += '<td align="center">'+ response.standings[0].table[i].draw + '</td>';
            htmlString += '<td align="center">'+ response.standings[0].table[i].goalsFor + '</td>';
            htmlString += '<td align="center">'+ response.standings[0].table[i].goalsAgainst + '</td>';
            htmlString += '<td align="center">'+ response.standings[0].table[i].goalDifference + '</td>';
            htmlString += '<td align="center">'+ response.standings[0].table[i].points + '</td></tr>';
            
            htmlStringSmall +='<tr><td align="center">'+ response.standings[0].table[i].position + '</td>';
            htmlStringSmall +='<td>'+ response.standings[0].table[i].team.name +' <img src="' +response.standings[0].table[i].team.crestUrl + '" height="20"></td>';
            htmlStringSmall +='<td align="center">'+ response.standings[0].table[i].playedGames + '</td>';
            htmlStringSmall +='<td align="center">'+ response.standings[0].table[i].won + '</td>';
            htmlStringSmall +='<td align="center">'+ response.standings[0].table[i].lost + '</td>';
            htmlStringSmall +='<td align="center">'+ response.standings[0].table[i].draw + '</td>';
            htmlStringSmall +='<td align="center">'+ response.standings[0].table[i].points + '</td></tr>'
        }
        $("#leagueTable").append(htmlString);
        $("#leagueTableSmall").append(htmlStringSmall);
    });
function getTeam() {
  var theCookies = document.cookie.split(";");
  var aString = theCookies.toString();
  var something = aString.replace("TeamId=", "");
  return something;
}
                