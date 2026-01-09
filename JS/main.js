/*console.log("Hello World!")
// String - ตัวอักษร
let fname = 'John'
console.log('name',fname)
const idcard = '123'

// number
let age = 30
let height = 150.5
const pi = 3.14
fname = 'Tom'

idcard = '456'

console.log('idcard',idcard)

console.log('name',fname ,'age',age)

//console.log('age',age)

/*+ บวก
- ลบ
* คูณ
/ หาร
% mod หารเอาเศษ
*/

/*
let number1 = 'Jack'
let number2 = 'Pot'

let number3 = number1 + ' ' + number2
console.log('Number3 =',number3)

console.log('Condition is = ',condition1)

/* cjondition statement (if,else,switch)
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าเท่ากับ
< น้อยกว่า
<= น้อยกว่าเท่ากับ


let number1 = 5
let number2 = 3

let condition1 = number1 <= number2 //Boolean (true,false)

console.log('Condition is = ',condition1)

let number1 = 5
let number2 = 5

//if-else condition
if (number1 != number2) {
    console.log('condition true')
}else if (number1 == number2){
    console.log('this else if')
}else {
    console.log('this else')
}
/**
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
 */

/*
let score = prompt('ใส่ตัวเลข')
if (score >= 80){
    console.log('You get Grade : A')
}else if (score >= 70){
    console.log('You get Grade : B')
}else if (score >= 60){
    console.log('You get Grade : C')
}else if (score >= 50){
    console.log('You get Grade : D')
}else {
    console.log('You get Grade : F')
    console.log('ไม่เป็นไรนะ เทอมหน้าเอาใหม่')
} 
 
&& และ
|| หรือ 
! not ไม่


let number1 = 5
let number2 = 10

//T || F = F
let condition = !(number1 >= 3 || number2 >= 11)
console.log('result of condition',condition)


let number = prompt('ใส่ตัวเลข')
if (!(number % 2 == 0)){
    console.log('You are event.')
}
    
let counter = 0

while(counter < 10) {//True --> False
    console.log('Hi')
    counter += 1
}

for (let counter = 0; counter <10; counter++){
    console.log('Hi')
}
    */

/*
array


// แทนที่
let age1 = 20
let age2 = 25
let age3 = 30

let ages = [20,25,30]

ages = [200,100,50]

console.log('age1','age2','age3',age1 + ' ' + age2 + ' ' + age3)
console.log(`age1,age2,age3 ${age1} ${age2} ${age3}`)
console.log('array',ages)

console.log ('index',ages[0])

//ต่อ array
ages.push(25)
console.log('push array',ages)

//ลบ array ตัวสุดท้าย
ages.pop()
console.log('pop array',ages)


let ages = [50,20,25,30,35,40]

ages.sort()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)
console.log('name_list',name_list[0])
console.log('name_list',name_list[1])
console.log('name_list',name_list[3])

for (let index = 0; index < name_list.length; index ++){
    console.log('name list',name_list[index])

}
    
let student = [{
    age: 30,
    name: 'aa',
    grade: 'A'
},{
    age: 35,
    name: 'bb',
    grade: 'B'    

}]
student.push({
    age: 40,
    name:'cc',
    grade: 'C'
})

student.pop()

for(let index = 0; index < student.length; index++){
    console.log('Student Number', (index + 1))
    console.log('age',student[index].age)
    console.log('name',student[index.name])
    console.log('grade',student[index].grade)
} 
    */
   
/*
/funtion   
let score1 = 55
let score = 65
let grade = ' '
function calculate_grade(parameter){
if (score >= 80){
    grade = 'A'
}else if (score >= 70){
    grade = 'B'
}else if (score >= 60){
    grade = 'C'
}else if (score >= 50){
    grade = 'D'        
}else{
    grade = 'F'
}
return grade
}


//เรียกใช้ function
let grade1 = calculate_grade(score1)
console.log('Grade',grade1)
*/


/*
let score = [20,30,40,50]
let newScore = []
for (let index = 0; index < score.length; index++){
    console.log('score',score[index])
    if (score[index] >= 30){
        newScore.push(score[index])
    }
}

score[0] = score[0] *2
score[1] = score[1] *2
score[2] = score[2] *2
score[3] = score[3] *2

score = score.map((s) =>{
    return s * 2
})


score.forEach((s) => {
    console.log('forEach Score',s)
})
*/
/*
let score = [20,30,40,50]
for (let index = 0; index < score.length; index++){
    console.log('score',score[index])
}
let newscore = score.filter((s) => {
    return s >= 30
})

newscore.forEach((ns) => {
    console.log('forEach Score',ns)
})


/*
let students = [
    {
        name:'aa',
        score:50,
        grade:'D'
    },{
        name:'bb',
        score:80,
        grade:'A'
    }
]
let student = students.find((s) => {
    if (s.name == 'aa'){
        return true
    }
})
let double_score = students.map((s) => {
    s.score = s.score * 2
})

let highScore = students.filter((s) => {
    if(s.socre >= 120){
        return true
    }
})

console.log(student)
console.log('double_score',double_score)
console.log('highScore',highScore)
*/