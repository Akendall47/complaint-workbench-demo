// The recorded demo case: a button marked data-goto opens the page the real app showed after that action.
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-goto]');
  if (b) { e.preventDefault(); location.href = b.getAttribute('data-goto'); }
});
