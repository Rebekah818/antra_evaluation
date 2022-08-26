
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



// ------- Model --------
const Model = ((api) => {
    class courseList {
        constructor(title) {
            this.courseId = 1;
            this.CourseName = name;
            this.required = true;
            this.credit = Number;
        }
    }

    class State {
        courseList = [];
        get courseList() {
            return this.courseList;
        }
        set courseList(availableCourses) {
            this.courseList = [...availableCourses];

            const availableCoursesContainer = document.querySelector
                (view.appContent.availableCoursesContainer);
            const tmp = view.createTmp(this.courses);
            view.render(availableCoursesContainer, tmp);

        }
    }
    const { availableCourses } = api;
    return {
        availableCourses,
        State,
        courseList,
    };
})(api);





// ------- Controller --------

const Controller = ((model)  => {
    const state = new model.State();

    const deleteCourse = () =>{
        const courseContainer = document.querySelector(view.appContent.courseContainer);

    }
})