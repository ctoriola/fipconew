document.documentElement.classList.add('js');
const observer = new IntersectionObserver(entries => { for (const entry of entries) { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } } }, {threshold: .08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() {navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.textContent='☰';}
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.textContent=open?'×':'☰'; });
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
document.querySelectorAll('.service').forEach(service => service.addEventListener('toggle', () => { if (service.open) document.querySelectorAll('.service').forEach(other => {if (other !== service) other.open = false;}); }));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let scheduled = false;
window.addEventListener('scroll', () => { if (scheduled || reduceMotion.matches) return;scheduled=true;requestAnimationFrame(()=>{const hero=document.querySelector('.hero');if(hero && window.scrollY<hero.offsetHeight){document.querySelector('.hero-image').style.transform=`translateY(${window.scrollY*.12}px)`;}scheduled=false;}); },{passive:true});
const inquiryForm = document.querySelector('#inquiry-form');
if (inquiryForm) inquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!inquiryForm.reportValidity()) return;
  const data = new FormData(inquiryForm);
  const subject = `FIPCO inquiry: ${data.get('interest')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\nArea of interest: ${data.get('interest')}\n\n${data.get('message')}`;
  window.location.href = `mailto:firstinterstate.petrochem@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  inquiryForm.querySelector('.form-status').textContent = 'Your email draft is ready to open in your email app. Review and send it there. If no app opens, use the direct email link below.';
});
