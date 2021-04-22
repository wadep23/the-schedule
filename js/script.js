var currentDate = document.querySelector(".current-date");
currentDate.textContent = moment().format("dddd, MMMM Do");


$(".saveBtn").on("click", function(){
    var task = $(this)
        .siblings(".details")
        .val();

    console.log(task);
    //create another for parent element to grab id. pass function to save to local storage on click
    var save = $(this)
        .siblings(".details")
        .attr("id")
    console.log(save);

    localStorage.setItem(save, task);
    
});

//if past: grey. if present: red. if future: green.
function timeAlert(){
    //moment function to create time association for each hour
    
    for (i = 0; i < 25; i++){
       
        if (moment().format("H") > i){
            $(`#${i}`).addClass("past");
        } else if (moment().format("H") < i){
            $(`#${i}`).addClass("future");
        } else{
            $(`#${i}`).addClass("current");
        };
         
        $(`#${i}`)
            .val(localStorage.getItem(i));
    }      
};
//if button clicked, add to local storage. Retrieve from local storage and 
//display in specified time




timeAlert();