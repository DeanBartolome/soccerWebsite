$.ajax({
    headers: { 'X-Auth-Token': 'fe2f25337ff340a28c5f6684c2fc279d' },
    url: "https://api.football-data.org/v2/competitions/PL/teams",
    dataType: 'json',
    type: 'GET',
    }).done(function(response) {
        console.log(response)
        var count = response.count;
        htmlString = "";
        for (i = 0; i < count; i++){
            var teamId =   response.teams[i].id;
            htmlString +='<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 box" id="category">\n';
            htmlString +='<img src="'+ response.teams[i].crestUrl +'" height="200" width="200">\n';
            htmlString +='<div class="button"><a class="btn btn-info" href="fixtures.php" onclick = setCookie("'+teamId+'")>'+
                        response.teams[i].name+'</a></div>\n';
            htmlString +='</div>\n'
        }
    $("#team").append(htmlString);
    });
    function setCookie(name) {
        deleteAllCookies();
        var d = new Date();
         d.setTime(d.getTime() + (1*24*60*60*1000));
         var expires = "expires="+ d.toUTCString();
        document.cookie = "TeamId"+ "=" + name + ";" + expires + ";path=/";
        listCookies()
    document.cookie = ''
   }
   function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
   
}

      function deleteAllCookies() {
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }