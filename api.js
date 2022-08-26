 const Api = (() => {
    const Url = 'http://localhost:4232/courseList';
    const availableCoursesPath = 'courseList';
  
    const courses = () =>
      fetch([baseUrl, availableCoursesPath].join('/')).then((response) => response.json());
  
    const deleteCourse = (id) =>
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
        courses,
        deleteCourse,
        addCourses
    };
  })();


f