---
format: 1080x1920
duration: 44s
message: "Un site qui rapporte est construit pour faire agir le visiteur, pas pour être joli"
arc: concept-explainer
audience: dirigeants de PME et artisans qui ont déjà un site ou vont en commander un
mode: autonomous
music: none
---

## Video direction

- **Palette system** (frame.md): two registers only. Dark register = ground ink-black `#0f172a`, text cream `#f9f9f7`, accent fire-orange `#c2410c`. Orange register = ground `#c2410c`, text ink `#0f172a`, muted tones via ink overlays. Chrome (kickers, numerals) in IBM Plex Mono uppercase, 0.14em, muted. One serif exception per frame: the one accented word in Instrument Serif italic. Never a third hue, never a gradient ground, never a shadow, never a radius.
- **Type**: Inter Tight lowercase display (weight 800–900, negative tracking) is the hero of every frame; sized so each line stays under 78cqw of the 1080 width and above the 1.4cqw floor. Silent video: every line must be readable at phone size, so no line smaller than h2. Mot-marque "AC"+"TC" is the one uppercase exception.
- **Motion grammar**: long-tail `power3` settles, never bouncy. Silent video, so reveals are paced to a reading beat (about 0.9s per short line) instead of a voiceover: at t=0 only the first cue is on screen; every further line, card or word arrives on its own beat, spread across the back half of the frame. Every frame ends on a held read (stillness; at most subtle jitter on the hero). No lazy breathing, no back-half pan or push.
- **Reading cadence**: the viewer reads without sound. Each cue holds at least 0.8s after it lands before the next one arrives.
- **Rhythm / held frames**: Frame 2 (thesis) and Frame 4 (turn) are the declarative held beats: one line, orange register, long hold. Frames 3 and 5 are the dense builds. Frame 7 is the calm landing.
- **Framings** (vertical): Frame 1 centered hero at y≈0.42; Frame 3 stacked fadelist (stack over title); Frame 5 vertical rule-of-thirds stack of four top-border cards; Frame 6 full-width stacked strip; Frame 7 centered lockup.
- **Negative list**: no photos, no screenshots, no browser chrome, no cursor, no emoji, no em dash, no bokeh or purple "AI" gradients, no rounded surfaces, no drop shadows, no bounce, no infinite loops, no random values, no CSS transitions. Two failure modes banned: slideshow (front-load then freeze) and screensaver (everything floating).
- **Caption band**: captions are off, but all primary content still sits in the top 83% of the canvas (below y=1594 nothing load-bearing), centered heroes anchor at y≈806.

## Frame 1 — Joli, mais

- scene: a single lowercase word "joli." fills the dark frame, then the line hard-cuts into the real question with one accent word
- voiceover:
- duration: 6s
- poster: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-joli-mais.html
- type: hook
- persuasion: Common-belief vs reality
- beat: recognition + tension
- blueprint: kinetic-type-beats (Adapt)
- focal: the question line "mais est-ce qu'il vous rapporte des clients ?"
- roles: kicker "votre site" = supporting mono chrome above · "joli." = foreground display word (beat 1) · question line = foreground h1 (beat 2) · "clients" = the one accented word (Instrument Serif italic, fire-orange) · ground = dark register background
- sfx:

narrativeRole: Opens the gap between what the viewer is proud of (a nice-looking site) and what they actually need (clients), so the rest of the video has a reason to exist.
keyMessage: A pretty site and a site that brings clients are two different things.

Adapt: keep the in-place hard-cut word swap signature; the payoff is not a logo but the accented word "clients".
Scene 1 (0.0–1.6s): dark ground; mono kicker "VOTRE SITE" fades in top-left of the safe area, then the display word "joli." lands centered at y≈0.42 via per-word staggered reveal (`dynamic-content-sequencing`) on a long-tail settle. Nothing else on screen.
Scene 2 (1.6–2.4s): hold "joli." still (a beat of held pride).
Scene 3 (2.4–4.6s): hard-cut word swap (`discrete-text-sequence`): "joli." is replaced in place by the h1 stack "mais est-ce qu'il / vous rapporte / des clients ?", each of the three lines arriving on its own beat (per-word staggered reveal), left-aligned, ~70cqw wide, three lines stacked around y≈0.42. The word "clients" is set in the serif italic accent and arrives last.
Scene 4 (4.6–6.0s): held read; a 36×2 fire-orange rule stub scales in from the left (transform only) under the block as the only punctuation; subtle jitter at most.

## Frame 2 — La différence

- scene: orange register; one declarative line: "la différence n'est pas la beauté."
- voiceover:
- duration: 4s
- poster: 3s
- transition_in: cut
- status: animated
- src: compositions/frames/02-la-difference.html
- type: product_intro
- persuasion: Subtractive framing (define the concept by what it is not first)
- beat: orientation
- blueprint: titlecard-reveal (Reproduce)
- focal: the line "la différence n'est pas la beauté."
- roles: catalogue numeral "No. 01" = supporting mono chrome top-left, low opacity · headline = foreground h1 in ink on orange · "beauté" = the accented serif italic word in ink · ground = orange register background
- sfx:

