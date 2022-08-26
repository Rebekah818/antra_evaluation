

// ------ View ------


const showContent = (() => {
    const appContent = {
        courseContainer: '#courseList',
        conent: '.content',
    }
})

const render = (ele, tmp) => {
    ele.innerHTML = tmp;
};

const makeTemplete = (arr) => {
    let tmp = '';
    arr.forEach(() => {
        tmp += `
            <li>
            <span>${course.courseId}</span>
            </li>
            <li>
            <span>${course.CourseName}</span>
            </li> 
            <li>
            <span>${course.credit}</span>
            </li>
            `;
    });
    return makeTemplete;
};
// return 
//     appContent,
//     render,
//     createTmp,


makeTemplete();

// ------- Model --------
const Model = ((api, view) => {
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
        get courses() {
            return this.#courseList;
        }
        set courses(availableCourses) {
            this.#courses = [...availableCourses];

            const availableCoursesContainer = document.querySelector
                (view.appContent.availableCoursesContainer);
            const tmp = view.createTmp(this.#courses);
            view.render(availableCoursesContainer, tmp);

        }
    }
    const { availableCourses } = api;
    return {
        availableCourses,
        State,
        Courses,
    };
})(api, view);





// ------- Controller --------

const Controller = ((model, View) => {
    const state = new model.State();

    const deleteCourse = () =>{
        const courseContainer = document.querySelector(view.appContent.courseContainer);

    }
})