// Every value below is transcribed from artifacts/reference-evidence/lguplus.json
// (capturedAt 2026-07-13T14:52:48.475Z). Bundle surface `home` = home, `surface-2` = subscription-product.
const home = { surface_id: 'home', source_id: 'lguplus-home-live', method: 'computed-style', captured: '2026-07-13' };
const sub = { surface_id: 'subscription-product', source_id: 'lguplus-subscription-live', method: 'computed-style', captured: '2026-07-13' };
const H = (n) => ({ ...home, selector: `home::[data-omd-capture="${n}"]` });
const S = (n, suffix = '') => ({ ...sub, selector: `surface-2::[data-omd-capture="${n}"]${suffix}` });
const stS = (n, s) => ({ ...S(n, `::state-${s}`), method: 'computed-style-state-sample' });
export default {
  id: 'lguplus',
  anchors: false,
  claimDefaults: home,
  components: {
    'home-section-tab': {
      claim: H(42),
      fields: { type: 'tab', bg: 'transparent', fg: '#000000', radius: '0px', padding: '0px', height: '34px', font: '28px / 400 / Pretendard',
        selected: 'fg #e6007e, 28px / 700', states: 'unselected rest and aria-selected=true variant captured; no pointer-state sample on Home',
        use: 'Public Home recommendation tab (role=tab) at home::[data-omd-capture="42"]' },
      overrides: { selected: H(41) },
    },
    'home-outline-button': {
      claim: H(81),
      fields: { type: 'button', bg: 'transparent', fg: '#ffffff', border: '1px solid #bbbbbb', radius: '16px', padding: '0px 24px', height: '32px', font: '14px / 400 / Pretendard',
        states: 'default captured; no pointer-state sample on Home', use: 'Public Home small outline button (.c-btn-outline-2-s) at home::[data-omd-capture="81"]' },
    },
    'home-arrow-link': {
      claim: H(56),
      fields: { type: 'button', bg: 'transparent', fg: '#000000', radius: '0px', padding: '0px', height: '36px', font: '24px / 700 / Pretendard',
        states: 'default captured; no pointer-state sample on Home', use: 'Public Home section link with arrow (.c-link-arr-1) at home::[data-omd-capture="56"]' },
    },
    'home-recommendation-card': {
      claim: H(44),
      fields: { type: 'card', bg: 'transparent', fg: '#000000', border: '1px solid #cccccc', radius: '16px', padding: '40px', size: '312px x 405px', font: '16px / 400 / Pretendard',
        states: 'default captured; no pointer-state sample on Home',
        use: 'Public Home recommendation card: a framed list item holding a full-bleed link at home::[data-omd-capture="44"]' },
      overrides: { border: { ...home, selector: 'home::li' }, radius: { ...home, selector: 'home::li' }, size: { ...home, selector: 'home::li' } },
    },
    'subscription-gnb-link': {
      claim: S(4),
      fields: { type: 'tab', bg: 'transparent', fg: '#000000', radius: '0px', padding: '0px', height: '24px', font: '16px / 700 / nskr',
        hover: 'fg #e6007e', pressed: 'fg #e6007e', states: 'default, hover, and pressed sampled; focus not sampled',
        use: 'Public subscription-page header navigation link at surface-2::[data-omd-capture="4"]' },
      overrides: { hover: stS(4, 'hover'), pressed: stS(4, 'pressed') },
    },
    'subscription-utility-link': {
      claim: S(0),
      fields: { type: 'tab', bg: 'transparent', fg: '#888888', radius: '0px', padding: '6px 0px', height: '30px', font: '12px / 400 / nskr',
        states: 'default captured; no pointer-state sample', use: 'Public subscription-page utility link at surface-2::[data-omd-capture="0"]' },
    },
    'subscription-purchase-cta': {
      claim: S(15),
      fields: { type: 'button', bg: '#e6007e', fg: '#ffffff', border: '0px solid #ffffff', radius: '90px', padding: '15.5px', height: '55px', font: '16px / 700 / nskr',
        states: 'default captured; the pressed frame moved one channel unit (rgb(230, 0, 126) to rgb(229, 0, 126)), consistent with a transition frame, so no pressed value is declared',
        use: 'Public subscription purchase CTA at surface-2::[data-omd-capture="15"]' },
    },
    'subscription-more-button': {
      claim: S(23),
      fields: { type: 'button', bg: '#ffffff', fg: '#000000', border: '1px solid #000000', radius: '8px', padding: '15.5px', height: '57px', font: '16px / 700 / nskr',
        states: 'default captured; no pointer-state sample', use: 'Public subscription outline more button (.pg-button-prod_detail-more) at surface-2::[data-omd-capture="23"]' },
    },
    'subscription-add-control': {
      claim: S(34),
      fields: { type: 'button', bg: '#f5f5f5', fg: '#000000', radius: '8px', padding: '0px 10px', height: '60px', font: '12px / 700 / nskr',
        states: 'default captured; no pointer-state sample', use: 'Public subscription compact add control (.pr-btne.add) at surface-2::[data-omd-capture="34"]' },
    },
    'subscription-pagination-link': {
      claim: S(81),
      fields: { type: 'button', bg: 'transparent', fg: '#888888', radius: '0px', padding: '8px 12px', height: '34px', font: '14px / 400 / nskr',
        selected: 'bg #f3f3f3, fg #000000, 14px / 700, radius 4px', states: 'default and current-page variant captured; no pointer-state sample',
        use: 'Public subscription review pagination link (.page-link) at surface-2::[data-omd-capture="81"]' },
      overrides: { selected: S(80) },
    },
    'subscription-carousel-arrow': {
      claim: S(27),
      fields: { type: 'button', bg: '#ffffff', fg: 'transparent', border: '1px solid #ebebeb', radius: '50%', size: '32px x 32px', shadow: 'rgba(0, 0, 0, 0.08) 0px 2px 6px 0px',
        states: 'default captured; no pointer-state sample', use: 'Public subscription carousel arrow (.slick-arrow) at surface-2::[data-omd-capture="27"]; its label text is visually hidden' },
    },
  },
};
