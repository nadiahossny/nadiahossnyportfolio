export interface Inquiry {
  name: string;
  email: string;
  type: string;
  message: string;
  recipient: string;
}

export const visualInquiryHref = '/work-with-me?service=visual-design#inquiry-form';

/** An initial selection only: never reapplied over a visitor's edits. */
export function getInitialInquiryType(search: string) {
  return new URLSearchParams(search).get('service') === 'visual-design' ? 3 : 0;
}

export function makeInquiryMailto(inquiry: Inquiry) {
  const subject = encodeURIComponent(`Portfolio enquiry: ${inquiry.type} · ${inquiry.name.trim()}`);
  const body = encodeURIComponent(`Name: ${inquiry.name.trim()}\nEmail: ${inquiry.email.trim()}\nEnquiry: ${inquiry.type}\n\n${inquiry.message.trim()}`);
  return `mailto:${inquiry.recipient}?subject=${subject}&body=${body}`;
}

export async function deliverInquiry(inquiry: Inquiry, accessKey?: string, request: typeof fetch = fetch): Promise<'sent' | 'draft'> {
  if (!accessKey?.trim()) return 'draft';
  const response = await request('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: accessKey, subject: `Portfolio enquiry: ${inquiry.type}`, name: inquiry.name.trim(), email: inquiry.email.trim(), inquiry_type: inquiry.type, message: inquiry.message.trim() }),
    signal: AbortSignal.timeout(15000),
  });
  const payload: unknown = await response.json();
  if (!response.ok || typeof payload !== 'object' || payload === null || !('success' in payload) || payload.success !== true) {
    throw new Error('Enquiry was not accepted by the email provider.');
  }
  return 'sent';
}
