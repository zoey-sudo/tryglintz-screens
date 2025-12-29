// Sidebar
function openSidebar() {
  const overlay = document.querySelector('.sidebar-overlay');
  const sidebar = document.querySelector('.sidebar');
  if (overlay) overlay.classList.add('open');
  if (sidebar) sidebar.classList.add('open');
}

function closeSidebar() {
  const overlay = document.querySelector('.sidebar-overlay');
  const sidebar = document.querySelector('.sidebar');
  if (overlay) overlay.classList.remove('open');
  if (sidebar) sidebar.classList.remove('open');
}

// Modals
function openAccountModal() {
  const modal = document.getElementById('accountModal');
  if (modal) modal.classList.add('open');
}

function closeAccountModal() {
  const modal = document.getElementById('accountModal');
  if (modal) modal.classList.remove('open');
}

let currentCurrencyField = 'from';
function openCurrencyModal(field) {
  currentCurrencyField = field || 'from';
  const modal = document.getElementById('currencyModal');
  if (modal) modal.classList.add('open');
}

function closeCurrencyModal() {
  const modal = document.getElementById('currencyModal');
  if (modal) modal.classList.remove('open');
}

function selectCurrency(code, flag, symbol, balance) {
  if (currentCurrencyField === 'add-money') {
    selectAddMoneyCurrency(code, flag, symbol);
    return;
  } else if (currentCurrencyField === 'from') {
    const flagEl = document.getElementById('fromFlag');
    const codeEl = document.getElementById('fromCode');
    const symbolEl = document.getElementById('fromSymbol');
    const balanceEl = document.getElementById('fromBalance');
    if (flagEl) flagEl.textContent = flag;
    if (codeEl) codeEl.textContent = code;
    if (symbolEl) symbolEl.textContent = symbol;
    if (balanceEl) balanceEl.textContent = 'Balance: ' + symbol + balance;
  } else {
    const flagEl = document.getElementById('toFlag');
    const codeEl = document.getElementById('toCode');
    const symbolEl = document.getElementById('toSymbol');
    const balanceEl = document.getElementById('toBalance');
    if (flagEl) flagEl.textContent = flag;
    if (codeEl) codeEl.textContent = code;
    if (symbolEl) symbolEl.textContent = symbol;
    if (balanceEl) balanceEl.textContent = 'Balance: ' + symbol + balance;
  }
  closeCurrencyModal();
}

function selectAccount(code, flag, symbol, balance) {
  const symbolEl = document.getElementById('dashCurrencySymbol');
  const codeEl = document.getElementById('dashCurrencyCode');
  const valueEl = document.getElementById('balanceValue');
  if (symbolEl) symbolEl.textContent = symbol;
  if (codeEl) codeEl.textContent = code;
  if (valueEl) {
    valueEl.setAttribute('data-balance', balance);
    if (balanceHidden) {
      valueEl.textContent = '••••••';
    } else {
      valueEl.textContent = balance;
    }
  }
  closeAccountModal();
}

function swapCurrencies() {
  const fromFlag = document.getElementById('fromFlag');
  const fromCode = document.getElementById('fromCode');
  const fromSymbol = document.getElementById('fromSymbol');
  const fromBalance = document.getElementById('fromBalance');
  const fromAmount = document.getElementById('fromAmount');
  const toFlag = document.getElementById('toFlag');
  const toCode = document.getElementById('toCode');
  const toSymbol = document.getElementById('toSymbol');
  const toBalance = document.getElementById('toBalance');
  const toAmount = document.getElementById('toAmount');
  
  if (!fromFlag || !toFlag) return;
  
  const f = {
    flag: fromFlag.textContent,
    code: fromCode ? fromCode.textContent : '',
    symbol: fromSymbol ? fromSymbol.textContent : '',
    balance: fromBalance ? fromBalance.textContent : '',
    amount: fromAmount ? fromAmount.value : ''
  };
  const t = {
    flag: toFlag.textContent,
    code: toCode ? toCode.textContent : '',
    symbol: toSymbol ? toSymbol.textContent : '',
    balance: toBalance ? toBalance.textContent : '',
    amount: toAmount ? toAmount.value : ''
  };
  
  if (fromFlag) fromFlag.textContent = t.flag;
  if (fromCode) fromCode.textContent = t.code;
  if (fromSymbol) fromSymbol.textContent = t.symbol;
  if (fromBalance) fromBalance.textContent = t.balance;
  if (fromAmount) fromAmount.value = t.amount;
  
  if (toFlag) toFlag.textContent = f.flag;
  if (toCode) toCode.textContent = f.code;
  if (toSymbol) toSymbol.textContent = f.symbol;
  if (toBalance) toBalance.textContent = f.balance;
  if (toAmount) toAmount.value = f.amount;
}

