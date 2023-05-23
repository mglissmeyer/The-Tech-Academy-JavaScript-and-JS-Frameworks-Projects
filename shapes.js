class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getArea() {
      return "This shape has an undefined area.";
    }
  }
  
  class Rectangle extends Shape {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return "The area of the rectangle is: " + (this.width * this.height);
    }
  }
  
  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return "The area of the triangle is: " + (0.5 * this.base * this.height);
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    getArea() {
      return "The area of the circle is: " + (Math.PI * this.radius * this.radius);
    }
  }
  
  const rectangle = new Rectangle("Blue", 5, 8);
  console.log(rectangle.getArea());  // Output: The area of the rectangle is: 40
  
  const triangle = new Triangle("Red", 6, 10);
  console.log(triangle.getArea());   // Output: The area of the triangle is: 30
  
  const circle = new Circle("Green", 3);
  console.log(circle.getArea());     // Output: The area of the circle is: 28.274333882308138
  