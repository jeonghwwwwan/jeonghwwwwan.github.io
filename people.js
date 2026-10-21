// Define each person's name and URL once, then use their alias in data-person.
const people = {
  prof_jeong_hwan_jeon: {
    name: "Jeong hwan Jeon",
    url: "https://rml-unist.notion.site/"
  },

  dokeun_lee: {
    name: "Dokeun Lee",
    url: "https://leedokeun.github.io/"
  },

  jungeun_lee: {
    name: "Jungeun Lee",
    url: "https://2jungeuni.github.io/"
  },

  sungjun_heo: {
    name: "Sungjun Heo",
    url: "https://sj824.github.io/"
  },

  prof_kyungdon_joo: {
    name: "Kyungdon Joo",
    url: "https://unist.info/"
  },
};

document.querySelectorAll("a[data-person]").forEach((link) => {
  const person = people[link.dataset.person];
  if (!person) return;

  link.textContent = person.name;
  link.href = person.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
