/* eslint-disable no-console */
const fromAmount = document.querySelector('[name=from_amount]');
const fromSelect = document.querySelector('[name=from_currency]');
const toSelect = document.querySelector('[name=to_currency]');
const toEL = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangerate.host/latest';
const ratesByBase = {};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  // eslint-disable-next-line array-callback-return
  return Object.entries(options)
    .map(([currencyCode, currencyName]) => `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`)
    .join('');
}

async function fetchRates(base = 'USD') {
  const fetchUrl = `${endpoint}?base=${base}`;
  const res = await fetch(fetchUrl);
  const rates = await res.json();
  return rates;
}

async function convert(amount, from, to) {
  // first check if we have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(`no rates for ${from} to convert to ${to}`);
  }
  const rates = await fetchRates(from);
  // store rates
  ratesByBase[from] = rates;
  // convert the amount that they passed in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  // console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

async function handleInput(e) {
  const rawAmount = await convert(fromAmount.value, fromSelect.value, toSelect.value);
  toEL.textContent = formatCurrency(rawAmount, toSelect.value);
  // fromAmount.value = formatCurrency(fromAmount.value, fromSelect.value);
  // console.log(fromAmount.value);
  // Bubbling
  // console.log(e.target);
  // this would be the whole form. Not as useful
  // console.log(e.currentTarget);
}

const optionsHTML = generateOptions(currencies);

// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
