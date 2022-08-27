class LearningPath {
    constructor({
        pathName,
        courses = [],
        teachers = [],
        glosario = []
    }){
        this.pathName = pathName;
        this.courses = courses;
        this.teachers = teachers;
        this.glosario = glosario;
    }
}

const escuelaWeb = new LearningPath({
    pathName: "Escuela de desarrollo Web",

    courses: ["Curso Basico de Javascript",
    "Curso Basico de POO con Javascript",
    "Curso de Webpack",
    "Curso de manipulacion del DOM",
    "Curso profesional de React Hooks"],

    teachers: ["Freddy Vega",
    "Ricardo Celis",
    "Juan DC",
    "Estefany Aguilar"],

    glosario: ["HTML","Javascript",
    "CSS","Servidor","Backend","Frontend"]
});

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