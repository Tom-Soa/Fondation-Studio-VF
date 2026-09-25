---
format: 1080x1920
duration: 66s
message: "Un site qui rapporte est construit pour faire agir le visiteur, pas pour être joli"
arc: concept-explainer
audience: dirigeants de PME et artisans qui ont déjà un site ou vont en commander un
mode: autonomous
music: none
---

## Video direction

- **Palette system** (frame.md): two registers only. Dark = ground ink-black `#0f172a`, text cream `#f9f9f7`, accent fire-orange `#c2410c`. Orange = ground `#c2410c`, text ink `#0f172a`. Chrome in IBM Plex Mono uppercase 0.14em. One serif exception per frame: the accented word in Instrument Serif italic. Never a third hue, never a gradient ground, never a shadow, never a radius (except the phone mock's screen corners and the map's dots).
- **Type**: Inter Tight lowercase display (800–900, negative tracking) is the hero. Silent video, so no load-bearing line smaller than h2. Mot-marque "AC"+"TC" is the one uppercase exception.
- **Every frame carries a real drawn object, not only type.** The video alternates type frames and object frames so it never reads as animated slides. Objects are built in SVG/CSS from the two brand colors: a stopwatch dial, a cursor, a five-star row, a checkmark ring, a France-centred map with three more territories lighting up, a phone screen. They are drawn on (stroke-dash), not faded in.
- **Motion grammar**: long-tail `power3` settles, never bouncy. Silent video, so reveals are paced to a reading beat (~0.9s per short line): at t=0 only the first cue is on screen; every further piece arrives on its own beat across the back half. Objects draw or assemble while the words land, so the eye always has something happening. Each frame ends on a held read; at most subtle jitter.
- **Rhythm / held frames**: Frame 2 (thesis) and Frame 5 (the turn) are declarative held beats. Frames 4, 6 and 7 carry the built objects and are the dense ones. Frame 9 is the calm landing.
- **Framings** (vertical, ≥3 different): 1 centered hero · 3 stacked fadelist · 4 object-over-caption (stopwatch upper, line lower) · 6 four stacked cards each with its own icon · 7 map upper two-thirds + caption band under it · 8 full-width strip · 9 centered lockup.
- **Negative list**: no photos, no stock imagery, no browser chrome beyond the deliberate phone mock, no emoji, no em dash, no bokeh or purple "AI" gradients, no rounded surfaces outside the two named exceptions, no drop shadows, no bounce, no infinite loops, no random values, no CSS transitions. Banned failure modes: slideshow (front-load then freeze) and screensaver (everything floating).
- **Caption band**: captions off, but all load-bearing content stays above y=1594.

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
- roles: kicker "votre site" = supporting mono chrome · "joli." = foreground display word (beat 1) · question line = foreground h1 (beat 2) · "clients" = the accented serif italic word, fire-orange · ground = dark register
- sfx:

narrativeRole: Opens the gap between what the viewer is proud of and what they actually need.
keyMessage: A pretty site and a site that brings clients are two different things.

Adapt: keep the in-place hard-cut word swap signature; payoff is the accented word "clients".
Scene 1 (0.0–1.6s): dark ground; mono kicker "VOTRE SITE" fades in top-left, then "joli." lands centered at y≈0.42 via per-word staggered reveal (`dynamic-content-sequencing`), long-tail settle. Nothing else.
Scene 2 (1.6–2.4s): hold "joli." still.
Scene 3 (2.4–4.6s): hard-cut word swap (`discrete-text-sequence`): "joli." is replaced in place by the h1 stack "mais est-ce qu'il / vous rapporte / des clients ?", each line arriving on its own beat, left-aligned, ~70cqw, around y≈0.42. "clients" is serif italic and arrives last.
Scene 4 (4.6–6.0s): held read; a 36×2 fire-orange rule stub scales in from the left under the block; subtle jitter at most.

## Frame 2 — La différence

- scene: orange register; one declarative line: "la différence n'est pas la beauté."
- voiceover:
- duration: 4s
- poster: 3s
- transition_in: cut
- status: animated
- src: compositions/frames/02-la-difference.html
- type: product_intro
- persuasion: Subtractive framing
- beat: orientation
- blueprint: titlecard-reveal (Reproduce)
- focal: the line "la différence n'est pas la beauté."
- roles: catalogue numeral "No. 01" = supporting mono chrome · headline = foreground h1 in ink · "beauté" = accented serif italic in ink · ground = orange register
- sfx:

narrativeRole: Names the thesis by removing the wrong answer first.
keyMessage: Beauty is not what separates a site that earns from one that does not.

