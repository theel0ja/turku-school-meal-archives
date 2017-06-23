/*
 * (C) 2017 Elias Ojala
 */

function cb() {
    console.log("foo bar!");
}

function showArchives(cityName, schoolType, contentElement) {
    // https://api.github.com/repos/theel0ja/turku-school-meal-archives/contents/turku/alakoulu

    var url = "https://api.github.com/repos/theel0ja/turku-school-meal-archives/contents/" + cityName + "/" + schoolType;

    var kielet = {
        "fi": "suomi (fi)",
        "sv": "englanti (en)",
        "en": "ruotsi (sv)"
    };

    (function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                var parsedJSON = JSON.parse(this.responseText);

                contentElement.innerHTML = "<ul>";
                

                for(var i in parsedJSON) {
                    var fileName = parsedJSON[i].name;

                    var title = fileName.replace(".html", "");

                    var split = title.split('-');

                    var year = split[0];
                    var week = split[1];
                    var lang = split[2];

                    // title = year + ": " + week + " (" + lang + ")"; // (Same as in UWP app)
                    title = year + ": Vko " + week + " - " + kielet[lang];

                    if(fileName.split('.').pop() == "html" && fileName != "index.html") {
                        contentElement.innerHTML += "<li><a href=\"" + fileName + "\">" + title + "</a></li>";
                    }

                    contentElement.innerHTML += "</ul>";
                }
            }
            else {
                contentElement.innerHTML = "Ladataan...<br />Jos tämä kestää yli 10 sekuntia, lataa sivu uudelleen."; // TODO: auto refresh
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    })();
}