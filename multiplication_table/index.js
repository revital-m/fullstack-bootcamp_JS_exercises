// const myTable = document.querySelector('#my-table');
// let output = '';

// for (let row = 1; row < 11; row++) {
//     output += '<tr>';
//     for (let column = 1; column < 21; column++) {
//         if (row === 1 && column === 1) {
//             output += `<th>&Cross;</th>`;
//         }
//         else {
//             if (row === 1 || column === 1) {
//                 output += `<th>${row * column}</th>`;
//             }
//             else {
//                 output += `<td>${row * column}</td>`;
//             }
//         }
//     }
//     output += '</tr>';
// }

// myTable.innerHTML = output;
const myTable = document.querySelector("#my-table");
// let output = '';

for (let row = 1; row < 11; row++) {
  const newTr = document.createElement("tr");
  for (let column = 1; column < 21; column++) {
    if (row === 1 && column === 1) {
      const newTh = document.createElement("th");
      newTh.innerHTML += `&Cross;`;
      newTr.appendChild(newTh);
    } else {
      if (row === 1 || column === 1) {
        const newTh = document.createElement("th");
        newTh.innerText = `${row * column}`;
        // newTh.setAttribute('data-row', `${row}`);
        // newTh.setAttribute('data-column', `${column}`);
        newTr.appendChild(newTh);
      } else {
        const newTd = document.createElement("td");
        newTd.innerText = `${row * column}`;
        // newTd.setAttribute('data-row', `${row}`);
        // newTd.setAttribute('data-column', `${column}`);
        newTr.appendChild(newTd);
      }
    }
  }
  myTable.appendChild(newTr);
}
