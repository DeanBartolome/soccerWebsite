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
            var namez =   response.teams[i].website;
            htmlString +='<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 box" id="category">\n';
            htmlString +='<img src="'+ response.teams[i].crestUrl +'" height="200" width="200">\n';
            htmlString +='<div class="panel panel-info"><a class="btn btn-info btn-block" href="'+ namez +'">'+
                        response.teams[i].name +'</a></div>\n';
            htmlString +='</div>\n'
            listCookies();
          
        }
    $("#team").append(htmlString);
    });
    function listCookies() {
        var theCookies = document.cookie.split(';');
        var aString = '';
        for (var i = 1 ; i <= theCookies.length; i++) {
            aString += i + ' ' + theCookies[i-1] + "\n";
        }
       console.log("testing")
        return aString;
       
    }