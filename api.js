



function getUsers(callback) {
  setTimeout(() => {
    if (Math.random() < 0.2) {
      return callback(" Failed to fetch users", null);
    }

    const users = [
      { id: 1, name: "Ali" },
      { id: 2, name: "Fatima" },
      { id: 3, name: "John" }
    ];

    callback(null, users);
  }, 1500);
}



function getUserTasks(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        return reject(` Could not load tasks for user ${userId}`);
      }

      resolve([
        { id: userId * 100 + 1, task: "Clean room", userId },
        { id: userId * 100 + 2, task: "Pay bills", userId },
        { id: userId * 100 + 3, task: "Buy groceries", userId }
      ]);
    }, 1000);
  });
}



function processTask(task) {
  return new Promise((resolve, reject) => {
    console.log(`Processing: ${task.task}`);

    setTimeout(() => {
      if (Math.random() < 0.1) {
        return reject(`Failed to process task ${task.id}`);
      }

      resolve(`Task ${task.id} completed`);
    }, 800);
  });
}
