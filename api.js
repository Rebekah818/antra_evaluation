export const Api = (() => {
    const baseUrl = 'http://localhost:4232/courseList';
    const availableCoursesPath = 'availablecourses';
  
    const get courses = () =>
      fetch([baseUrl, availableCoursesPath].join('/')).then((response) => response.json());
  
    const deletecourse = (id) =>
      fetch([baseUrl, availableCoursesPath, id].join('/'), {
        method: 'DELETE',
      });
  
    const addCourses = (id) =>
      fetch([baseUrl, availableCoursesPath].join('/'), {
        method: 'POST',
        body: JSON.stringify(courses),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
  
    return {
      availableCourses,
      State,
      courses
    };
  })();