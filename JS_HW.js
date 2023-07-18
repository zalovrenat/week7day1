//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(my_string){
    for (let name of dog_names) {
        if (my_string.includes(name)) {
            console.log('Matched ',name)
        }
        else {
            console.log('No Matches')
        }
    }
}

findWords(dog_string)



//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    let i = 0
    while (i < arr.length) {
        arr[i] = 'even index'
        i += 2
    }
    console.log(arr)
}

replaceEvens(arr)



// https://www.codewars.com/kata/54d418bd099d650fa000032d/javascript

function vampireTest(a, b) {
    let num1 = a.toString() + b.toString()
    console.log(num1)
    let num2 = a*b
    num2 = num2.toString()
    console.log(num2)
    
    let arr1 = []
    let arr2 = []
    for (let i=0; i < num1.length; i++){
      arr1.push(num1[i])
    }
    for (i=0; i < num2.length; i++){
      arr2.push(num2[i])
    }
    arr1 = arr1.sort().join('')
    console.log(arr1)
    arr2 = arr2.sort().join('')
    console.log(arr2)
    
    console.log(arr1==arr2)
}



// https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/javascript

function unscrambleEggs(word) {
    return word.replaceAll('egg', '');
}