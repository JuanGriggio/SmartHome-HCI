function createHome(name) {

    /* PREGUNTA 1: al terminar esta funcion, ¿no se pierde la referencia a esta variable? */
    /* haciendo la prueba, parece que no... */
    var home = new api.model.home(null, name, { 'datoExtraHome': 'probando' });

    api.home.add(home)
        .then(data => {
            home.id = data.result.id;
            console.log("hola");
            console.log(JSON.stringify(home, null, 2));
            /* PREGUNTA 2: ¿ESTE RETURN A QUIEN RETORNA? */
            return JSON.stringify(home.id, null, 2);
        })
        .catch(error => {
            console.log(error + ": La Home ya existe");
        });

    // ESTE EL EL VERDADERO RETURN DE LA FUNCION
    return home;
}







// NO TE LA TOQUE JUAN ESTA FUNCION, solo la de createHome
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
    api.homeRoom.addRoomToHome(this.room.id,null,0, homeId);
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
    // DE TODAS FORMAS NO FUNCIONA ESTO
    let aux;
    
    api.room.getAll()
      .then(data => {
        this.aux = data.result;
      })
      .catch(error => {
        //   VER QUE HACER ACA
      });

    return aux;
}

function getAllRoomsAndTheirHomes() {   // must return an object (hash) in which every key is the id of the home that it belongs to

}

function getAllDevicesAndTheirRooms() { // must return an object (hash) in which every key is the id of the room that it belongs to

}
