
export const handleLogin = async (e, email, password, login, navigate) => {
    e.preventDefault();

    // const isValidEmail = (email) => {
    //     // Email regex pattern: firstname.lastname@ashesi.edu.gh
    //     const emailRegex = /^[a-zA-Z]+[.][a-zA-Z]+@ashesi\.edu\.gh$/;
    //     return emailRegex.test(email);
    // }

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
            alert("Incorrect login info")
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
    }catch (error) {
        console.error('An error occurred during login:', error);
    }
}

export const handleSignUp = async (e, student_id, firstName, lastName, email, password, confirmPassword, navigate) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        // Display an error message or handle the mismatch
        console.error('Passwords do not match!');
        return;
    }

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
        console.log(data.data)

        if (response.ok) {
            if (response.status === 201){
                navigate('/Screening');
            }
            else{
                console.error('Unexpected status code:', response.status);
            }
            
        } else {
            // Display an error message or handle the failure
            console.error('Registration failed:', data.message);
        }
    } catch (error) {
        console.error('Error during registration:', error.message);
    }
}


