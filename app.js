const view = function(content){
    $(".content").empty();
       for (let i = 0; i < employeeList.length; i++) {
       $(".content").append("<div>"+"<p>"+ employeeList[i].name +"</p>"+"<p>"+ employeeList[i].
      officeNum +"</p>"+"<p>"+ employeeList[i].phoneNum +"</p>"+"</div>");
       }
    }
    $("#view").on("click",view);

    $("#add").on("click", function(event) {
        const name = $("#name").val();
        const officeNum = $("#officeNum").val();
        const phoneNum = $("#phoneNum").val();
        let newEmployee = {
         name:name,
         officeNum:officeNum,
         phoneNum:phoneNum
        }
        employeeList.push(newEmployee);
       })
     
       $("#add").on("click",view);

       