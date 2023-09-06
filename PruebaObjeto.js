class Perro{
    constructor(raza,color){
        this.raza = raza;
        this.color = color;
    }

correr(){
    console.log(`el perro ${this.raza} está corriendo`);
}

comer(){
    console.log(`el perro ${this.color} está comiendo`);
}
}

module.exports = Perro;