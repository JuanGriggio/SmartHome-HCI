
// por lo que entendi, esto "crea el objeto si todavia no habia sido creado"
api.model = api.model || {};

// estaria creando el modelo de home
api.model.home = class {
    constructor(id, name, meta) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.meta = meta;
    }
}