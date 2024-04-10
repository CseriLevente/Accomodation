const { randomUUID } = require("node:crypto");
const fs = require("node:fs");

/*const filecontent = fs.readFileSync("./file.txt", "utf-8");
console.log(filecontent);

fs.readFile("./file.txt", "utf-8", (error, data) => {
 if (error) {
   console.log(error);
 } else {
   console.log(data);
  }
});

fs.writeFile("./api.txt", ";Fortnite", { flag: "a" }, (err) => {
  //if (err) {
    console.log(err);
  } else {
    console.log("File written");
  }
});*/

/*function addResort(name, location, cost) {
  const id = randomUUID();
  const line = id + "-" + name + "-" + location + "-" + cost + "\n";
  fs.writeFile("./api.txt", line, { flag: "a+" }, (err) => {
    if (err) throw err;
    console.log("beleraktam");
  });
}*/

function findResortById(id, (callback)=>{
callback()
  fs.readFile("./api,txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }
    lines = data.split("\n");
    //console.log(lines);
    right = lines.find(id);
  });
    }
  return right;
  );

/*fs.readFile("./api.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  lines = data.split("\n");
  console.log(lines);
});*/

findResortById("ba52a8f8-76b8-4324-a0d6-fbf6af21fa94");
