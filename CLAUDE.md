# glicemiadistanza.it — Documentation Guidelines

This is a VitePress documentation site in Italian for the Facebook group "Diabete, glicemie a distanza e nuove tecnologie". All content is written for non-technical diabetes patients.

## Writing style

- **Language**: Italian, informal **"tu"** address. No formal "Lei" register.
- **Audience**: Non-technical patients. Keep explanations simple; step-by-step is always preferred.
- **Technical terms**: Diabetes and device terminology (CGM, Nightscout, xDrip+, bolus, etc.) may remain as-is.
- **Structure**: Numbered lists for sequential steps; bullet lists for options or configuration fields.
- **Headings**:
  - `#` — page title only
  - `## 1. Title` — major sections, always numbered
  - `### Subsection` — sub-topics, no number required
- **Notes and warnings**: Plain Markdown blockquotes with an emoji prefix. Do NOT use VitePress custom containers (`::: warning`, `::: info`).
  - `> ⚠️ **Attenzione**: ...`
  - `> ℹ️ **Nota**: ...`
- **UI labels and button names**: **bold** — e.g. **Impostazioni**, **CREA**, **Salva**
- **App and product names**: plain text, standard capitalization — xDrip+, Nightscout, Dexcom, Juggluco, Sugarmate
- **URLs**: inline code — e.g. `https://example.com`
- **Technical values, parameters, version strings**: inline code — e.g. `e2-micro`, `2023.09.17`, `.apk`
- **Terminal/shell commands**: fenced code block with language tag ` ```bash `
- **Images**: `![](images/<doc-basename>/image_NNN.png)` — no alt text; one blank line before and after each image
- **Frontmatter**: none on documentation pages
- **Horizontal rules** (`---`): optional between `##` sections

## Abbott brand-name obfuscation (legal requirement)

Abbott has raised IP complaints. Never write Abbott brand names in full. Always use the obfuscated forms:

| Do NOT write | Write instead |
|---|---|
| FreeStyle Libre, Freestyle Libre | FSL |
| FreeStyle Libre 2, Freestyle Libre 2 | FSL2 |
| FreeStyle Libre 3, Freestyle Libre 3 | FSL3 |
| LibreView, Libre View | LView |
| LibreLink, Libre Link, LibreLinkUp | LLink |

When a brand name appears as a parenthetical clarification, remove only the brand name and keep the descriptor:
- `FSL (FreeStyle Libre, sensore ...)` → `FSL (sensore ...)`
- `FSL2 (FreeStyle Libre 2, sensore glicemico)` → `FSL2 (sensore glicemico)`

## Image path convention

Images live in per-doc subfolders to avoid naming conflicts:

```
docs/documentation/<section>/images/<doc-basename>/image_NNN.png
```

Reference in markdown (relative to the .md file):
```
![](images/<doc-basename>/image_NNN.png)
```
