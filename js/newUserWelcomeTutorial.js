var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        items: ['JBL Speaker', 'Nava\'s Faucet', 'Soft blinds', 'Philips HUE lights', 'Pentagono door', 'GE Vacuum 5000', 'LG Fridge 7 million'],
        firstStepCompleted: false,
        secondStepCompleted: false,
        thirdStepCompleted: false,
        currentStep: 1,
        firstButtonDisabled: false,
        secondButtonDisabled: true,
        thirdButtonDisabled: true,
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
        enterSecondStep: function() {
            this.firstStepCompleted = true;
            this.currentStep = 2;
            this.firstButtonDisabled = true;
            this.secondButtonDisabled = false;
        },
        enterThirdStep: function() {
            this.secondStepCompleted = true;
            this.currentStep = 3;
            this.secondButtonDisabled = true;
            this.thirdButtonDisabled = false;
        },
        stepsCompleted: function() {
            this.currentStep = 0;
            this.thirdStepCompleted = true;
            this.thirdButtonDisabled = true;
        },
        registerRoom: function() {
          // .....
          // enterThirdStep();
        },
        selectedDevice(selectObj) {
          deviceSelected = selectObj;
        }
    }
})