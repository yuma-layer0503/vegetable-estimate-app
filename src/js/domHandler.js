export function setupFormListener() {
  const form = document.getElementById('vegetable-form');
  form.addEventListener('input', () => {
    const prices = Array.from(form.querySelectorAll('input'))
      .map(input => parseFloat(input.value) || 0);
    const total = prices.reduce((sum, price) => sum + price, 0);
    const event = new CustomEvent('priceCalculated', { detail: total });
    document.dispatchEvent(event);
  });
}
