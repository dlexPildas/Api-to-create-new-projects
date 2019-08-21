const express = require("express");

const server = express();
server.use(express.json());

const projects = [{ id: 0, title: "Initial title", tasks: [] }];
let numberReq = 0;

server.post("/projects", numbersReq, (req, res) => {
  const project = {
    id: req.body.id,
    title: req.body.title,
    tasks: []
  };

  projects.push(project);

  return res.json({ messege: "project successfully created!" });
});

server.post("/projects/:id/tasks", numbersReq, existProject, (req, res) => {
  projects[req.params.id].tasks.push(req.body.title);
  return res.json({ message: "New task successfully add!" });
});

server.get("/projects", numbersReq, (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", numbersReq, existProject, (req, res) => {
  projects[req.params.id].title = req.body.title;
  return res.json({ message: "Successfully update" });
});

server.delete("/projects/:id", numbersReq, existProject, (req, res) => {
  projects.splice(req.params.id, 1);
  return res.json({ message: "Successfully Removed" });
});

//middlewares to check if exist project
function existProject(req, res, next) {
  if (!projects[req.params.id]) {
    return res.json("Project not found!");
  }
  next();
}

//middleware to check req's numbers
function numbersReq(req, res, next) {
  console.log(++numberReq);
  next();
}

server.listen(3030);
