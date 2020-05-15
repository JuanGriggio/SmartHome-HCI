var api = class {
    static get baseUrl() {
      return 'http://127.0.0.1:8080/api';
    }
  
    static get timeout() {
      return 60 * 1000;
    }
  
    static fetch(url, init) {
      return new Promise((resolve, reject) => {
        let controller = new AbortController();
        let signal = controller.signal;
  
        setTimeout(() => controller.abort(), api.timeout);
  
        init.signal = signal
  
        fetch(url, init)
        .then(response => {
          if (!response.ok)
            reject(new Error(response.statusText));
  
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
      });
    }
  
    static get(url) {
      return api.fetch(url, {})
    }
  
    static post(url, data) {
      return api.fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
      });
    }
  
    static put(url, data) {
      return api.fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
      });
    }
  
    static delete(url) {
      return api.fetch(url, {
        method: 'DELETE',
      });
    }
  }


function createHome(name) {
    
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