// Balance toggle
let balanceHidden = false;
function toggleBalance() {
  balanceHidden = !balanceHidden;
  const icon = document.getElementById('balanceToggleIcon');
  const value = document.getElementById('balanceValue');
  const activityAmounts = document.querySelectorAll('.activity-usd, .activity-local');
  
  if (icon) {
    icon.textContent = balanceHidden ? 'visibility_off' : 'visibility';
  }
  
  if (value) {
    if (balanceHidden) {
      if (!value.getAttribute('data-balance')) {
        value.setAttribute('data-balance', value.textContent);
      }
      value.textContent = '••••••';
    } else {
      const storedBalance = value.getAttribute('data-balance') || '712.46';
      value.textContent = storedBalance;
    }
  }
  
  activityAmounts.forEach(el => {
    if (balanceHidden) {
      if (!el.getAttribute('data-original')) {
        el.setAttribute('data-original', el.textContent);
      }
      el.textContent = '••••••';
    } else {
      const original = el.getAttribute('data-original');
      if (original) {
        el.textContent = original;
      }
    }
  });
}

// KYC
function selectKycOption(el) {
  document.querySelectorAll('.kyc-option').forEach(o => o.classList.remove('selected'));
  if (el) el.classList.add('selected');
}

function simulateUpload(box) {
  if (box) {
    box.classList.add('uploaded');
    const h4 = box.querySelector('h4');
    const icon = box.querySelector('.material-symbols-rounded');
    if (h4) h4.textContent = 'Uploaded ✓';
    if (icon) icon.textContent = 'check_circle';
  }
}

// Routes
function selectRoute(el) {
  document.querySelectorAll('.route-option').forEach(o => o.classList.remove('selected'));
  if (el) el.classList.add('selected');
}

// Payment Source Modal
function openPaymentSourceModal() {
  const modal = document.getElementById('paymentSourceModal');
  if (modal) modal.classList.add('open');
}

function closePaymentSourceModal() {
  const modal = document.getElementById('paymentSourceModal');
  if (modal) modal.classList.remove('open');
}

function selectPaymentSource(name, currency) {
  const textEl = document.getElementById('paymentSourceText');
  const currencyEl = document.getElementById('paymentSourceCurrency');
  if (textEl) textEl.textContent = name;
  if (currencyEl) currencyEl.textContent = currency;
  closePaymentSourceModal();
}

// Currency Pills
function selectCurrencyPill(el, currency) {
  document.querySelectorAll('.currency-pill').forEach(p => p.classList.remove('selected'));
  if (el) el.classList.add('selected');
}

// Add Money Currency Selection
function selectAddMoneyCurrency(code, flag, symbol) {
  const flagEl = document.getElementById('addMoneyFlag');
  const codeEl = document.getElementById('addMoneyCode');
  const symbolEl = document.getElementById('addMoneySymbol');
  const currencyEl = document.getElementById('paymentMethodCurrency');
  
  if (flagEl) flagEl.textContent = flag;
  if (codeEl) codeEl.textContent = code;
  if (symbolEl) symbolEl.textContent = symbol;
  if (currencyEl) currencyEl.textContent = code;
  
  closeCurrencyModal();
}

// Navigate to payment method screen with currency
function goToPaymentMethod() {
  const currencyCode = document.getElementById('addMoneyCode');
  const currency = currencyCode ? currencyCode.textContent : 'SGD';
  window.location.href = '21-payment-method.html?currency=' + currency;
}

// Recipients
function selectRecipient(el) {
  document.querySelectorAll('.recipient-item').forEach(o => o.classList.remove('selected'));
  if (el) el.classList.add('selected');
}

