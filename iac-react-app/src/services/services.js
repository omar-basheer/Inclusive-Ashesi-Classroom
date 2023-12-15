
/**
 * Handles the login functionality.
 * 
 * @param {Event} e - The event object.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @param {Function} login - The login function.
 * @param {Function} navigate - The navigate function.
 * @returns {void}
 */
export const handleLogin = async (e, email, password, login, navigate, setShowAlert) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/api/students/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
            console.log("login request error: login failed")
            setShowAlert(true)
            return
        }
        const data = await response.json()
        const { token, student_id } = data

        if (token) {
            login(token, student_id);
            alert("You are successfully logged in");
            navigate('/Dashboard');
        }
        else {
            navigate('/Login');
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
    }
}

/**
 * Handles the sign up process for a student.
 * 
 * @param {Event} e - The event object.
 * @param {string} student_id - The student ID.
 * @param {string} firstName - The first name of the student.
 * @param {string} lastName - The last name of the student.
 * @param {string} email - The email address of the student.
 * @param {string} password - The password for the student's account.
 * @param {string} confirmPassword - The confirmed password for the student's account.
 * @param {function} navigate - The function to navigate to a different screen.
 * @returns {Promise<void>} - A promise that resolves when the sign up process is complete.
 */
export const handleSignUp = async (e, student_id, firstName, lastName, email, password, confirmPassword, navigate, setShowAlert) => {
    e.preventDefault();

    console.log('making api call...')
    try {
        const response = await fetch('http://localhost:8080/api/students/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                student_id: student_id,
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            }),
        });

        const data = await response.json();
        

        if (response.ok) {
            if (response.status === 201) {
                setShowAlert(true)
                navigate('/Screening');
            }
            else {
                console.error('Unexpected status code:', response.status);
            }

        } else { 
            setShowAlert(true) 
            // Display an error message or handle the failure
            console.error('Registration failed:', data.message);
        }
    } catch (error) {
        console.error('Error during registration:', error.message);
    }
}

/**
 * Fetches student data from the server.
 * @param {string} student_id - The ID of the student.
 * @param {string} token - The authentication token.
 * @param {function} setInfo - The function to set the student data.
 * @returns {void}
 */
export const fetchStudentData = async (student_id, token, info, setInfo) => {
    try {
        const response = await fetch(`http://localhost:8080/api/students/get/${student_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        if (!response.ok) {
            console.log("student fetch error: failed to fetch student data")
            return
        }
        const data = await response.json();
        setInfo(data);
        localStorage.setItem('info', JSON.stringify(info));
        // console.log(info)
    } catch (error) {
        console.error('Error fetching student data:', error);
    }
};

/**
 * Fetches student course data from the server.
 * @param {string} student_id - The ID of the student.
 * @param {string} token - The authentication token.
 * @param {function} setCourses - The function to set the fetched courses data.
 * @returns {Promise<void>} - A promise that resolves when the data is fetched and set successfully.
 */
export const fetchStudentCourseData = async (student_id, token, setCourses) => {
    try {
        const response = await fetch(`http://localhost:8080/api/students/courses/${student_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        const data = await response.json();
        setCourses(data);
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
};

/**
 * Fetches course data from the server.
 * 
 * @param {string} course_id - The ID of the course to fetch.
 * @param {string} token - The authentication token.
 * @param {function} setCourseTitle - The function to set the course title.
 * @param {function} setHomeContent - The function to set the home content.
 * @returns {Promise<void>} - A promise that resolves when the course data is fetched and the state is updated.
 */
export const fetchCourseData = async (course_id, token, setCourseTitle, setHomeContent) => {
    try {
        const response = await fetch(`http://localhost:8080/api/courses/${course_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        });
        const data = await response.json();
        setCourseTitle(`[${data.course_id}] - ${data.course_name}`);
        setHomeContent(data.course_description);
    } catch (error) {
        console.error('Error fetching course data:', error);
    }

}

/**
 * Fetches the modules for a given course.
 * @param {string} course_id - The ID of the course.
 * @param {string} token - The authentication token.
 * @param {function} setModules - The function to set the fetched modules.
 * @returns {Promise<void>} - A promise that resolves when the modules are fetched and set.
 */
export const fetchCourseModules = async (course_id, token, setModules) => {
    try {
        const response = await fetch(`http://localhost:8080/api/courses/${course_id}/modules/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        });
        const data = await response.json();
        // console.log(data)
        setModules(data);
    } catch (error) {
        console.error('Error fetching modules data', error);
    }
};

/**
 * Fetches a module file from the server.
 * 
 * @param {string} file_id - The ID of the file to fetch.
 * @param {string} token - The authentication token.
 * @param {function} setFileUrl - The function to set the file URL.
 * @param {function} setFileName - The function to set the file name.
 * @param {function} setFileType - The function to set the file type.
 * @returns {Promise<void>} - A promise that resolves when the file is fetched successfully.
 */
export const fetchModuleFile = async (file_id, token, setFileUrl, setFileName, setFileType) => {
    try {
        const response = await fetch(`http://localhost:8080/api/files/${file_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        });
        const data = await response.json();
        console.log("file id")
        setFileUrl(data.file)
        setFileName(data.name)
        setFileType(data.file_type)
    } catch (error) {
        console.error('Error fetching file', error);
    }
};


/**
 * Fetches module HTML content from the server. This is used for the lesson content.
 * 
 * @param {string} lesson_id - The ID of the lesson.
 * @param {string} token - The authentication token.
 * @param {function} setLessonTitle - The function to set the lesson title.
 * @param {function} setLessonContent - The function to set the lesson content.
 * @returns {Promise<void>} - A promise that resolves when the module HTML content is fetched and the lesson title and content are set.
 */
export const fetchModuleLesson = async (lesson_id, token, setLessonTitle, setLessonContent) => {
    try {
        const response = await fetch(`http://localhost:8080/api/lessons/${lesson_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        });
        const data = await response.json();
        setLessonTitle(data.lesson_name);
        setLessonContent(data.lesson_content);
    } catch (error) {
        console.error('Error fetching lesson data:', error);
    }

}