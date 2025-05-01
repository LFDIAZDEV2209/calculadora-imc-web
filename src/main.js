import Swal from 'sweetalert2';

const form = document.querySelector('form');
const resultado = document.querySelector('.resultado');
const imagen = document.querySelector('.imagen');
const btnReiniciar = document.querySelector('#btn-reiniciar');

const validaciones = {
  altura: {
    min: 0,
    max: 2.72
  },
  peso: {
    min: 0,
    max: 635
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();

  // --- parseo y cálculo ---
  const alturaCm = parseFloat(form.altura.value);
  const alturaM  = alturaCm / 100;
  const pesoKg   = parseFloat(form.peso.value);
  const imc      = pesoKg / (alturaM * alturaM);

  // --- promesa de validación ---
  const errorPromise = new Promise((resolve, reject) => {
    const fueraDeAltura = alturaM < validaciones.altura.min || alturaM > validaciones.altura.max;
    const fueraDePeso   = pesoKg   < validaciones.peso.min   || pesoKg   > validaciones.peso.max;
    if (isNaN(imc) || !isFinite(imc) || imc <= 0 || fueraDeAltura || fueraDePeso) {
      reject(new Error('Datos inválidos'));
    } else {
      resolve();
    }
  });

  errorPromise
    .then(() => {
      resultado.innerHTML = `
        <h2>Resultado</h2>
        <p class="imc-valor">${imc.toFixed(2)}</p>
      `;
      resultado.classList.add('visible');
      btnReiniciar.style.display = 'block';
      document.querySelector('#btn-calcular').style.display = 'none';

      // Muestro img segun imc
      if (imc <= 18.5 && imc >= 0) {
        imagen.innerHTML = '<img src="/persona-delgada.png" alt="Persona delgada">';
      } else if (imc >= 18.5 && imc < 25) {
        imagen.innerHTML = '<img src="/person-normal.png" alt="Persona normal">';
      } else if (imc >= 25 && imc < 30) {
        imagen.innerHTML = '<img src="/persona-sobrepeso.png" alt="Persona con sobrepeso">';
      } else if (imc >= 30 && imc <= 34.9) {
        imagen.innerHTML = '<img src="/persona-obesidad.png" alt="Persona obesa">';
      } 

      imagen.style.display = 'block';
      const elementForm = form.querySelectorAll('input');
      elementForm.forEach(element => element.disabled = true);

      btnReiniciar.addEventListener('click', () => {
        resultado.classList.remove('visible');
        btnReiniciar.style.display = 'none';
        document.querySelector('#btn-calcular').style.display = 'block';
        imagen.style.display = 'none';
        elementForm.forEach(element => element.disabled = false);

        form.reset();
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Datos inválidos',
        text: 'Revisa peso y altura.',
        footer: 'Ingresa valores numéricos válidos.'
      });

      resultado.innerHTML = '';
      resultado.classList.remove('visible');
      imagen.style.display = 'none';
      btnReiniciar.style.display = 'none';
      document.querySelector('#btn-calcular').style.display = 'block';

      form.reset();
      return;
    });
});