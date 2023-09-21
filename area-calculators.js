const checkIsNegative = (num) => {
  if (num < 0){
    return undefined;
  }
  return true;
}

const calculateRectangleArea = (length, width) => {
  if (checkIsNegative(length) && checkIsNegative(width)){
    return length * width;
  };
}
const calculateTriangleArea = (base, height) => {
  if (checkIsNegative(base) && checkIsNegative(height)){
    return (base * height) / 2;
  }
}
const calculateCircleArea = (radius) => {
  if (checkIsNegative(radius)){
    return (Math.PI * Math.pow(radius, 2));
  }
}

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined