import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import {defineConfig, loadEnv} from 'vite';

// Ensure the local tiles persist. If the platform evicted the binary assets,
// we re-download them and apply the rendering patches on-the-fly.
try {
  const tilesPath = path.resolve(__dirname, 'public/miranda-world/tiles');
  if (!fs.existsSync(tilesPath)) {
    console.log('Fetching missing static assets...');
    execSync('npx degit Mapendano/Miranda-World- ./public/miranda-world --force', { stdio: 'inherit' });

    // Fix the black initial scene rendering bug 
    const indexJsPath = path.resolve(__dirname, 'public/miranda-world/index.js');
    if (fs.existsSync(indexJsPath)) {
      let indexJs = fs.readFileSync(indexJsPath, 'utf8');
      indexJs = indexJs.replace(/switchScene\(scenes\[0\]\);/g, `
      var firstSceneInitialized = false;
      function initFirstScene() {
        if (firstSceneInitialized) return;
        if (panoElement.clientWidth === 0 || panoElement.clientHeight === 0) {
          setTimeout(initFirstScene, 100);
          return;
        }
        firstSceneInitialized = true;
        switchScene(scenes[0]);
        if (viewer && viewer.updateSize) viewer.updateSize();
        
        var interval = setInterval(function() {
          if (viewer && viewer.updateSize) viewer.updateSize();
          var view = viewer.view();
          if (view) { view.setPitch(view.pitch() + 0.0001); view.setPitch(view.pitch() - 0.0001); }
          window.dispatchEvent(new Event('resize'));
        }, 200);
        setTimeout(function() { clearInterval(interval); }, 1500);
      }
      initFirstScene();
      window.addEventListener('load', initFirstScene);
      `);
      fs.writeFileSync(indexJsPath, indexJs);
    }

    // Disable fallback restrictions so 256px loads first
    const dataJsPath = path.resolve(__dirname, 'public/miranda-world/data.js');
    if (fs.existsSync(dataJsPath)) {
      let dataJs = fs.readFileSync(dataJsPath, 'utf8');
      dataJs = dataJs.replace(/"fallbackOnly":\s*true/g, '"fallbackOnly": false');
      fs.writeFileSync(dataJsPath, dataJs);
    }
  }
} catch (e) {
  console.error("Failed to restore assets:", e);
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
