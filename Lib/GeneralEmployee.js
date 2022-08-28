class Generalemployee{
    constructor(name, email, employeeID){
        this.name = name;
        this.email = email;
        this.employeeID = employeeID;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getEmployeeID() {
        return this.employeeID;
    }
    getRole(){
        return 'General Employee';
    }
}

module.exports = Generalemployee ; 