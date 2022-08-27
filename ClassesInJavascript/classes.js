//Protoypyes with the class sytntax

class Student{
    //"this" makes reference to "Student"
    constructor({
        name,
        age,
        cursosAprobados = [],
        email
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }   
}

const jesus = new Student({
    email: "jbermudezamora87@gmail.com",
    name: "Jesus",
    age: 28
    }
);