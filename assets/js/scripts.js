(() => {
  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  root.classList.add("js");
  body.classList.add("is-loaded");

  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  body.prepend(progress);

  const updateScrollProgress = () => {
    const max = Math.max(1, root.scrollHeight - window.innerHeight);
    root.style.setProperty("--scroll-progress", Math.min(1, window.scrollY / max).toFixed(4));
  };

  let scrollRaf = 0;
  const queueScrollProgress = () => {
    if (scrollRaf) return;
    scrollRaf = window.requestAnimationFrame(() => {
      scrollRaf = 0;
      updateScrollProgress();
    });
  };

  updateScrollProgress();
  window.addEventListener("scroll", queueScrollProgress, { passive: true });
  window.addEventListener("resize", queueScrollProgress);

  if (finePointer && !reduceMotion) {
    let pointerRaf = 0;
    const updatePointer = (event) => {
      body.classList.add("has-pointer");
      root.style.setProperty("--pointer-x-next", `${event.clientX}px`);
      root.style.setProperty("--pointer-y-next", `${event.clientY}px`);
      if (pointerRaf) return;
      pointerRaf = window.requestAnimationFrame(() => {
        pointerRaf = 0;
        root.style.setProperty("--pointer-x", getComputedStyle(root).getPropertyValue("--pointer-x-next"));
        root.style.setProperty("--pointer-y", getComputedStyle(root).getPropertyValue("--pointer-y-next"));
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    document.addEventListener("mouseleave", () => body.classList.remove("has-pointer"));
  }

  const revealTargets = Array.from(document.querySelectorAll([
    "main > section:not(.hero):not(.vehicle-hero)",
    ".feature-card",
    ".process-grid article",
    ".spec-grid article",
    ".model-card",
    ".gallery-slot",
    ".package-card",
    ".contact-table"
  ].join(",")));

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-item");
    element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 45, 225)}ms`);
  });

  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  }

  const tiltCards = Array.from(document.querySelectorAll(".feature-card, .model-card, .package-card, .vehicle-slot"));
  if (finePointer && !reduceMotion) {
    tiltCards.forEach((card) => {
      card.classList.add("tilt-card");
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
        card.style.setProperty("--shine-x", `${((x + 0.5) * 100).toFixed(1)}%`);
        card.style.setProperty("--shine-y", `${((y + 0.5) * 100).toFixed(1)}%`);
      }, { passive: true });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--shine-x", "50%");
        card.style.setProperty("--shine-y", "50%");
      });
    });
  }

  if (!reduceMotion) {
    document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("pointerdown", (event) => {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "button-ripple";
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        button.append(ripple);
        window.setTimeout(() => ripple.remove(), 620);
      });
    });
  }

  const statValues = Array.from(document.querySelectorAll(".stat-strip strong"));
  const animateStat = (element) => {
    if (element.dataset.counted === "true") return;
    const original = element.textContent.trim();
    const match = original.match(/^(\d+)(.*)$/);
    if (!match) return;

    element.dataset.counted = "true";
    const target = Number(match[1]);
    const suffix = match[2];
    const pad = match[1].startsWith("0") ? match[1].length : 0;
    const duration = 850;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased).toString().padStart(pad, "0");
      element.textContent = `${value}${suffix}`;
      if (progress < 1) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window && !reduceMotion) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateStat(entry.target);
        statObserver.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    statValues.forEach((element) => statObserver.observe(element));
  } else {
    statValues.forEach(animateStat);
  }
})();