const Generalemployee = require('../Lib/GeneralEmployee')

class Engineer extends Generalemployee {
constructor(name, email, employeeID, username){
    super(name,email,employeeID)
    this.username = username ; 
}
getOffice(){
    return this.username ;
}
getRole(){
    return 'Engineer';
}
}