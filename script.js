// 1. Ejemplo de Top-Level await
const apiOutput = document.getElementById("await-output");
try {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  apiOutput.textContent = `Resultado de la API: ${JSON.stringify(data)}`;
} catch (error) {
  apiOutput.textContent = "Error al cargar los datos";
}

// 2. Ejemplo manejo del <dialog>
const dialog = document.getElementById("myDialog");
document.getElementById("openDialog").addEventListener("click", () => {
  dialog.showModal();
});
document.getElementById("closeDialog").addEventListener("click", () => {
  dialog.close();
});


// 3. Operadores de Asignación Lógica
const logicButton = document.getElementById('logicAssignButton');
const logicResult = document.getElementById('logicResult');

logicButton.addEventListener('click', () => {
  let a = 0;
  let b = 10;
  let c = null;

  a ||= 42;  // a se asigna a 42 si es falsy (0)
  b &&= 5;   // b se asigna a 5 si es truthy (10)
  c ??= 100; // c se asigna a 100 solo si es null o undefined

  logicResult.textContent = `a: ${a}, b: ${b}, c: ${c}`;
});

// 4. Ejemplo de Array.groupBy()
/*const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 35 },
];

const groupedByAge = users.groupBy((user) => user.age);
const groupByOutput = document.getElementById("groupby-output");
groupByOutput.innerHTML = `
      <strong>Usuarios agrupados por edad:</strong> <br>
      ${JSON.stringify(groupedByAge, null, 2)}
    `;

// 5. Ejemplo de la API Temporal
const temporalOutput = document.getElementById("temporal-output");
const now = Temporal.Now.plainDateTimeISO();
const future = now.add({ hours: 2, minutes: 30 });

temporalOutput.innerHTML = `
      Hora actual: ${now.toString()} <br>
      Hora en 2 horas y 30 minutos: ${future.toString()}
    `;
*/

