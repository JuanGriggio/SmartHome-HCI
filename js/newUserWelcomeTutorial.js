var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        items: ['JBL Speaker', 'Nava\'s Faucet', 'Soft blinds', 'Philips HUE lights', 'Pentagono door', 'GE Vacuum 5000', 'LG Fridge 7 million'],
        currentStep: 1,
        dialog: false,
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 30 || 'Max 30 characters'
        },
        home: {},   // la home que se va a usar de Modelo por la api (primero crea una Home, y despues la manda al servidor)
        homeName: "",
        roomName: "",
        deviceName: "",
        deviceSelected: "",
    },
    methods: {
        registerHome: function() {
            /* esta es la parte que teniamos antes */
            this.currentStep ++;
            /* llamo al metodo definido en dbAccesser.js */
            createHome("Casa de Juancito");  // HARDCODEADO
        },
        selectedDevice(selectObj) {
          deviceSelected = selectObj;
        }
    }
})