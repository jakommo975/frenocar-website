# FRENOCAR Website Specification

## Purpose
Showcase Frenocar as a versatile manufacturer and renovator of friction materials, spare parts supplier, and engineering company — capable of handling everything from standard serial production to highly custom, atypical industrial projects.

## Key Messages

### 1. Friction Materials — Production & Renovation
The core message: Frenocar can produce and renovate **all kinds of friction materials**, no matter the scale or complexity.

**Serial production (standard vehicles & machinery):**
- Brake pads for cars, trucks, and tractors
- Brake shoes and brake linings
- Clutches for serially produced vehicles (passenger cars, tractors, utility vehicles)

**Atypical & custom work:**
- Friction materials for non-standard, heavy industrial machines
- Custom clutches for equipment that is no longer in serial production
- Renovation of worn-out clutches and brake components to extend their lifespan
- Past projects include producing and renovating clutches for large ships

The website should communicate that whether a customer needs a standard brake pad for a Zetor tractor or a one-off clutch for a 40-year-old industrial press or a ship, Frenocar can handle it.

### 2. Spare Parts for Agricultural, Garden & Forestry Machinery
A major focus of the company and a key section of the website.

**Brands & categories:**
- Zetor (agricultural machinery)
- Tera, Agzat (garden machinery)
- LKT (forestry machinery)

**Spare parts catalog:**
The website will include a catalog of all spare parts currently in production. Beyond the catalog, the site should clearly communicate that Frenocar can manufacture additional parts based on customer needs — the catalog is not the limit.

**Primary audience for this section: retailers**
The main target clients are **retail stores** that sell spare parts for agricultural, forestry, and garden machinery. There are many such stores across the market, and the website should speak directly to them as wholesale/supply partners — not just end users.

### 3. Freno Flux Engine
Axial flux electric motor designed and manufactured in-house — compact, efficient, high-quality engineering.

**Note:** This page will be a placeholder for now. The content and design will be handled by an external marketing partner at a later stage. The page should exist in the site navigation but will be filled in later.

### 4. Metal Fabrication & Engineering
Frenocar has the machines and expertise to produce all kinds of metal components — from small precision parts to heavy-duty industrial pieces.

**Capabilities:**
- CNC machining (turning, milling)
- Plasma and oxy-acetylene cutting
- Tool manufacturing and sharpening
- Powder metallurgy (sintered components)

**Gallery / showcase:**
The website should include a small gallery or showcase of completed metalworking projects to demonstrate the range and quality of work.

**Notable client: Palfinger**
Frenocar supplies wire sheaves (pulley wheels for wire rope) used in crane systems on large ships — specifically for Palfinger, a major international manufacturer of marine cranes, lifeboats/rescue boats, and other heavy machinery. This is a strong reference that demonstrates the company's ability to deliver precision components meeting demanding industrial standards.

**Primary audience for this section:**
- Large manufacturing companies that need a reliable supplier of custom metal components (B2B)
- Smaller businesses or individuals who need one-off or small-batch metalwork
- The Palfinger example sets the bar — if Frenocar can deliver for a company of that caliber, they can handle any metalworking job

## Target Audience
- Owners and operators of agricultural, garden, and forestry machinery
- Retail stores selling spare parts (wholesale/supply partners)
- Automotive repair shops and fleet managers
- Industrial companies needing custom or hard-to-find friction components
- Large manufacturers needing a reliable metalworking supplier (e.g. Palfinger)
- Engineers and companies interested in axial flux motor technology

## Certifications
- **ISO Quality Management System** — important to display on the website, as it matters to large B2B clients (e.g. Palfinger). The ISO certificate image is available at `public/images/ISO_cert.png`. Should be visible on the main page or in relevant sections (e.g. metalworking, about us).

## Design & Branding

**Design manual:** Located at `design_manual/` folder. All fonts, colors, and visual guidelines must be strictly followed.

