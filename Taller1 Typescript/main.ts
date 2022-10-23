import { Serie } from './serie.js';
import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const seasonsAverageElm: HTMLElement = document.getElementById("seasonsAverage")!;

renderSerieInTable(data);

seasonsAverageElm.innerHTML = `Seasons average: ${getSeasonsAverage(data)}`

function renderSerieInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((series) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${series.id}</td>
                             <td style="color: DodgerBlue;">${series.name}</td>
                             <td>${series.channel}</td>
                             <td>${series.seasons}</td>`;
      seriesTbody.appendChild(trElement);
      
    });
  }

function getSeasonsAverage(series: Serie[]): number {
  let totalSeasons: number = 0;
  data.forEach((series) => totalSeasons = totalSeasons + series.seasons);
  let seasonsAverage: number = totalSeasons/data.length;
  return seasonsAverage;
}


