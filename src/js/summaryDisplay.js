document.addEventListener('priceCalculated', (e) => {
  const summary = document.getElementById('summary');
  summary.textContent = `合計金額: ${e.detail} 円`;
});
