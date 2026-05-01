fetch('https://freepd.com/Romantic.php').then(r => r.text()).then(t => { 
  const matches = t.match(/href=\"[^\"]+\.mp3\"/g); 
  console.log(matches.slice(0, 10).join('\n')); 
});
