import config from 'config';


function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    return fetch(`${config.apiUrl}/users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}


function register(email, firstname, lastname, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstname, lastname, password })
    };

    return fetch(`${config.apiUrl}/users/signup`, requestOptions)
        .then(handleResponse)
}

function requestRecovery(email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    };


    return fetch(`${config.apiUrl}/users/request-recovery`, requestOptions)
        .then(handleResponse)
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 404 || response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            console.log(data)
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const userService = {
    login,
    logout,
    register,
    requestRecovery,
};
