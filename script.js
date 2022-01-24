const checkbox = document.getElementById('animation-checkbox');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.querySelector('.container').classList.add('reduce-motion')
  } else {
    document.querySelector('.container').classList.remove('reduce-motion')
  }
})

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.querySelector('.container2').classList.add('reduce-motion')
  } else {
    document.querySelector('.container2').classList.remove('reduce-motion')
  }
})
