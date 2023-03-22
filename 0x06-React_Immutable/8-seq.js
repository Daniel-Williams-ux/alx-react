import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const studentsSeq = Seq(object);
  let bestStudents = studentsSeq.filter((student) => student.score > 70);
  bestStudents = bestStudents.map((student) => {
    const capStd = student;
    capStd.firstName = capStd.firstName.charAt(0).toUpperCase() + capStd.firstName.slice(1);
    capStd.lastName = capStd.lastName.charAt(0).toUpperCase() + capStd.lastName.slice(1);
    return capStd;
  });
  bestStudents = bestStudents.toObject();
  console.log(bestStudents);
}