//Squaere Hollow Pattern
// for ( let i = 0 ; i < 6 ; i++ ){
//     let row = ''
//     for ( let g = 0 ; g < 5 ; g++ ){
//         if( i===0 || i===5 || g===0 || g===4 ){
//             row += '*'
//         } else {
//             row += ' '
//         }
//     }
//     console.log(row)
// }

//Number Triangular
// for (i = 0; i < 5; i++) {
//     let row = '';
//     for (let k = 4; k > i; k--) {
//         row += ' '
//     }
//     for (let j = 0; j < i; j++) [
//         row += i + ' '
//     ]
//     console.log(row)
// }

//Number Increasing Pyramid
// for (let i = 1; i < 5; i++) {
//     let row = '';
//     for (let k = 1; k <= i; k++) {
//         row += k
//     }
//     console.log(row)
// }

//Number Increasing Reverce Pyramid
// for (let i = 4; i > 0; i--) {
//     let row = ''
//     for (let k = 1; k <= i; k++) {
//         row += k
//     }
//     console.log(row)
// }

//Number Changing Pyramid
// let num = 1
// for (let i = 1; i <= 5; i++) {
//     let row = ''
//     for (let r = 1; r < i; r++) {
//         row += num++
//     }
//     console.log(row)
// }

//Squere fill pattern
// for (let i = 1; i <= 6; i++) {
//     let row = ''
//     for (let r = 1; r <= 6; r++) {
//         row += '*'
//     }
//     console.log(row)
// }

//Right Half Pyramid
// for (let i = 1; i <= 5; i++) {
//     let row = ''
//     for (let r = 0; r < i; r++) {
//         row += '*'
//     }
//     console.log(row)
// }

//Reverse Right Half Pyramid
// for (let i = 0; i <= 5; i++) {
//     let row = ''
//     for (let r = 5; r > i; r--) {
//         row += '*'
//     }
//     console.log(row);
// }

//Left Half Pyramid
// let n = 4
// for (let i = 1; i <= n; i++) {
//     let row = ''
//     for (let r = 0; r <= n - i; r++) {
//         row += ' '
//     }
//     for (let k = 1; k <= i; k++) {
//         row += '*'
//     }
//     console.log(row);
// }

//Reverse Left Half Pyramid
// let n = 5
// for (let i = 1; i <= 5; i++) {
//     let row = ''
//     for (let k = 1; k <= i; k++) {
//         row += ' '
//     }
//     for (let g = i; g <= n; g++) {
//         row += '*'
//     }
//     console.log(row)
// } 

//Zoro-One Triangle
// for ( let i = 1 ; i < 5 ; i++){
//     let row = ''
//     for ( let k = 1 ; k <= i ; k++){
//         row += (i + k) % 2 === 0 ? 1 : 0
//     }
//     console.log(row)
// }

//Palindrome triangular
// for (let i = 1; i < 5; i++) {
//     let row = ''
//     for (let k = 4; k >= 1; k--) {
//         if (k > i) {
//             row += ' '
//         } else {
//             row += k
//         }
//     }
//     for (let l = 2; l <= i; l++) {
//         row += l
//     }

//     console.log(row)
// }

//Rhombus Pattern
// for (let i = 0; i < 4; i++) {
//     let row = '';
//     for (let j = 0; j < i; j++) {
//         row += ' ';
//     }
//     for (let k = 0; k < 4; k++) {
//         row += '*';
//     }
//     console.log(row);
// }

//Diamond Pattern
// for( let i = 1 ; i < 5 ; i++ ){
//     let row = ''
//     for ( let k = 4 ; k > i ; k-- ){
//         row += ' '
//     }
//     for( let t = 1 ; t <= i ; t++ ){
//         row += '* '
//     }
//     console.log(row);
// }
// for( let i = 1 ; i <= 3 ; i++ ){
//     let row = ''
//     for( let k = 1 ; k <= 3 ; k++ ){
//         if ( k < i ){
//             row += ' '
//         } else {
//             row += ' *'
//         }
//     }
//     console.log(row)
// }

//Butterfly Star pattern
// let n = 4
// for (let i = 1; i <= n; i++) {
//     let row = ''
//     for (let f = 1; f < 5; f++) {
//         if (f > i) {
//             row += ' '
//         } else {
//             if ((i + f) % 2 === 0) {
//                 row += '*'
//             } else {
//                 row += ' '
//             }
//         }
//     }
//     for (let t = 4; t >= 1; t--) {
//         if (t > i) {
//             row += ' '
//         } else {
//             if ((t + i) % 2 === 1) {
//                 row += ' '
//             } else if (t === 4 && i === 4) {
//                 row += ' '
//             } else {
//                 row += '*'
//             }
//         }
//     }
//     console.log(row)
// }
// for (let i = 1; i < n; i++) {
//     let row = ''
//     for (let k = 4; k >= 1; k--) {
//         if (k > i) {
//             if ((i + k) % 2 === 0) {
//                 row += ' '
//             } else {
//                 row += '*'
//             }
//         } else {
//             row += ' '
//         }
//     }
//     for (let k = 1; k < 5; k++) {
//         if (k > i) {
//             if((k + i) % 2===1){
//                 row += '*'
//             } else {
//                 row += ' '
//             }
//         } else {
//             row += ' '
//         }
//     }
//     console.log(row)
// }

