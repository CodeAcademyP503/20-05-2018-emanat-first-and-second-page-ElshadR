var array=[];
/*--------channge page start---------- */
function changePage(text){
    document.location.href=text;
    var userNumber=inputNumber.value;
    document.cookie="number="+userNumber;
    localStorage.lastname = userNumber;

};
/*--------channge page end---------- */

/*--------bakcel input add value start---------- */
function add(a){
    if(inputNumber.value.length<=9){
        inputNumber.value+=a;
        next.style.display="none";
        array.push(a);
    }
    nextButton();
};
/*--------bakcel input add value end---------- */

/*--------bakcel next button start---------- */
function nextButton(){
    if(inputNumber.value.length==10){
        next.style.display="block";
    }
    else{
        next.style.display="none";
    }
};
nextButton();
/*--------bakcel next button end---------- */

/*--------bakcel delete input start---------- */
function pop(a){
     
    if(a>1){
        if(inputNumber.value.length>1){
            var res=inputNumber.value.substring(0,1);
            inputNumber.value=res;
            array.length=0;
            
         }
    }
    else{
        if(inputNumber.value.length>1){
            var res=inputNumber.value.substring(0,inputNumber.value.length-a);
            inputNumber.value=res;
            array.pop(a);
         }
    }
    nextButton();

};
/*--------bakcel delete input end---------- */