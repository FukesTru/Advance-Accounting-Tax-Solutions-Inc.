import Script from 'next/script';

/**
 * The firm's LeadConnector (GoHighLevel) enquiry form.
 *
 * The embed sizes itself by postMessage from form_embed.js, so the iframe
 * carries a min-height matching the form's own data-height. Without it the
 * frame collapses to nothing in the window between paint and the script
 * running, and the section jumps once it loads.
 */
export default function LeadConnectorForm() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/DjsYaWR6cOGDXEW2OfKH"
        id="inline-DjsYaWR6cOGDXEW2OfKH"
        title="Website Form (Advance Accounting & Tax Solutions, Inc.)"
        className="w-full rounded-xl border-0"
        style={{ minHeight: 542 }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form (Advance Accounting & Tax Solutions, Inc.)"
        data-height="542"
        data-layout-iframe-id="inline-DjsYaWR6cOGDXEW2OfKH"
        data-form-id="DjsYaWR6cOGDXEW2OfKH"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
