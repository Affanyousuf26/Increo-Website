import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const header = document.querySelector<HTMLElement>("[data-header]");
const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");

const setMenu = (open: boolean) => {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobileMenu.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("menu-open", open);
  if (open) mobileMenu.querySelector<HTMLAnchorElement>("a")?.focus();
  else menuToggle.focus();
};

menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") setMenu(false);
  if (event.key !== "Tab" || menuToggle?.getAttribute("aria-expanded") !== "true" || !mobileMenu) return;

  const focusable = [menuToggle, ...mobileMenu.querySelectorAll<HTMLAnchorElement>("a")];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const updateHeader = () => header?.classList.toggle("site-header--scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const resilienceLayers = [...document.querySelectorAll<HTMLElement>("[data-resilience-layer]")];
const resilienceRings = [...document.querySelectorAll<HTMLElement>("[data-resilience-ring]")];
const activeLayerLabel = document.querySelector<HTMLElement>("[data-active-layer]");

const setActiveResilienceLayer = (index: number) => {
  resilienceLayers.forEach((layer, layerIndex) => layer.classList.toggle("is-active", layerIndex === index));
  resilienceRings.forEach((ring) => ring.classList.toggle("is-active", Number(ring.dataset.resilienceRing) === index));
  const heading = resilienceLayers[index]?.querySelector("h3")?.textContent;
  if (activeLayerLabel && heading) activeLayerLabel.textContent = heading;
};

resilienceLayers.forEach((layer, index) => {
  layer.addEventListener("mouseenter", () => setActiveResilienceLayer(index));
  layer.addEventListener("focus", () => setActiveResilienceLayer(index));
});

const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!motionReduced) {
  gsap.registerPlugin(ScrollTrigger);
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .from(".hero-frame", { opacity: 0, scale: 1.02, duration: 1.1 })
    .from("[data-hero-item]", { opacity: 0, y: 20, duration: 0.75, stagger: 0.1 }, "-=.75")
    .from(".hero-line > span", { yPercent: 115, duration: 1, stagger: 0.13 }, "-=.65")
    .from(".hero__section-no", { opacity: 0, x: -12, duration: 0.6 }, "-=.55");

  gsap.to(".hero__image", {
    scale: 1.07,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 36,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
    });
  });

  resilienceLayers.forEach((layer, index) => {
    ScrollTrigger.create({
      trigger: layer,
      start: "top 62%",
      end: "bottom 40%",
      onEnter: () => setActiveResilienceLayer(index),
      onEnterBack: () => setActiveResilienceLayer(index),
    });
  });
}

const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
const status = document.querySelector<HTMLElement>("[data-form-status]");

const showFieldError = (field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
  const error = document.querySelector<HTMLElement>(`[data-error-for="${field.id}"]`);
  if (!error) return;
  let message = "";
  if (field.validity.valueMissing) message = "This field is required.";
  else if (field.validity.typeMismatch) message = "Enter a valid business email.";
  else if (field.validity.tooShort && "minLength" in field) message = `Use at least ${field.minLength} characters.`;
  error.textContent = message;
  field.setAttribute("aria-invalid", String(Boolean(message)));
};

form?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input:not(.honeypot), textarea, select").forEach((field) => {
  field.addEventListener("blur", () => showFieldError(field));
  field.addEventListener("input", () => field.getAttribute("aria-invalid") === "true" && showFieldError(field));
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const endpoint = form.dataset.endpoint;
  const fields = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input:not(.honeypot), textarea, select")];
  fields.forEach(showFieldError);

  if (!form.checkValidity()) {
    status!.textContent = "Review the highlighted fields and try again.";
    fields.find((field) => !field.validity.valid)?.focus();
    return;
  }
  if (!endpoint) {
    status!.textContent = "This form is awaiting its Formspree endpoint. No information was sent.";
    return;
  }

  const button = form.querySelector<HTMLButtonElement>("button[type='submit']")!;
  button.disabled = true;
  button.textContent = "Sending…";
  status!.textContent = "Sending your inquiry…";

  try {
    const response = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Submission failed");
    form.reset();
    status!.textContent = "Thank you. Your inquiry has been sent successfully.";
  } catch {
    status!.textContent = "We could not send your inquiry. Please try again later.";
  } finally {
    button.disabled = false;
    button.innerHTML = "Send inquiry <span>↗</span>";
  }
});
