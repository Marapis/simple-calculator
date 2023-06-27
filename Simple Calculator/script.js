let result = document.getElementById("inputText");

let calc = (num)=>{
    result.value = result.value+num;
}

let Result = ()=>{
    try{
        result.value = eval(result.value)
    }
    
    catch(err){
        alert("ERROR")
    }
}

function clr(){
    result.value = "";
}

function del(){
    result.value =result.value.slice(0, -1);
}