Scene 1 (0.0–1.4s): full orange ground; mono numeral "No. 01" fades in top-left; "la différence" slides up and crossfades in, left-anchored at y≈0.38, ~72cqw.
Scene 2 (1.4–2.6s): "n'est pas la beauté." arrives beneath on its beat, "beauté" in serif italic.
Scene 3 (2.6–4.0s): held read, completely still. Chrome bars suppressed.

## Frame 3 — Le site vitrine

- scene: dark register; a three-word fade stack over an oversized fire-orange title "zéro appel."
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
- roles: kicker "LE SITE QUI NE RAPPORTE PAS" = supporting mono chrome · fadelist items "parle de vous.", "dix pages.", "aucun bouton." = foreground stacked Inter Tight 900 words on the 1.0/0.5/0.22 ladder · "zéro appel." = foreground display payoff in fire-orange · ground = dark register
- sfx:

narrativeRole: Makes the failing site concrete with three symptoms and lands the cost.
keyMessage: A site that talks about itself, spreads over too many pages and gives nothing to click produces zero calls.

Adapt: keep the staggered cascade signature; payoff line is the orange title.
Scene 1 (0.0–1.2s): dark ground; mono kicker fades in top-left with the 36×2 orange rule stub scaling in beneath it. Empty stage below.
Scene 2 (1.2–4.6s): the three symptom words arrive one per beat, stacked from y≈0.30, each via per-word staggered reveal; as each new one lands the older ones step down the opacity ladder.
Scene 3 (4.6–6.0s): "zéro appel." arrives beneath at y≈0.66 with a smooth spring-pop settle (`spring-pop-entrance`, no overshoot), fire-orange.
Scene 4 (6.0–8.0s): held read; the stack dims to 0.22 so only the payoff stays bright.

## Frame 4 — Cinq secondes

- scene: a fire-orange stopwatch dial draws its full ring while a counter climbs 0 to 5 seconds, then half the visitors leave
- voiceover:
- duration: 9s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/04-cinq-secondes.html
- type: social_proof
- persuasion: Worked example with real numbers + demonstration
- beat: surprise + concern
- blueprint: dataviz-countup (Adapt)
- focal: the stopwatch: an SVG ring that draws clockwise from 12 o'clock with a big numeral counting inside it
- roles: kicker "SUR TÉLÉPHONE" = supporting mono chrome · stopwatch ring + crown + numeral = foreground subject, fire-orange stroke on the dark ground, ~55cqw across, centered at y≈0.36 · the line "cinq secondes pour s'ouvrir." = foreground h2 beneath the dial · the payoff "la moitié de vos visiteurs sont déjà partis." = foreground h2, "moitié" in serif italic fire-orange · twelve tick marks around the dial = supporting · ground = dark register
- sfx:

narrativeRole: Turns an abstract complaint (slow site) into a felt duration the viewer watches elapse, so the cost lands physically rather than as a claim.
keyMessage: A site that takes five seconds to open has already lost half its visitors.

Adapt: keep the count-up-with-a-ring signature; the ring is a stopwatch dial rather than a progress gauge, and the payoff is a sentence rather than a hero metric. The ring draw and the counter share ONE driver so they land together.
Scene 1 (0.0–1.0s): dark ground; mono kicker "SUR TÉLÉPHONE" fades in top-left. The stopwatch outline draws itself: the crown stub first, then the outer circle sweeping clockwise from 12 o'clock over 0.8s (stroke-dasharray draw), 2px fire-orange, no fill. Twelve tick marks pop on in one capped stagger as the circle closes.
Scene 2 (1.0–4.2s): the centre numeral counts 0.0 to 5.0 in tabular figures (`counting-dynamic-scale`) while a second, thicker fire-orange arc sweeps the dial in lockstep with the same driver, filling the full circle exactly as the counter reaches 5.0. A thin hand rotates with the arc. The count is the only motion on screen.
Scene 3 (4.2–5.6s): the line "cinq secondes pour s'ouvrir." arrives beneath the dial via per-word staggered reveal.
Scene 4 (5.6–7.4s): the dial dims to 0.35 and the payoff "la moitié de vos visiteurs sont déjà partis." lands beneath it, "moitié" serif italic; as it lands, exactly half the twelve tick marks drop to 0.15 in one capped stagger, so the dial itself shows the loss.
Scene 5 (7.4–9.0s): held read, still.

## Frame 5 — Construit pour faire agir

- scene: orange register; the turn in one line: "un site qui rapporte est construit pour faire agir."
- voiceover:
- duration: 5s
- poster: 4s
- transition_in: cut
- status: animated
- src: compositions/frames/05-faire-agir.html
- type: benefit_highlight
- persuasion: Distillation
- beat: clarity + anticipation
- blueprint: kinetic-type-beats (Adapt)
- focal: the words "faire agir"
- roles: catalogue numeral "No. 02" = supporting mono chrome · headline lines = foreground h1 stack in ink · "agir" = accented serif italic · ground = orange register
- sfx:

