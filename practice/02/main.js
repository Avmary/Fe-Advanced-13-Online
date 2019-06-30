const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const maxTasksCompletedEmplName = function (obj) {
  const keys = Object.keys(obj);
  const maxTasks = 0;
  let name = '';
  for (const key of keys) {
    name = obj[key] > maxTasks ? key : name;
  } return name;
};
console.log(maxTasksCompletedEmplName(tasksCompleted));
