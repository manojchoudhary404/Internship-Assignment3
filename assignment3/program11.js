// Q11: Student subject averages using array/object methods

const students = [
    { name: "student1", subjects: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { name: "student2", subjects: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { name: "student3", subjects: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
  ];
  
  const result = students.map(student => {
    const marks = Object.values(student.subjects);  // [44, 56, 87, 97, 37]
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    const average = sum / marks.length;
    return { [student.name]: { average: average } };
  });
  
  console.log(result);
  // [{ student1: { average: 64.2 } }, { student2: { average: 64.2 } }, ...]