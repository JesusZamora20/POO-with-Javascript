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