// const elemUser = document.querySelector("user");
let user = "vitormendonca62";

const elemAvatar = document.querySelector("#avatar-user");
const elemUserName = document.querySelector("#user-name");
const elemProfile = document.querySelector("#github-profile");
const elemProfileLink = document.querySelector(".github-profile");
const elemBio = document.querySelector(".description");

async function getData() {
  const response = await fetch(`https://api.github.com/users/${user}`);
  if (response.status === 404) {
    return await (
      await fetch(`https://api.github.com/users/vitormendonca62`)
    ).json();
  }
  const data = response.json();
  return data;
}

async function changeCard() {
  const dataUser = await getData();
  elemAvatar.src = dataUser.avatar_url;
  elemUserName.innerText = dataUser.name;
  elemProfile.innerText = dataUser.login.toLowerCase();
  elemProfileLink.href = `https://github.com/${user}`;
  elemBio.innerText = dataUser.bio;
}
changeCard();

document.querySelector(".icon-menu").addEventListener("click", () => {
  document.querySelector(".icon-menu").classList.toggle("icon-menu-active");
  document.querySelector(".menu").classList.toggle("menu-active");
});

const elemLinkedinLink = document.querySelector("#link-linkedin");
const elemGmailLink = document.querySelector("#link-gmail");
const elemTwitterLink = document.querySelector("#link-twitter");

const elemUser = document.querySelector("#input-user");
const inputLinkedin = document.querySelector("#input-linkedin");
const inputGmail = document.querySelector("#input-email");
const inputTwitter = document.querySelector("#input-twitter");

document.querySelector(".send").addEventListener("click", () => {
  elemLinkedinLink.href = inputLinkedin.value;
  elemGmailLink.href = inputGmail.value;
  elemTwitterLink.href = inputTwitter.value;
  user = elemUser.value;
  document.querySelector(".icon-menu").classList.toggle("icon-menu-active");
  document.querySelector(".menu").classList.toggle("menu-active");
  changeCard();
});
