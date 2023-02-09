function makeTask(){
    const TASK = document.getElementById("makeTaskValue");
    for(let i = 1;i <= TASK.value;i++){
        let ans = document.getElementById("ans");
        ans.insertAdjacentHTML("afterend","<p>タスク:" + i + "</p>");
    }
}