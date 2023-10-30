document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";

        // Add a click event to delete tasks
        const deleteButton = listItem.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });
    });
});
