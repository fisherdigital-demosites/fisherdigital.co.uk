/**
 * Generate hero visual for FisherDigital agency website using Gemini 2.0 Flash.
 *
 * Usage: node scripts/generate-hero-image.mjs
 *
 * Requires GEMINI_API_KEY in root .env
 * Output: public/images/hero-visual.png
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..', '..', '..');

// Load API key from root .env
const envPath = resolve(rootDir, '.env');
const envContent = readFileSync(envPath, 'utf-8');
const apiKey = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();

if (!apiKey) {
  console.error('GEMINI_API_KEY not found in .env');
  process.exit(1);
}

const outputDir = resolve(__dirname, '..', 'public', 'images');
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const prompt = `Create a photorealistic, editorial-quality hero image for a premium web design agency called FisherDigital.

The image should show:
- A modern, bright creative workspace in Bristol, UK
- A large ultra-wide monitor displaying a beautifully designed website (clean, modern, professional)
- Warm natural light coming through large windows
- Minimal, tasteful desk setup with a few design elements (plant, notebook, coffee)
- Soft depth of field, the monitor is sharp and the background is gently blurred
- Color palette: predominantly white and cream with pops of electric blue (#0866FF) as accent
- No people visible, just the workspace and the work
- Premium, aspirational feel — like an interior design magazine shoot
- 16:9 aspect ratio, landscape orientation
- High contrast, rich detail, 4K quality feel

Style: Editorial photography, minimal, Scandinavian-inspired workspace. Think Apple product photography meets architectural digest. No text overlays.`;

async function generateImage() {
  console.log('Generating hero image via Gemini...');

  // Use Imagen 4 Fast for quick, high-quality generation
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '16:9',
        personGeneration: 'dont_allow',
      },
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('Imagen 4 error:', response.status, err);

    // Fallback: try Imagen 4 (non-fast)
    console.log('\nTrying Imagen 4 standard...');
    const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;

    const fallbackResponse = await fetch(fallbackUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt }],
        parameters: {
          sampleCount: 1,
          aspectRatio: '16:9',
          personGeneration: 'dont_allow',
        },
      }),
    });

    if (!fallbackResponse.ok) {
      const fallbackErr = await fallbackResponse.text();
      console.error('Imagen 4 standard error:', fallbackResponse.status, fallbackErr);
      process.exit(1);
    }

    const fallbackData = await fallbackResponse.json();
    const imageBytes = fallbackData.predictions?.[0]?.bytesBase64Encoded;
    if (imageBytes) {
      const outputPath = resolve(outputDir, 'hero-visual.png');
      writeFileSync(outputPath, Buffer.from(imageBytes, 'base64'));
      console.log(`Hero image saved to: ${outputPath}`);
      return;
    }
    console.error('No image data in fallback response');
    process.exit(1);
  }

  const data = await response.json();
  const imageBytes = data.predictions?.[0]?.bytesBase64Encoded;
  if (imageBytes) {
    const outputPath = resolve(outputDir, 'hero-visual.png');
    writeFileSync(outputPath, Buffer.from(imageBytes, 'base64'));
    console.log(`Hero image saved to: ${outputPath}`);
    return;
  }

  console.error('No image data in response:', JSON.stringify(data, null, 2));
  process.exit(1);
}

generateImage().catch((err) => {
  console.error('Failed:', err);
  process.exit(1);
});
