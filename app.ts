import inquirer from "inquirer";

//create ig generate function
function generate_id():number{
  return Math.floor(Math.random()*10000)+1
}


// Define an interface for the student object
interface student{
    id:number;
    name:string;
    age:number;
    course:string[];

}
//ceate empty student data array
let data:student[]=[];

async function main(){
    while(true){
    let question= await inquirer.prompt(
        [
            {
                type:'list',
                name:'name',
                choices:['Add Student','Enroll course','view','Exit'],
                message:'Select Options',
            }
        ]
    )
    if(question.name =='Add Student'){
        let askquestion=await inquirer.prompt(
            [
                {
                    type:'input',
                    name:'name',
                    message:"Enter your name",
                },
                {
                    type:'input',
                    name:'age',
                    message:"Enter your age",
                },
            ]
        )
        //create object
        let s_id =generate_id();
        let student_details:student={
            id:s_id,
            name:askquestion.name,
            age:parseInt(askquestion.age),
            course:[],
        };
        data.push(student_details);
        console.log(`YOUR ID NUMBER GENERATE IS ${s_id}`);


    }else if(question.name =='Enroll course'){
        let question3=await inquirer.prompt(
            [
                {
                    type:'list',
                    name:'name',
                    choices:['Web development','Graphices','Web Designing','3D-Animation'],
                    message:'choice course',
                }
            ]
        )
        let student = data.find(s => s.id === parseInt(student_id_input.id));
        if (student) {
            student.course.push(question3.name);
            console.log(`Courses enrolled by student ID ${student.id}:`, student.course);
        } else {
            console.log(`Student with ID ${student_id_input.id} not found.`);
        }
        data.push(question3.name)
  console.log(`You are Successfully  Enroll in Course of ${question3.name}`)

    }
    else if(question.name =='view'){
        console.table(data)
    
 

    }
    else if(question.name =='Exit'){
        console.log('thank you for using our student managment system');
        break;
    }
    
    
}
}
main();
