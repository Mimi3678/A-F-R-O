const list = document.getElementById("listMen")
const tasks = []

const task1 = {
    question: "Which year was Adama born?",
    alternatives: ['1960', '1983', '1990', '1995'],
    rightIndex: 1
}

const task2 = {
    question: "What is Adama known for?",
    alternatives: ['Dancer', 'Journalist', 'Fashion Designer', 'Nothing'],
    rightIndex: 2
}

const task3 = {
    question: "Which country did Adama move to when she was four?",
    alternatives: ['England', 'Italy', 'Australia', 'Sierra Leone'],
    rightIndex: 3
}

const task4 = {
    question: "What fashion Brand did Adama create?",
    alternatives: ['Swag', 'Arket', 'Smed', 'Aschobi', 'Zara'],
    rightIndex: 3
}

const task5 = {
    question: "When did Adama passed away?",
    alternatives: ['January 31st 2018', 'February 31st', '2020', '2019'],
    rightIndex: 0
}

tasks.push(task1, task2, task3, task4, task5)

//Start quiz button
 function startMen() {
    let out = ""
    let id = 0
    let taskIndex = 0

    for (let task of tasks) {
        out += "<li>" +
         "<h4>" + task.question + "</h4>" + 
         "<div>"

    for (let alternatives of task.alternatives) {
        out += "<label for='" + id + "'>" + alternatives + "</label>" +
            "<input id='" + id + "' type='radio' value='" + alternatives +
            "' name='task-" + taskIndex + "'>"
            id++
        }
        out +="</div"
        out +="</li>"
        taskIndex++
    }
    out += "<button onclick='checkAnswer()'>Check Answer"
    listMen.innerHTML = out
}

//Check answers
function checkAnswer() {
    let rightAnswer = 0
    for (let taskIndex = 0; taskIndex < tasks.length; taskIndex++) {
        const radioKnapper = document.querySelectorAll('[name="task-' + taskIndex + '"]')
        let answer = ""

        for (let alternatives of radioKnapper) {
            if (alternatives.checked ) {
                answer = alternatives.value
                console.log(answer)
                break
            }
        }
        if(checkedIfRight(taskIndex, answer)) {
            rightAnswer++
        }

    }
    listMen.innerHTML = ""
    alert(rightAnswer + " of " + tasks.length + " task is right")
}

//Checks if it is right
function checkedIfRight(taskIndex, answer) {
    const task = tasks[taskIndex]
    if(task.rightIndex === task.alternatives.indexOf(answer)) {
        return true;
    }
    return false;
}