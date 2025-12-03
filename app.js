  

   console.log("Starting...\n");

getUsers(async (err, users) => {

  if (err) {
    console.log("Error loading users:", err);
    return;
  }

  console.log("Users loaded:", users);

  for (const user of users) {
    console.log(`\nLoading tasks for ${user.name}...`);
 
    try {
      const tasks = await   getUserTasks(user.id);
      console.log(`Tasks  for ${user.name}:`, tasks);

      // Sequential
      console.log("Sequential processing:");
      for (const task of tasks) {
        try {
          const result = await processTask(task);
          console.log(result);
        } catch (err) {
          console.log("Task error:", err);
        }
      }

      // Parallel
      console.log("Parallel processing:");
      const results = await Promise.all(
        tasks.map(t => processTask(t).catch(err => "Error: " + err))
      );

      results.forEach(r => console.log(r));

    } catch (error) {
      console.log("Failed to load tasks:", error);
    }
  }

  console.log("\nAll users processed.");
});

