/* Shared theme toggle for the Smart Contracts sprint reports.
   Light by default, no auto-detect, choice remembered in localStorage under
   'report-theme'. The FOUC-prevention snippet stays inline in each page's
   <head> so the theme is set before first paint; this script wires the button
   and keeps localStorage in sync. Language switching stays inline per page
   (its strings differ per page). Loaded at end of <body>, after the button. */
(function () {
  var root = document.documentElement, TK = 'report-theme';
  function set(t) {
    t = (t === 'dark') ? 'dark' : 'light';
    root.setAttribute('data-theme', t);
    var b = document.getElementById('themeToggle');
    if (b) b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    try { localStorage.setItem(TK, t); } catch (e) {}
  }
  var s = null; try { s = localStorage.getItem(TK); } catch (e) {}
  set(s === 'dark' ? 'dark' : 'light');
  var btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', function () {
    set(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
