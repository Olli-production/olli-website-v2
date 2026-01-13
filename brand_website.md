# Brand Guidelines

## Principi Fondamentali

### Posizionamento
Motto: "Thinker.Designer.Builder."

Descrizione: "UX/UI Designer & Software Engineer. Progetto sistemi complessi coniugando rigore tecnico, raffinatezza estetica e un'esperienza utente funzionale."

### Promessa di valore
Progettazione che integra vincoli tecnici e qualit dell'esperienza utente.

### Personalit del brand
- **Rigoroso**: metodologia documentata, scelte motivate
- **Tecnico**: competenza dimostrata, non dichiarata
- **Pragmatico**: soluzioni fattibili, non teoriche
- **Trasparente**: processo visibile, inclusi trade-off ed errori
- **Creativo**: estetica contemporanea

---

## 1. Identit Visiva

### 1.1 Logo / Marchio

**Tra gli asset**

---

### 1.2 Palette Colore

#### Colori primari (neutrali)

**Text Primary**
- Hex: `#212121`
- Uso: testi principali, logo, elementi di massima importanza

**Text Secondary**
- Hex: `#3E3E3D`
- Uso: testi di supporto, caption, metadata

**Background Primary**
- Hex: `#F3F3F3`
- Uso: background principale di tutte le superfici

**Background Secondary**
- Hex: `#E9E9E9`
- Uso: card, sezioni alternate, separazione contenuti

**Border / Divider**
- Hex: `#E9E9E9`
- Uso: bordi, linee separatrici, outline elementi

#### Colori funzionali

**Accent / Interactive**
- Hex: `#90F0BC`
- Uso: link, hover state, keywords, elementi cliccabili, focus state
- Contrast ratio: 4.5:1 con background bianco (WCAG AA)

**Success**
- Hex: `#2e7d32`
- Uso: conferme, stati positivi, success message

**Warning**
- Hex: `#f57c00`
- Uso: alert, stati di attenzione

**Error**
- Hex: `#d32f2f`
- Uso: errori, stati negativi, validazioni fallite

#### Regole cromatiche

**Contrasti minimi**:
- Testo body: 4.5:1 (WCAG AA)
- Testo large (18px+): 3:1 (WCAG AA)
- Target: sempre WCAG AAA quando possibile

**Accessibilit**:
- Non usare solo colore per comunicare informazione
- Sempre accompagnare colore con icona o testo

---

### 1.3 Tipografia

#### Font primario: Manrope

**Uso**: tutto il testo UI, body, titoli

**Pesi disponibili**:
- Regular (400): body text, testo standard
- Medium (500): enfasi leggera, sottotitoli
- SemiBold (600): titoli sezione, button
- Bold (700): titoli pagina, heading principali

**Fallback stack**:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, sans-serif;
```

#### Font secondario: Playfair Display

**Uso**: keywords, tag tecnici, logo

**Pesi disponibili**:
- Regular e Italic (400)

#### Scala tipografica

**Desktop**:
```
H1 (Page Title):    48px / 56px line-height / 700 weight
H2 (Section):       32px / 40px line-height / 600 weight
H3 (Subsection):    24px / 32px line-height / 600 weight
H4 (Component):     20px / 28px line-height / 500 weight
Body Large:         18px / 28px line-height / 400 weight
Body:               16px / 24px line-height / 400 weight
Body Small:         14px / 20px line-height / 400 weight
Caption:            12px / 16px line-height / 400 weight
```

**Mobile** (scaling factor: 0.875):
```
H1:    42px / 48px
H2:    28px / 36px
H3:    21px / 28px
H4:    18px / 24px
Body:  16px / 24px (no scaling)
```

#### Regole tipografiche

**Paragrafi**:
- Max width: 70 caratteri (~680px)
- Paragraph spacing: 24px
- Text alignment: left (mai justify su web)

**Gerarchie**:
- Un solo H1 per pagina
- Gerarchia sequenziale (non saltare livelli)
- Usare semantic HTML (`<h1>`, `<h2>`, ecc.)

**Leggibilit**:
- Line height minimo: 1.5 font size per body
- Letterspacing: default (0) per Inter, non modificare
- Non usare ALL CAPS per testo lungo (ok per tag brevi)

**Cosa evitare**:
- Pi di 2 font in una composizione
- Corsivo per testo lungo (solo per enfasi breve)
- Underline per non-link
- Justified text su web

---

## 6. Manutenzione e Evoluzione

### Review periodica
**Ogni 6 mesi**:
- Audit contenuto pubblicato per coerenza
- Verifica link funzionanti
- Update screenshot se progetti evoluti
- Revisione metriche (feedback ricevuti, colloqui ottenuti)

### Aggiornamenti brand
**Quando modificare queste guidelines**:
- Cambio focus professionale (es: nuovo settore specializzazione)
- Nuove competenze tecniche rilevanti
- Feedback consistente da hiring manager/recruiter
- Evoluzione standard industria (es: nuove best practice accessibilit)

**Cosa NON modificare**:
- Palette colore (mantenere consistenza)
- Logotipo (a meno di rebranding totale)
- Tono di voce core (pu evolvere, non rivoluzionare)

### Versioning
Questo documento: **v1.0 - 2026-01-12**

---

**Documento vivo**: aggiornare quando necessario, ma mantenere principi fondamentali consistenti.
