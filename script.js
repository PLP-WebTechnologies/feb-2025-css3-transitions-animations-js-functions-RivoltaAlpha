const powerCard = document.getElementById('powerCard');
const aura = document.getElementById('auraEffect');
const selector = document.getElementById('powerSelector');
const selectedPowerText = document.getElementById('selectedPower');

// Load from localStorage
const savedPower = localStorage.getItem('animePower');
if (savedPower) {
  applyPower(savedPower);
  selector.value = savedPower;
}

selector.addEventListener('change', () => {
  const selected = selector.value;
  localStorage.setItem('animePower', selected);
  applyPower(selected);
});

function applyPower(power) {
  aura.className = 'aura'; // reset
  selectedPowerText.textContent = power ? `You chose ${power.toUpperCase()}!` : 'Select a Power';

  if (power) {
    aura.classList.add(power);
    aura.style.opacity = '1';
  } else {
    aura.style.opacity = '0';
  }
}


