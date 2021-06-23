export default class Credentials {
    
    constructor() {
        if (localStorage.getItem('creds') === null) {
            this.credentials = {};
        } else {
            this.credentials = JSON.parse(localStorage.getItem('creds'));
        }
    }

    registerCredentials(username, password) {
        if(!this.checkNull(username, password)){
            alert('Username and Password required');
        }
        else if (this.credentials.hasOwnProperty(username)) {
            alert("Username already exists");
        } else {
            this.credentials[username] = password;
            localStorage.setItem('creds', JSON.stringify(this.credentials));
            alert("Registration Successful");
        }
    }

    loginUser(username, password) {
        if(!this.checkNull(username, password)){
            alert('Username and Password required');
        }else if (this.credentials.hasOwnProperty(username)) {
            if (this.credentials[username] === password) {
                alert("Login Successful");
            } else {
                alert("Incorrect username/password");
            }
        } else {
            return ("Username does not exist");
        }
    }

    checkNull(username, password){
        if(username === '' || username === null || password === '' || password === null){
            return false;
        }

        return true
    }
}
