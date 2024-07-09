// debounce function

function debounce(func, delay) {
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
                func.apply(context, args)
        }, delay)
    }
}

const getData = function(query){
    console.log(query);
}

const delayGetData = debounce(getData, 1000);

console.log(delayGetData("a"));
console.log(delayGetData("ab"));
console.log(delayGetData("abc"));
