homes = []      // array with all the home's ids
rooms = {}      // object (hash) that each key is a room id and its value is the home id which it belongs to
devices = {}    // object (hash) that each key is a device id and its value is the room id which it belongs to

function retrieveData () {
    homes = getAllHomes();
    rooms = getAllRoomsAndTheirHomes();
    devices = getAllDevicesAndTheirRooms();
}