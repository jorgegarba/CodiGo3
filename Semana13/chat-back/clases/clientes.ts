import {Cliente} from './cliente';

export class Clientes {
    private lista:Cliente [] = [];

    add(cliente:Cliente){
        this.lista.push(cliente);
    }
    getClientes(){
        return this.lista;
    }
    remove(id:string){
        this.lista = this.lista.filter(cliente=>cliente.id != id);
    }
}