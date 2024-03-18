const taskList = [];
const entryElm = document.getElementById("entryList");

const tWkHr = 7 * 24;

const handleOnSubmit = (form) => {
  //   console.log(document.getElementById("task").value);

  const newForm = new FormData(form);

  const task = newForm.get("task");
  const hr = +newForm.get("hr");
  const obj = {
    task,
    hr,
    type: "entry",
  };

  //check if you have enought hour left to fit this incoming task

  const previousTtl = total();
  if (previousTtl + hr > tWkHr) {
    return alert("Sorry boss not enought time letf!");
  }

  taskList.push(obj);
  console.log(taskList);
  display();
  total();
};

const display = () => {
  let str = ``;

  taskList.forEach((item, i) => {
    console.log(item);
    str += `
   <tr>
<th>${i + 1}</th>
<td>${item.task}</td>
<td>${item.hr}hrs</td>
<td class="text-end">
  <button onclick="handOnDelete(${i})" class="btn btn-danger btn-sm">
    <i class="fa-solid fa-trash"></i>
  </button>
  <button class="btn btn-success btn-sm">
    <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
  </button>
</td>
</tr>`;
  });

  entryElm.innerHTML = str;
};

//[{task: "dd", hr:"88"}]

const total = () => {
  const ttl = taskList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

  document.getElementById("ttlHrs").innerText = ttl;
  return ttl;
};
const handOnDelete = (id) => {
  if (window.confirm("cant")) {
    taskList.splice(id, 1);
    display();
  }
};
// const randomIdGenerator = () => {
//   const idLenght = 6;
//   const str = "abcdefghijklmnopqrstuvwxyz132123ohdsoho123123";

//   const randomPositon = math.roudn(Math.random() * str);
//   str[randomPositon];
//   let id = ""
//   for(let i =0; i < idLenght; i++)};
