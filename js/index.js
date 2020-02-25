//Prototype
function Student(name, course, section)
{
    this.name = name;
    this.course = course;
    this.section = section;
}

Student.prototype.study = function(subject)
{
    console.log(`${this.name}, is enrolled in ${subject}`);
}

Student.prototype.school = "UST";

let stud1 = new Student(" Joyce  " , "IT" , "2TF");
let stud2 = new Student ("Ann " , "CS" , "CSA");

stud1.study("Biology");
stud2.study("Science");

stud1.study("ICS2609"); 
console.log(stud1.school);