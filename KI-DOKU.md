# KI-Dokumentation: Einsatz von Codex CLI im Website-Projekt

**Autor:** Noe Eberli  
**Projekt:** BMW/EDELWERK Website  
**Werkzeugschwerpunkt:** Codex CLI

## 1. Ausgangslage

In meinem Projekt habe ich KI nicht nur als reines Textwerkzeug verwendet, sondern als praktischen Entwicklungsassistenten. Das Ziel war, eine bestehende Website weiterzuentwickeln: Die Modellübersicht sollte erweitert werden, es sollten passende Fahrzeugbilder entstehen, die Navigation musste vereinfacht werden und für jedes Modell sollte trotzdem eine eigene Detailseite vorhanden sein.

Für diese Arbeit habe ich vor allem mit Codex CLI gearbeitet. Zusätzlich habe ich den integrierten Codex in der VS-Code-IDE als Vergleich betrachtet. Meine Bewertung ist bewusst nicht vollständig neutral: Ich habe eine klare Präferenz für die CLI, weil sie für meine Arbeitsweise direkter, einfacher und übersichtlicher ist.

## 2. Nutzwertanalyse: Codex CLI vs. Codex in VS Code

Für den Vergleich habe ich Kriterien gewählt, die für mein Projekt relevant waren. Es ging nicht darum, welches Werkzeug allgemein objektiv besser ist, sondern welches Werkzeug mir in diesem konkreten Projekt den größeren Nutzen gebracht hat.

Bewertungsskala:  
1 = schwach, 5 = sehr gut

| Kriterium | Gewichtung | Codex CLI | Gewichteter Wert | Codex in VS Code | Gewichteter Wert |
|---|---:|---:|---:|---:|---:|
| Einfache Bedienung | 20 % | 5 | 1.00 | 3 | 0.60 |
| Fokus auf die Aufgabe | 20 % | 5 | 1.00 | 3 | 0.60 |
| Arbeiten über mehrere Dateien | 20 % | 5 | 1.00 | 4 | 0.80 |
| Transparenz der Arbeitsschritte | 15 % | 5 | 0.75 | 3 | 0.45 |
| Kontrolle durch mich als Entwickler | 15 % | 5 | 0.75 | 4 | 0.60 |
| Integration in den Editor | 10 % | 3 | 0.30 | 5 | 0.50 |
| **Gesamtwert** | **100 %** |  | **4.80** |  | **3.55** |

Aus dieser Nutzwertanalyse ist für mich klar ersichtlich, warum ich Codex CLI im Projekt bevorzugt habe. Die VS-Code-Integration ist zwar gut in den Editor eingebettet, aber genau das ist für mich nicht immer ein Vorteil. Ich arbeite bei größeren Aufgaben lieber in einem klaren Ablauf: Anweisung geben, Dateien ändern lassen, Ergebnis prüfen, nachkorrigieren.

Codex CLI hat für mich vor allem deshalb gewonnen, weil es weniger Ablenkung erzeugt. Ich muss nicht zwischen Chatfenster, Sidebar, Editorzustand und Erweiterungsoberfläche wechseln. Stattdessen bleibt die Arbeit sehr direkt und nachvollziehbar.

## 3. Begründung der Werkzeugwahl

Ich habe im Projekt Codex CLI verwendet, weil es besser zu meiner Arbeitsweise passt. Ich wollte nicht nur einzelne Codezeilen erklären lassen, sondern eine komplette Website strukturell weiterentwickeln. Dafür musste die KI mehrere Dateien lesen, Inhalte verstehen, Bilder generieren, HTML anpassen, CSS berücksichtigen und am Ende prüfen, ob die lokalen Links noch funktionieren.

Für solche Aufgaben ist die CLI aus meiner Sicht stärker als die Integration in VS Code. Die CLI wirkt wie ein eigenständiger technischer Assistent. Ich kann eine Aufgabe relativ hochstufig formulieren und Codex arbeitet sich dann durch das Projekt. Gleichzeitig sehe ich, welche Dateien geändert wurden und welche Prüfungen durchgeführt wurden.

Ein weiterer Grund ist die Einfachheit. Die CLI zwingt mich, klar zu formulieren, was ich will. Dadurch entstehen bessere Prompts und klarere Ergebnisse. Wenn etwas nicht stimmt, kann ich direkt nachkorrigieren. Genau das ist im Projekt passiert: Zuerst wurden die einzelnen Fahrzeugseiten aus der Navbar entfernt. Danach habe ich gemerkt, dass ich zwar keine Tabs in der Navbar will, aber trotzdem für jedes Modell eine eigene Detailseite brauche. Diese Korrektur konnte ich direkt formulieren, und Codex hat die Struktur entsprechend angepasst.

