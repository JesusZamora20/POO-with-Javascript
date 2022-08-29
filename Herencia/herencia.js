
//----------------PlatziClase-------------------------------
class PlatziClass{
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
      isFree = 'false',
      lang = 'spanish'
    }) {
      this._name = name; //El guion bajo para indicar que el nombre no debe cambiar
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
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
    isFree: true
  });
  
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english"
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

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`lo sentimos ${this.name}, no puedes tomar cursos en ingles`);
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`lo sentimos ${this.name}, no puedes tomar cursos en ingles`);
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

const juan = new FreeStudent({
    name:"JuanDC",
    username:"juandc",
    email:"juanito@juanito.com",
    twitter:"fjuandc",
    learningPaths: [escuelaWeb]
});

const jesus = new BasicStudent({
    name:"Jesus Bermudez",
    username:"Jesusbz",
    email:"jbermudezamora@juanito.com",
    twitter:"jdbz",
    learningPaths: [escuelaWeb]
});