narrativeRole: Turns the video from diagnosis to principle.
keyMessage: A site earns when it is built to make the visitor do something.

Adapt: keep the statement-builds-across-beats signature; payoff is the italic "agir".
Scene 1 (0.0–1.2s): full orange ground; mono numeral "No. 02" fades in; "un site qui rapporte" arrives via per-word staggered reveal, left-anchored at y≈0.36.
Scene 2 (1.2–2.2s): "est construit" lands beneath.
Scene 3 (2.2–3.4s): "pour faire agir." lands, "agir" serif italic, last to arrive.
Scene 4 (3.4–5.0s): held read, still.

## Frame 6 — Les quatre piliers

- scene: four stacked cards, each with its own drawn icon that animates as the card lands: a lightning bolt, a widening line, five stars, a pressed button
- voiceover:
- duration: 13s
- poster: 12s
- transition_in: cut
- status: animated
- src: compositions/frames/06-quatre-piliers.html
- type: feature_showcase
- persuasion: Numbered enumeration + demonstration
- beat: comprehension + momentum
- blueprint: grid-card-assemble (Reproduce)
- focal: the four-card stack, each card's icon performing its own meaning
- roles: kicker "LE SITE QUI RAPPORTE" = supporting mono chrome · four cards (1px top hairline, mono numeral, lowercase Inter Tight 900 headword, one lead line) = foreground · four drawn icons, one per card, fire-orange 2px stroke, ~11cqw square, sitting right of each headword = foreground subjects · ground = dark register
- sfx:

narrativeRole: Unpacks the principle into four checks the viewer can apply, each proved by an icon that performs the idea rather than labelling it.
keyMessage: Speed, clarity, proof and one clear action are what make a site earn.

Reproduce: N items self-assemble in a staggered cascade into a vertical list and hold. Four cards from y≈0.18 to y≈0.80, ~78cqw, left-aligned. Every card follows the same beat: hairline scales in from the left, numeral and headword whip up, lead line fades 0.4s later, and the icon performs its own move 0.2s after that. Earlier cards dim to 0.5.
Scene 1 (0.0–1.0s): dark ground; mono kicker fades in top-left with the orange rule stub scaling in beneath. Empty stage.
Scene 2 (1.0–3.8s): card 01 "rapide." lands with the lead "s'ouvre en un instant sur téléphone." Its icon is a lightning bolt whose outline draws itself in one continuous stroke (stroke-dasharray, 0.5s), then flicks to a filled fire-orange bolt on a single hard cut and settles.
Scene 3 (3.8–6.6s): card 02 "clair." lands with "en une phrase, on sait ce que vous faites." Its icon starts as three ragged stacked lines of different lengths which, on their beat, snap into one single clean line that extends to full width, the two others fading out. Clarity performed as subtraction.
Scene 4 (6.6–9.4s): card 03 "preuve." lands with "avis et réalisations visibles tout de suite." Its icon is a five-star row whose outlines draw first, then a fire-orange fill sweeps left to right across all five in one pass (`stat-bars-and-fills` star-wipe), stopping full.
Scene 5 (9.4–11.8s): card 04 "action." lands with "un seul bouton : appeler ou demander un devis." Its headword is the only one in fire-orange. Its icon is a small solid fire-orange button rectangle; a cursor arrow travels in from the lower right, the button compresses under it and releases (`press-release-spring`), and one clean ring pulses outward from the click point and fades.
Scene 6 (11.8–13.0s): held read; all four cards return to full opacity together so the list reads as a whole.

## Frame 7 — Où on travaille

- scene: a map centred on France lights up, then three more territories light up in turn: Suisse, Belgique, and the DOM-TOM as dots around the frame
- voiceover:
- duration: 10s
- poster: 9s
- transition_in: cut
- status: animated
- src: compositions/frames/07-territoires.html
- type: social_proof
- persuasion: Signposting + demonstration
- beat: confidence + breadth
- blueprint: spatial-pan-stations (Adapt)
- focal: the map: France drawn in fire-orange, the neighbours and the overseas dots lighting up one by one
- roles: kicker "ON TRAVAILLE AVEC" = supporting mono chrome · the France silhouette = foreground subject, fire-orange fill on the dark ground, ~52cqw, upper two thirds centred at y≈0.34 · Suisse and Belgique silhouettes = foreground, arriving after France, same fire-orange · four overseas dots with mono labels (Guadeloupe, Martinique, Réunion, Mayotte) = supporting, placed around the lower map area · the running caption line under the map = foreground h2, the current territory name in serif italic · ground = dark register
- sfx:

narrativeRole: Shows reach as a place the viewer can point at, so "we work across France, Switzerland, Belgium and the overseas territories" is seen rather than claimed.
keyMessage: ACTC works with businesses across France, Switzerland, Belgium and the overseas territories.

