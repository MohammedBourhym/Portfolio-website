import fs from 'fs';
import path from 'path';

// Remove problematic duplicate Layout.astro file if it exists
const problematicFile = './src/data/Layout.astro';
if (fs.existsSync(problematicFile)) {
  console.log('Removing problematic Layout.astro from src/data/');
  fs.unlinkSync(problematicFile);
  console.log('✓ Removed duplicate Layout.astro file');
} else {
  console.log('No duplicate Layout.astro found in src/data/');
}

// Clean build artifacts
const cleanDirs = ['dist', 'node_modules/.astro', '.astro'];
cleanDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Cleaning ${dir}...`);
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`✓ Cleaned ${dir}`);
  }
});

console.log('Cleanup complete. Now run: npm install && npm run build');
