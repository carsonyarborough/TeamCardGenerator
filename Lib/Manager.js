const Generalemployee = require('../Lib/GeneralEmployee')

class Manager extends Generalemployee {
constructor(name, email, employeeID, office){
    super(name,email,employeeID)
    this.office = office ; 
}
getOffice(){
    return this.office ;
}
getRole(){
    return 'Manager';
}
}
module.exports = Manager ; 