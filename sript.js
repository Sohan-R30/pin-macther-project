const generateBtn =  document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(event){
    const generateInputField = document.getElementById("generate-input-field");
    const generatePin = parseInt(Math.random() * 10000 );
    const generatePinsize = (generatePin + '').length;
    if(generatePinsize === 4){
        generateInputField.value = generatePin;
    }
});

const numPad = document.getElementById("num-pad");
numPad.addEventListener("click", function(event){
    const submitInputField = document.getElementById("submit-input-field");
    const numaricKey = event.target.innerText;
    const preNumaricKey = submitInputField.value;;
    if(!isNaN(numaricKey)){
        const newNumaricKey = preNumaricKey + numaricKey
        submitInputField.value = newNumaricKey;
    }
    else{
        if(numaricKey === "C"){
            submitInputField.value = "";
        }
        else if(numaricKey === "<"){
            const deleteOne = preNumaricKey.split('');
            deleteOne.pop();
            const deletedOne = deleteOne.join('');
            submitInputField.value = deletedOne;
        }
    }
});

let left  = 3;
const submitBtn =  document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(event){
    const generateInputField = document.getElementById("generate-input-field");
    const submitInputField = document.getElementById("submit-input-field");
    const wrongMatch = document.getElementById("wrong-match");
    const correctMatch = document.getElementById("correct-match");
    const tryLeft = document.getElementById("try-left");
    const noTry = document.getElementById("no-try")
    
    console.log(left)
    if(generateInputField.value === submitInputField.value){
        correctMatch.style.display = "block";
        wrongMatch.style.display = "none";
    }
    else{
        wrongMatch.style.display = "block";
        correctMatch.style.display = "none";
        if(left < 4 && left > 1){
            left = left - 1;
            tryLeft.innerText = left;
        }
        else{
            tryLeft.style.display = 'none';
            noTry.innerText = "No Try"
        }
    }
    
});

