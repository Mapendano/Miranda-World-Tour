/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <iframe 
      src="/miranda-world/index.html" 
      style={{ width: '100vw', height: '100vh', border: 'none', display: 'block' }}
      allow="accelerometer; gyroscope; magnetometer; autoplay; fullscreen" 
      title="Miranda World 360"
    />
  );
}
