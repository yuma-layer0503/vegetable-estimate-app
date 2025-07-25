// src/main.js
import { setupFormListener } from './js/domHandler.js';
import './js/priceCalculator.js';
import './js/summaryDisplay.js';
import './css/style.css';
import './css/theme.css';
import './css/layout.css';

document.addEventListener('DOMContentLoaded', () => {
  setupFormListener();
});