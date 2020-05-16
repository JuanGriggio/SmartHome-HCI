var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        items: ['JBL Speaker', 'Nava\'s Faucet', 'Soft blinds', 'Philips HUE lights', 'Pentagono door', 'GE Vacuum 5000', 'LG Fridge 7 million'],
        currentStep: 1,
        dialog: false,
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 25 || 'Max 25 characters'
        },
        home: {},   // la home que se va a usar de Modelo por la api (primero crea una Home, y despues la manda al servidor)
        room: {},   // idem
        device: {}, // idem
        homeName: "",
        roomName: "",
        deviceName: "",
        deviceSelected: "",
    },
    methods: {
        finishSteps: function() {
            /* aumentamos al paso 4, para mostrar que los 3 pasos ya estan completados */
            this.currentStep ++;
            /* llamo al metodo definido en dbAccesser.js */
            let homeId = createHome(this.homeName);
            createRoom(this.roomName, homeId);
            // createDevice(this.deviceName);
        },
        selectedDevice(selectObj) {
          deviceSelected = selectObj;
        }
    }
})