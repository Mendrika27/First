
//here are two fractions: first-second and third-fourth
function sum (first, second, third, fourth){
    
    //if our two fractions have the same denominator...
    if ( second == fourth){
        return (first + third)/ second;
    }
    
    //else...
    if(second != fourth) {
        return ((first * fourth)+(third * second)/(second * fourth));
    }
}
