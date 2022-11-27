export type courseInfo = {
    id:number,
    courseName: string,
    teacherName: string,
    averageGradeOfCourse: number,
    studentsWithGrades:studentsWithGrades[]
}

export type studentsWithGrades = {
    name: string,
    grades: number[],
    id: number
}