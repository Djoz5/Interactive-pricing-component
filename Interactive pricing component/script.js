const sliderInput = document.getElementById("slider");
const pageviews = document.querySelector('h3');
const price = document.querySelector('h1');
const paymentToggle = document.querySelector('.toogle');
const progressBar = document.getElementById("progress-bar-before");
const span = document.querySelector('.span-text')

const pricesObj = {
  0: ['10K', 8],
  25: ['50K', 12],
  50: ['100K', 16],
  75: ['500K', 24],
  100: ['1M', 36]
}

const changeValues = () => {
  if (paymentToggle.checked) {
    price.textContent = `$${(pricesObj[sliderInput.value][1] * 9).toFixed(2)}`;
    span.textContent = "/ year"
  } else {
    price.textContent = `$${(pricesObj[sliderInput.value][1]).toFixed(2)}`;
    span.textContent = "/ month"
  }
  pageviews.textContent = `${pricesObj[sliderInput.value][0]} PAGEVIEWS`;
  progressBar.style.width = `${sliderInput.value}%`

}

window.onload = changeValues();

sliderInput.addEventListener('input', changeValues);
paymentToggle.addEventListener('click', changeValues);