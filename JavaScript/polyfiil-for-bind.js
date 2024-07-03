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

Function.prototype.myBind = function(obj, ...args){

    let fucn = this; //in this case it will refer to printFullName as it is calling bind

    return function(...args2){
        fucn.apply(obj, [...args, ...args2 ]);
    }
}

let fullName2 =  printFullName.myBind(person1);

console.log(fullName2("myBind"))
