//literal object
const jesus = {
    name: "Jesus",
    age: 20, 
    cursosAprobados: [
        "Curso definitivo de html y css",
        "Curso practico html y css",
    ],

    /*
    create a method in a javascript object

    MethodName: function(){

    }
    */

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

//prototype

function student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    /*Create methods inside the prototype

    this.aprobarcurso = function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }*/
}

student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const david = new student(
    "David",
    15,
    ["Curso basico de ingles", "curso de manejo de la ansiedad"],
);

