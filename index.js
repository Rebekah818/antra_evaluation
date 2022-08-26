// ------ View ------

const showContent (() => {
    const appContent = {
        courseContainer: '#course-container',
        conent: '.content',
    }
})




const render = (ele, tmp) => {
    ele.innerHTML = tmp;
};

const makeTemplete = (arr) => {
    let tmp = '';
    arr.array.forEach((course) => {
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
    return tmp;
};
return {
    appContent,
    render,
    createTmp,
};

makeTemplete();

// ------- Model --------
const Model = ((api, view) => {
    class Courses {
        constructor(title) {
            this.courseId = 1;
            this.CourseName = name;
            this.required = true;
            this.credit = Number;
        }
    }

    class State {
        #courses = [];
        get courses() {
            return this.#courses;
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