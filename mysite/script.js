 // Калькулятор
 function calculate() {
      const width = parseFloat(document.getElementById('width').value);
      const length = parseFloat(document.getElementById('length').value);
      const thickness = parseFloat(document.getElementById('thickness').value);
      const pricePerTon = parseFloat(document.getElementById('type').value);

      if (isNaN(width) || isNaN(length) || isNaN(thickness)) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }

      const volume_m3 = width * length * (thickness / 100); // м³
      const density = 2.5; // т/м³ — плотность асфальта
      const tons = volume_m3 * density;

      const cost = tons * pricePerTon;

      document.getElementById('result').innerHTML =
        `Потребуется: <strong>${tons.toFixed(2)}</strong> тонн<br>Общая стоимость: <strong>${cost.toLocaleString()} руб</strong>`;
    }