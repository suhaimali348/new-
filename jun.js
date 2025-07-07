(() => {
  const ws = new WebSocket('ws://localhost:3000');

  ws.addEventListener('open', () => {
    console.log('WebSocket connected');
  });

  ws.addEventListener('message', event => {
    const liveDataDiv = document.getElementById('timeDisplay');
    if (liveDataDiv) {
      liveDataDiv.textContent = event.data;
    }
  });

  ws.addEventListener('error', error => {
    console.error('WebSocket error:', error);
  });

  ws.addEventListener('close', () => {
    console.log('WebSocket connection closed');
  });
})();
