let tasks4 = [
  { id: 1, title: "do homework", status: "completed" },
  { id: 2, title: "clean room", status: "pending" },
  { id: 3, title: "go shopping", status: "pending" },
];

let num56 = tasks4.map((value) => {
  return (tasks4 = value.title.charAt(0).toUpperCase() + value.title.slice(1));
});

console.log(num56);
