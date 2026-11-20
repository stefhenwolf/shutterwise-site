// EN / TR dil seçimi. Varsayılan: tarayıcı dili Türkçe ise TR, değilse EN.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("sw-lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");
  var param = new URLSearchParams(location.search).get("lang");
  if (param === "en" || param === "tr") lang = param;
  root.setAttribute("data-lang", lang);
  root.setAttribute("lang", lang);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".lang-toggle");
    if (!btn) return;
    var paint = function () { btn.textContent = root.getAttribute("data-lang") === "en" ? "🇹🇷 Türkçe" : "🇬🇧 English"; };
    paint();
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-lang") === "en" ? "tr" : "en";
      root.setAttribute("data-lang", next);
      root.setAttribute("lang", next);
      try { localStorage.setItem("sw-lang", next); } catch (e) {}
      paint();
    });
  });
})();
