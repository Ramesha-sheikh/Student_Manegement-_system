import inquirer from "inquirer";
//create ig generate function
function generate_id() {
    return Math.floor(Math.random() * 10000) + 1;
}
//ceate empty student data array
let data = [];
async function main() {
    while (true) {
        let question = await inquirer.prompt([
            {
                type: 'list',
                name: 'name',
                choices: ['Add Student', 'Enroll course', 'view', 'Exit'],
                message: 'Select Options',
            }
        ]);
        if (question.name == 'Add Student') {
            let askquestion = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter your name",
                },
                {
                    type: 'input',
                    name: 'age',
                    message: "Enter your age",
                },
            ]);
            //create object
            let s_id = generate_id();
            let student_details = {
                id: s_id,
                name: askquestion.name,
                age: parseInt(askquestion.age),
                course: [],
            };
            data.push(student_details);
            console.log(`YOUR ID NUMBER GENERATE IS ${s_id}`);
        }
        else if (question.name == 'Enroll course') {
            let question3 = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'name',
                    choices: ['Web development', 'Graphices', 'Web Designing', '3D-Animation'],
                    message: 'choice course',
                }
            ]);
            data.push(question3.name);
            console.log(`You are Successfully  Enroll in Course of ${question3.name}`);
        }
        else if (question.name == 'view') {
            console.table(data);
        }
        else if (question.name == 'Exit') {
            console.log('thank you for using our student managment system');
            break;
        }
    }
}
main();
