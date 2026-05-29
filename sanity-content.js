// Sanity CDN helper — chargé sur toutes les pages
(function() {
  var PROJECT_ID = 'm2u2eg5e';
  var DATASET = 'production';
  var API_VERSION = '2021-10-21';

  window.sanityFetch = function(groq) {
    var url = 'https://' + PROJECT_ID + '.apicdn.sanity.io/v' + API_VERSION + '/data/query/' + DATASET + '?query=' + encodeURIComponent(groq);
    return fetch(url, { cache: 'no-store' }).then(function(r) { return r.json(); }).then(function(d) { return d.result || null; });
  };

  window.sanityImageUrl = function(image, width) {
    if (!image || !image.asset || !image.asset._ref) return '';
    var ref = image.asset._ref;
    var parts = ref.split('-');
    var fmt = parts[parts.length - 1];
    var dims = parts[parts.length - 2];
    var id = parts.slice(1, parts.length - 2).join('-');
    var base = 'https://cdn.sanity.io/images/' + PROJECT_ID + '/' + DATASET + '/' + id + '-' + dims + '.' + fmt;
    return width ? base + '?w=' + width + '&auto=format' : base;
  };

  // Helper: met à jour le texte d'un élément par son attribut data-s
  window.sanityApply = function(data, map) {
    if (!data) return;
    Object.keys(map).forEach(function(selector) {
      var field = map[selector];
      var val = field.split('.').reduce(function(o, k) { return o && o[k]; }, data);
      if (val == null) return;
      document.querySelectorAll('[data-s="' + selector + '"]').forEach(function(el) {
        if (el.tagName === 'A' && selector.indexOf('href') > -1) {
          el.href = val;
        } else if (el.tagName === 'IMG') {
          el.src = typeof val === 'object' ? window.sanityImageUrl(val, 1200) : val;
        } else {
          el.textContent = val;
        }
      });
    });
  };
})();
