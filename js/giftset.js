const controls = document.querySelector(".giftset__wrap");

controls.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) return;

  const prevActiveBadge = document.querySelector(".giftset__badge.is-active");

  if (prevActiveBadge) {
    prevActiveBadge.classList.remove("is-active");
  }
  const badgeId = event.target.getAttribute("for");

  const nextActiveBadge = document.querySelector(`[for=${badgeId}]`);

  //   const nextActiveBadge = document.querySelector(`[data-id=${badgeId}]`);

  console.log(nextActiveBadge);

  nextActiveBadge.classList.add("is-active");
});
