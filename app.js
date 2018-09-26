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
       const verify = function(){
        let verifyName = prompt("Please input a name");
      
        for (let i = 0; i < employeeList.length; i++) {
      
          if(employeeList[i].name === verifyName){
      
            alert("Name is already on the list");
            return;
          }
            else {
      
              alert("Name is not on the list.");
              return;
            }
          }
        }
       $("#verify").on("click",verify);

       const removeName = function() {
        const nameVal = $('#name').val();
        employeeList.splice(employeeList.indexOf(nameVal), 1);
        $('#name,#phoneNum, #officeNum').val('');
      }
      
      $('#delete').on('click', removeName);
       