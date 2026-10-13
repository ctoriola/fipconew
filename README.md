# FIPCO

A responsive, buildless adaptation of the Movora industrial website for First Interstate Petrochemicals Ltd.

Serve `dist/` with any static web server, for example `python3 -m http.server 8000 --directory dist`.

Content, leadership, office addresses, contact information and images were sourced from https://www.fipcoltd.com/ on 13 October 2026. The visual reference is https://movora.framer.website/. Fonts match the reference: Stack Sans Notch and Space Grotesk. The website includes entrance animations, scrolling imagery, a moving business segment strip, exclusive service accordions, FAQ disclosures, mobile navigation, location map links, and email/telephone actions. Reduced-motion preferences are respected.

The contact action opens an email client; no message storage or backend is required. The deployment is a private preview and does not change the existing fipcoltd.com website.

Hero asset: `dist/assets/oil-rig.png`, generated with the built-in image generation tool. Prompt: isolated photorealistic offshore oil platform with dark steel, restrained red accents, a three-quarter perspective and transparent background; no text or logos. This is an illustrative asset, not a photograph of a FIPCO-owned installation.

Updated hero: `dist/assets/oil-rig-v2.png`, created with the built-in image tool using the supplied photograph as reference. Prompt: photographic cutout matching the reference’s weathered orange supports, gray platform, tall lattice derrick and angled cranes, diffuse overcast light, transparent background, no sky, ocean or interface elements.

Motion updates: the hero rig enters from below with a diminishing bounce. The environmental standards section includes a faded white/lime leaf globe, recreated as an SVG from the supplied motif, rotating once every 100 seconds. Both respect reduced-motion preferences.

Branding: header and footer use the original logo downloaded from FIPCO’s existing website. `fipco-logo.svg` embeds that unmodified raster asset with a viewBox that excludes unused canvas space. The favicon uses the logo’s leaf emblem.

The low-resolution website logo has been replaced with `dist/assets/fipco-logo-transparent-v2.png`, produced from the user’s upload with the built-in image editor. Edit prompt: remove exterior white canvas only; retain white lettering, leaf emblem, red and green panels, separator and tagline. The SVG wrappers embed the revised asset for header/footer and favicon use.

Dedicated pages: services.html, about.html, presence.html, leadership.html and contact.html. All navigation links connect these pages. The contact form validates input and prepares a mailto draft; it does not claim server-side delivery. The favicon uses the uploaded leaf emblem with its black background removed by the built-in image editor (prompt: preserve white/lime leaves; remove black background and gaps; transparent square output). Asset: `dist/assets/leaf-favicon.png`.

Interior hero update: Services layers the rig over oversized EXPERTISE lettering; About combines the operating photograph with the rotating environmental emblem; Our Presence uses an illustrative office network; Leadership pairs VISION with three-leader typography; Contact uses a red field and rotating leaf globe. All have coordinated entrance animations and reduced-motion support.

About and Contact hero revision: replaced the leaf emblem with an outlined 01 purpose graphic and an outlined rising arrow with an orbit, respectively. Leadership and Our Presence retain their existing hero designs.
