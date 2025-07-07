(() => {
  const ws = new WebSocket('wss://your-heroku-app-name.herokuapp.com');

  ws.onopen = () => {
    console.log('WebSocket connected');
  };

  ws.onmessage = event => {
    const liveDataDiv = document.getElementById('liveData');
    if (liveDataDiv) {
      liveDataDiv.textContent = event.data;
    }
  };

  ws.onerror = error => {
    console.error('WebSocket error:', error);
  };

  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };
})();
