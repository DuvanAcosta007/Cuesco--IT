export const esc = (s) => 
  String(s ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const pad = (n) => String(n).padStart(4, '0');

export const fmt = (d) => 
  new Date(d).toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });