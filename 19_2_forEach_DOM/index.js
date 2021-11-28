const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

let newOl = document.createElement('ol');
newOl.style.listStyleType = 'none';

users.forEach((user) => {
    let newLi = document.createElement('li');
    newLi.innerText = `${user.firstName} ${user.lastName}`;
    newLi.setAttribute('data-id',`${user.id}`);
    newOl.appendChild(newLi);
});
document.body.appendChild(newOl);