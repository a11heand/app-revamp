/*
Filename: ComplexCode.js

Description:
This code is a complex example of a task management system. It allows users to create, update, and delete tasks. Additionally, it provides features like assigning tasks to different users, setting due dates and priorities, and tracking task completion status.

Author: [Your Name]

Date: [Date]

*/

function Task(name, description, assignee, dueDate, priority) {
  this.name = name;
  this.description = description;
  this.assignee = assignee;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = false;

  this.markAsCompleted = function() {
    console.log(`${this.name} marked as completed.`);
    this.completed = true;
  }

  this.updateDueDate = function(newDueDate) {
    console.log(`${this.name}'s due date updated to ${newDueDate}.`);
    this.dueDate = newDueDate;
  }

  // ... more methods for the Task class

}

function TaskManager() {
  this.tasks = [];

  this.addTask = function(task) {
    this.tasks.push(task);
    console.log(`Task added: ${task.name}`);
  }

  this.removeTask = function(task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      console.log(`Task removed: ${task.name}`);
    }
  }

  this.getTasksByAssignee = function(assignee) {
    const filteredTasks = this.tasks.filter(task => task.assignee === assignee);
    console.log(`Tasks assigned to ${assignee}:`);
    filteredTasks.forEach(task => console.log(task.name));
  }

  // ... more methods for TaskManager class

}

// Example usage:

const taskManager = new TaskManager();

const task1 = new Task("Implement authentication", "Implement user authentication for the system.", "John", "2022-10-01", "High");
taskManager.addTask(task1);

const task2 = new Task("Refactor code", "Refactor existing codebase to improve performance.", "Jane", "2022-11-15", "Medium");
taskManager.addTask(task2);

const task3 = new Task("Fix bugs", "Investigate and fix reported bugs in the application.", "John", "2022-09-15", "High");
taskManager.addTask(task3);

taskManager.getTasksByAssignee("John");

task1.markAsCompleted();
task2.updateDueDate("2022-12-01");

taskManager.removeTask(task3);
