var url = setUrl();
$.ajax({
  headers: { "X-Auth-Token": "fe2f25337ff340a28c5f6684c2fc279d" },
  url: url,
  dataType: "json",
  type: "GET"
}).done(function(response) {
  $.ajax({
    headers: { "X-Auth-Token": "fe2f25337ff340a28c5f6684c2fc279d" },
    url:  "https://api.football-data.org/v2/competitions/PL/standings?standingType=HOME",
    dataType: "json",
    type: "GET"
  }).done(function(standings) {
    var n = response.count;
    var count = 0;
    var htmlString = "";
    //Liverpool number in case nothing has been picked yet
    var teamId = 64;
    teamId = getTeam();
    console.log(response)

    for (i = n - 1; i > -1; i--) {
      if (count == 5) {
        break;
      }
      if (response.matches[i].status == "FINISHED") {
        var homeTeamId = response.matches[i].homeTeam.id;
        var homeTeam = response.matches[i].homeTeam.name;
        var awayTeam = response.matches[i].awayTeam.name;
        var awayScore = response.matches[i].score.fullTime.awayTeam;
        var homeScore = response.matches[i].score.fullTime.homeTeam;
        if (count == 0) {
          lastGame = i;
        }
        var result = "";
        if (teamId == homeTeamId) {
          if (homeScore > awayScore) {
            result = "../football/pics/win.png";
          } else if (homeScore < awayScore) {
            result = "../football/pics/lost.png";
          } else {
            result = "../football/pics/draw.png";
          }
        } else {
          if (homeScore < awayScore) {
            result = "../football/pics/win.png";
          } else if (homeScore > awayScore) {
            result = "../football/pics/lost.png";
          } else {
            result = "../football/pics/draw.png";
          }
        }
        htmlString += '<img src="' + result + '" width="40" height="40">';
        count++;
      }
    }
    $("#lastGames").append(htmlString);
    var latest = findLatest(response);
    var homeTeamId = response.matches[latest].homeTeam.id;
    var homeTeam = response.matches[latest].homeTeam.name;
    var awayTeam = response.matches[latest].awayTeam.name;
    var awayScore = response.matches[latest].score.fullTime.awayTeam;
    var homeScore = response.matches[latest].score.fullTime.homeTeam;
    htmlString = "";
    for (j = 0; j < 20; j++) {
        if (standings.standings[0].table[j].team.name == homeTeam) {
          firstCrest = standings.standings[0].table[j].team.crestUrl;
        } else if (standings.standings[0].table[j].team.name == awayTeam) {
          secondCrest = standings.standings[0].table[j].team.crestUrl;
        } else {
        }
      }
      console.log(teamId)
      console.log(homeTeamId)
    if (teamId == homeTeamId) {
      console.log(teamId)
      if (homeScore > awayScore) {
        result = "success";
      } else if (homeScore < awayScore) {
        result = "danger";
      } else {
        result = "warning";
      }
    } else {
      if (homeScore < awayScore) {
        result = "success";
      } else if (homeScore > awayScore) {
        result = "danger";
      } else {
        result = "warning";
      }
    }
    htmlString +=
      '<tr class="' +
      result +
      '">' +
      '<td align="left">' +
      homeTeam +
      '<td align="left">' +
      ' <img src="' + firstCrest+ '" height="20"></td>' +
      '</td><td align="center">' +
      homeScore +
      '</td><td align="center">' +
      awayScore +
      '<td align="right">' +
      awayTeam +
      '<td align="right">' +
      ' <img src="' + secondCrest+ '" height="20"></td>' +
      "</td></tr>";
    $("#game").append(htmlString);
    $("#pastGames").append(getResults(response,standings,latest));
    $("#upComingGames").append(getFixture(response,standings,latest));
    $("#crest").append(getCrest(standings));
    $("#teamName").append(getName(standings));
  });
});

function getCrest(standing){
  var teamId = 64;
  teamId = getTeam();
  var crestUrl = ''
  htmlString =''
  if(teamId == ""){
    return htmlString +='<img src="http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg" height="200" width="200">\n'
  }
 for(i = 0;i < 20; i++){
   if(teamId == standing.standings[0].table[i].team.id){
    crestUrl = standing.standings[0].table[i].team.crestUrl;
   }
 }
 htmlString +='<img src="'+ crestUrl +'" height="200" width="200">\n'
 return htmlString;
}

