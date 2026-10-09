// Petrov Homes: mobile navigation and the contact form.
// Everything here is progressive enhancement; pages work without it.

(() => {
  // Mobile navigation
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    const header = toggle.closest(".site-header");
    const setOpen = (open, { returnFocus = false } = {}) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".nav-toggle__label").textContent = open ? "Close" : "Menu";
      nav.classList.toggle("is-open", open);
      header?.classList.toggle("is-menu", open);
      if (!open && returnFocus) toggle.focus();
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false, { returnFocus: true });
      }
    });

    document.addEventListener("click", (event) => {
      if (nav.classList.contains("is-open") && !event.target.closest(".site-header")) {
        setOpen(false);
      }
    });

    nav.addEventListener("focusout", (event) => {
      if (nav.classList.contains("is-open") && event.relatedTarget && !event.relatedTarget.closest(".site-header")) {
        setOpen(false);
      }
    });

    window.matchMedia("(min-width: 56.0625em)").addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
  }

  const headerBar = document.querySelector(".page-home .site-header");
  const hero = document.querySelector(".hero");
  if (headerBar && hero) {
    const syncHeader = () => {
      headerBar.classList.toggle("is-stuck", window.scrollY > hero.offsetHeight - headerBar.offsetHeight);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    window.addEventListener("resize", syncHeader);
  }

  // Contact form (only present once an endpoint is configured)
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const typeSelect = form.querySelector("#cf-type");
  const message = form.querySelector("#cf-message");
  const topic = params.get("topic");
  const community = params.get("community");

  if (topic && typeSelect.querySelector(`option[value="${CSS.escape(topic)}"]`)) {
    typeSelect.value = topic;
  }
  if (community && /^[a-z-]{2,30}$/.test(community)) {
    const name = community.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    if (!typeSelect.value) typeSelect.value = "community";
    if (!message.value) message.value = `I'd like to learn more about ${name}.`;
  }

  const status = form.querySelector("[data-form-status]");
  const submit = form.querySelector('button[type="submit"]');
  const submitLabel = form.querySelector("[data-submit-label]");
  const fields = [...form.querySelectorAll("input:not([tabindex='-1']), select, textarea")];

  const messages = {
    "cf-name": { valueMissing: "Please enter your name." },
    "cf-email": {
      valueMissing: "Please enter your email address.",
      typeMismatch: "Please enter a valid email address, like name@example.com.",
    },
    "cf-phone": { patternMismatch: "Please enter a valid phone number." },
    "cf-type": { valueMissing: "Please choose what you’d like help with." },
    "cf-message": { valueMissing: "Please include a short message." },
  };

  const validate = (field) => {
    const error = form.querySelector(`[data-error-for="${field.id}"]`);
    const phoneInvalid = field.id === "cf-phone" && field.value && !/^[0-9+().\-\s]{7,}$/.test(field.value);
    let text = "";
    if (!field.validity.valid || phoneInvalid) {
      const key = phoneInvalid ? "patternMismatch" : Object.keys(messages[field.id] || {}).find((k) => field.validity[k]);
      text = (messages[field.id] && messages[field.id][key]) || "Please check this field.";
    }
    field.setAttribute("aria-invalid", text ? "true" : "false");
    if (error) error.textContent = text;
    return !text;
  };

  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value || field.getAttribute("aria-invalid") === "true") validate(field);
    });
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validate(field);
    });
  });

  const setStatus = (text, state) => {
    status.textContent = text;
    if (state) status.dataset.state = state;
    else delete status.dataset.state;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setStatus("");

    const invalid = fields.filter((field) => !validate(field));
    if (invalid.length) {
      invalid[0].focus();
      setStatus("Please correct the highlighted fields.", "error");
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    if (data.company) return; // spam trap filled in
    delete data.company;

    submit.disabled = true;
    submitLabel.textContent = "Sending…";
    form.setAttribute("aria-busy", "true");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);

      const success = document.createElement("div");
      success.className = "contact-success";
      success.setAttribute("tabindex", "-1");
      success.innerHTML =
        "<h2>Thank you. Your message was sent.</h2><p>Max will get back to you soon.</p>";
      form.replaceWith(success);
      success.focus();
    } catch {
      setStatus("Sorry, your message couldn’t be sent. Please try again in a moment.", "error");
      submit.disabled = false;
      submitLabel.textContent = "Send message";
      form.removeAttribute("aria-busy");
    }
  });
})();
