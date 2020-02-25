//Call Function

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
//stud1.study("Science"); //di pwede kasi yung study function ay di kasama sa object --- it was defined outside the obj

stud1.study("Biology");
stud2.study("Science");
//functions are objects in javascript

console.log(stud1.school);
Student.call(stud2, "Science");