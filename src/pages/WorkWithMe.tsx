import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import PageMeta from '../components/PageMeta';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Copy, ArrowRight, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { deliverInquiry, getInitialInquiryType, makeInquiryMailto } from '../lib/inquiry';
import { serviceOffers } from '../data/serviceOffers';

export default function WorkWithMe() {
  const { language, t } = useLanguage();
  const { search } = useLocation();
  const contact = translations[language].contact;
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'draft' | 'error'>('idle');
  const [copied, setCopied] = useState<'idle' | 'copied' | 'error'>('idle');
  const [form, setForm] = useState(() => ({ name: '', email: '', type: getInitialInquiryType(search), message: '' }));
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const sending = useRef(false);
  const activeIndex = focusedIndex ?? form.type;
  const inquiry = { ...form, type: contact.typeOptions[form.type], recipient: contact.directEmailAddress };

  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setFocusedIndex(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setFocusedIndex(null);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && focusedIndex !== null && optionsRef.current[focusedIndex]) {
      optionsRef.current[focusedIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, menuOpen]);

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const count = contact.typeOptions.length;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const delta = event.key === 'ArrowDown' ? 1 : -1;
      if (!menuOpen) {
        setMenuOpen(true);
        setFocusedIndex((form.type + delta + count) % count);
      } else {
        setFocusedIndex(prev => {
          const current = prev ?? form.type;
          return (current + delta + count) % count;
        });
      }
    } else if (event.key === 'Enter' || event.key === ' ') {
      if (menuOpen) {
        event.preventDefault();
        setForm(prev => ({ ...prev, type: activeIndex }));
        setMenuOpen(false);
        setFocusedIndex(null);
      }
    } else if (event.key === 'Home' && menuOpen) {
      event.preventDefault();
      setFocusedIndex(0);
    } else if (event.key === 'End' && menuOpen) {
      event.preventDefault();
      setFocusedIndex(count - 1);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!dropdownRef.current?.contains(event.relatedTarget as Node)) {
      setMenuOpen(false);
      setFocusedIndex(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current || !form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    sending.current = true;
    setState('sending');
    try {
      const result = await deliverInquiry(inquiry, import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      if (result === 'draft') window.location.assign(makeInquiryMailto(inquiry));
      setState(result);
    } catch { setState('error'); }
    finally { sending.current = false; }
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(contact.directEmailAddress); setCopied('copied'); }
    catch { setCopied('error'); }
  };
  return <div className="portfolio-container inner-page enquiry-page">
    <PageMeta title={t('Services · Nadia Hossny', 'الخدمات · نادية حسني')} description={t('Website and web app design, implementation, and digital brand presence. Explore the offers and discuss your project with Nadia Hossny.', 'تصميم المواقع وتطبيقات الويب والتنفيذ والحضور البصري الرقمي. تعرف على الخدمات وناقش مشروعك مع نادية حسني.')} />
    <header className="section-heading services-intro"><h1>{t('Let’s make something useful.', 'لنصمم شيئاً مفيداً.')}</h1><p>{t('A thoughtful website. A connected visual presence. Two separately quoted offers, shaped around your business and the people you serve.', 'موقع مدروس وحضور بصري متناسق. خدمتان تُسعّران بشكل منفصل، وفق احتياجات عملك والأشخاص الذين تخدمهم.')}</p></header>
    <section aria-label={t('Service offers', 'الخدمات المتاحة')} className="service-offer-grid">{serviceOffers.map(offer => <article className="service-offer" key={offer.id}>
      <h2>{t(offer.title, offer.titleAr)}</h2><p>{t(offer.summary, offer.summaryAr)}</p>
      <ul>{(language === 'ar' ? offer.includesAr : offer.includes).map(item => <li key={item}>{item}</li>)}</ul>
      <Link to={offer.proofUrl} className="text-link">{offer.id === 'websites' ? t('See relevant work', 'شاهد أعمالاً ذات صلة') : t('Explore Visuals', 'استكشف الأعمال البصرية')}<ArrowRight size={16} aria-hidden="true" /></Link>
    </article>)}</section>
    <section id="inquiry-form" tabIndex={-1} className="inquiry-section case-section"><div><h2>{t('Tell me what you have in mind', 'حدثني عن فكرتك')}</h2><p className="mt-4">{t('A few details about your team, project, and timeline are a good place to start.', 'ابدأ ببعض التفاصيل عن فريقك ومشروعك والوقت المتاح.')}</p><a className="text-link break-all" href={`mailto:${contact.directEmailAddress}`}><Mail size={16} aria-hidden="true" /><span dir="ltr">{contact.directEmailAddress}</span></a><div><button type="button" className="text-link" onClick={copyEmail}><Copy size={15} />{contact.copyEmail}</button><p className="text-base" role="status">{copied === 'copied' ? contact.copied : copied === 'error' ? t('Couldn’t copy. Select the email above or use the email link.', 'تعذر النسخ. حدد البريد أعلاه أو استخدم رابطه.') : ''}</p></div></div>
      <form onSubmit={handleSubmit} className="inquiry-form">
        <label htmlFor="inquiry-name">{contact.nameLabel}</label><input id="inquiry-name" name="name" autoComplete="name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <label htmlFor="inquiry-email">{contact.emailLabel}</label><input id="inquiry-email" name="email" type="email" autoComplete="email" dir="ltr" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <label id="inquiry-type-label" htmlFor="inquiry-type-button">{contact.typeLabel}</label>
        <div className="inquiry-dropdown" ref={dropdownRef} onBlur={handleBlur}>
          <button
            id="inquiry-type-button"
            ref={triggerRef}
            type="button"
            className={`inquiry-dropdown-trigger${menuOpen ? ' is-open' : ''}`}
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
            aria-controls="inquiry-type-menu"
            aria-labelledby="inquiry-type-label inquiry-type-button"
            onClick={() => {
              setMenuOpen(open => !open);
              setFocusedIndex(null);
            }}
            onKeyDown={handleTriggerKeyDown}
          >
            <span className="inquiry-dropdown-value">{contact.typeOptions[form.type] ?? contact.typeOptions[0]}</span>
            <ChevronDown size={18} aria-hidden="true" className={`inquiry-dropdown-chevron${menuOpen ? ' is-open' : ''}`} />
          </button>
          <div
            id="inquiry-type-menu"
            role="listbox"
            aria-labelledby="inquiry-type-label"
            aria-activedescendant={menuOpen ? `inquiry-type-option-${activeIndex}` : undefined}
            tabIndex={-1}
            className={`inquiry-dropdown-menu${menuOpen ? ' is-open' : ''}`}
            hidden={!menuOpen}
          >
            {contact.typeOptions.map((option, index) => {
              const isSelected = index === form.type;
              const isFocused = index === activeIndex;
              return (
                <button
                  key={index}
                  ref={el => { optionsRef.current[index] = el; }}
                  id={`inquiry-type-option-${index}`}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`inquiry-dropdown-option${isSelected ? ' is-selected' : ''}${isFocused ? ' is-focused' : ''}`}
                  onClick={() => {
                    setForm(prev => ({ ...prev, type: index }));
                    setMenuOpen(false);
                    setFocusedIndex(null);
                    triggerRef.current?.focus();
                  }}
                  onMouseEnter={() => setFocusedIndex(index)}
                >
                  <span>{option}</span>
                  {isSelected && <Check size={16} aria-hidden="true" className="inquiry-dropdown-check" />}
                </button>
              );
            })}
          </div>
          <select
            id="inquiry-type"
            name="type"
            value={form.type}
            onChange={e => setForm({ ...form, type: Number(e.target.value) })}
            tabIndex={-1}
            aria-hidden="true"
            className="sr-only"
          >
            {contact.typeOptions.map((option, index) => <option key={index} value={index}>{option}</option>)}
          </select>
        </div>
        <label htmlFor="inquiry-message">{contact.messageLabel}</label><textarea id="inquiry-message" name="message" rows={5} required placeholder={contact.messagePlaceholder} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
        <div className="mt-4"><button className="button-primary" type="submit" disabled={state === 'sending' || state === 'sent'}>{state === 'sending' ? contact.sending : state === 'sent' ? contact.successTitle : contact.submit}</button></div>
        <div role="status" aria-live="polite" className="mt-4">{state === 'sent' && <p>{contact.successMessage}</p>}{state === 'draft' && <p>{t('Your email app was asked to open a draft. Send it there to complete your enquiry. If nothing opened, use the email link.', 'تم طلب فتح مسودة في تطبيق بريدك. أرسلها من هناك لإكمال الاستفسار. إذا لم يُفتح التطبيق، استخدم رابط البريد.')}</p>}{state === 'error' && <p>{t('Your enquiry wasn’t sent. Please retry or use direct email; your details are still here.', 'لم يُرسل استفسارك. حاول مجدداً أو استخدم البريد المباشر؛ بياناتك ما زالت محفوظة هنا.')} <a className="text-link" href={makeInquiryMailto(inquiry)}>{t('Open email draft', 'افتح مسودة بريد')}</a></p>}</div>
      </form>
    </section>
  </div>;
}
