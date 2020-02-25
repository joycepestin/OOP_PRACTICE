//Object Creation
class Student
{
    constructor(name, course, section)
    {
        this.name = name;
        this.course = course;
        this.section = section;
    }

    enrolled(subject)
    {
        console.log(`${this.name} , ${this.course} , is enrolled in ${this.section}`);
        console.log(`He is studying ${subject}`);
    }
}

let stud1 = new Student("Joyce Ann Pestin" , "IT" , "2ITF");
stud1.enrolled("ICS2609"); 