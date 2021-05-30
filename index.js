let rect = {
    primeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
}

function solverect(l,b)
{
    console.log(" Solving for rectange for Length "+l+ " and breath "+ b);
    if ( l<=0 || b<=0) {
        console.log (" The dimention value should be positve to calculate Area and Paremeter");4

    }
    else {
        console.log (" The area of rectangle is "+rect.area(l,b))
        console.log ( " The perimeter of reactangle is " + rect.primeter(l,b))

      }

    
}

solverect(4,5);
solverect(-4,3);