narrativeRole: Names the thesis by removing the wrong answer first, so the viewer stops thinking "design" and starts thinking "construction".
keyMessage: Beauty is not what separates a site that earns from one that does not.

Scene 1 (0.0–1.4s): full orange ground; mono catalogue numeral "No. 01" fades in top-left; the h1 "la différence" slides up and crossfades in (`waterfall-entry` at low intensity, long-tail settle), left-anchored at y≈0.38, ~72cqw.
Scene 2 (1.4–2.6s): second line "n'est pas la beauté." arrives beneath on its own beat, "beauté" in serif italic.
Scene 3 (2.6–4.0s): held read, completely still. Chrome bars suppressed (declarative frame).

## Frame 3 — Le site vitrine

- scene: dark register; a three-word fade stack (what a showcase site does) over an oversized fire-orange title "zéro appel."
- voiceover:
- duration: 8s
- poster: 7s
- transition_in: cut
- status: animated
- src: compositions/frames/03-site-vitrine.html
- type: pain_point
- persuasion: Concretization + rule of three
- beat: recognition + unease
- blueprint: grid-card-assemble (Adapt)
- focal: the fire-orange title "zéro appel."
- roles: kicker "LE SITE QUI NE RAPPORTE PAS" = supporting mono chrome top · fadelist items "parle de vous.", "dix pages.", "aucun bouton." = foreground stacked Inter Tight 900 words at opacity 1.0 / 0.5 / 0.22 as they age · title "zéro appel." = foreground display payoff in fire-orange · ground = dark register
- sfx:

narrativeRole: Makes the failing site concrete with three recognizable symptoms and lands the cost (no calls) as the consequence, so the viewer can diagnose their own site.
keyMessage: A site that talks about itself, spreads over too many pages and gives nothing to click produces zero calls.

Adapt: keep the staggered cascade signature (items self-assemble into a vertical list); the payoff line is the orange title instead of a camera zoom-out. Stack over title (vertical fadelist per frame.md).
Scene 1 (0.0–1.2s): dark ground; mono kicker "LE SITE QUI NE RAPPORTE PAS" fades in top-left with the 36×2 orange rule stub scaling in beneath it (transform only). Empty stage below.
Scene 2 (1.2–4.6s): the three symptom words arrive one per beat, stacked top-to-bottom starting at y≈0.30, each via per-word staggered reveal (`dynamic-content-sequencing`), left-aligned, fadelist-item size; as each new word lands, the older ones step down the opacity ladder (1.0 → 0.5 → 0.22) so the eye always sits on the newest.
Scene 3 (4.6–6.0s): the display title "zéro appel." arrives beneath the stack at y≈0.66 with a spring-pop entrance on a smooth long-tail settle (`spring-pop-entrance`, no overshoot), fire-orange, the one display moment of the frame.
Scene 4 (6.0–8.0s): held read; the three stacked words dim together to 0.22 so only "zéro appel." stays bright; subtle jitter at most.

## Frame 4 — Construit pour faire agir

- scene: orange register; the turn in one line: "un site qui rapporte est construit pour faire agir."
- voiceover:
- duration: 5s
- poster: 4s
- transition_in: cut
- status: animated
- src: compositions/frames/04-faire-agir.html
- type: benefit_highlight
- persuasion: Distillation
- beat: clarity + anticipation
- blueprint: kinetic-type-beats (Adapt)
- focal: the words "faire agir"
- roles: catalogue numeral "No. 02" = supporting mono chrome top-left · headline lines "un site qui rapporte" / "est construit" / "pour faire agir." = foreground h1 stack in ink · "agir" = the accented serif italic word · ground = orange register
- sfx:

narrativeRole: Turns the video from diagnosis to principle: the earning site is defined by one verb, act, which the next frame unpacks.
keyMessage: A site earns when it is built to make the visitor do something.

Adapt: keep the statement-builds-across-beats signature; three lines, each its own beat, payoff is the italic "agir" rather than a spring-pop.
Scene 1 (0.0–1.2s): full orange ground; mono numeral "No. 02" fades in; "un site qui rapporte" arrives via per-word staggered reveal, left-anchored at y≈0.36, ~72cqw.
Scene 2 (1.2–2.2s): "est construit" lands beneath on its beat.
Scene 3 (2.2–3.4s): "pour faire agir." lands, "agir" in serif italic, the last word to arrive.
Scene 4 (3.4–5.0s): held read, still.

## Frame 5 — Les quatre piliers

- scene: dark register; four top-border stat-cards stack vertically, one per beat: rapide, clair, preuve, action, each with a one-line consequence
- voiceover:
- duration: 11s
- poster: 10s
- transition_in: cut
- status: animated
- src: compositions/frames/05-quatre-piliers.html
- type: feature_showcase
- persuasion: Numbered enumeration + causal chain
- beat: comprehension + momentum
- blueprint: grid-card-assemble (Reproduce)
- focal: the four-card stack, the newest card always brightest
- roles: kicker "LE SITE QUI RAPPORTE" = supporting mono chrome top · four stat-cards (top border only) = foreground, each with a mono numeral "01".."04" in fire-orange, a lowercase Inter Tight 900 headword ("rapide.", "clair.", "preuve.", "action.") and one lead line beneath ("s'ouvre en un instant sur téléphone.", "en une phrase, on sait ce que vous faites.", "avis et réalisations visibles tout de suite.", "un seul bouton : appeler ou demander un devis.") · ground = dark register
- sfx:

