const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};


function findPerson(typeOfPerson, id){
  return typeOfPerson.find(person => (person.id === id));
}

let findPersonInObj = findPerson(school.teachers, 1);
console.log(`findPersonInObj = `,findPersonInObj);


function assignStudent(id, subject){
  let optionalTeacher = [];
  school.teachers.forEach(teacher => {
    teacher.subjects.forEach(mySubject => {
      if (mySubject === subject) {
        optionalTeacher.push(teacher);
      }
    });
  });
  
  let isFull = optionalTeacher.find(teacher => (teacher.capacityLeft > 0));
  if (!isFull) {return 'Sorry, no available teachers left.';}
  let student = findPerson(school.students, id);
  if (!student) {return 'No such student exist.';}
  isFull.students.push(student);
  isFull.capacityLeft--;
}

let assignStudentInObj = assignStudent(10, 'chemistry');
console.log(`assignStudentInObj = `,school);

function assignTeachersSubject(id, newSubject){
  let myTeacher = findPerson(school.teachers, id);
  if (!myTeacher) {return 'No such teacher exist.';}
  isSubject = myTeacher.subjects.find(subject => (subject === newSubject));
  if (isSubject) {return `The subject- ${newSubject} already exist.`;}
  myTeacher.subjects.push(newSubject);
  return myTeacher;
}

let newSubjectInObj = assignTeachersSubject(2, 'chemistry');
console.log(`newSubjectInObj = `,newSubjectInObj);

function addNewStudent(studentsArr, name, id, age){
  let isExist = findPerson(studentsArr, id);
  if (isExist) {return `The student- ${name} already exist.`;}
  studentsArr.push({
    id,
    name,
    age,
  });
  return studentsArr;
}

let newStudentInObj = addNewStudent(school.students, 'Lily',14, 16);
console.log(`newStudentInObj = `,newStudentInObj);
console.log(school);