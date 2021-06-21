import api from '../api/api'
import history from '../history';

export const signUp = (formValues) => {
    return async (dispatch, getState) => {

        //creating a post request using axios
        if (formValues.role.toUpperCase() === "STUDENT") {
            const response = await api.post('/student', { ...formValues });
            sessionStorage.clear();
            sessionStorage.setItem('token', response.data.token);
            
            console.log(response);
            dispatch({
                type: "SIGN_UP",
                payload: response.data.user
            })
            if (response.status == 200)
                history.push('/student/dashboard')
        }
        else {
            const response = await api.post('/teacher', { ...formValues });
            console.log(response)
            sessionStorage.clear();
            sessionStorage.setItem('token', response.data.token);
            
            dispatch({
                type: "SIGN_UP",
                payload: response.data.user
            })
            if (response.status == 200)
                history.push('/teacher/dashboard')
        }
        document.location.reload();
        
        //programmatic navigation to get user back to root route
        // history.push('/')
        
    };

}
export const logIn = (formValues) => {
    return async (dispatch, getState) => {

        //creating a post request using axios
        console.log("reaches!")
        const response = await api.post('/login', { ...formValues });
        sessionStorage.clear();
        sessionStorage.setItem('token', response.data.token);
        console.log(response)
        dispatch({
            type: "LOG_IN",
            payload: response.data
        })
        //programmatic navigation to get user back to dashboard route
        if(response.status==200)
         history.push(`/${response.data.role}/dashboard`)
        document.location.reload();
    };

}
export const logOut = () => {
    return async (dispatch, getState) => {
    console.log('reached')
        //creating a post request using axios
        const response = await api.post('/logout');
        console.log(response)
        dispatch({
            type: "LOG_OUT",
            //payload: response.data
        })
        //programmatic navigation to get user back to dashboard route
        history.push('/')
    };
}
//Student joining course
export const joinCourse = (formValues) => {
    return async (dispatch, getState) => {

        ;        //creating a post request using axios
        const response = await api.post('/student/enrollment', { ...formValues });
        console.log(response)
        dispatch({
            type: "JOIN_COURSE",
            payload: response.data
        })
        //programmatic navigation to get user back to root route
        history.push('/student/dashboard')
    };

}
//student Unerolling
export const deleteCourse = ( id) => {
    return async (dispatch) => {
        //creating a post request using axios
        console.log(id)
        await api.delete(`/student/deleteCourse/${id}`);

        dispatch({
            type: "DELETE_COURSEOFSTUDENT",
            payload: id
        })
        history.push('/student/dashboard');
        // document.location.reload();
    };

}
//retrieving all courses of student
export const fetchCourses = () => {
    return async (dispatch) => {
        //creating a post request using axios
        const response = await api.get('/student/getcourses');
        console.log(response)
        dispatch({
            type: "FETCH_COURSES",
            payload: response.data
        })
    };

}
//fetching a course of student
export const fetchCourse = (id) => {
    return async (dispatch) => {
        //creating a post request using axios
        console.log(id);
        const response = await api.get(`/student/getcourse/${id}`);
        console.log(response)
        dispatch({
            type: "FETCH_COURSE",
            payload: response.data
        })
    };

}
//teacher creating class
export const createCourse = (formValues) => {
    return async (dispatch, getState) => {

        ;        //creating a post request using axios
        const response = await api.post('/teacher/courseCreation', { ...formValues });
        console.log(response)
        dispatch({
            type: "CREATE_COURSE",
            payload: response.data
        })
        //programmatic navigation to get user back to root route
        history.push('/teacher/dashboard')
    };

}
//delete course by teacher
export const deleteCourseOwner = (id) => {
    return async (dispatch) => {
        //creating a post request using axios
        console.log(id);
        const response=await api.delete(`/teacher/deleteCourse/${id}`);
       console.log(response)
        dispatch({
            type: "DELETE_COURSE",
            payload: id
        })
        history.push('/teacher/dashboard');
         document.location.reload();
    };

}
//course by that teacher
export const fetchCoursesbyowner = () => {
    return async (dispatch) => {
        //creating a post request using axios
        const response = await api.get('/teacher/getcourses');
        console.log(response)
        dispatch({
            type: "FETCH_COURSESBYOWNER",
            payload: response.data
        })
    };

}
//edit course by owner
export const editCourse = (formValues,id) => {
    return async (dispatch) => {
        //creating a post request using axios
        //formValues=updated values
        //name and course id to be send

        //patch request will just update the required properties
        console.log(id)
        const response = await api.patch(`/teacher/update/${id}`, {...formValues});


        console.log(response)
        dispatch({
            type: "EDIT_COURSE",
            payload: response.data
        })
        history.push('/teacher/dashboard')
        document.location.reload();
    };


}
export const fetchCourseofowner = (id) => {
    return async (dispatch) => {
        //creating a post request using axios
        console.log(id)
        const response = await api.get(`/teacher/getcourse/${id}`);
        console.log(response)
        dispatch({
            type: "FETCH_COURSEOFOWNER",
            payload: response.data
        })
    };

}