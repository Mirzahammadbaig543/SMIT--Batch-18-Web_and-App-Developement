var fruits = ['banana', 'mango' , 'apple'  ];

console.log('before pop', fruits);


fruits.pop(); //pop remove krta hai last me se array se //
console.log('after pop' , fruits );



fruits.push('pear ' , 'kiwi ' , 'orange') //push add krta hai array ke andr last mai //
console.log('after push 3 fruits', fruits)


var fruits = ['banana', 'mango' , 'apple'  ];
console.log('123' , fruits);

fruits.shift(); // start mai se delete krdeta hai array se // 
console.log('after shift' , fruits);

fruits.unshift('strawberry' , 'avovado'); // start me values add karwadega //
console.log( 'after unshift' , fruits);

// var fruits = ['banana', 'mango' , 'apple'  ];
fruits.splice(1 , 1 , 'lychee' , 'pineapple')
console.log('after splice',  fruits);
