// fetch api: returns a promise
// get call using api
async function utilities() {
  let content1 = await fetch("https://jsonplaceholder.typicode.com/posts/");
  let output = await content1.json();
  console.log(output);
}
console.log(utilities());

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