// Contact Method Tabs
function selectContactMethod(el, method) {
  document.querySelectorAll('.contact-method-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  
  const emailInput = document.getElementById('emailInput');
  const phoneInput = document.getElementById('phoneInput');
  
  if (method === 'email') {
    if (emailInput) emailInput.style.display = 'block';
    if (phoneInput) phoneInput.style.display = 'none';
  } else {
    if (emailInput) emailInput.style.display = 'none';
    if (phoneInput) phoneInput.style.display = 'block';
  }
}

// Location data based on nationality
const locationData = {
  'SG': { flag: '🇸🇬', name: 'Singapore', rails: 'PayNow available' },
  'US': { flag: '🇺🇸', name: 'United States', rails: 'ACH available' },
  'CA': { flag: '🇨🇦', name: 'Canada', rails: 'Interac e-Transfer available' },
  'GB': { flag: '🇬🇧', name: 'United Kingdom', rails: 'Faster Payments available' },
  'EU': { flag: '🇪🇺', name: 'Europe', rails: 'SEPA available' },
  'TH': { flag: '🇹🇭', name: 'Thailand', rails: 'PromptPay available' },
  'JP': { flag: '🇯🇵', name: 'Japan', rails: 'Zengin available' },
  'AU': { flag: '🇦🇺', name: 'Australia', rails: 'NPP/PayID available' },
  'DE': { flag: '🇩🇪', name: 'Germany', rails: 'SEPA Instant available' },
  'FR': { flag: '🇫🇷', name: 'France', rails: 'SEPA Instant available' }
};

// Update location when nationality changes
function updateLocationFromNationality() {
  const select = document.querySelector('#signup select, .onboarding-screen select');
  if (select) {
    const value = select.value;
    if (value && locationData[value]) {
      const loc = locationData[value];
      const flagEl = document.getElementById('locationFlag');
      const nameEl = document.getElementById('locationName');
      const railsEl = document.getElementById('locationRails');
      if (flagEl) flagEl.textContent = loc.flag;
      if (nameEl) nameEl.textContent = loc.name;
      if (railsEl) railsEl.textContent = loc.rails;
    }
  }
}

// Update new location rails preview
function updateNewLocationRails() {
  const select = document.getElementById('newCountrySelect');
  const railsDiv = document.getElementById('newLocationRails');
  const railsText = document.getElementById('newRailsText');
  
  if (select && select.value && locationData[select.value]) {
    if (railsDiv) railsDiv.style.display = 'block';
    if (railsText) {
      railsText.textContent = locationData[select.value].rails.replace('available', 'will be unlocked');
    }
  } else {
    if (railsDiv) railsDiv.style.display = 'none';
  }
}

// Location notification functions
function showLocationNotification() {
  const notification = document.getElementById('locationNotification');
  if (notification) notification.classList.add('show');
}

function hideLocationNotification() {
  const notification = document.getElementById('locationNotification');
  if (notification) notification.classList.remove('show');
}

// Navigation helper function (for backward compatibility)
// Maps screen IDs to file names for multi-page navigation
const screenMap = {
  'welcome': '01-welcome.html',
  'login': '02-login.html',
  'signup': '03-signup.html',
  'location': '04-location.html',
  'kyc-select': '05-kyc-select.html',
  'kyc-upload': '06-kyc-upload.html',
  'verifying': '07-verifying.html',
  'dashboard': '08-dashboard.html',
  'location-history': '09-location-history.html',
  'update-location': '10-update-location.html',
  'send': '11-send-money.html',
  'recipient': '12-select-recipient.html',
  'add-recipient': '13-add-recipient.html',
  'add-recipient-p2p': '14-add-recipient-p2p.html',
  'add-recipient-local': '15-add-recipient-local.html',
  'add-recipient-bank': '16-add-recipient-bank.html',
  'routes': '17-routes.html',
  'review': '18-review.html',
  'success': '19-success.html',
  'add-money': '20-add-money.html',
  'payment-method': '21-payment-method.html',
  'transaction-history': '22-transaction-history.html',
  'activity': '22-transaction-history.html',
  'transaction-details': '23-transaction-details.html'
};

function showScreen(screenId) {
  const fileName = screenMap[screenId];
  if (fileName) {
    window.location.href = fileName;
  } else {
    console.warn('Screen ID not found:', screenId);
  }
}

// Font loading detection to prevent FOUC
function loadMaterialSymbolsFont() {
  if ('fonts' in document) {
    document.fonts.ready.then(function() {
      // Check if Material Symbols font is loaded
      if (document.fonts.check('1em "Material Symbols Rounded"')) {
        document.documentElement.classList.add('fonts-loaded');
        // Also add class to individual icons as fallback
        document.querySelectorAll('.material-symbols-rounded').forEach(function(icon) {
          icon.classList.add('font-loaded');
        });
      } else {
        // Fallback: show icons after a short delay
        setTimeout(function() {
          document.documentElement.classList.add('fonts-loaded');
          document.querySelectorAll('.material-symbols-rounded').forEach(function(icon) {
            icon.classList.add('font-loaded');
          });
        }, 100);
      }
    });
  } else {
    // Fallback for browsers without Font Loading API
    setTimeout(function() {
      document.documentElement.classList.add('fonts-loaded');
      document.querySelectorAll('.material-symbols-rounded').forEach(function(icon) {
        icon.classList.add('font-loaded');
      });
    }, 300);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Load Material Symbols font and show icons when ready
  loadMaterialSymbolsFont();
  
  // Listen for nationality selection change
  const nationalitySelect = document.querySelector('#signup select, .onboarding-screen select');
  if (nationalitySelect) {
    nationalitySelect.addEventListener('change', updateLocationFromNationality);
  }
  
  // Close sidebar when clicking overlay
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }
  
  // Close modals when clicking overlay
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });
  
  // Close payment source modal when clicking overlay
  const paymentSourceModal = document.getElementById('paymentSourceModal');
  if (paymentSourceModal) {
    paymentSourceModal.addEventListener('click', function(e) {
      if (e.target === paymentSourceModal) {
        closePaymentSourceModal();
      }
    });
  }
});