function getName(standing){
  var teamId = 64;
  teamId = getTeam();
  var name = '';
  htmlString = '';
  if(teamId == ""){
    return htmlString +=htmlString +='<h1 font-stretch: expanded>Liverpool FC</h1>'
  }
 for(i = 0;i < 20; i++){
   if(teamId == standing.standings[0].table[i].team.id){
    name = standing.standings[0].table[i].team.name;
   }
 }
 htmlString +='<h1 font-stretch: expanded>'+name+'</h1>'
 console.log(htmlString)
 return htmlString;
}

function getTeam() {
  var theCookies = document.cookie.split(";");
  var aString = theCookies.toString();
  var something = aString.replace("TeamId=", "");
  return something;
}
function setUrl() {
  var theTeam = getTeam();
  if (theTeam == "") {
    return "https://api.football-data.org/v2/teams/64/matches?competitions=PL";
  }
  var url =
    "https://api.football-data.org/v2/teams/" +
    theTeam +
    "/matches?competitions=PL";
  return url;
}
function findLatest(response) {
  latest = 0;
  //38 is the number of games per year
  for (i = 0; i < 38; i++) {
    if (response.matches[i].status == "FINISHED") {
      latest = i;
    } else {
      break;
    }
  }
  return latest;
}
function getResults(response,standing,matches) {
  htmlString = "";
  var theTeam = getTeam();
  console.log(standing);
    var firstCrest;
    var secondCrest;
    for (i = matches; i > -1; i--) {
      var homeTeam = response.matches[i].homeTeam.name;
      var awayTeam = response.matches[i].awayTeam.name;
      var awayScore = response.matches[i].score.fullTime.awayTeam;
      var homeScore = response.matches[i].score.fullTime.homeTeam;
      for (j = 0; j < 20; j++) {
        if (standing.standings[0].table[j].team.name == homeTeam) {
          firstCrest = standing.standings[0].table[j].team.crestUrl;
        } else if (standing.standings[0].table[j].team.name == awayTeam) {
          secondCrest = standing.standings[0].table[j].team.crestUrl;

        } else {
        }
      }
      if (theTeam == response.matches[i].homeTeam.id) {
        if (homeScore > awayScore) {
          result = "success";
        } else if (homeScore < awayScore) {
          result = "danger";
        } else {
          result = "warning";
        }
      } else {
        if (homeScore < awayScore) {
          result = "success";
        } else if (homeScore > awayScore) {
          result = "danger";
        } else {
          result = "warning";
        }
      }
      htmlString +=
        '<tr class="' +
        result +
        '">' +
        '<td align="left">' +
        homeTeam +
        '<td align="left">' +
        ' <img src="' + firstCrest+ '" height="20"></td>' +
        '</td><td align="center">' +
        homeScore +
        '</td><td align="center">' +
        awayScore +
        '<td align="right">' +
        awayTeam +
        '<td align="right">' +
        ' <img src="' + secondCrest+ '" height="20"></td>' +
        "</td></tr>";
    }
    return htmlString;
}
function getFixture(response, standing,latest) {
  htmlString = "";
  for (i = latest + 1; i < response.count; i++) {
    var homeTeam = response.matches[i].homeTeam.name;
    var awayTeam = response.matches[i].awayTeam.name;
    var matchday = response.matches[i].utcDate;
    var date = new Date(matchday).toDateString();
    var firstCrest;
    var secondCrest;
    for (j = 0; j < 20; j++) {
        if (standing.standings[0].table[j].team.name == homeTeam) {
          firstCrest = standing.standings[0].table[j].team.crestUrl;
        } else if (standing.standings[0].table[j].team.name == awayTeam) {
          secondCrest = standing.standings[0].table[j].team.crestUrl;
        } else {
        }
      }

    htmlString +=
      '<tr class="' +
      "warning" +
      '">' +
      '<td align="left">' +
      "Matchday: " +
      date +
      '</td><td align="center">' +
      homeTeam +
      '</td><td align="center">' +
      ' <img src="' + firstCrest+ '" height="20"></td>' +
      '<td align="right">' +
      awayTeam +
      '<td align="right">' +
      ' <img src="' + secondCrest+ '" height="20"></td>' +
      "</td></tr>";
  }
  return htmlString;
}
