


const resulttext=document.getElementById('result')
const desctext=document.getElementById('desc')
const form=document.querySelector('form')

form.addEventListener('submit',onformSubmit)
form.addEventListener('reset',onFormReset)

function onFormReset(){

    result.textContent="0"
    bmiText.className=""
    desctext.textContent="N/A"

}




function onformSubmit(e){
    e.preventDefault()

    const weight=document.getElementById('weight').value
    const height=document.getElementById('height').value
var valid =true
    if(weight==""||height==""||height==0||weight==0){
        alert("please enter a valid weight and height")
        
     valid=false
    }


if(valid){

    const heightInMetres = height/100
    const bmi=(weight/(heightInMetres*heightInMetres))
   
    result.textContent =bmi.toFixed(2)
    result.className= desc;
  
    

    console.log(result)


    let status=document.getElementById('desc')

    if(bmi<18.5){
      
        status.innerHTML ="you are  <strong>underweight</strong> "
        result.style.color="orange"
    }

    else if(bmi<25&&bmi>18.5){
        
        status.innerHTML ="you are  <strong>normal</strong> "
         result.style.color="green"
    }

    else if(bmi>25&&bmi<=30){
        status.innerHTML ="you are  <strong>overweight</strong> "
        result.style.color="lightcoral"
        
    }else{
         
        
        status.innerHTML ="you are  <strong>Obese</strong> "
        result.style.color="crimson"
        
    }

    const utterance = new SpeechSynthesisUtterance(status.innerHTML);
    utterance.rate = 1; // Speed (0.1 to 10)
        utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);

   
}


}





