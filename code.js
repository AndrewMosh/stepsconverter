document.querySelector(".calculate").addEventListener("click", function () {
  steps_conv();
});
document.querySelector(".clear").addEventListener("click", clear);
function steps_conv() {
  const steps = document.getElementById("steps").value;
  let index = (steps * 0.0008045).toFixed(2);
  let index1 = (index * 55).toFixed(2);
  if (steps != 0 && steps > 0) {
    const km = document.getElementById("km");
    const calories = document.getElementById("calories");
    km.innerHTML = "Пройдено " + index + " км";
    calories.innerHTML = "Потрачено  " + index1 + " калорий";
  } else {
    km.innerHTML = "Введите число больше нуля ";
  }
}

function clear() {
  steps.value = "";
  km.innerHTML = "";
  calories.innerHTML = "";
}
