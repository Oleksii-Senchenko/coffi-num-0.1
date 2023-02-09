const controls = document.querySelector(".giftset__controls");

controls.addEventListener("click", (event) => {
  const currentBadge = document.querySelector(".giftset__badge.is-active");
  const currentGiftCard = document.querySelector(".giftset__gift.is-shown");

  const badgeId = event.target.getAttribute("id");

  currentBadge.classList.remove("is-active");
  currentGiftCard.classList.remove("is-shown");

  const nextGiftCard = document.querySelector(`[data-badge=${badgeId}]`);
  const nextBadge = document.querySelector(`#${badgeId}`);

  nextBadge.classList.add("is-active");
  nextGiftCard.classList.add("is-shown");
});
