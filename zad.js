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
//Zad. 3
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
//Zad. 4
const subjectWithWeightOne = _.find(user.allGrades, { weight: 1 });

if (subjectWithWeightOne) {
  console.log(`Przedmiot z wagą 1: ${subjectWithWeightOne.subjectName}`);
} else {
  close.log('Nie znaleziono przedmiotu z wagą 1.');
}
//Zad. 5
const collections = [
  {},
  15,
  "hello@test.pl",
  null,
  ['aaa', 'bbb', 5],
  'admin@gmail.com',
  undefined,
  'a34@yahoo.com',
  '321@a',
  '321.pl'
];

function getMails(collections) {
  const strings = collections.filter(item => typeof item === 'string');
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;

  const emails = strings.reduce((acc, str) => {
    const matches = str.match(emailRegex);
    if (matches) {
      acc.push(...matches);
    }
    return acc;
  }, []);
  const sortedEmails = emails.sort();

  return sortedEmails;
}

const result = getMails(collections);
console.log(result);
