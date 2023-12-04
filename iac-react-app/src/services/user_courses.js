export const fetchCourseData = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/students/get/54042024/');
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching course data', error);
    }
};