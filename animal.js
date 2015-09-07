/**
 * JavaScript Document
 * Created by levinojunior on 07/09/15.
 * 5 ADS FATEC - MANHA - JOSE LEVINO DA COSTA JUNIOR
 * Problema Manada
 */

function Animal(nome) {
    this.nome || 'animal';
};


var AnimalPrototipo = {
    fazerBarulho: function () {
        throw 'Deve ser implementado';
    }
};


function Cao(nome, raca) {
    Animal.call(this, nome)
    this.raca = raca || 'BullTerrier';
};

var CaoPrototipo = new Animal();

CaoPrototipo.fazerBarulho = function () {
    return 'Au Au';
};



function Gato(nome, raca) {
    Animal.call(this, nome)
    this.raca = raca || 'Desconhecida';
};

var GatoPrototipo = new Animal();

GatoPrototipo.fazerBarulho = function () {
    return 'Mia';
};

function Manada() {
    this.lista = [];
}

var ManadaPrototipo = {
    addAnimal: function (animal) {
        this.lista.push(animal);
    }
};

Manada.prototype = ManadaPrototipo;

CaoPrototipo.prototype = Animal.prototype;
Cao.prototype = CaoPrototipo;

GatoPrototipo.prototype = Animal.prototype;
Gato.prototype = GatoPrototipo;

var cao = new Cao("dog");
var gato = new Gato('cat')


