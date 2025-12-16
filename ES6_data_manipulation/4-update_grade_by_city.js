export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const gradeObj = newGrades.find(g => g.studentId === student.id);
            const finalGrade = gradeObj ? gradeObj.grade : 'N/A';
            return {
                id: student.id,
                firstName: student.firstName,
                location: student.location,
                grade: finalGrade
            };
        });
}
