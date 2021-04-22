var currentDate = document.querySelector(".current-date");
currentDate.textContent = moment().format("dddd, MMMM Do");


$(".saveBtn").on("click", function(){
    var task = $(this)
        .siblings(".details")
        .val();

    console.log(task);
    
    var save = $(this)
        .siblings(".details")
        .attr("id")
    console.log(save);

    localStorage.setItem(save, task);
    
});


function timeAlert(){
    
    
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





timeAlert();