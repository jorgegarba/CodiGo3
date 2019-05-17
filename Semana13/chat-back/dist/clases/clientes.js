"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clientes {
    constructor() {
        this.lista = [];
    }
    add(cliente) {
        this.lista.push(cliente);
    }
    getClientes() {
        return this.lista;
    }
    remove(id) {
        this.lista = this.lista.filter(cliente => cliente.id != id);
    }
    update(objCliente) {
        this.lista.forEach((cliente) => {
            if (cliente.id === objCliente.id) {
                cliente.nombre = objCliente.nombre;
            }
        });
    }
}
exports.Clientes = Clientes;
