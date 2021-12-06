const nameObj = {
    name: 'Revital',
    printName: function(){
        console.log(`my name is ${this.name}`);
    },
    printNameLate: function(func){
        setTimeout(function(){
            func();
        }, 1000);
    }
}

nameObj.printName();
const func = nameObj.printName.bind(nameObj);
nameObj.printNameLate(func);