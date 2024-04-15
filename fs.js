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

//addResort("Whispering Pines Lodge", "Yosemite", 698);

/*function findResortById(id, (callback)=>{
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
*/
/*fs.readFile("./api.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  lines = data.split("\n");
  console.log(lines);
});*/

/*function findResortById(id, callback) {
  fs.readFile("./api.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const lines = data.split("\n");
      const foundLine = lines.find((line) => line.includes(id));
      callback(foundLine);
    }
  });
}*/

/*findResortById("ba52a8f8-76b8-4324-a0d6-fbf6af21fa94", (error, result) => {
  if (error) {
    console.log(error);
  }
  console.log(result);
});*/

/*function deleteResortById(id, callback) {
  fs.readFile("./api.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      callback(error);
    } else {
      const lines = data.split("\n");
      const foundIndex = lines.findIndex((line) => line.includes(id));
      if (foundIndex !== -1) {
        lines.splice(foundIndex, 1);
        const updatedData = lines.join("\n");
        fs.writeFile("./api.txt", updatedData, "utf-8", (err) => {
          if (err) {
            console.log(err);
            callback(err);
          } else {
            callback(null, "Succesful delete!");
          }
        });
      } else {
        callback("ID not found");
      }
    }
  });
}

deleteResortById("81a46927-de23-4897-85f8-e07f47f184a9", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
*/

fs.readFile("./api.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    callback(error);
  } else {
    const lines = data.split("\n");
    console.log(lines);
  }
});
