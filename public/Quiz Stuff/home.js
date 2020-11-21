//number of questions per quiz
let numQuezs=2
let score=0
let nextQ=false


//function called one the start button is pressed
const quiz = async () => {
        //wait for the title, description, image, and start button to go away
        const result = await byebye()
        setTimeout(() => {

            //Turn the json string into an HTML div
            var questions=generate()
            //Randomly choose questions from that list
            chosen = getRandom(questions, numQuezs)
            //display the first question
            display()
        
        }, 2000);}

//function to display a question
function display(){
    let q=chosen[0]
    document.body.appendChild(q)
    chosen.shift()
}
//function to choose randomly from an array
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
//function to gather all the html divs
function generate(){
    let questions=[]
    for(var i in QA){
        let div=quez(QA[i])
        questions.push(div)
    }
    
    return questions
}
//function to randomly shuffle the answers for each question
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
  }
//function to take a json object and all of its parts
//and turn those into a div using JS DOM
function quez(obj){
        //set classname variables for each of the layered divs
        let allname='qpage'
        let qname='quez'
        let ansnames='answez'
        let aname='answer'
    
        //create all of the containers and package them together
        let All=document.createElement('div')
        All.className=allname
        All.id=allname
        let question=document.createElement('div')
        question.className=qname
        let answers=document.createElement('div')
        answers.className=ansnames
        All.appendChild(question)
        All.appendChild(answers)

        //turn a string into a DOM text node
        function text(txt){
            var h = document.createElement("p")
            var t = document.createTextNode(txt);
            h.appendChild(t);   
            return h
        }
        //turn a string into answer format
        function ans(a){
            let t=text(a)
            t.className=aname
            let d=document.createElement('div')
            d.appendChild(t)
            d.appendChild(document.createElement('br'))
            return d
        }
        //Function to make a 'next' button once the person answers
        function nextbtn(){
            let d=document.getElementById(allname)
            let b=document.createElement('BUTTON')
            b.className='start'
            var t = document.createTextNode("Next -->");
            b.appendChild(t);
            function fadeout(){
                let d=document.getElementById('qpage')
                d.style.animationName='fadeaway'
            }
            b.onclick = async () => {
                await fadeout()
                setTimeout(() => {document.getElementById('qpage').remove();display()}, 1000);}

            d.appendChild(b)
        }
        //turn a string into an answer that lights up when correct
        function correct(answ){
            let a=ans(answ)
            a.onclick = function() {
                a.childNodes[0].style.backgroundColor='limegreen'
                score++
                nextbtn()
            };
            a.id='yup'
            return a
        }
        //turn a strign into an answer that shows the correct answer when picked
        function wrong(answ){
            let a = ans(answ)
            a.onclick = function() {
                a.childNodes[0].style.backgroundColor='red'
                document.getElementById('yup').childNodes[0].style.backgroundColor='limegreen'
                nextbtn()
            };
            return a
        }

        //add the text to the question div
        question.appendChild(text(obj.q))
        //shuffle the answers and give them correct or incorrect status
        let as=shuffle([
            correct(obj.a),
            wrong(obj.a1),
            wrong(obj.a2),
            wrong(obj.a3),
        ])
        //add all the formatted answers to the answer div
        for(var i in as){answers.appendChild(as[i])}

        //return the overall container div
        return All
    }

//function to move the home screen out of the way
function byebye(){
    function func(){
        let t=document.getElementById('go away')
        t.style.animationName ='quiztime'
        t.style.top = '-50%'

        let b=document.getElementById('start')
        b.remove()
    }

    const doit = async () => {
        const result = await func()
        setTimeout(() => {document.getElementById('go away').remove()}, 2000);
      }    
    doit()
    setTimeout(() => {null}, 2000);
}



//json containing all of the questions

let QA=[
    {
        "q": "Why is it called Covid - NINETEEN ?",
        "a": "It is because it was discovered in 2019",
        "a1": "It is because there are 19 known strands",
        "a2": "It is because there are 19 stems on the molecule",
        "a3": "It is because there have been 19 previous coronavirus'"
    },
    {
        "q": "Why is it called Covid - NINeeeeeeeeeeeeeeeeeeeETEEN ?",
        "a": "It is because it was discovered in 2019",
        "a1": "It is because there are 19 known strands",
        "a2": "It is because there are 19 stems on the molecule",
        "a3": "It is because there have been 19 previous coronavirus'"
    }
]