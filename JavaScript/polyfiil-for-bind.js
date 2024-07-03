let person1 = {
    firstName:"John",
    lastName:"Doe"
}

let printFullName = function(city){
    console.log(this.firstName + " " + this.lastName + ", " + city );
}

printFullName.call(person1, "Pune");

printFullName.apply(person1, ["Mumbai"]);

let fullName =  printFullName.bind(person1);

console.log(fullName);
fullName("Bhandara");

// Polyfill for bind 

Function.prototype.myBind = function(...args){

    let obj = this; //in this case it will refer to printFullName as it is calling bind
    let params = args.slice(1);

    return function(...args2){
        obj.apply(args[0], [...params, ...args2 ]);
    }
}

let fullName2 =  printFullName.myBind(person1);

console.log(fullName2("myBind"))
