// Define variables for the Count API
const COUNT_URL = "https://api.countapi.xyz";
const NAMESPACE = "resume.4199444.xyz";
const KEY = "95f9261e-fd4c-11ef-9cd2-0242ac120002";
const counter = document.querySelectorAll('span');

// Declare function to get the current counter value
const getCount = async () => {
  const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
  const data = await response.json();
  setValue(data.value);
};

// Declare function to hit the endpoint to increase the counter value
const incrementCount = async () => {
  const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
  const data = await response.json();
  setValue(data.value);
};

// Declare function to set the counter value
const setValue = (num) => {
  var str = num.toString().padStart(5, "0");
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    counter[index].innerHTML = element;
  }
};

// Add logic to check if the current browser has visited the site before or not... Increase the count and show it if not, get the current count if so
if (localStorage.getItem("hasVisited") == null) {
  incrementCount()
    .then(() => {
      localStorage.setItem("hasVisited", "true");
    })
    .catch((err) => console.log(err));
} else {
  getCount()
    .catch((err) => console.log(err));
}
