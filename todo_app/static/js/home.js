let task = document.getElementsByClassName("task_para_type");
for (let i = 0; i < task.length; i++) {
  if (task[i].innerText == "Personal") {
    task[i].style.background = "lightgreen";
  } else if (task[i].innerText == "Work") {
    task[i].style.background = "pink";
  } else if (task[i].innerText == "School") {
    task[i].style.background = "cyan";
  } else if (task[i].innerText == "Cleaning") {
    task[i].style.background = "yellow";
  } else {
    task[i].style.background = "cyan";
  }
}
 