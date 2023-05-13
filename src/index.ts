import { PDFParser } from "./PDFParser.js"


async function main(){
    const files = "E20_BTECH_II_1107.pdf, E21_BTECH_IV_1251.pdf, E22_BTECH_VI.pdf, O19_BTECH_1_1015.pdf, O20_BTECH_1183.pdf, O21_BTECH_V.pdf".split(", ")
    for(const file of files){
        
        let pj = new PDFParser(`pdfs/${file}`)
        
        await pj.readPDF();
        await pj.parsePages();
        
        let total = 0
        
        console.log(file)
        console.log("Total number of students = ", pj.students.length)
        console.log("Students with empty grade : ")
        
        pj.students.forEach((student, i) => {
            if (student.semester.subjects.some(sub => sub.grade === "")){
                console.log(i, student.rollno, student.name);
                total++;
            }
        })
        
        console.log("Number of students with empty grade =", total);
        console.log()
    };
}

main()