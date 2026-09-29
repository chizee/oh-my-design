// Every value below is transcribed from artifacts/reference-evidence/toss-securities.json
// (capturedAt 2026-07-13T09:30:45.327Z). Bundle surface `home` = public-wts, `surface-3` = investment-marketing.
const wts = { surface_id: 'public-wts', source_id: 'wts-live', method: 'computed-style', captured: '2026-07-13' };
const mkt = { surface_id: 'investment-marketing', source_id: 'investment-live', method: 'computed-style', captured: '2026-07-13' };
const st = (selector) => ({ method: 'computed-style-state-sample', selector });
export default {
  id: 'toss-securities',
  anchors: true,
  claimDefaults: wts,
  components: {
    'wts-tab': {
      anchor: 'wtsTab', claim: { selector: 'home::[data-omd-capture="13"]' },
      fields: { type: 'tab', bg: 'transparent', fg: 'rgba(18, 31, 51, 0.47)', radius: '0px', padding: '0px', height: '36px', font: '16px / 400 / 18.4px',
        selected: 'fg rgba(26, 31, 41, 0.89)', hover: 'fg rgba(22, 31, 46, 0.61)', pressed: 'fg rgba(22, 31, 46, 0.61)',
        states: 'unselected rest, selected, hover, and pressed sampled; focus not sampled', use: 'Public WTS tab' },
      overrides: { selected: { selector: 'home::[data-omd-capture="12"]' },
        hover: st('home::[data-omd-capture="13"]::state-hover'), pressed: st('home::[data-omd-capture="13"]::state-pressed') },
    },
    'wts-segmented-radio': {
      anchor: 'wtsRadio', claim: { selector: 'home::[data-omd-capture="18"]' },
      fields: { type: 'toggle', bg: 'transparent', fg: 'rgba(18, 31, 51, 0.47)', radius: '5px', padding: '0px', height: '24px', font: '16px / 400 / 18.4px',
        checked: 'fg rgba(26, 31, 41, 0.89)', hover: 'bg rgba(13, 25, 74, 0.02)', pressed: 'bg rgba(7, 25, 76, 0.04)',
        states: 'unchecked rest, checked, hover, and pressed sampled; focus not sampled', use: 'Public WTS segmented radio option (role=radio)' },
      overrides: { checked: { selector: 'home::[data-omd-capture="17"]' },
        hover: st('home::[data-omd-capture="18"]::state-hover'), pressed: st('home::[data-omd-capture="18"]::state-pressed') },
    },
    'wts-content-card-link': {
      anchor: 'wtsCard', claim: { selector: 'home::[data-omd-capture="11"]' },
      fields: { type: 'card', bg: 'transparent', fg: '#4e5968', radius: '12px', padding: '4px', size: '248px x 176px', font: '16px / 400 / 23.2px',
        hover: 'bg rgba(13, 25, 74, 0.02)', pressed: 'bg rgba(7, 25, 76, 0.04)',
        states: 'rest, hover, and pressed sampled; focus not sampled', use: 'Public WTS content card link' },
      overrides: { hover: st('home::[data-omd-capture="11"]::state-hover'), pressed: st('home::[data-omd-capture="11"]::state-pressed') },
    },
    'wts-nav-link': {
      anchor: 'wtsNav', claim: { selector: 'home::[data-omd-capture="2"]' },
      fields: { type: 'tab', bg: 'transparent', fg: 'rgba(22, 31, 46, 0.61)', radius: '9px', padding: '8px 12px', height: '36px', font: '14px / 600 / 20px',
        states: 'rest sampled; the hover, pressed, and focus frames caught a colour transition in progress (alpha 0.61 to 0.63-0.67, different per link), so no state value is declared',
        use: 'Public WTS top navigation link' },
    },
    'wts-menu-trigger': {
      anchor: 'wtsTrigger', claim: { selector: 'home::[data-omd-capture="27"]' },
      fields: { type: 'button', bg: 'rgba(7, 25, 76, 0.04)', fg: 'rgba(26, 31, 41, 0.89)', radius: '7px', padding: '4px 8px', height: '28px', font: '13px / 600 / 20px',
        shadow: 'rgba(0, 23, 51, 0.02) 0px 0px 0px 0.5px inset',
        states: 'rest sampled; expanded and menu-open observed through the captured menu interaction; no pointer-state sample', use: 'Public WTS compact menu trigger' },
    },
    'wts-expanded-menu': {
      anchor: 'wtsMenu', claim: { selector: 'home::[data-omd-interaction-capture="menu-0-0"]' },
      fields: { type: 'card', bg: '#ffffff', fg: '#4e5968', radius: '12px', size: '160px x 204px', font: '16px / 400 / 23.2px',
        shadow: 'rgb(212, 217, 225) 0px 0px 0px 0.5px inset, 0 16px 24px -2px rgba(0,0,0,0.06), 0 8px 56px rgba(0,0,0,0.1)',
        states: 'expanded and menu-open observed', use: 'Public WTS expanded menu container' },
    },
    'wts-dialog-input': {
      anchor: 'wtsDialogInput', claim: { selector: 'home::[data-omd-interaction-capture="dialog-1-2"]' },
      fields: { type: 'input', bg: 'transparent', fg: 'rgba(0, 12, 30, 0.8)', radius: '0px', padding: '0px', height: '17px', font: '15px / 600 / 17.25px',
        states: 'observed only inside the opened selection dialog; no pointer-state sample',
        use: 'Text field inside the public WTS selection dialog; its visible frame belongs to a wrapper the capture did not sample' },
    },
    'investment-nav-link': {
      anchor: 'mktNav', claim: { ...mkt, selector: 'surface-3::[data-omd-capture="1"]' },
      fields: { type: 'tab', bg: 'transparent', fg: 'rgba(253, 253, 255, 0.75)', radius: '0px', padding: '0px 8px', height: '14px', font: '14px / 600 / 14px',
        hover: 'fg #3182f6', pressed: 'fg #3182f6',
        states: 'rest, hover, and pressed sampled on nine header controls; focus not sampled', use: 'Investment-products header navigation link' },
      overrides: { hover: st('surface-3::[data-omd-capture="1"]::state-hover'), pressed: st('surface-3::[data-omd-capture="1"]::state-pressed') },
    },
    'investment-secondary': {
      anchor: 'mktSecondary', claim: { ...mkt, selector: 'surface-3::[data-omd-capture="13"]' },
      fields: { type: 'button', bg: 'rgba(2, 32, 71, 0.05)', fg: 'rgba(3, 18, 40, 0.7)', radius: '100px', padding: '11px 14px', height: '40px', font: '15px / 600 / 18px',
        states: 'rest sampled; the hover, pressed, and focus frames differ only by transition-frame deltas (fill alpha 0.05 to 0.055, fractional inset-shadow width), so no state value is declared',
        use: 'Investment-products secondary pill' },
    },
  },
};
