let numQuezs=10

const quiz = async () => {
        const result = await byebye()
        setTimeout(() => {

            var questions=generate()

            for(var i; i=numQuezs; i++){

            }
        
        }, 

2000);}


function generate(){
    let questions=[]
    for(var i in QA){
        questions.push(quez(QA[i]))
    }
    return questions
}
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

function quez(obj){
    let allname='qpage'
    let qname='quez'
    let ansnames='answez'
    let aname='answer'
    
        let All=document.createElement('div')
        All.className=allname
        let question=document.createElement('div')
        question.className=qname
        let answers=document.createElement('div')
        answers.className=ansnames
        All.appendChild(question)
        All.appendChild(answers)

        function text(txt){
            var h = document.createElement("p")
            var t = document.createTextNode(txt);
            h.appendChild(t);   
            return h
        }
        function ans(a){
            let t=text(a)
            t.className=aname
            let d=document.createElement('div')
            d.appendChild(t)
            d.appendChild(document.createElement('br'))
            return d
        }

        question.appendChild(text(obj.q))
        let as=shuffle([obj.a,obj.a1,obj.a2,obj.a3])
        answers.appendChild(ans(as[0]))
        answers.appendChild(ans(as[1]))
        answers.appendChild(ans(as[2]))
        answers.appendChild(ans(as[3]))

        return All
    }


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

let QA=[
    {
        "q": "Why is it called Covid - NINETEEN ?",
        "a": "It is because it was discovered in 2019",
        "a1": "It is because there are 19 known strands",
        "a2": "It is because there are 19 stems on the molecule",
        "a3": "It is because there have been 19 previous coronavirus'"
    }
]