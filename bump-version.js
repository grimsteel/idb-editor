import { readFileSync, writeFileSync } from 'fs';

const files = ['package.json', 'src/firefox/manifest.json'];

function setVersionTo(versionString) {
  files.forEach(file => {
    const initial = JSON.parse(readFileSync(file, "utf8"));
    initial.version = versionString;
    writeFileSync(file, JSON.stringify(initial, null, 2));
  });
}

const version = process.argv[2];
if (version) {
  setVersionTo(version);
  console.log(`Version set to ${version}`);
} else
  console.log('Please provide a version string');