function vaxTrail(arr) {
  const A = [];
  const B = [];
  const C = [];
  const D = [];

  // Divide people into different categories
  for (const person of arr) {
    if (person.temperature < 100) {
      if (person.age >= 20 && person.age <= 30) {
        A.push(person);
      } else if (person.age >= 31 && person.age <= 40) {
        B.push(person);
      } else if (person.age >= 41 && person.age <= 50) {
        C.push(person);
      } else {
        D.push(person);
      }
    } else {
      D.push(person);
    }
  }

  // Sort each array by even ages
  A.sort((a, b) => b.age - a.age);
  B.sort((a, b) => b.age - a.age);
  C.sort((a, b) => b.age - a.age);
  D.sort((a, b) => b.age - a.age);

  // Return the result object
  return { A, B, C, D };
}

console.log(vaxTrail([
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    ]));