// // /co 3 cach khai bao 1 bien
// var index;
// let index2=32;
// const index3=20;
// var string = "sasanfjnkjfnjldnslkfnlkdsnflkdslkflk";
// var object = {
//   head: "value",
//   footer: "value2"
// };
// // cach goi
// object.head;
// console.log(index2+index3);
// var a=3, b=3, c=5;
// var d='5';
// // var x=a*b;
// var x=1, y=2;
// x*=y;
// console.log(x);
// === la so sanh neu cung kieu thi true , khac kieu thi se la false
//== la so sanh neu khac kieu se cho no cung ve 1 kieu
// console.log(c===d);
// d={
//   key: "value";
// }
// d="js";
// //thi no se chon cai ket qua cuoi cung
// console.log(d);
  

// khai bao function
// cach1:
// function plus(number1, number2){
//   console.log(number1+number2)
// }
// cach2:
// var plus2=function(number1, number2){
//   console.log(number1+number2)
// }

// plus(a,b);//loi goi ham
//
// function plus(number1, number2){
//   return number1+number2;
// }
// var abc=plus(a,b);
// console.log('gia tri cua abc la: ' +abc);



//khai bao let ?
// if(true){
//   let x=4; //voi vai tro let la bien cuc bo
//   // var x=4;// voi vai tro la bien toan cuc
// }
// console.log(x);//hay thu chay de xem su khac biet

// var obj={
//   dau: "tron";
//   chan: "dai";
//   tat:function(){
//     var xyz={
//       key:"value";
//       key2:"value2";
//     }
//     // co 2 cach viet
//     console.log(xyz['key']);//cach 1
//     console.log(xyz.key);// cach 2
//   }
// }


// /// ARRAY
// var array1=['a','b','c'];
// // console.log(array1[2]);
// // abc= array1.shift();//xoa phan tu dau tien
// // console.log(array1);
// // console.log(abc);
// array1.unshift("1");//them phan tu dau tien vao mang
// console.log(array1);

// var person={
//     firstName: "Nguyen",
//     lastName:"Tung",
//     age: 19
// };
// person.fullName="Nguyen Thanh Tung"// them thuoc tinh fullName vao lop person
// delete person.age//xoa bo bot thuoc tinh age
// console.log(person);

// console.log(1+"1");//se ra ket qua la 1 string "11"
// var d=new Date();
// console.log(d);

var x=1000;
switch(x){
    case 1000: 
     console.log("dung");
     break;
    case 1500:
     console.log("sai");
     break;
}

