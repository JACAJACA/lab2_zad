const user = { 
    name: 'Jacek',
    surname: 'Dusza',
    allGrades: [
        {
            subjectName: 'Matematyka',
            grades: [5, 4, 3, 5, 2], 
            weight: 3
        },
        {
            subjectName: 'Biologia',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Fizyka', 
            grades: [4, 3, 3.5], 
            weight: 5
        }
    ]
};

function calculateWeightedAverage(user) {
  let sumOfWeightedGrades = 0;
  let totalWeight = 0;

  user.allGrades.forEach(gradeData => {
    const { grades, weight } = gradeData;
    const sumOfGrades = grades.reduce((acc, grade) => acc + grade, 0);
    const averageGrade = sumOfGrades / grades.length;

    sumOfWeightedGrades += averageGrade * weight;
    totalWeight += weight;
  });

  const weightedAverage = sumOfWeightedGrades / totalWeight;

  console.log(`Imię: ${user.name}`);
  console.log(`Nazwisko: ${user.surname}`);
  console.log(`Średnia ważona: ${weightedAverage}`);
}

calculateWeightedAverage(user);
