function enter_value() {
    let ques_data=[
    "What is your name?",
    "My name is Rezwan Islam",
    "How are you?",
    "I am fine and you?"
    ];
    let lower_ques_data=ques_data.map(value=>value.toLowerCase());
    
    const input_value = document.getElementById("user_input").value.toLowerCase();
    
    for(j=0;j<lower_ques_data.length;j++){
            if(lower_ques_data[j]==input_value){
                document.getElementById("output").innerHTML = ques_data[j+1];
            }
    }
}