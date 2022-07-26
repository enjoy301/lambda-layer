#!/usr/bin/env node
import inquirer from "inquirer";
import { exec } from "child_process";

console.clear();
const runtime = await inquirer.prompt([
  {
    type: "list",
    name: "runtime",
    message: "런타임을 선택해 주세요.",
    choices: ["Node.js", "python"],
  },
]);

let version;
if (runtime.runtime === "Node.js") {
  version = await inquirer.prompt([
    {
      type: "list",
      name: "version",
      message: "버전을 선택해 주세요.",
      choices: ["16.x", "14.x", "12.x"],
    },
  ]);
} else {
  version = await inquirer.prompt([
    {
      type: "list",
      name: "version",
      message: "버전을 선택해 주세요.",
      choices: ["3.9", "3.8", "3.7", "3.6"],
    },
  ]);
}

switch (version.version) {
  case "16.x":
    console.log(1);
    break;
  case "14.x":
    console.log(2);
    break;
  default:
    console.log(3);
}

console.log("도커 켜는 중...");
exec("sh run-docker.sh", (error, stdout, stderr) => {
  if (stdout.length !== 0) {
    console.log("도커 켜는 중 에러 발생");
    return;
  }
});
