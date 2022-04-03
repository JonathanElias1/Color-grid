// fetch("https://apis.scrimba.com/hexcolors/", {
//   method: `GET`,
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

function displayColors(colors) {
  console.log(colors);

  let myColorsHtml = colors
    .map((color) => {
      return `<div class="my-color" style="background-color: ${color.value}"></div>`;
    })
    .join("");

  console.log(myColorsHtml);

  document.getElementById(`colors`).innerHTML = `<div class="my-colors">
  ${myColorsHtml}
    </div>`;
}

async function getColors(colorCount) {
  let response = await fetch(
    `https://apis.scrimba.com/hexcolors?count=${colorCount}`
  );
  //here we put in our own count variable within the fetch link which only works if you use `` instead of ""
  let data = await response.json();
  let colors = data.colors;

  displayColors(colors);
}

let colorCount = 100;
getColors(colorCount);
