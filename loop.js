/**
 * name: sloop - string repeater,
 * version: 1.0.0,
 * author: Beba Godfried <me@bebagodfried.com>
 * license: CC BY 4.0, MIT - (c) 2022
 */

let input = sessionStorage.getItem('sloop_string');
let stdout = selectId('js_stdout')
let max = sessionStorage.getItem('sloop_repeat');
max = parseInt(`${max}`)

//
document.title += ` [${max}] ${input}`;

select('span#r').innerHTML = max;
// select('span#s').innerHTML = input;

if (!max) {
  location.href = 'index.html'
} else {
  //
  for (let i = 1; i <= max; i++) {
    //
    let di1 = create('td');
    di1.innerHTML = i;
    di1.classList.add('center', 'solid-border', 'w-5', 'p-1');

    let di2 = create('td');
    di2.innerHTML = input;
    di2.classList.add('solid-border', 'flex-1', 'p-1', 'text-left');

    let row = create('tr');

    row.appendChild(di1);
    row.appendChild(di2);

    row.classList.add('flex')

    if (i == max) {
      row.id = "last"
    }
    stdout.appendChild(row);
    //
  }
}

