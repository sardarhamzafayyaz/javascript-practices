let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },

  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUi();
  },

  renderUi: function () {
    const container = document.querySelector("#cardContainer");
    container.innerHTML = "";

    this.users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-2xl shadow-lg overflow-hidden";

      const img = document.createElement("img");
      img.className = "w-full h-44 object-cover";
      img.src = user.photo;

      const content = document.createElement("div");
      content.className = "p-5";

      const title = document.createElement("h2");
      title.className = "text-xl font-bold";
      title.textContent = user.username;

      const roleEl = document.createElement("p");
      roleEl.className = "text-sm text-purple-500 font-medium";
      roleEl.textContent = user.role;

      const bioEl = document.createElement("p");
      bioEl.className = "mt-2 text-gray-600";
      bioEl.textContent = user.bio;

      content.appendChild(title);
      content.appendChild(roleEl);
      content.appendChild(bioEl);

      card.appendChild(img);
      card.appendChild(content);

      container.appendChild(card);
    });
  },

  removeUser: function () {},
};

userManager.init();