
const api = (() => {
    const Url = 'http://localhost:4232/courseList';
    const courseList = 'courseList';

    fetch('http://localhost:4232/courseList', {
        method: 'GET',
        body: new Data(),
    })
  .then((response) => response.json())
  .then((data) => console.log(data));
})

// ------ View ------

function getCourse () {
    let data;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText)
        console.log(JSON.parse(this.responseText)); 
    
      }
    };
    xhttp.open("GET", "http://localhost:4232/courseList", true);
    xhttp.send();
  }
  getCourse();

  onload = function () {
    const courseId = document.getElementById('courseId'.value);
    if(this.courseId == 200){
        let courseList;
        try {
            courseList =JSON.parse(this.responseText);
        } catch(e) {
            console.log(e);
        }
    }
  }


// ------- Model --------
const Model = ((api) => {
    class Course {
        constructor(name, id, credit) {
            this.id = id;
            this.courseName = name;
            this.required = true;
            this.credit = Number;
        }
        get id (){
            return this.id;
        }
    }

let availableCourses = new Course();

function course (name, id, credit, required) {
    Course.prototype.constructor.call(this, name, id, credit, required)
}
course()

//     class State {
//         courseList = [];
//         get courseList() {
//             return this.courseList;
//         }
//         set courseList(availableCourses) {
//             this.courseList = [...availableCourses];

//             const availableCoursesContainer = document.querySelector
//                 (view.appContent.availableCoursesContainer);
//             const tmp = view.createTmp(this.courses);
//             view.render(availableCoursesContainer, tmp);

//         }
//     }
   
})(api);





// ------- Controller --------

const Controller = ((model)  => {
    const state = new model.State();

    const deleteCourse = () =>{
        const courseContainer = document.querySelector(view.appContent.courseContainer);

    }
})