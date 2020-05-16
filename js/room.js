/* este archivo debe ejecutarse segundo, por eso lo inclui segundo en el HTML */
// (NO ESTOY SEGURO IGUAL, SOLO ME PARECE)

// esto no se bien que hace
api.model = api.model || {};

// estaria creando el modelo de home
api.model.room = class {
    constructor(id, name, meta) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.meta = meta;
    }
}