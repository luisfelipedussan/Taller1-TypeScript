import { data } from './data.js';
var seriesTbody = document.getElementById("series");
var seasonsAverage = document.getElementById("seasonsAverage");
renderSerieInTable(data);
seasonsAverage.innerHTML = "Seasons average: ".concat(getSeasonsAverage(data));
function renderSerieInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (series) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(series.id, "</td>\n   <td style=\"color: DodgerBlue;\">").concat(series.name, "</td>\n                             <td>").concat(series.channel, "</td>\n                             <td>").concat(series.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    data.forEach(function (series) { return totalSeasons = totalSeasons + series.seasons; });
    var seasonsAverage = totalSeasons / data.length;
    return seasonsAverage;
}
