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
        function correct(answ){
            let a=ans(answ)
            a.onclick = function() {
                a.style.backgroundColor='limegreen'
            };
            return a
        }
        function wrong(answ){
            let a = ans(answ)
            return a
        }

        question.appendChild(text(obj.q))
        let as=shuffle([
            correct(obj.a),
            wrong(obj.a1),
            wrong(obj.a2),
            wrong(obj.a3)])

        for(var i in as){answers.appendChild(as[i])}
        
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