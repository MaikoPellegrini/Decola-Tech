const pessoa = {
    firstName: "Maiko",
    lastName: "Pellegrini",
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

console.log (pessoa.getFullName())