import { SubServicePageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Payroll Services for Small Business | Fort Myers',
  description:
    'Accurate, on-time payroll and payroll tax filing so you can focus on running your business, not chasing paperwork. Serving Fort Myers and Naples, FL.',
  path: '/accounting-cfo-services/payroll-services',
});

const breadcrumb = [
  { name: 'Accounting & CFO Services', href: '/accounting-cfo-services' },
  { name: 'Payroll Services', href: '/accounting-cfo-services/payroll-services' },
];

const faqs = [
  {
    q: 'Which payroll software do you support?',
    a: 'We work in the mainstream platforms — QuickBooks Payroll and Gusto most often — and can operate inside whatever system you already use if it is working. If you have no system yet, we will recommend one that fits your headcount and integrates with your bookkeeping so the two are not maintained separately.',
  },
  {
    q: 'Do you handle 1099 contractors too?',
    a: 'Yes. Contractor payments, W-9 collection, and year-end 1099-NEC filing are all covered. We will also flag it if someone you are treating as a contractor looks like an employee under the applicable tests — worker misclassification is an expensive problem, and it is much cheaper to fix before an agency raises it.',
  },
  {
    q: 'What happens if I miss a payroll tax deadline?',
    a: 'Penalties and interest accrue quickly, and federal payroll tax deposits are one of the few areas where the IRS can pursue owners personally. If you have already missed deposits, tell us — we will get you current, file what is outstanding, and pursue penalty abatement where the facts support it. The situation gets worse with time, not better.',
  },
  {
    q: 'Can this be bundled with bookkeeping?',
    a: 'Yes, and it usually should be. When payroll and bookkeeping are handled by the same firm, wages, taxes, and benefits post to the books correctly the first time, and nobody has to reconcile two systems that disagree at year-end.',
  },
];

export default function PayrollServicesPage() {
  return (
    <SubServicePageTemplate
      breadcrumb={breadcrumb}
      eyebrow="Accounting & CFO"
      h1="Payroll Services"
      subtitle="Payroll processed on time, taxes filed on schedule, and year-end forms handled — without you tracking a single deadline."
      introHeading="The task with the least upside and the most downside"
      intro={[
        'Payroll is unusual among back-office tasks: doing it well earns you nothing, and doing it badly costs a great deal. Nobody thanks you for a correct paycheck. But a late federal deposit generates penalties within days, a misclassified contractor can trigger back taxes across several years, and a payroll error erodes employee trust faster than almost anything else an owner can do.',
        'It is also relentless. Every pay period, without exception, regardless of what else is happening. Deposit schedules that shift based on your prior-year liability, quarterly 941s, annual 940s, Florida reemployment tax, new-hire reporting, and W-2s and 1099s at year-end. Miss one and the penalty notice arrives before you have realized anything went wrong.',
        'So we take the calendar. Payroll runs on schedule, filings go out when they are due, and everything posts cleanly into your books. Bundled with bookkeeping, wages and payroll taxes land in the right accounts automatically — no year-end reconciliation between two systems telling different stories.',
      ]}
      image={images.accounting}
      whoFor={[
        {
          title: 'Small businesses with W-2 employees',
          text: 'From a first hire to a team of fifty, where payroll compliance is nobody’s actual job.',
        },
        {
          title: 'Businesses using 1099 contractors',
          text: 'Including seasonal and project-based workforces that need clean year-end reporting.',
        },
        {
          title: 'S-corp owners on payroll',
          text: 'Reasonable compensation is an IRS focus area — the amount and the documentation both matter.',
        },
        {
          title: 'Owners behind on payroll filings',
          text: 'Missed deposits or unfiled returns brought current before penalties compound further.',
        },
      ]}
      whatWeDo={[
        {
          title: 'Payroll processing',
          text: 'Scheduled runs, direct deposit, and pay stubs, with wage and deduction changes handled as they come.',
        },
        {
          title: 'Payroll tax filings',
          text: 'Federal deposits, Forms 941 and 940, and Florida reemployment tax filed on the required schedule.',
        },
        {
          title: 'New-hire reporting',
          text: 'State new-hire filings completed within the required window for every addition to the team.',
        },
        {
          title: 'W-2 & 1099 preparation',
          text: 'Year-end forms prepared, filed, and distributed to employees and contractors on time.',
        },
        {
          title: 'Payroll software setup',
          text: 'Platform selection, configuration, and integration with your accounting system.',
        },
      ]}
      process={[
        {
          title: 'Setup & Onboarding',
          text: 'Employee records, pay schedules, tax accounts, and software configured and verified.',
        },
        {
          title: 'Ongoing Processing',
          text: 'Every pay period runs on schedule, with deposits and changes handled without prompting.',
        },
        {
          title: 'Filings & Year-End',
          text: 'Quarterly and annual returns filed, W-2s and 1099s issued, records archived.',
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: '/accounting-cfo-services/accounting-services',
          title: 'Accounting Services',
          text: 'Bundle payroll with monthly bookkeeping.',
        },
        {
          href: '/accounting-cfo-services/fractional-cfo-services',
          title: 'Fractional CFO Services',
          text: 'Labor cost analysis and headcount planning.',
        },
        {
          href: '/tax-services/tax-compliance-and-preparation',
          title: 'Tax Compliance & Preparation',
          text: 'Business filings that tie to your payroll.',
        },
        { href: '/contact', title: 'Contact', text: 'Hand off payroll this quarter.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Payroll Services',
          serviceType: 'Payroll Service',
          description:
            'Payroll processing, payroll tax filings, new-hire reporting, and W-2 and 1099 preparation for small businesses in Fort Myers, Naples, and across Florida.',
          path: '/accounting-cfo-services/payroll-services',
        }),
      ]}
    />
  );
}
