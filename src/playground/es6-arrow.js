// const getFirstName = (fullName) => {
// 	return fullName.split(" ")[0];
// };

// const getFirstNameShort = (fullName) => fullName.split(" ")[0];
// console.log(getFirstName("Mike Smith"));
// console.log(getFirstNameShort("Mike Smith"));
//

const multiplier = {
  base: [2, 4, 6],
	multiplyBy: 2,
  multiply() {
	return this.base.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
