# Wireframe Mobile

**Breakpoint:** bis ca. 680 px Breite  
**Zielgerät:** Smartphone im Hochformat  
**Seitentypen:** Startseite, Modellübersicht, Detailseite

## Grundprinzip

Auf Mobile wird die Website einspaltig aufgebaut. Die Navigation bleibt kurz und enthält nur `Home` und `Models`. Bilder stehen immer oberhalb oder direkt neben dem passenden Inhalt, aber nie in komplexen Mehrspaltenlayouts. Karten, Prozessschritte und Detailbereiche werden untereinander gestapelt.

## Startseite

```text
┌──────────────────────────────┐
│ Logo                         │
│ Home   Models                │
├──────────────────────────────┤
│                              │
│ Hero-Bild                    │
│ Fahrzeug im Studio           │
│                              │
│ EDELWERK                     │
│ Kurzbeschreibung             │
│ [View models]                │
│ [Build process]              │
├──────────────────────────────┤
│ BMW-only lineup              │
│ Ten builds, one standard.    │
│ Beschreibung                 │
├──────────────────────────────┤
│ Models: 10                   │
│ Model span: 10 yrs           │
│ Body styles: 6               │
│ Studio: Zurich               │
├──────────────────────────────┤
│ Featured Model Card          │
│ Bild                         │
│ Titel                        │
│ Text                         │
│ Open details                 │
├──────────────────────────────┤
│ Weitere Featured Cards       │
│ untereinander                │
├──────────────────────────────┤
│ Build process                │
│ 01 Select                    │
│ 02 Specify                   │
│ 03 Handover                  │
├──────────────────────────────┤
│ CTA: View models             │
├──────────────────────────────┤
│ Footer                       │
└──────────────────────────────┘
```

## Modellübersicht

```text
┌──────────────────────────────┐
│ Logo                         │
│ Home   Models                │
├──────────────────────────────┤
│ Models                       │
│ Einführungstext              │
├──────────────────────────────┤
│ Modellkarte 1                │
│ ┌──────────────────────────┐ │
│ │ Fahrzeugbild             │ │
│ └──────────────────────────┘ │
│ Jahr / Rolle                 │
│ Modellname                   │
│ Kurzbeschreibung             │
│ Year / Engine / Setup        │
│ [Open details]               │
├──────────────────────────────┤
│ Modellkarte 2                │
├──────────────────────────────┤
│ ... bis Modellkarte 10       │
├──────────────────────────────┤
│ How it works                 │
│ Pick the base                │
│ Lock the finish              │
│ Confirm delivery             │
└──────────────────────────────┘
```

## Detailseite

```text
┌──────────────────────────────┐
│ Logo                         │
│ Home   Models                │
├──────────────────────────────┤
│ Modellrolle / Jahr           │
│ Modellname                   │
│ Beschreibung                 │
│ [Contact]                    │
│ [View stats]                 │
│ [All models]                 │
├──────────────────────────────┤
│ Großes Fahrzeugbild          │
├──────────────────────────────┤
│ Drivetrain specs             │
│ Year                         │
│ Engine                       │
│ Acceleration                 │
│ Power                        │
│ Setup                        │
│ Build price                  │
├──────────────────────────────┤
│ Design                       │
│ Beschreibung                 │
│ Galeriebild                  │
├──────────────────────────────┤
│ Purchase setup               │
│ Package Card                 │
├──────────────────────────────┤
│ Contact                      │
│ Email                        │
│ Phone                        │
│ Studio                       │
│ Hours                        │
└──────────────────────────────┘
```

## Mobile-Regeln

- Keine mehrspaltigen Kartenbereiche.
- Buttons nehmen die volle Breite ein.
- Text muss ohne horizontales Scrollen lesbar bleiben.
- Bilder behalten ein stabiles Seitenverhältnis.
- Die Navbar bleibt kurz, damit sie nicht umbrechen muss.
