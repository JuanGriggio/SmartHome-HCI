function createHome(name) {
    /* este "this.home" apunta a la variable "home" definida en el welcomeTutorial.js (no se si esto esta correcto)*/
    /* estamos llenando la variable con el constructor del modelo de Home */
    this.home = new api.model.home(null, /* `kitchen ${index}` */ name, { 'size': '9m2' });
    // llamamos al metodo static "add"
    api.home.add(this.home)
        .then(data => {
            this.home.id = data.result.id;
        })
        .catch(error => {
            console.log(error + ": La Home ya existe");
        });
}

function createRoom(name, homeId) {
    
}

function createDevice(name, typeId, roomId) {
    
}

function updateHomeName(homeId, newName) {
    
}

function updateRoomName(roomId, newName) {
    
}

function updateDeviceName(deviceId, newName) {
    
}

function changeRoomToNewHome(roomId, newHomeId) {
    
}

function changeDeviceToNewRoom(deviceId, newRoomId) {
    
}

function deleteHome(homeId){
    
}

function deleteRoom(roomId){
    
}

function deleteDevice(deviceId){

}

function createRoutine(name, actions) {     // actions es un array

}

function updateRoutine(routineId, newName, newActions) {     // actions es un array

}

function deleteRoutine(routineId) {

}

function executeDeviceAction(deviceId, actionName) {

}

function executeRoutine(deviceId, actionName) {

}