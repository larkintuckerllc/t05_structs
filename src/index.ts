interface User {
  email: string;
  username: string;
  active: boolean;
  signInCount: number;
}

const buildUser = (email: string, username: string): User => ({
  email,
  username,
  active: true,
  signInCount: 1,
});

type Color = [number, number, number];

class Rectangle {
  static square(size: number): Rectangle {
    return new Rectangle(size, size);
  }
  width: number;

  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  canHold(other: Rectangle): boolean {
    return this .width > other.width && this.height > other.height;
  }
}

const user: User = {
  email: 'someone@example.com',
  username: 'someusername123',
  active: true,
  signInCount: 1,
};

user.email = 'someone_else@example.com';
console.log(`The value of user.email is: ${user.username}`); // someusername123

const user1 = buildUser('someone@example.com', 'someusername123');
console.log(`The value of user1.email is: ${user1.username}`); // someusername123

const user2: User = {...user1, email: 'another@example.com', username: 'anotherusername567'};
console.log(`The value of user2.email is: ${user2.username}`); // anotherusername567

const color: Color = [0, 0, 0];
console.log(`The value of the first color is: ${color[0]}`);

const rect = new Rectangle(10, 10);
const area = rect.area();
console.log(`The value of area is: ${area}`); // 100
const rect1 = new Rectangle(7, 7);
const rect1Fits = rect.canHold(rect1);
console.log(`The value of rect1Fits is: ${rect1Fits}`); // true

const square = Rectangle.square(8);
const squareArea = square.area();
console.log(`The value of squareArea is: ${squareArea}`); // 64
