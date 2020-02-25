//Prototype
let stud1 = {name: "Joyce Ann " , course: "IT" , section: "2ITF" , 
study:function(subject)
{
    console.log(`${this.name}, is enrolled in ${subject}`);
}};

//calling the study method
//use the objcect syntx

let stud2 = {name: "Pedro" , course: "CS" , section: "2ITE"}; //di gagana kasi wlang study function

stud1.study("ICS2609"); 