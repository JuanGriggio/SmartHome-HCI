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
        homeName: "",
        roomName: "",
        deviceName: "",
        deviceSelected: ""
    },
    methods: {
        registerRoom: function() {
          // .....
          // enterThirdStep();
        },
        selectedDevice(selectObj) {
          deviceSelected = selectObj;
        }
    }
})