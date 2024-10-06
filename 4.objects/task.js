function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age; 
    this.marks = [];
    
    //let student1 = new Student(name, gender, age);
    //let student2 = new Student(name, gender, age); 

    //new Student(name, gender, age);
    //let student1 = new Student(name, gender, age);
    //new Student(name, gender, age); 
    //let student2 = new Student(name, gender, age);
    
    //return student1;
    //return student2;

    /*return gender;
    return age;*/
}

new Student();
let student1 = new Student();
new Student(); 
let student2 = new Student();
    
/*return student1;
return student2;*/



Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;  

    return subjectName;
}



Student.prototype.addMarks = function (...marksToAdd) {
    
    if(!this.marks) {
        console.log('Невозможность добавлять оценки отчисленному студенту');
        return;

    }else{
        this.marks.push(...marksToAdd);            
    }

    return;      
}



Student.prototype.getAverage = function () {
    if(!this.marks) {
        return 0;

    }else{
        const average = this.marks.reduce((acc, marks) => acc + marks / this.marks.length, 0);  
        return average;        
    }  
}



Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
    //return;  
}
