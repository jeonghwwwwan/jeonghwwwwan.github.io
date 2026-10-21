const newsSection = document.querySelector(".news-section");

if (newsSection) {
  const list = newsSection.querySelector("#news-list");
  const toggle = newsSection.querySelector("#news-toggle");
  const visibleCount = Math.max(1, parseInt(newsSection.dataset.visibleCount, 10) || 4);
  const olderItems = Array.from(list.children).slice(visibleCount);

  if (olderItems.length > 0) {
    const setExpanded = (expanded) => {
      olderItems.forEach((item) => {
        item.hidden = !expanded;
      });
      toggle.textContent = expanded ? "− Show Less" : "+ Show More";
      toggle.setAttribute("aria-expanded", String(expanded));
    };

    toggle.addEventListener("click", () => {
      setExpanded(toggle.getAttribute("aria-expanded") !== "true");
    });

    setExpanded(false);
    toggle.hidden = false;
  }
}
