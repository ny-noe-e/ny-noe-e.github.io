# Wireframe Laptop

**Breakpoint:** ca. 681 px bis 1180 px  
**Zielgerät:** Laptop oder kleiner Desktop  
**Seitentypen:** Startseite, Modellübersicht, Detailseite

## Grundprinzip

Auf Laptop-Breite nutzt die Website bereits mehr Fläche als Mobile, bleibt aber vorsichtig mit zu breiten Layouts. Die Startseite und Detailseiten können zweispaltige Bereiche verwenden. Die Modellübersicht nutzt zwei Spalten, damit die zehn Fahrzeuge gut vergleichbar bleiben.

## Startseite

```text
┌────────────────────────────────────────────────────┐
│ Logo                                  Home Models  │
├────────────────────────────────────────────────────┤
│                                                    │
│ Hero-Bild über volle Breite                        │
│                                                    │
│ EDELWERK                                           │
│ Kurzbeschreibung                                   │
│ [View models] [Build process]                      │
├────────────────────────────────────────────────────┤
│ Intro-Text                                         │
│                                                    │
│ ┌──────────┐ ┌──────────┐                          │
│ │ Models   │ │ 10 yrs   │                          │
│ └──────────┘ └──────────┘                          │
│ ┌──────────┐ ┌──────────┐                          │
│ │ 6 styles │ │ Zurich   │                          │
│ └──────────┘ └──────────┘                          │
├────────────────────────────────────────────────────┤
│ Current models                                     │
│ Text links                                         │
│                                                    │
│ ┌────────────────────┐ ┌────────────────────┐      │
│ │ Featured Card      │ │ Featured Card      │      │
│ │ Bild + Text        │ │ Bild + Text        │      │
│ └────────────────────┘ └────────────────────┘      │
│ ┌────────────────────┐ ┌────────────────────┐      │
│ │ Featured Card      │ │ Featured Card      │      │
│ └────────────────────┘ └────────────────────┘      │
├────────────────────────────────────────────────────┤
│ Prozess: 3 Karten nebeneinander oder gestapelt     │
├────────────────────────────────────────────────────┤
│ CTA                                                │
└────────────────────────────────────────────────────┘
```

## Modellübersicht

```text
┌────────────────────────────────────────────────────┐
│ Logo                                  Home Models  │
├────────────────────────────────────────────────────┤
│ Models                                             │
│ Einführung                                         │
├────────────────────────────────────────────────────┤
│ ┌────────────────────┐ ┌────────────────────┐      │
│ │ Modellkarte 1      │ │ Modellkarte 2      │      │
│ │ Bild               │ │ Bild               │      │
│ │ Text + Specs       │ │ Text + Specs       │      │
│ │ Open details       │ │ Open details       │      │
│ └────────────────────┘ └────────────────────┘      │
│ ┌────────────────────┐ ┌────────────────────┐      │
│ │ Modellkarte 3      │ │ Modellkarte 4      │      │
│ └────────────────────┘ └────────────────────┘      │
│ ...                                                │
│ Insgesamt 10 Modellkarten in 2 Spalten             │
├────────────────────────────────────────────────────┤
│ How it works: 3 Prozesskarten                      │
└────────────────────────────────────────────────────┘
```

## Detailseite

```text
┌────────────────────────────────────────────────────┐
│ Logo                                  Home Models  │
├────────────────────────────────────────────────────┤
│ ┌──────────────────────┐ ┌──────────────────────┐  │
│ │ Modellrolle / Jahr   │ │ Fahrzeugbild         │  │
│ │ Modellname           │ │                      │  │
│ │ Beschreibung         │ │                      │  │
│ │ Buttons              │ │                      │  │
│ └──────────────────────┘ └──────────────────────┘  │
├────────────────────────────────────────────────────┤
│ Drivetrain specs                                   │
│ ┌────────┐ ┌────────┐                              │
│ │ Year   │ │ Engine │                              │
│ └────────┘ └────────┘                              │
│ ┌────────┐ ┌────────┐                              │
│ │ Power  │ │ Setup  │                              │
│ └────────┘ └────────┘                              │
├────────────────────────────────────────────────────┤
│ Design + großes Bild                               │
├────────────────────────────────────────────────────┤
│ Purchase setup + Package Card                      │
├────────────────────────────────────────────────────┤
│ Contact-Tabelle                                    │
└────────────────────────────────────────────────────┘
```

## Laptop-Regeln

- Modellübersicht mit zwei Spalten.
- Hero- und Detailbereiche dürfen zweispaltig sein.
- Karten sollen gleichmäßig wirken und nicht zu breit werden.
- Textbereiche bleiben auf angenehme Zeilenlänge begrenzt.
- Navbar bleibt unverändert: nur `Home` und `Models`.
