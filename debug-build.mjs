import fs from 'fs';
import path from 'path';

function findDuplicateFiles(dir, fileName, found = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== 'dist' && item !== '.git') {
        findDuplicateFiles(fullPath, fileName, found);
      }
    } else if (item === fileName) {
      found.push(fullPath);
    }
  }
  
  return found;
}

// Check for duplicate Layout.astro files
const layoutFiles = findDuplicateFiles('./src', 'Layout.astro');
console.log('Layout.astro files found:', layoutFiles);

// Check for any duplicate .astro files that might cause conflicts
const astroFiles = findDuplicateFiles('./src', '.astro');
console.log('All .astro files:', astroFiles.filter(f => f.endsWith('.astro')));

// Check for circular symlinks or unusual directory structures
function checkForCircularRefs(dir, visited = new Set()) {
  if (visited.has(dir)) {
    console.log('Circular reference detected:', dir);
    return;
  }
  
  visited.add(dir);
  
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory() && 
          item !== 'node_modules' && 
          item !== 'dist' && 
          item !== '.git' && 
          item !== '.astro') {
        checkForCircularRefs(fullPath, new Set(visited));
      }
    }
  } catch (error) {
    console.log('Error reading directory:', dir, error.message);
  }
}

checkForCircularRefs('./src');

// Check for problematic files in src/data
try {
  const dataFiles = fs.readdirSync('./src/data');
  console.log('Files in src/data:', dataFiles);
  
  // Look for Layout.astro specifically in data directory
  if (dataFiles.includes('Layout.astro')) {
    console.log('⚠️  FOUND PROBLEMATIC FILE: Layout.astro in src/data directory!');
    console.log('This file should be deleted - Layout.astro should only exist in src/layouts/');
  }
} catch (error) {
  console.log('Could not read src/data directory:', error.message);
}
