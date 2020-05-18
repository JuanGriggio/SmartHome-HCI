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
        homeName: "",
        roomName: "",
        deviceName: "",
        deviceSelected: "",
    },
    methods: {
        finishSteps: function() {

            /* aumentamos al paso 4, para mostrar que los 3 pasos ya estan completados */
            this.currentStep ++;

            var home = createHome(this.homeName);
            console.log("createHome me devolvio " + JSON.stringify(home, null, 2));

            },
        selectedDevice(selectObj) {
          deviceSelected = selectObj;
        }
    }
})