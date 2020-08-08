var questionsArray=[
    {
        question:"Who is the founder of Apple brand?",
        answer:"Steve Jobs",
        options:[
          "Bill Gates",
          "Isaac Newton",
          "Steve Jobs",
          "Stephen Hawking"
        ]
    },
    {
        question:"Who is the PM of Pakistan?",
        answer:"Imran Khan",
        options:[
          "Asif Ali Zardari",
          "Nawaz Sharif",
          "Pervez Musharraf",
          "Imran Khan"
        ]
    },
    {
        question:"Why Javascript is used for?",
        answer:"To make the website functional",
        options:[
            "To make the website functional",
            "To add styling in website",
            "To contsruct the structure of website",
            "none of above"
        ]
    },
    {
        question:"what is the 1st planet of solar system?",
        answer:"Mercury",
        options:[
          "Mars",
          "Earth",
          "Mercury",
          "Neptune"
        ]
    },
]

function showQuestion(e){
    var questionElement=document.getElementById("questionElement")
    questionElement.innerHTML=questionsArray[e].question

    var optionElement=document.getElementsByClassName("optionElement")
    
    for(var i=0;i<optionElement.length;i++){
        optionElement[i].innerHTML=questionsArray[e].options[i]
    }

   


}
 var questioncount=0;
 var score=0;
 

 function nextQuestion(){

    validate(questioncount)
    questioncount++;
    removeActiveClass()
    if(questionsArray[questioncount]!=null){
        showQuestion(questioncount) 

    }
    else{
        console.log("finish")
        var card=document.getElementsByClassName("card")[0]
        card.style.display="none"
        var a=document.createElement("h1")
        var text=document.createTextNode("Your Score is : "+score+"/40")
        a.appendChild(text)
        document.getElementsByClassName("score")[0].appendChild(a)

    }
    

 }

 function putActive(e){
     removeActiveClass()
  e.classList.add("active")
}

function removeActiveClass(){
    var active=document.getElementsByClassName("active")
    for(var i=0;i<active.length;i++){
        active[i].classList.remove("active")
    }

}
function validate(e){
    var active=document.getElementsByClassName("active")[0]
    var a=active.innerHTML
    if(a==questionsArray[e].answer){
        score=score+10;
    }
}