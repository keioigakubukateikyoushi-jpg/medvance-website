import Script from "next/script";

/**
 * Injects a tiny vanilla-JS IntersectionObserver once, globally.
 * Watches all .fade-in-el elements and adds .fi-visible to trigger the CSS animation.
 * No React hydration, no useState, no useEffect.
 */
export default function FadeInObserver() {
  const script = `(function(){
if(!('IntersectionObserver' in window)){return;}
var io=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      e.target.classList.remove('fi-pending');
      e.target.classList.add('fi-visible');
      io.unobserve(e.target);
    }
  });
},{rootMargin:'0px 0px -10% 0px'});
function init(){
  document.querySelectorAll('.fade-in-el').forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.top<window.innerHeight){return;}
    el.classList.add('fi-pending');
    io.observe(el);
  });
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}
else{init();}
})();`;

  return <Script id="fade-in-observer" strategy="afterInteractive">{script}</Script>;
}