Adapt: keep the traversal signature (one camera moving between labelled stations) but the camera is a scale-and-pan on the map group rather than a pan across a wide canvas. Use the installed `compositions/world-map.html` as the geographic source ONLY: reuse its D3 Natural Earth projection and the world-atlas topojson it loads, drop its GDP choropleth, its legend, its tooltip, its source line and its teal palette entirely, and re-fit the projection on western Europe so France fills the frame. Countries outside the named set render as a flat 1px hairline outline in `#282726` with no fill.
Scene 1 (0.0–1.4s): dark ground; mono kicker "ON TRAVAILLE AVEC" fades in top-left. The European hairline outlines appear first (all countries, unfilled, very low contrast) so the geography reads as a real map.
Scene 2 (1.4–3.2s): France fills with fire-orange in one sweep and its outline thickens; the caption "la France" lands beneath the map, "France" serif italic. The map group is scaled in slightly on France.
Scene 3 (3.2–4.8s): the map group scales down and pans a touch east (one continuous move); Suisse fills fire-orange on its beat; the caption swaps in place to "la Suisse" on a velocity-matched cut.
Scene 4 (4.8–6.2s): Belgique fills on its beat; the caption swaps to "la Belgique".
Scene 5 (6.2–8.4s): the map group scales down once more to sit in the upper half; four dots pop on in one capped stagger in the lower area, each with its mono label (GUADELOUPE, MARTINIQUE, RÉUNION, MAYOTTE), connected to nothing, simply placed; the caption swaps to "les DOM-TOM", "DOM-TOM" serif italic.
Scene 6 (8.4–10.0s): held read; France, Suisse, Belgique and the four dots all sit at full fire-orange together; subtle jitter at most.

## Frame 8 — Le résultat

- scene: orange register; three short lines slam in on a shared beat: "des appels." "des devis." "des clients."
- voiceover:
- duration: 5s
- poster: 4s
- transition_in: cut
- status: animated
- src: compositions/frames/08-resultat.html
- type: benefit_highlight
- persuasion: Rule of three + callback
- beat: conviction + satisfaction
- blueprint: kinetic-type-beats (Adapt)
- focal: the third line "des clients."
- roles: kicker "RÉSULTAT" = supporting mono chrome · three lines = foreground display stack in ink from y≈0.32 · "clients" = accented serif italic · ground = orange register
- sfx:

narrativeRole: Pays off the hook: the word that opened the question now closes it.
keyMessage: Built this way, a site produces calls, quotes and clients.

Adapt: keep the statement-builds-across-beats signature; three percussive entrances (rise, side-snap, rise) with smooth long-tail settles, no overshoot.
Scene 1 (0.0–0.8s): full orange ground; mono kicker "RÉSULTAT" fades in top-left.
Scene 2 (0.8–1.6s): "des appels." rises in at y≈0.32.
Scene 3 (1.6–2.4s): "des devis." side-snaps in from the left beneath.
Scene 4 (2.4–3.4s): "des clients." rises in, "clients" serif italic; the three lock as a stack.
Scene 5 (3.4–5.0s): held read, still.

## Frame 9 — ACTC

- scene: dark register; the mot-marque assembles centered, then the offer line and the URL settle beneath
- voiceover:
- duration: 6s
- poster: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/09-actc.html
- type: cta
- persuasion: Distillation + call to act
- beat: resolve
- blueprint: logo-assemble-lockup (Adapt)
- focal: the mot-marque "ACTC" with "TC" in fire-orange
- roles: mot-marque = foreground display lockup, letters cascade in (Inter Tight 800, uppercase by identity, tracking -0.04em) · offer line "page d'accueil offerte." = foreground h2 cream with "offerte" serif italic fire-orange · URL "www.actcstudio.fr" = supporting mono chrome cream-muted · ground = dark register
- sfx:

narrativeRole: Lands the brand and the single next step.
keyMessage: ACTC builds sites that earn; the first step is free.

Adapt: keep the letters-cascade-into-a-centered-lockup signature, extended with the offer line and URL. Final frame: nothing exits, it holds to the end.
Scene 1 (0.0–1.6s): dark ground; A, C, T, C cascade in one by one into a centered lockup at y≈0.40, ~60cqw; "TC" lands fire-orange.
Scene 2 (1.6–2.4s): the 36×2 orange rule stub scales in beneath the lockup.
Scene 3 (2.4–3.8s): "page d'accueil offerte." fades up beneath via per-word staggered reveal, centered, "offerte" serif italic fire-orange.
Scene 4 (3.8–4.8s): "www.actcstudio.fr" fades in as mono chrome beneath.
Scene 5 (4.8–6.0s): held read to the last frame; subtle jitter on the lockup at most.