//K Pattern
// for (let i = 1; i < 5; i++) {
//     let row = ''
//     for (let k = 4; k >= 1; k--) {
//         if( k >= i ){
//             row += ' *'
//         } else {
//             row += ' '
//         }
//     }
//     console.log(row)
// }
// for( let i = 1 ; i < 4 ; i++ ){
//     let row = ''
//     for( k = 0 ; k < 4 ; k++ ){
//         if( k <= i ){
//             row += ' *'
//         } else {
//             row += ' '
//         }
//     }
//     console.log(row);
// }

//Triangle star pattern
// for (let i = 1 ; i <= 5 ; i++) {
//     let row = ''
//     for( let k = 5 ; k >= 1 ; k-- ){
//         if( i >= k ){
//             row += ' ' + '*'
//         } else {
//             row += ' '
//         }
//     }
//     console.log(row)
// }

//Reverce Number Triangle pattern
// for( let i=1 ; i < 5 ; i++ ){
//     let row = ''
//     for( let k = 1 ; k < 5 ; k++ ){
//         if( i <= k ){
//             row += ' ' + k
//         } else {
//             row += ' '
//         }
//     }
//     console.log(row)
// }

//Mirror image Triangle Pattern
// for (let i = 1; i < 5; i++) {
//     let row = ''
//     for (let r = 1; r < 5; r++) {
//         if (i > r) {
//             row += ' '
//         } else {
//             row += ' ' + r
//         }
//     }
//     console.log(row)
// }
// for (let i = 3; i >= 1; i--) {
//     let row = ''
//     for (let r = 1; r <= 4; r++) {
//         if( r < i ){
//             row += ' '
//         } else {
//             row += ' ' + r
//         }
//     }
//     console.log(row)
// }

//Hollow Triangle Pattern
// for (let i = 1; i <= 5; i++) {
//     let row = ''
//     for (let r = 5; r >= 1; r--) {
//         if (r > i) {
//             row += ' '
//         } else {
//             if (i === r || i === 5 || r === 1) {
//                 row += ' ' + '*'
//             } else {
//                 row += ' ' + ' '
//             }
//         }
//     }
//     console.log(row)
// }

//Hollow Reverse Triangle Pattern
// for (let i = 1; i <= 5; i++) {
//     let row = ''
//     for (let r = 1; r <= 5; r++) {
//         if( r < i ){
//             row += ' '
//         } else {
//             if( i===1 || i===r || r===5 ){
//                 row += ' *'
//             } else {
//                 row += ' ' + ' '
//             }
//         }
//     }
//     console.log(row)
// }

//Hollow Diamond Pyramid
// for (let i = 1; i < 5; i++) {
//     let row = ''
//     for (let r = 4; r >= 1; r--) {
//         if (r > i) {
//             row += ' '
//         } else {
//             if (i === r || r === 1) {
//                 row += ' ' + '*'
//             } else {
//                 row += ' ' + ' '
//             }
//         }
//     }
//     console.log(row)
// }
// for (let i = 1; i < 5; i++) {
//     let row = ''
//     for (let r = 1; r < 5; r++) {
//         if (i > r) {
//             row += ' '
//         } else {
//             if (i === r || r===4) {
//                 row += ' ' + '*'
//             } else {
//                 row += ' ' + ' '
//             }
//         }
//     }
//     console.log(row)
// }

//Hollow Hourglass Pattern
// for (let i = 1; i < 5; i++) {
//     let row = ''
//     for (let k = 1; k < 5; k++) {
//         if (k < i) {
//             row += ' '
//         } else {
//             if (i === k || i === 1 || k === 4) {
//                 row += ' ' + '*'
//             } else {
//                 row += ' ' + ' '
//             }
//         }
//     }
//     console.log(row)
// }
// for (let i = 2; i < 5; i++) {
//     let row = ''
//     for (let k = 4; k >= 1; k--) {
//         if (i < k) {
//             row += ' '
//         } else {
//             if (i === k || k === 1 || i===4) {
//                 row += ' ' + '*'
//             } else {
//                 row +=  ' ' + ' '
//             }
//         }
//     }
//     console.log(row)
// }

//Pascel's Triangle
// for (let i = 1; i < 5; i++) {
//     let row = '';
//     let value = 1;
//     for (let r = 1; r <= i; r++) {
//         row +=  value + ' ';
//         value = (value * (i - r) / r)
//     }
//     console.log(' '.repeat(5 - i) , row);
// }

//right pasceal's Triangle
// for (let i = 1; i < 5; i++) {
//     let row = ''
//     for (let k = 1; k <= i; k++) {
//         if ((i + k) % 2 === 0) {
//             row += '*'
//         } else {
//             row += ' '
//         }
//     }
//     console.log(row)
// }
// for (let i = 4; i > 1; i--) {
//     let row = ''
//     for (let k = 1; k < 5; k++) {
//         if (i <= k) {
//             row += ' '
//         } else {
//             if ((i + k) % 2 === 1) {
//                 row += '*'
//             } else {
//                 row += ' '
//             }
//         }
//     }
//     console.log(row)
// }