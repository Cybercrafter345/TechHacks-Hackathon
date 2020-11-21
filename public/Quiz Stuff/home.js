let numQuezs=1

const quiz = async () => {
        const result = await byebye()
        setTimeout(() => {

            var questions=generate()
            let chosen = getRandom(questions, numQuezs)

            for(var i=0; i<numQuezs; i++){
                let q=chosen[i]

                document.body.appendChild(q)
            }
        
        }, 2000);}

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

function generate(){
    let questions=[]
    for(var i in QA){
        let div=quez(QA[i])
        questions.push(div)
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
                a.childNodes[0].style.backgroundColor='limegreen'
            };
            a.id='yup'
            return a
        }
        function wrong(answ){
            let a = ans(answ)
            a.onclick = function() {
                a.childNodes[0].style.backgroundColor='red'
                document.getElementById('yup').childNodes[0].style.backgroundColor='limegreen'
            };
            return a
        }

        question.appendChild(text(obj.q))
        let as=shuffle([
            correct(obj.a),
            wrong(obj.a1),
            wrong(obj.a2),
            wrong(obj.a3),
        ])
        
            answers.appendChild(as[0])
            answers.appendChild(as[1])
            answers.appendChild(as[2])
            answers.appendChild(as[3])
        
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