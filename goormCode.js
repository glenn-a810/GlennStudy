let a = 1
a = 3
console.log(a) // 2
let cars = [car,car2,car3,car4]
const test = 1 // string number func object
const test2 = 'hello javascript'
const test3 = function(){
	console.log('test3');
}
/* 좌롸네 */
let car = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	},
	option : {
		airbag : true,
		break : "brembo",
		person : 5
	}
}


let car2 = {
	name : "pony",
	ph : "130ph"
}

let car3 = {
	name : "bmw",
	ph : "530ph"
}

let car4 = {
	name : "benz",
	ph : "430ph"
}


for(i = 0; i<cars.length; i++){	
	let name = cars[i].name
	let hp = parseInt(cars[i].ph.replace("ph",""))
	let isPowerful = hp > 500 ? "o" : "x"
	let stringFormat = `${name} 자동차 / hp : ${hp}/ powerful : ${isPowerful}`
	
	console.log(stringFormat)
}


//work 1 목표 : 자동차 배열에서 bmw 의 마력을 출력하세요 결과는 bmw 만 출력되어야합니다; 배열을 순회해서 bmw 찾은다음
// for(i=0;i<cars.length;i++){
// 	if(cars[i].name == "sonata"){
// 		console.log(cars[i].name,"자동차")
// 	}
// }


// function findCarInArray(p1, p2) { //parameter 1 : 배열 parameter 2 : 내가 찾는 차량의 이름
// 	let arrP1 = p1
// 	let nameP2 = p2
	
// 	for(i=0;i<arrP1.length;i++){
// 		if(arrP1[i].name == nameP2){
// 			console.log("!");
// 		} 
// 	}
// }

// findCarInArray(cars,"bmw")


// while(x < cars.length){
// 	console.log(cars[x].name);
// 	x++
// }

//in java
// String cars = new Array[3];
// console.log(car.name)
// car.start()
// console.log(car.name, "는")
// console.log(car.option.person, "명이 탈수 있습니다.")
// car.stop()


var name = 1
var age = 20
var address = '갱기도'
var tel = '010-1234-5678'
var grade = 20

function test() {
	console.log('test')
}
// 조건을 추가해줘
// 주소랑, 전화번호랑, 점수값을 넣어주고
// 기능 주소변경기능, 점수추가 기능, 점수추가 기능에 5점 넣어줘

function setAddress(addr) {
	address = addr
}

var name = 213;

function addGrade(point) {
	let value = '1234'
	grade = grade + point
	let doCheck = (num) => {
		// check
	}
	doCheck(value)
}

test()
addGrade(5)