narrativeRole: Unpacks the principle into the four checks the viewer can apply to any site, in the order a visitor experiences them.
keyMessage: Speed, clarity, proof and one clear action are what make a site earn.

Reproduce: N items self-assemble in a staggered cascade into a vertical list and hold; no camera zoom-out (vertical canvas, four stacked cards from y≈0.20 to y≈0.80, each card ~13% of the height, ~78cqw wide, left-aligned).
Scene 1 (0.0–1.0s): dark ground; mono kicker "LE SITE QUI RAPPORTE" fades in top-left with the orange rule stub drawing beneath. Empty stage below.
Scene 2 (1.0–3.2s): card 01 "rapide." slides up into place (`waterfall-entry`, long-tail settle): its 1px top hairline scales in from the left (transform only), numeral and headword land, then the lead line fades in 0.5s later.
Scene 3 (3.2–5.4s): card 02 "clair." arrives the same way beneath; card 01 dims to 0.55.
Scene 4 (5.4–7.6s): card 03 "preuve." arrives; cards 01 and 02 at 0.55.
Scene 5 (7.6–9.8s): card 04 "action." arrives; its headword is the only one in fire-orange (the payoff word); the earlier three sit at 0.55.
Scene 6 (9.8–11.0s): held read, all four cards return to full opacity together so the list reads as a whole; subtle jitter at most.

## Frame 6 — Le résultat

- scene: orange register; three short lines slam in on a shared beat: "des appels." "des devis." "des clients."
- voiceover:
- duration: 5s
- poster: 4s
- transition_in: cut
- status: animated
- src: compositions/frames/06-resultat.html
- type: benefit_highlight
- persuasion: Rule of three + callback (answers the hook's "clients")
- beat: conviction + satisfaction
- blueprint: kinetic-type-beats (Adapt)
- focal: the third line "des clients."
- roles: kicker "RÉSULTAT" = supporting mono chrome top-left · three lines = foreground display stack in ink, stacked left-aligned from y≈0.32 · "clients" = the accented serif italic word · ground = orange register
- sfx:

narrativeRole: Pays off the hook: the same word "clients" that opened the question now closes it as the outcome of building the site right.
keyMessage: Built this way, a site produces calls, quotes and clients.

Adapt: keep the statement-builds-across-full-screen-beats signature; three lines, each a percussive beat (`kinetic-beat-slam` with distinct entrances: rise, side-snap, rise) but with smooth long-tail settles, no overshoot.
Scene 1 (0.0–0.8s): full orange ground; mono kicker "RÉSULTAT" fades in top-left.
Scene 2 (0.8–1.6s): "des appels." slams in (rise) at y≈0.32.
Scene 3 (1.6–2.4s): "des devis." slams in (side-snap from the left) beneath.
Scene 4 (2.4–3.4s): "des clients." slams in (rise), "clients" in serif italic; the three lines lock as a stack.
Scene 5 (3.4–5.0s): held read, still.

## Frame 7 — ACTC

- scene: dark register; the mot-marque "AC" + "TC" assembles centered, then the offer line and the URL settle beneath
- voiceover:
- duration: 6s
- poster: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/07-actc.html
- type: cta
- persuasion: Distillation + call to act
- beat: resolve
- blueprint: logo-assemble-lockup (Adapt)
- focal: the mot-marque "ACTC" with "TC" in fire-orange
- roles: mot-marque = foreground display lockup, letters cascade in (Inter Tight 800, uppercase by identity, tracking -0.04em) · offer line "page d'accueil offerte." = foreground h2 in cream with "offerte" in serif italic fire-orange · URL "www.actcstudio.fr" = supporting mono chrome, cream-muted · ground = dark register
- sfx:

narrativeRole: Lands the brand as the one that builds sites this way and gives the single next step (the free homepage mockup) with where to go.
keyMessage: ACTC builds sites that earn; the first step is free.

Adapt: keep the letters-cascade-into-a-centered-lockup signature; extend with the offer line and URL as the end card. This is the only frame with a real exit: nothing exits, the last frame holds to the end.
Scene 1 (0.0–1.6s): dark ground; the four letters A, C, T, C cascade in one by one (`waterfall-entry`, long-tail settle) into a centered lockup at y≈0.40, display size (~60cqw wide); "TC" lands in fire-orange.
Scene 2 (1.6–2.4s): the 36×2 orange rule stub scales in beneath the lockup (transform only).
Scene 3 (2.4–3.8s): "page d'accueil offerte." fades up beneath (per-word staggered reveal), centered, h2, "offerte" in serif italic fire-orange.
Scene 4 (3.8–4.8s): "www.actcstudio.fr" fades in as mono chrome beneath, cream-muted.
Scene 5 (4.8–6.0s): held read to the last frame; subtle jitter on the lockup at most.
