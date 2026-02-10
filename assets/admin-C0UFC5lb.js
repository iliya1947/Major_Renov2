import "./styles-CQ5-UQad.js";

const SUPABASE_URL = "https://iyrlmknautvmjkmbxxjc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_7aWqWFgu8pWSxYKYRBgRjg_yclXUz0A";

const APP_CONFIG = window.APP_CONFIG || {};
const ADMIN_EMAILS = (Array.isArray(APP_CONFIG.adminEmails) ? APP_CONFIG.adminEmails : [APP_CONFIG.adminEmail])
  .filter(Boolean)
  .map((email) => String(email).trim().toLowerCase());
const FALLBACK_ADMIN_LOGIN = String(APP_CONFIG.fallbackAdminLogin || "Admin33").trim();
const FALLBACK_ADMIN_PASSWORD = String(APP_CONFIG.fallbackAdminPassword || "Admin555");
const LOCAL_LOGIN_STORAGE_KEY = "adminLocalLoggedIn";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

let promotionId = null;

function switchSection(sectionId) {
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("admin-section").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
}

function getCurrentTheme() {
  return localStorage.getItem("theme") || "day-theme";
}

function isAdminEmailAllowed(email) {
  return ADMIN_EMAILS.includes(email);
}

function hasFallbackCredentialsConfigured() {
  return FALLBACK_ADMIN_LOGIN.length > 0 && FALLBACK_ADMIN_PASSWORD.length > 0;
}

function isConfigValid() {
  return ADMIN_EMAILS.length > 0 || hasFallbackCredentialsConfigured();
}

function isLocalSessionActive() {
  return sessionStorage.getItem(LOCAL_LOGIN_STORAGE_KEY) === "true";
}

function setLocalSession() {
  sessionStorage.setItem(LOCAL_LOGIN_STORAGE_KEY, "true");
}

function clearLocalSession() {
  sessionStorage.removeItem(LOCAL_LOGIN_STORAGE_KEY);
}

async function ensureAdminSession() {
  if (isLocalSessionActive()) {
    switchSection("admin-section");
    await loadPromotion();
    return true;
  }

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session?.user) {
    switchSection("login-section");
    return false;
  }

  const sessionEmail = session.user.email?.toLowerCase();
  if (!sessionEmail || !isAdminEmailAllowed(sessionEmail)) {
    await supabase.auth.signOut();
    showLoginError("✗ This account is not authorized for admin access");
    switchSection("login-section");
    return false;
  }

  switchSection("admin-section");
  await loadPromotion();
  return true;
}

async function login(identifier, password) {
  const normalizedIdentifier = identifier.trim();
  const normalizedEmail = normalizedIdentifier.toLowerCase();

  const isFallbackLogin =
    hasFallbackCredentialsConfigured() &&
    normalizedIdentifier === FALLBACK_ADMIN_LOGIN &&
    password === FALLBACK_ADMIN_PASSWORD;

  if (isFallbackLogin) {
    setLocalSession();
    switchSection("admin-section");
    await loadPromotion();
    return true;
  }

  if (!isAdminEmailAllowed(normalizedEmail)) {
    showLoginError("✗ Invalid credentials");
    return false;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });

  if (error) {
    showLoginError("✗ Invalid credentials");
    return false;
  }

  switchSection("admin-section");
  await loadPromotion();
  return true;
}

async function logout() {
  clearLocalSession();
  await supabase.auth.signOut();
  switchSection("login-section");
  document.getElementById("login-form").reset();
}

async function loadPromotion() {
  try {
    const { data, error } = await supabase.from("promotion").select("*").maybeSingle();

    if (error) throw error;

    if (data) {
      promotionId = data.id;
      document.getElementById("text-he").value = data.text_he;
      document.getElementById("text-ru").value = data.text_ru;
      document.getElementById("text-en").value = data.text_en;
      document.getElementById("promotion-active").checked = data.is_active;
    }
  } catch (error) {
    console.error("Error loading promotion:", error);
    showStatusMessage("Error loading promotion data", "error");
  }
}

async function savePromotion(textHe, textRu, textEn, isActive) {
  if (!promotionId) {
    showStatusMessage("✗ Promotion record was not found", "error");
    return;
  }

  try {
    const payload = {
      text_he: textHe,
      text_ru: textRu,
      text_en: textEn,
      is_active: isActive,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("promotion").update(payload).eq("id", promotionId);

    if (error) throw error;

    showStatusMessage("✓ Promotion updated successfully!", "success");
  } catch (error) {
    console.error("Error saving promotion:", error);
    showStatusMessage("✗ Error saving promotion", "error");
  }
}

function showStatusMessage(message, type) {
  const saveMessage = document.getElementById("save-message");
  saveMessage.textContent = message;
  saveMessage.className = type === "success" ? "success-message" : "error-message";
  saveMessage.classList.remove("hidden");

  setTimeout(() => {
    saveMessage.classList.add("hidden");
  }, 3000);
}

function showLoginError(message) {
  const loginError = document.getElementById("login-error");
  loginError.textContent = message;
  loginError.classList.remove("hidden");

  setTimeout(() => {
    loginError.classList.add("hidden");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", async () => {
  document.body.className = getCurrentTheme();

  if (!isConfigValid()) {
    switchSection("login-section");
    showLoginError("✗ Admin config is invalid. Set admin email list and/or fallback admin credentials.");
    return;
  }

  await ensureAdminSession();

  document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const identifier = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    await login(identifier, password);
  });

  document.getElementById("logout-btn").addEventListener("click", logout);

  document.getElementById("promotion-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const textHe = document.getElementById("text-he").value;
    const textRu = document.getElementById("text-ru").value;
    const textEn = document.getElementById("text-en").value;
    const isActive = document.getElementById("promotion-active").checked;

    await savePromotion(textHe, textRu, textEn, isActive);
  });

  document.getElementById("promotion-active").addEventListener("change", async (event) => {
    if (!promotionId) return;

    const textHe = document.getElementById("text-he").value;
    const textRu = document.getElementById("text-ru").value;
    const textEn = document.getElementById("text-en").value;
    const isActive = event.target.checked;

    await savePromotion(textHe, textRu, textEn, isActive);
  });

  supabase.auth.onAuthStateChange(async (_authEvent, session) => {
    if (isLocalSessionActive()) {
      switchSection("admin-section");
      return;
    }

    if (!session?.user) {
      switchSection("login-section");
      return;
    }

    const sessionEmail = session.user.email?.toLowerCase();
    if (!sessionEmail || !isAdminEmailAllowed(sessionEmail)) {
      await supabase.auth.signOut();
      switchSection("login-section");
      return;
    }

    switchSection("admin-section");
  });
});
