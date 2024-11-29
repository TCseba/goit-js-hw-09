function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      }
      else {
        reject({ position, delay })
      }
    }, delay)
  })
}
  const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stepInput = form.querySelector('input[name="step"]');
const amountInput = form.querySelector('input[name="amount"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstDelay = Number(delayInput.value);
  const delayStep = Number(stepInput.value);
  const amount = Number(amountInput.value);

  for (let i = 0; i < amount; i++) {
    const delay = firstDelay + i * delayStep;
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
