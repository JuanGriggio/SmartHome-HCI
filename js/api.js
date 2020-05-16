/* este archivo debe ejecutarse primero, por eso lo inclui primero en el HTML */
// (NO ESTOY SEGURO IGUAL, SOLO ME PARECE)

// creo la clase general
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

    /* creo que "data" en los "POST" va a ser siempre los nombres de las cosas (tipo "casa de juan") */
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

// a la clase general le añado una propiedad "home" que es una clase
api.home = class {
    static get url() {
        return `${api.baseUrl}/homes`;
    }

    static add(home) {
        return api.post(api.home.url, home);
    }

    static modify(home) {
        return api.put(`${api.home.url}/${home.id}`, home);
    }

    static delete(id) {
        return api.delete(`${api.home.url}/${id}`);
    }

    static get(id) {
        return api.get(`${api.home.url}/${id}`);
    }

    static getAll() {
        return api.get(api.home.url);
    }
}

// a la clase general le añado una propiedad "room" que es una clase
api.room = class {
    static get url() {
        return `${api.baseUrl}/rooms`;
    }

    static add(room) {
        return api.post(api.room.url, room);
    }

    static modify(room) {
        return api.put(`${api.room.url}/${room.id}`, room);
    }

    static delete(id) {
        return api.delete(`${api.room.url}/${id}`);
    }

    static get(id) {
        return api.get(`${api.room.url}/${id}`);
    }

    static getAll() {
        return api.get(api.room.url);
    }
}

api.homeRoom = class {
    static get url() {
        return `${api.baseUrl}/homes`;
    }

    static addRoomToHome(roomId, homeId) {
        // tercer parametro = null ya que si miran Swagger, se ve que el body del request de POST debe ser vacio
        return api.post(`${api.homeRoom.url}/${homeId}/rooms/${roomId}`, null);
    }
}