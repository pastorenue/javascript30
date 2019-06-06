const inputs = document.querySelectorAll('.controls input');
function updateHandler() {
    const suffix = this.dataset.suffix || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', updateHandler));
inputs.forEach(input => input.addEventListener('input', updateHandler));