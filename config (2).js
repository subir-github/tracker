// ─────────────────────────────────────────────────────────────────
//  Task Dashboard — Configuration File
//  Edit the values below, then save this file.
//  The dashboard reads these on every page load.
// ─────────────────────────────────────────────────────────────────

window.DASHBOARD_CONFIG = {

  // ── Google Sheets ──────────────────────────────────────────────
  // Your Google Sheet ID (from the URL:
  //   https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit)
  sheetId: "",

  // API Key from Google Cloud Console (read-only access)
  apiKey: "",

  // Name of the tab/sheet inside the spreadsheet
  sheetTab: "Sheet1",

  // OAuth 2.0 Access Token (required for edit write-back)
  // Get one at: https://developers.google.com/oauthplayground
  //   → select scope: https://www.googleapis.com/auth/spreadsheets
  //   → Authorize → Exchange for tokens → copy "Access token" (ya29....)
  // Note: tokens expire in ~1 hour.
  oauthToken: "",

  // ── EmailJS (for developer notifications) ──────────────────────
  // Sign up free at https://emailjs.com (200 emails/month)
  emailjsPublicKey:  "",
  emailjsServiceId:  "",
  emailjsTemplateId: "",
  emailjsSenderName: "",   // e.g. "Subir — Team Lead"

  // ── Team Members (name → email mapping) ────────────────────────
  // Names must match exactly what's in the Google Sheet's
  // Developers / QA columns (case-sensitive).
  team: [
    // { name: "Raj M.",    email: "raj@example.com"   },
    // { name: "Anika T.",  email: "anika@example.com" },
    // { name: "Priya S.",  email: "priya@example.com" },
    // { name: "Sam K.",    email: "sam@example.com"   },
  ],

};
