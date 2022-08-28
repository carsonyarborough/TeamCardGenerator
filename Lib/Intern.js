
const Generalemployee = require('../Lib/GeneralEmployee')

class Intern extends Generalemployee {
constructor(name, email, employeeID, school){
    super(name,email,employeeID)
    this.school = school ; 
}
getOffice(){
    return this.school ;
}
getRole(){
    return 'Intern';
}
}