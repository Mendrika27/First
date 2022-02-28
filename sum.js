function sum (first, second, third, fourth){
    
    if ( second == fourth){
        return (first + third)/ second;
    }
    if(second != fourth) {
        return ((first * fourth)+(third * second)/(second * fourth));
    }

}
console.log(sum(1, 2, 3, 2));