## 4. Einsatz der KI im Projekt

Die KI wurde in mehreren Bereichen eingesetzt:

### 4.1 Erweiterung der Modellübersicht

Die Website hatte ursprünglich nur wenige Fahrzeuge. Mit Codex habe ich die Modellübersicht auf zehn verschiedene BMW-Modelle und Jahrgänge erweitert. Dazu gehörten unter anderem:

- 2026 BMW M3 Competition xDrive
- 2025 BMW X6 M Competition
- 2024 BMW M2 Coupe
- 2023 BMW M340i xDrive Touring
- 2022 BMW M5 CS
- 2021 BMW M4 Competition Coupe
- 2020 BMW M8 Competition Gran Coupe
- 2019 BMW Z4 M40i
- 2018 BMW i8 Coupe
- 2017 BMW M760Li xDrive

Codex hat nicht nur die Texte ergänzt, sondern auch die HTML-Struktur angepasst. Die Modellkarten wurden so erweitert, dass jedes Fahrzeug ein Bild, eine Kurzbeschreibung, technische Eckdaten und einen Link zur Detailseite hat.

### 4.2 Generierung und Einbindung von Bildern

Ein wichtiger Teil des Projekts war die automatische Bildgenerierung. Ich habe Codex angewiesen, für jedes Modell passende Fahrzeugbilder zu erzeugen. Die Bilder sollten einheitlich wirken: dunkle Studioaufnahme, hochwertiger Look, Fahrzeug im Vordergrund, keine störenden Texte, keine Kennzeichen und keine Wasserzeichen.

Codex hat die Bilder generiert und danach in den Projektordner `Assets` kopiert. Anschließend wurden die Bilder in der Website eingebunden. Dadurch war der Prozess nicht nur theoretisch, sondern vollständig praktisch: Die KI hat Assets erstellt und diese direkt in den bestehenden Code integriert.

### 4.3 Navigation und Seitenstruktur

Ein weiterer wichtiger Punkt war die Navigation. Ich wollte nicht für jedes Fahrzeug einen eigenen Tab in der Navbar haben, weil das die Navigation überladen hätte. Deshalb wurde die Navbar auf `Home` und `Models` reduziert.

Gleichzeitig war mir aber wichtig, dass jedes Fahrzeug trotzdem eine eigene Detailseite besitzt. Nachdem ich das korrigiert hatte, hat Codex für jedes Modell eine eigene Seite angelegt. Die Modellübersicht verlinkt jetzt auf diese Detailseiten, während die Navbar trotzdem schlank bleibt.

Das ist ein gutes Beispiel dafür, wie ich KI im Projekt verwendet habe: Die KI setzt etwas um, ich prüfe das Ergebnis, erkenne einen Punkt, der nicht meiner Vorstellung entspricht, und gebe eine klare Korrektur. Danach wird das Ergebnis verbessert.

## 5. Beispiele für die konkrete Nutzung der KI

### Beispiel 1: Bildgenerierung

Ich habe Codex sinngemäß angewiesen:

> Erstelle passende Bilder für zehn verschiedene BMW-Modelle und binde sie in die Website ein.

Die KI hat daraus konkrete Bild-Prompts erstellt, die Bilder generiert und anschließend die Dateien im Projekt eingebunden. Danach wurden die HTML-Dateien so angepasst, dass die Modellkarten die neuen Bilder verwenden.

### Beispiel 2: Änderung der Navbar

Meine Anforderung war:

> Entferne die einzelnen Tabs für jedes Auto aus der Navbar und mache nur noch einen Models-Tab.

Codex hat daraufhin die Navigation auf allen Seiten angepasst. Später habe ich ergänzt, dass trotzdem jede Modellseite separat vorhanden sein muss. Dadurch entstand die endgültige Struktur: einfache Navbar, aber eigene Detailseiten für alle Modelle.

### Beispiel 3: Validierung

Codex wurde auch verwendet, um nach den Änderungen Prüfungen durchzuführen. Es wurde kontrolliert, ob:

- alle lokalen Bildpfade existieren,
- alle Detailseiten verlinkt sind,
- die Navbar überall nur `Home` und `Models` enthält,
- die JavaScript-Datei syntaktisch korrekt ist,
- keine offensichtlichen fehlerhaften Links entstanden sind.

Diese Prüfungen sind für mich wichtig, weil KI nicht nur Code erzeugen soll. Sie soll auch helfen, die Qualität der Änderung zu überprüfen.

## 6. Erfahrungen und Erkenntnisse

