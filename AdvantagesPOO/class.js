//------------------------------------ COURSES --------------------------------------------- 
class Courses {
    constructor({
        name,
        classes = [],

    }){
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Courses ({
    name: "Curso de programacion basica",
});

const cursoDefinitivoHTML = new Courses ({
    name: "Curso definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Courses ({
    name: "Curso Practico de Html y CSS",
});

//--------------------------------- LEARNIGN PATHS -----------------------------------
class LearningPath {
    constructor({
        pathName,
        courses = [],

    }){
        this.pathName = pathName;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    pathName: "Escuela de desarrollo Web",

    courses: [cursoDefinitivoHTML,
    cursoPracticoHTML,
    cursoProgBasica]

});

const escuelaVideojuegos = new LearningPath({
    pathName: "Escuela de videojuegos",

    courses: [cursoProgBasica,"Curso de Unity",
    "Curso de Unreal Engine",],

});

const escuelaDeIngles = new LearningPath({
    pathName: "English Academy",

    courses: ["Curso A1: Miembros de la familia",
    "Curso de ingles para Developers",],

});

//------------------------------------- STUDENTS -------------------------------------------
class Student {
    constructor ({
        name, 
        email,
        username,
        twitter = undefined, //optional
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const jesus = new Student({
    name:"JuanDC",
    username:"juandc",
    email:"juanito@juanito.com",
    twitter:"fjuandc",
    learningPaths: [escuelaWeb]
});