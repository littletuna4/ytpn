import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Favicon sizes and formats needed
const faviconSizes = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "android-chrome-192x192.png" },
  { size: 512, name: "android-chrome-512x512.png" },
];

async function generateFavicons() {
  console.log("🎨 Generating favicons from logo...");

  try {
    // Read the logo SVG
    const logoPath = path.join(__dirname, "../public/logo.svg");
    const logoSvg = fs.readFileSync(logoPath, "utf8");

    // Create a version with solid background for better favicon display
    const faviconSvg = logoSvg
      .replace('fill="none"', 'fill="hsl(220, 13%, 91%)"')
      .replace('stroke="currentColor"', 'stroke="hsl(220, 9%, 46%)"')
      .replace(/hsl\(var\(--[^)]+\)\)/g, (match) => {
        // Replace CSS variables with actual colors for favicon
        if (match.includes("--primary")) return "hsl(220, 9%, 46%)";
        if (match.includes("--background")) return "hsl(220, 13%, 91%)";
        if (match.includes("--accent")) return "hsl(142, 71%, 45%)";
        if (match.includes("--success")) return "hsl(142, 71%, 45%)";
        if (match.includes("--muted-foreground")) return "hsl(220, 9%, 46%)";
        return "hsl(220, 9%, 46%)";
      });

    // Generate all favicon sizes
    for (const { size, name } of faviconSizes) {
      const outputPath = path.join(__dirname, "../public", name);

      await sharp(Buffer.from(faviconSvg))
        .resize(size, size)
        .png()
        .toFile(outputPath);

      console.log(`✅ Generated ${name} (${size}x${size})`);
    }

    // Generate ICO file (combining 16x16 and 32x32)
    const icoPath = path.join(__dirname, "../public/favicon.ico");
    await sharp(Buffer.from(faviconSvg))
      .resize(32, 32)
      .png()
      .toFile(icoPath.replace(".ico", "-temp.png"));

    // For ICO, we'll use the 32x32 PNG (Sharp doesn't support ICO output directly)
    // Copy the 32x32 PNG as favicon.ico
    fs.copyFileSync(
      path.join(__dirname, "../public/favicon-32x32.png"),
      icoPath
    );

    // Clean up temp file
    const tempFile = icoPath.replace(".ico", "-temp.png");
    if (fs.existsSync(tempFile)) {
      fs.unlinkSync(tempFile);
    }

    console.log("✅ Generated favicon.ico");

    // Generate site.webmanifest
    const manifest = {
      name: "Sports Club Booking Center",
      short_name: "SCBC",
      description: "Sports Club Booking and Court Management System",
      start_url: "/",
      display: "standalone",
      theme_color: "#16a34a",
      background_color: "#f8fafc",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    };

    fs.writeFileSync(
      path.join(__dirname, "../public/site.webmanifest"),
      JSON.stringify(manifest, null, 2)
    );

    console.log("✅ Generated site.webmanifest");

    // Copy the logo to public as icon.svg for modern browsers
    // fs.copyFileSync(logoPath, path.join(__dirname, "../public/icon.svg"));
    // console.log("✅ Generated icon.svg");

    // Move favicon.ico to app directory for Next.js 13+ app router
    // const appFaviconPath = path.join(__dirname, "../src/app/favicon.ico");
    // fs.copyFileSync(icoPath, appFaviconPath);
    // console.log("✅ Moved favicon.ico to app directory");

    console.log("\n🎉 All favicons generated successfully!");
    console.log("\nFiles created:");
    console.log("- favicon.ico (public/)");
    console.log("- favicon.ico (app/)");
    console.log("- favicon-16x16.png");
    console.log("- favicon-32x32.png");
    console.log("- apple-touch-icon.png");
    console.log("- android-chrome-192x192.png");
    console.log("- android-chrome-512x512.png");
    console.log("- site.webmanifest");
    console.log("- icon.svg");
  } catch (error) {
    console.error("❌ Error generating favicons:", error);
    process.exit(1);
  }
}

// Run the script
generateFavicons();
