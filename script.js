document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
            setupButtons(li);
        }
    });

    function setupButtons(li) {
        const completeBtn = li.querySelector(".complete-btn");
        const deleteBtn = li.querySelector(".delete-btn");

        completeBtn.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        deleteBtn.addEventListener("click", function() {
            li.remove();
        });
    }
});
