let students=[
    student1={firstName:"Anurag", favFood:"Tacos", homeTown:"Rochester"},
    student2={firstName:"Erin", favFood:"Pizza", homeTown:"Troy"},
    student3={firstName:"Cullin", favFood:"Pad Thai", homeTown:"Fowlerville"}
]

function StudentDatabase(){
    let student=prompt("Please input a student name:")
    console.log(student);
    for(let i=0;i<students.length;i++){
        if(student.toLowerCase()===students[i].firstName.toLowerCase()){
            console.log("Here is the deatails about this student");
            console.log("HomeTown:" + students[i].homeTown);
            console.log("Favorite food:" + students[i].favFood);
        }
    }
}