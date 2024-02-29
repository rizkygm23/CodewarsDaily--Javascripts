var min = function(list){
    let minimum = list[0];
    for ( let i = 0; i < list.length; i++) {
        if (minimum >= list[i]) {
            minimum = list[i]


    }
}
    
    return minimum;
}
console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(min([42, 54, 65, 87, 0]))

var max = function(list){
    let maksumin = list[0];
    for ( let i = 0; i < list.length; i++) {
        if (maksumin < list[i]) {
            maksumin = list[i]
        }

    }
    
    return maksumin;
}

console.log(max([4,6,2,1,9,63,-134,566]))
