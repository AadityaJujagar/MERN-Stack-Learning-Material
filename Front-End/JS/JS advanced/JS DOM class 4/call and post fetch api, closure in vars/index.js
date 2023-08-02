// fetch api: returns a promise
// get call using api
async function utilities() {
  let content1 = await fetch("https://jsonplaceholder.typicode.com/posts/");
  let output = await content1.json();
  console.log(output);
}
console.log(utilities());

// fetch api and fetch info in it, show on ui
let city = "Solapur";
let API_KEY = "688c5fb47c4dab7e6ad3ae470839fea0";

function renderWeatherReport(fetchedData) {
  const newPara = document.createElement("p");
  newPara.textContent = `${fetchedData?.main?.temp.toFixed(2)}°C`;
  document.body.appendChild(newPara);
}

async function forecastWeather() {
  try {
    const fetchWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const fetchedData = await fetchWeather.json();

    console.log(fetchedData);
    renderWeatherReport(fetchedData);
  } catch (e) {
    console.log(e);
  }
}

// options for post call
let options1 = {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
let content2 = fetch("https://jsonplaceholder.typicode.com/posts/", options1);

// getting and posting pieces of infos using api
async function helpFn() {
  let options2 = {
    method: "POST",
    body: JSON.stringify({
      // parameters to be posted
      title: "title!",
      body: "body!",
      userId: 2022,
      newPara: true,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  let content2 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/",
    options2
  );
  let responces = content2.json();
  return responces;
}
async function utilities() {
  let answer = await helpFn();
  console.log(answer);
}
console.log(utilities());

// closure in case nested functions, references
function func1() {
  let x = "var at func1";
  console.log(x);
  function func2() {
    console.log(x);
    function func3() {
      console.log(x); // stored in the form of references
    }
    func3();
  }
  func2();
}
console.log(func1());
