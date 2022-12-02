document.querySelector('#push').onclick = function(){
    if(document.querySelector('#new-task').value.length == ''){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#task').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#new-task input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

      

 
    }
}