class Vector {
    x;
    y;
    z;
    
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    sumVectors(x, y, z){
        this.x += x;
        this.y += y;
        this.z += z;
        return this;
    }
    minVectors(x, y, z){
        this.x -= x;
        this.y -= y;
        this.z -= z;
        return this;
    }
    lengthVectors(){
        return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) );
    }
    cosVectors(x, y, z){
        let first = (this.x * x) + (this.y * y) + (this.z * z);
        let second = Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) );
        let third = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2) );
        return first / (second * third);
    }
    scalVectors(x, y, z){
        return (this.x * x) + (this.y * y) + (this.z * z);
    }
}



// const newVector = new Vector(15, 20, 25);
// console.log(newVector);
// console.log(newVector.sumVectors(32, 10, 40));
// console.log(newVector.minVectors(32, 10, 40));
// console.log(newVector.lengthVectors());
const vec2 = new Vector(3, -4, 0);
// console.log(vec2.cosVectors(4, -4, -2));
console.log(vec2.scalVectors(15, 20, 30));
