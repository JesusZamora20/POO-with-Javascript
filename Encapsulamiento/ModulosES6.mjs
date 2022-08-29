
//----------------PlatziClase-------------------------------
export class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        VideoPlay(this.videoID);
    }

    pausar(){
        VideoPause(this.videoID);
    }
}

function VideoPlay(id) {
    const urlSecreta = `https://platzisecreto.com/${id}`;
    console.log(`se esta reproduciendo desde ${urlSecreta}`);
}

function VideoPause(id) {
    const urlSecreta = `https://platzisecreto.com/${id}`;
    console.log(`se esta Pausando desde ${urlSecreta}`);
}
//------------------------------------ COURSES --------------------------------------------- 
class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name; //El guion bajo para indicar que el nombre no debe cambiar
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombre) {
      if (nuevoNombre === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombre; 
      }
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
  });
  
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
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