**Fonts (from design manual):**
- **Roboto Serif** — used for headings (NADPIS). Bold weight, uppercase for main headings, regular case for subheadings.
- **Roboto** — used for body text (regulárny text / body).
- Typography hierarchy:
  - Main heading: 2x base size (e.g. 26pt), bold, uppercase, line height = base + 4pt (e.g. 30pt)
  - Subheading: 1.5x base size (e.g. 17pt), bold, line height = base + 3pt (e.g. 20pt)
  - Body text: 1x base size (e.g. 13pt), line height = base + 6pt (e.g. 19pt)
- Italic can be used for emphasis, but avoid combining bold + italic simultaneously.

**Brand color palette (exact hex values from design manual):**
- **Primary blue (Primárna modrá):** `#294C66` — Pantone 7477 C
- **Secondary dark red (Sekundárna tmavo-červená):** `#990027` — Pantone 187 C
- **Tertiary gray (Terciárna sivá):** `#DCE4EA`
- **Gradient option:** `#294C66` to `#0C2E3E` (dark blue gradient)
- **White** and **light blue-gray** (`#DCE4EA`) for backgrounds

**Brand code element — the rounded rectangle (Štvorec ako brand kód):**
The logo's border/frame shape (rounded rectangle) is a key brand element. It can be used as a decorative visual element across the website:
- As an outline frame (stroke only) — should represent at least 1/3 of a visual
- Filled with photography — when photo is the main element, it should be 2/3 of the visual; when secondary, 1/3

**Logo usage rules (from design manual):**
- Minimum width: 200px for digital/display use
- Clear zone: at least 15% of logo size on all sides
- Restrictions: Do NOT rotate, tilt, stretch, blur, or use in small/unreadable sizes
- Do NOT use colors outside the defined brand palette
- Approved logo color combinations (page 13-14):
  - White logo on red background (primary)
  - Navy blue logo on white background
  - White logo on navy blue background
  - Navy blue logo on light gray background
  - Red logo on white background (secondary)
  - Red logo on navy background (secondary)
  - Red logo on light gray background (secondary)

**Brochure reference:** Existing Frenocar brochure created by the marketing company serves as design inspiration.

**Signature card style (from brochure — important for brand identity):**
Cards have a distinctive shape — **heavily rounded corners** (pill-like/stadium rounding). This is a signature visual element:
- Service cards with dark navy background, white text, large rounded corners
- Accent/highlight cards in brand red with white text, same rounded style
- Stat cards (e.g. "27+ rokov na trhu", "100% spokojnosť") with large bold numbers
- Contact/CTA cards with the red background
- Testimonial cards with star ratings
- Image cards with rounded corners

**Layout patterns (from brochure + design manual):**
- Two-column card layouts for services
- Big hero images with overlaid logo and text
- Bullet lists with small icons inside service cards
- Stats displayed as large bold numbers with small labels underneath
- Customer testimonials with 5-star ratings
- The brand rectangle (rounded square from logo) used as decorative framing element
- Text left-aligned with sufficient contrast on photography backgrounds
- Photography can be placed inside the brand rectangle shape

**Logo:**
- Primary logo: `public/images/frenocar_logo.png` — wide/horizontal format
- Square variant: `public/images/frenocar_logo_square.png` — square format (for favicons, social, etc.)
- The logo can be used flexibly depending on context — e.g. white-only letters on a dark background (footer, hero sections), or the full red-background version where appropriate. The priority is that it looks clean and fits the surrounding design.

**Available product/workshop images:**
- `brake_shoes.jpg` — brake shoes
- `break_pads_large.jpg` — brake pads
- `clutch.jpg` — clutch
- `clutch_nice.jpg` — clutch (detail)
- `metal_ceramics.jpg` — metal ceramics
- `cnc_lathe.jpg` — CNC lathe machine
- `cnc_milling_machine.jpg` — CNC milling machine
- `cnc_milling_machine_2.jpg` — CNC milling machine (2)
- `plasma_cutting.jpg` — plasma cutting
- `milling_tools.jpg` — milling tools
- `thread_taps.jpg` — thread taps
- `ISO_cert.png` — ISO certification

## Tech Stack
- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Approach:** Mobile-first responsive design

## Tone
- Professional but approachable (family business, not a faceless corporation)
- Confidence in craftsmanship and versatility
- Emphasis on "we can solve your problem" — from serial parts to one-off custom jobs
