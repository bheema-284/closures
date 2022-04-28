

// const searchTermElem = document.querySelector('#searchTerm');
//  searchTermElem.addEventListener('input', function (event) {
//     console.log(event.target.value);
//     let datadiv = document.querySelector('#data');
//     let div = document.createElement("div");
//     let p = document.createElement("p");
//     p = event.target.value;
//     div.append(p)
//     datadiv.append(div)
// });


function debounce(fn, delay) {
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  })();
}
// usage

function someFn() {
  console.log('Hi');
  let datadiv = document.querySelector('#data');
  let div = document.createElement('div');
  let p = document.createElement('p');
  p = "Hello This text will be display after 3 secs";
  div.append(p);
  datadiv.append(div);
}

debounce(someFn, 3000);