Meine wichtigste Erkenntnis ist, dass KI besonders stark ist, wenn man sie als aktiven Arbeitsassistenten nutzt und nicht nur als Chatbot. Codex CLI konnte im Projekt mehrere Schritte miteinander verbinden: verstehen, planen, umsetzen, Dateien ändern, Assets erzeugen und prüfen.

Gleichzeitig bleibt meine Rolle als Entwickler wichtig. Die KI trifft nicht automatisch immer die perfekte Entscheidung. Ein Beispiel war die Frage mit den Detailseiten. Codex hatte zuerst die einzelnen Fahrzeugseiten aus der Navigation entfernt und die Modellseite in den Vordergrund gestellt. Das war teilweise richtig, aber nicht vollständig das, was ich wollte. Erst durch meine Korrektur wurde die Lösung richtig.

Das zeigt für mich, dass KI sehr gut als Beschleuniger funktioniert. Sie nimmt mir repetitive Arbeit ab und erstellt eine brauchbare Basis. Aber ich muss weiterhin beurteilen, ob das Ergebnis fachlich, gestalterisch und inhaltlich zu meinem Ziel passt.

## 7. Stärken der KI

Die größten Stärken der KI in meinem Projekt waren:

- schnelle Umsetzung über mehrere Dateien hinweg,
- automatische Generierung von strukturiertem HTML,
- Unterstützung bei Design- und Strukturentscheidungen,
- Erstellung und Einbindung von Bildassets,
- schnelle Anpassung nach Feedback,
- automatische Prüfungen nach der Umsetzung.

Besonders stark war Codex CLI dort, wo mehrere Schritte zusammengehören. Ein normaler Chat hätte mir vielleicht erklärt, was ich tun soll. Codex CLI konnte es direkt im Projekt machen.

## 8. Schwächen der KI

Trotzdem gab es auch Schwächen. Die KI versteht meine Absicht nicht immer vollständig beim ersten Versuch. Wenn ich ungenau formuliere, kann das Ergebnis zwar technisch korrekt sein, aber trotzdem nicht genau meiner Vorstellung entsprechen.

Außerdem muss man generierte Inhalte kontrollieren. Bei Texten kann die KI zu neutral oder zu glatt formulieren. Bei Code kann sie eine Struktur wählen, die logisch wirkt, aber nicht zur gewünschten Benutzerführung passt. Bei Bildern muss man prüfen, ob sie zum Stil passen und ob sie korrekt eingebunden wurden.

Eine weitere Schwäche ist, dass KI manchmal zu viel auf einmal ändert. Deshalb ist es wichtig, nach jeder größeren Änderung zu prüfen, welche Dateien betroffen sind. Ich sehe die KI deshalb nicht als Ersatz für Kontrolle, sondern als Werkzeug, das gute Ergebnisse liefert, wenn ich es klar führe.

## 9. Dokumentation mit KI und menschlicher Nacharbeit

Ich habe Codex CLI auch verwendet, um eine Baseline für die Dokumentation meiner KI-Nutzung zu erstellen. Das bedeutet: Die KI kann einen ersten Entwurf schreiben, der beschreibt, wie ich sie verwendet habe und welche Schritte im Projekt passiert sind.

Diese Baseline ist aber nicht automatisch die finale Dokumentation. Ich überarbeite danach den Text menschlich. Wenn etwas nicht meiner Meinung entspricht, schreibe ich es um. Wenn etwas fehlt, ergänze ich es. Wenn ein Abschnitt zu neutral klingt, formuliere ich ihn persönlicher.

Für mich ist das ein sinnvoller Workflow: KI erstellt schnell eine erste Struktur, und ich mache daraus eine Dokumentation, die wirklich zu meiner Sicht passt. Dadurch spare ich Zeit, ohne meine eigene Verantwortung abzugeben.

## 10. Fazit

Für mein Projekt war Codex CLI das bessere Werkzeug. Die Nutzwertanalyse zeigt klar, dass die CLI für meine Anforderungen mehr Nutzen bringt als die VS-Code-Integration. Sie ist für mich einfacher, direkter und fokussierter.

Die KI wurde im Projekt praktisch eingesetzt: Sie hat Bilder generiert, Dateien angepasst, Modellseiten erstellt, Designentscheidungen unterstützt und Prüfungen durchgeführt. Gleichzeitig musste ich als Mensch weiterdenken, korrigieren und entscheiden.

Mein Fazit ist deshalb klar: Codex CLI ist für mich nicht nur ein KI-Chat, sondern ein produktives Entwicklungswerkzeug. Es hilft mir, schneller zu arbeiten, bessere Grundlagen zu erstellen und trotzdem die Kontrolle über das Ergebnis zu behalten.
