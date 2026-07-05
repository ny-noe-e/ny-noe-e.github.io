# Styleguide

## Projekt

Dieser Styleguide beschreibt die visuelle Grundlage der EDELWERK BMW Website. Die Seite nutzt einen dunklen, hochwertigen Automotive-Look mit warmen Akzenten, ruhiger Typografie und klaren Kartenlayouts.

## Farbpalette

Die wichtigsten Farben stammen aus den CSS-Variablen in `assets/css/styles.css`.

| Name | CSS-Variable | Wert | Verwendung |
|---|---|---:|---|
| Haupttext | `--ink` | `#f4f0e8` | Primärer Text auf dunklem Hintergrund |
| Sekundärtext | `--muted` | `#aaa49a` | Beschreibungen, Fließtext, weniger wichtige Informationen |
| Seitenhintergrund | `--paper` | `#090a0d` | Grundfläche der Website |
| Fläche | `--surface` | `#12151b` | Größere Inhaltsbereiche |
| Starke Fläche | `--surface-strong` | `#181c24` | Karten, Tabellen, hervorgehobene Container |
| Linien | `--line` | `#2c313a` | Rahmen, Trennlinien, Kartenkonturen |
| Akzent | `--accent` | `#d48a45` | Primäre Buttons, Akzentdetails |
| Starker Akzent | `--accent-strong` | `#f0a85f` | Hover-Zustände, Links, Labels |
| Stahlblau | `--steel` | `#8aa0b6` | Kühle Kontrastfarbe, Lichtakzente |
| Stahlblau weich | `--steel-soft` | `rgba(138, 160, 182, 0.16)` | Dezente Hintergründe und Effekte |

## Farbwirkung

- Die Website ist grundsätzlich dunkel.
- Warme Akzentfarben erzeugen den Premium- und Tuning-Charakter.
- Stahlblau wird nur zurückhaltend eingesetzt, damit die Seite nicht einfarbig wirkt.
- Karten und Sektionen unterscheiden sich über dunkle Flächen, Rahmen und leichte Schatten.

## Typografie

### Schriftfamilie

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Die Schrift ist modern, technisch und gut lesbar. Falls `Inter` nicht verfügbar ist, greifen Systemschriften.

### Grundtext

| Element | Wert |
|---|---|
| Zeilenhöhe | `1.5` |
| Standardfarbe | `--ink` |
| Sekundärfarbe | `--muted` |
| Ausrichtung | linksbündig |

### Überschriften

| Element | Größe | Einsatz |
|---|---|---|
| `h1` | `clamp(3.4rem, 9vw, 7.4rem)` | Große Hero-Titel wie `EDELWERK` |
| `h2` | `clamp(2rem, 5vw, 4.2rem)` | Hauptabschnitte |
| `h3` | `1.08rem` | Karten- und Prozessüberschriften |
| Modellkarten-`h2` | `clamp(1.35rem, 2vw, 2.2rem)` | Fahrzeugnamen in der Modellübersicht |

Auf Mobile werden die großen Titel reduziert, damit sie nicht aus dem Layout laufen.

## Buttons

### Primärer Button

Verwendung:

- Hauptaktionen
- `View models`
- `Open details`
- `Contact`

Stil:

```css
background: var(--accent);
color: #090a0d;
border-radius: 8px;
min-height: 46px;
font-weight: 850;
```

### Sekundärer Button

Verwendung:

- Nebenaktionen
- `Build process`
- `View stats`
- `All models`

Stil:

- dunkler transparenter Hintergrund
- heller Rahmen
- weiße Schrift

## Navigation

Die Navigation bleibt bewusst kurz:

```text
Home   Models
```

Wichtig:

- Keine einzelnen Fahrzeuglinks in der Navbar.
- Alle Fahrzeuge sind über `models.html` erreichbar.
- Detailseiten behalten dieselbe Navbar, damit die Seite ruhig und konsistent bleibt.

## Layoutsystem

### Mobile

- einspaltig
- Buttons volle Breite
- Karten untereinander
- Bilder mit stabilem Seitenverhältnis

### Laptop

- Modellübersicht mit zwei Spalten
- Detailseiten können zweispaltig sein
- Inhalte bleiben kompakt und gut lesbar

### Desktop

- Modellübersicht mit drei Spalten
- Hero-Bereich groß und bildlastig
- Detailseiten mit Text links und Bild rechts
- Specs in mehrspaltigen Karten

## Bildstil

Die Fahrzeugbilder folgen einem einheitlichen Stil:

- dunkle Studioaufnahme
- hochwertiger Automotive-Look
- Fahrzeug klar sichtbar
- keine störenden Texte
- keine Kennzeichen im Fokus
- keine Wasserzeichen

## Komponenten

### Modellkarte

Eine Modellkarte besteht aus:

1. Fahrzeugbild
2. Rolle und Jahr
3. Modellname
4. Kurzbeschreibung
5. drei technische Eckdaten
6. Button `Open details`

### Detailseite

Eine Detailseite besteht aus:

1. Hero mit Modellname und Fahrzeugbild
2. technische Specs
3. Designabschnitt
4. Purchase-Setup
5. Kontaktbereich

## Gestaltungsprinzipien

- dunkel, ruhig und hochwertig
- klare Hierarchie
- keine überladene Navigation
- große Bilder als wichtiges Gestaltungselement
- Karten mit maximal `8px` Border-Radius
- konsistente Abstände und stabile Bildformate
- mobile zuerst gut lesbar, auf Desktop stärker visuell
