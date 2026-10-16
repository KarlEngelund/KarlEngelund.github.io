const tabButtons = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");

function showTab(tabName, updateHash = true) {
  const matchingPanel = document.querySelector(`[data-panel="${tabName}"]`);
  if (!matchingPanel) return;

  panels.forEach((panel) => {
    panel.hidden = panel !== matchingPanel;
  });

  tabButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.tab === tabName));
  });

  if (updateHash) {
    history.replaceState(null, "", `#${tabName}`);
  }
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => showTab(button.dataset.tab));
});

window.addEventListener("hashchange", () => {
  showTab(window.location.hash.slice(1), false);
});

showTab(window.location.hash.slice(1) || "about", false);
document.querySelector("#year").textContent = new Date().getFullYear();
