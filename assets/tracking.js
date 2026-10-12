/* Google Ads + GA4: Consent Mode con consenso negato di default; il banner (in ogni pagina) aggiorna il consenso.
   Eventi: "contatto" con canale = email | whatsapp | calendario | linkedin e pagina = percorso.
   Conversione Google Ads "Consulenza - contatto (email/WhatsApp)" sui clic a mail e WhatsApp. */
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('mp_consent')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});}}catch(e){}
gtag('js',new Date());gtag('config','AW-11099505711',{send_page_view:false});gtag('config','G-G75X352FRE',{send_page_view:false});
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;
  var h=a.getAttribute('href')||'',c=null;
  if(h.indexOf('mailto:')===0)c='email';
  else if(h.indexOf('wa.me/')>-1)c='whatsapp';
  else if(h.indexOf('calendly.com')>-1)c='calendario';
  else if(h.indexOf('linkedin.com')>-1)c='linkedin';
  if(!c)return;
  gtag('event','contatto',{canale:c,pagina:location.pathname,transport_type:'beacon'});
  if(c==='email'||c==='whatsapp'){gtag('event','conversion',{send_to:'AW-11099505711/4AsQCLz2jo4dEK-I1Kwp',transport_type:'beacon'});}
},true);
