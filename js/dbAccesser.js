function createHome(name) {

    /* este "this.home" apunta a la variable "home" definida en el welcomeTutorial.js (no se si esto esta correcto)*/
    /* estamos llenando la variable con el constructor del modelo de Home */
    //ESTO NO ANDA SI NO PONGO NADA EN EL META
    this.home = new api.model.home(null, name, { 'datoExtraHome': 'probando' });

    // llamamos al metodo static "add"
    api.home.add(this.home)
        .then(data => {
            this.home.id = data.result.id;
            // SOY JUAN. MI IDEA ERA QUE ACA ESTA FUNCION RETORNE this.home.id PARA QUE DESDE newUserWelcomeTutorial.js
            // SE PUEDA RESCATAR EL id Y SE LO PUEDA MANDAR A createRoom, PERO POR ALGUNA RAZON RETORNA undefined
        })
        .catch(error => {
            console.log(error + ": La Home ya existe");
        });

    
}

function createRoom(name, homeId) {
    //ESTO NO ANDA SI NO PONGO NADA EN EL META
    this.room = new api.model.room(null, name, { 'datoExtraRoom': 'probando'});

    api.room.add(this.room)
        .then(data => {
            this.room.id = data.result.id;
        })
        .catch(error => {
            console.log(error + ": La Room ya existe");
        });


    // segunda parte. No funciona porque this.room.id y homeId son undefined, hay que ver de donde sacarlos!
    api.homeRoom.addRoomToHome(this.room.id, homeId);
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

function getAllHomes() {    // must return an array with all home ids

}

function getAllRoomsAndTheirHomes() {   // must return an object (hash) in which every key is the id of the home that it belongs to

}

function getAllDevicesAndTheirRooms() { // must return an object (hash) in which every key is the id of the room that it belongs to

}
