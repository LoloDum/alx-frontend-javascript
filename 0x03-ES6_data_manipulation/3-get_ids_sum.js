export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (oldStudent, newStudent) => oldStudent.id || oldStudent + newStudent.id,
      0,
    );
  }
  return 0;
}
