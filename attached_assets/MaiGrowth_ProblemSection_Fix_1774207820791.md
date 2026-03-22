# MaiGrowth — Fix Prompt: Problem Section (Homepage)
### Targeted fix: headline, sub text, stat colors, stat labels, closing line
### Design: NO visual structure changes — text and color updates only
### Estimated credits: 2–3 credits
### Send in SAME Replit Agent chat

---

# FIX PROMPT — PROBLEM SECTION STATS & HEADLINE
*(Copy everything from the line below to END OF FILE and paste into Replit Agent)*

---

My MaiGrowth website is already built in Next.js 14 with Tailwind CSS. Do NOT rebuild anything. Do NOT touch the two comparison cards, their layout, badges, tags, icons, or any other section on the site.

Only make these 5 targeted text and color changes inside `components/home/ProblemSection.tsx`.

---

## EXISTING SITE CONTEXT

- mg-orange: #FF6B35
- mg-dark / mg-navy: #12153D
- mg-ink: #0F0F0F
- mg-body: #3D3D3D
- mg-muted: #767676
- mg-border: #E8E5E0
- Fonts: Syne (headings) + DM Sans (body)

---

## CHANGE 1 — SECTION HEADLINE (H2)

Find the H2 heading in this section.

Change text from whatever it currently says to exactly:
```
Is Your Brand Showing Up in AI Answers —
or Is Your Competitor?
```

Do NOT change the H2 font size, font family, font weight, color, or any styling. Text update only.

---

## CHANGE 2 — SECTION SUB TEXT

Find the paragraph text directly below the H2.

Change text to exactly:
```
1 in 3 searches now involves an AI tool. Your potential 
customers are getting answers from ChatGPT, Perplexity, 
and Google AI Overviews — and if your brand is not cited 
there, your competitor's is.
```

Do NOT change font size, color, max-width, or any styling. Text update only.

---

## CHANGE 3 — STAT NUMBERS: GIVE EACH A DIFFERENT COLOR

Find the 3 stats row below the two comparison cards.
Currently all 3 stat numbers use the same orange color (text-mg-orange or #FF6B35).

Change each stat number's color individually:

**Stat 1 — "700M+":**
Keep color as: `#FF6B35` (orange — your brand color, stays the same)

**Stat 2 — "357%":**
Change color to: `#12153D` (deep navy)
If using Tailwind: change class to `text-mg-dark`
If using inline style: change to `color: '#12153D'`

**Stat 3 — "20%+":**
Change color to: `#00C47A` (fresh green — signals growth/positive)
If using Tailwind: add to tailwind.config.js as `mg-green: '#00C47A'` and use `text-mg-green`
If using inline style: change to `color: '#00C47A'`

Do NOT change font size, font weight, font family, or layout of the stats row.

---

## CHANGE 4 — STAT LABELS: SHORTER AND PUNCHIER

Find the label text below each stat number. Change each label to exactly:

**Label below 700M+:**
```
ChatGPT & AI users every week
```

**Label below 357%:**
```
Growth in AI referral traffic
```

**Label below 20%+:**
```
Of Google searches show AI answers
```

Do NOT change label font size, color, or styling. Text update only.

---

## CHANGE 5 — ADD CLOSING LINE BELOW THE STATS ROW

After the stats row div (after the closing tag of the 3-stat grid), add this single line:

```tsx
<p
  style={{
    textAlign: 'center',
    fontFamily: 'DM Sans, sans-serif',
    fontStyle: 'italic',
    fontSize: '14px',
    color: '#767676',
    marginTop: '24px',
    maxWidth: '560px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.7',
  }}
>
  The brands that show up in AI answers today will be the ones
  dominating their niche in 3 years.
</p>
```

This line appears below the 3 stats and above the next section. Do not add it anywhere else.

---

## FINAL CHECKLIST

- [ ] H2 changed to "Is Your Brand Showing Up in AI Answers — or Is Your Competitor?"
- [ ] Sub text changed to "1 in 3 searches now involves an AI tool..."
- [ ] Stat 1 "700M+" stays orange #FF6B35
- [ ] Stat 2 "357%" changed to navy #12153D
- [ ] Stat 3 "20%+" changed to green #00C47A
- [ ] Stat label 1: "ChatGPT & AI users every week"
- [ ] Stat label 2: "Growth in AI referral traffic"
- [ ] Stat label 3: "Of Google searches show AI answers"
- [ ] Closing italic line added below stats
- [ ] Two comparison cards completely untouched
- [ ] No other section or page was changed
- [ ] No layout, spacing, font size, or visual design changed

---

*MaiGrowth — Problem Section Fix*
*Send in SAME Replit Agent chat. Estimated cost: 2–3 credits.*
