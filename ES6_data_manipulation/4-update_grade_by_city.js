export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        // 1️⃣ On garde uniquement les étudiants qui sont dans la ville demandée
        .filter(student => student.location === city)

        // 2️⃣ Pour chaque étudiant filtré, on crée un nouvel objet avec sa note
        .map(student => {

            // 3️⃣ On cherche dans newGrades un objet dont studentId correspond à l'id de l'étudiant
            // find retourne le premier objet trouvé ou undefined s'il n'y a pas de correspondance
            const gradeObj = newGrades.find(
                g => g.studentId === student.id
            );

            // 4️⃣ Si un grade est trouvé, on l'utilise
            // Sinon, on met "N/A"
            const finalGrade = gradeObj ? gradeObj.grade : 'N/A';

            // 5️⃣ On retourne un nouvel objet étudiant avec le grade mis à jour
            return {
                id: student.id,
                firstName: student.firstName,
                location: student.location,
                grade: finalGrade,
            };
        });
}
