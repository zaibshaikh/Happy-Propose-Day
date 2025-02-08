const febHolidays = [
    "Hiiiiii Jennyyyyyyyyyyyy!",
    "You are my everyyythinggggggggggg 💓",
    "my world, my breathe, my life, my inspirtation",
    "my lovey dovey...... my soulmate 💓",
    "my moon pie my cutie pie 💓",
    "my life's greatest achievement 💓",
    "Never thought I would find someone like you 🥺",
    "You're my everything ✨💕",
    "You are my soulmate ✨💕",
    "And of course...",
    "My always greatest discovery in this world 💕",
    "I may be the skilled one,",
    "but whatever I made, discovered or invented",
    "You are my bestest and greatest achievement of mine ✨💕",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive 🤞",
    "In one word, you're just perfectttt😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you ✨💕",
    "I'll always do my best to keep you happy 🥺",
    "Main humesa tumhre sath hun 🤞✔",
    "kabhi khud ko akela mat samjhna💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😒",
    "And trust me",
    "There's no one better than you ✨💕",
    "You're the best baby!! 💖",
    "And I miss you",
    "and not justt misss youuuu",
    "but bahot zyaada missssss youuuuuuuuuu",
    "I dont know tumko wish kaise karu",
    "iske liye I made this one website 😢",
    "I will always love you 💕",
    "and never thin you will be alone or you will be facing any hardship even when we are far away",
    "because no matter what I will always be with you ✨",
    "and you are my bestesttt blessing of all time",
    "I am in debt of bhagwan always just because he made us meet",
    "there's nothing greater I could have asked for",
    "the happiness, the love, the childhood that I lost",
    "I got to live all with you in this short amount of time",
    "Thank you for choosing me always and thank you for coming in my life",
    "i love you ♥️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  