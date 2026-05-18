import { ImageResponse } from "next/og";

// Node runtime (default) keeps this portable to any Node-capable host.
// Switch to edge if you deploy to Vercel/Cloudflare for cold-start wins.
export const alt =
  "Life Upside View — Mental Health Stories, Tools & Support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Pull a Google Font down at request-time so Satori can render with Fraunces / Inter.
async function loadGoogleFont(
  family: string,
  weights: number[],
  text: string,
  italic = false
): Promise<ArrayBuffer> {
  const ital = italic ? "ital," : "";
  const wghts = weights.map((w) => (italic ? `1,${w}` : `${w}`)).join(";");
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:${ital}wght@${wghts}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (
    await fetch(cssUrl, {
      headers: {
        // Required to receive woff2 from Google Fonts
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    })
  ).text();
  const match = css.match(/src: url\((https:\/\/[^)]+)\) format/);
  if (!match) throw new Error(`Font not found: ${family}`);
  return await (await fetch(match[1])).arrayBuffer();
}

export default async function OpengraphImage() {
  const headline = "You are not alone.";
  const headlineItalic = "Healing is possible.";
  const eyebrow = "LIFE UPSIDE VIEW";
  const lede =
    "Real stories, evidence-informed tools, and pathways to mental health support.";
  const cta = "Read more · lifeupsideview.org";

  const charset =
    headline + headlineItalic + eyebrow + lede + cta + "—·";

  const [fraunces, frauncesItalic, inter] = await Promise.all([
    loadGoogleFont("Fraunces", [500], headline + cta + lede),
    loadGoogleFont("Fraunces", [500], headlineItalic, true),
    loadGoogleFont("Inter", [500], charset),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#F6F4EF",
          color: "#1A1A1A",
          padding: "72px 88px",
          fontFamily: "Inter",
        }}
      >
        {/* Top — eyebrow + rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              display: "flex",
              flex: 1,
              height: 1,
              background: "#1A1A1A",
              opacity: 0.18,
            }}
          />
        </div>

        {/* Middle — big serif headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 96,
              lineHeight: 1.04,
              letterSpacing: "-0.022em",
              fontWeight: 500,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 96,
              lineHeight: 1.04,
              letterSpacing: "-0.022em",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#8A7A52",
              marginTop: 4,
            }}
          >
            {headlineItalic}
          </div>
        </div>

        {/* Bottom — lede + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 40,
            marginTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              lineHeight: 1.35,
              color: "#4A4A4A",
              maxWidth: 640,
            }}
          >
            {lede}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 18,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              fontWeight: 500,
              borderBottom: "1px solid #1A1A1A",
              paddingBottom: 6,
              flexShrink: 0,
            }}
          >
            {cta}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
        { name: "Fraunces", data: frauncesItalic, style: "italic", weight: 500 },
        { name: "Inter", data: inter, style: "normal", weight: 500 },
      ],
    }
  );
}
