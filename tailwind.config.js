/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-card": "#ffffff",
        "on-surface-variant": "#475569",
        "primary-fixed": "#fef08a",
        "outline-variant": "#cbd5e1",
        "on-surface": "#0f172a",
        "outline": "#94a3b8",
        "on-tertiary": "#000000",
        "on-secondary": "#ffffff",
        "tertiary": "#eab308",
        "on-primary-container": "#0f172a",
        "on-primary": "#000000",
        "surface-bright": "#f8fafc",
        "secondary": "#475569",
        "on-background": "#0f172a",
        "surface-container": "#ffffff",
        "border-subtle": "rgba(0, 0, 0, 0.08)",
        "primary": "#facc15",
        "surface-elevated": "#f1f5f9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f8fafc",
        "primary-container": "#fef08a",
        "error": "#ef4444",
        "success-green": "#10b981",
        "surface": "#ffffff",
        "background": "#fafafa"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "16px",
        "section-gap": "48px",
        "container-max": "1280px"
      },
      fontFamily: {
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "technical-data": ["JetBrains Mono", "monospace"],
        "display-hero": ["Space Grotesk", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-caps": ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
}
