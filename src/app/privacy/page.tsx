import TwFooter from "@/components/TwFooter";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-neutral-100 text-slate-800">
      <main className="font-nexa-book w-full flex flex-col">
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl px-6 lg:px-8">
            <header className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4 sm:text-5xl">Privacy notice - professional services</h1>
              <p className="my-8 text-gray-600 font-bold text-xl">
                Visual Flow Creations LTD customer privacy notice
              </p>
              <p className="mt-4 text-gray-700">
                This privacy notice tells you what to expect us to do with your personal information.
              </p>
            </header>

            {/* On this page / quick links */}
            <nav aria-label="Table of contents" className="mb-10">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><a className="hover:underline" href="#contact-details">Contact details</a></li>
                <li><a className="hover:underline" href="#what-we-collect">What information we collect, use, and why</a></li>
                <li><a className="hover:underline" href="#lawful-bases-rights">Lawful bases and data protection rights</a></li>
                <li><a className="hover:underline" href="#sources">Where we get personal information from</a></li>
                <li><a className="hover:underline" href="#retention">How long we keep information</a></li>
                <li><a className="hover:underline" href="#complaints">How to complain</a></li>
                <li><a className="hover:underline" href="#last-updated">Last updated</a></li>
              </ul>
            </nav>
            
            <section id="contact-details" className="space-y-4 mt-6 mb-12 scroll-mt-30">
              <h2 className="text-2xl font-bold text-gray-900">Contact details</h2>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p>
                <a className="text-sky-700 hover:underline" href="mailto:info@visualflow.studio">info@visualflow.studio</a>
              </p>
            </section>

            <section id="what-we-collect" className="space-y-4 mt-6 mb-12 scroll-mt-30">
              <h2 className="text-2xl font-bold text-gray-900">What information we collect, use, and why</h2>
              <p>
                We collect or use the following information to <strong>provide and improve products and services for clients</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Names and contact details</li>
                <li>Occupation</li>
                <li>Video recordings</li>
              </ul>
            </section>

            <section id="lawful-bases-rights" className="space-y-4 mt-6 mb-12 scroll-mt-30">
              <h2 className="text-2xl font-bold text-gray-900">Lawful bases and data protection rights</h2>
              <p>
                Under UK data protection law, we must have a “lawful basis” for collecting and using your personal information.
                There is a list of possible <a className="text-sky-700 hover:underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/getting-started-with-gdpr/data-protection-principles-definitions-and-key-terms/#lawfulbasis" target="_blank" rel="noopener noreferrer">lawful bases</a> in the UK GDPR. You can find out more about lawful bases on the ICO’s website.
              </p>
              <p>Which lawful basis we rely on may affect your data protection rights which are set out in brief below. You can find out more about your data protection rights and the exemptions which may apply on the ICO’s website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Your right of access</strong> — You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. {" "}
                  <a className="text-sky-700 hover:underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/create-your-own-privacy-notice/your-data-protection-rights/#roa" target="_blank" rel="noopener noreferrer">Read more about the right of access</a>.
                </li>
                <li>
                  <strong>Your right to rectification</strong> — You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. {" "}
                  <a className="text-sky-700 hover:underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/create-your-own-privacy-notice/your-data-protection-rights/#rtr" target="_blank" rel="noopener noreferrer">Read more about the right to rectification</a>.
                </li>
                <li>
                  <strong>Your right to erasure</strong> — You have the right to ask us to delete your personal information. {" "}
                  <a className="text-sky-700 hover:underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/create-your-own-privacy-notice/your-data-protection-rights/#rte" target="_blank" rel="noopener noreferrer">Read more about the right to erasure</a>.
                </li>
                <li>
                  <strong>Your right to restriction of processing</strong> — You have the right to ask us to limit how we can use your personal information. {" "}
                  <a className="text-sky-700 hover:underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/create-your-own-privacy-notice/your-data-protection-rights/#rtrop" target="_blank" rel="noopener noreferrer">Read more about the right to restriction of processing</a>.
                </li>
                <li>
                  <strong>Your right to object to processing</strong> — You have the right to object to the processing of your personal data. {" "}
                  <a className="text-sky-700 hover:underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/create-your-own-privacy-notice/your-data-protection-rights/#rto" target="_blank" rel="noopener noreferrer">Read more about the right to object to processing</a>.
                </li>
                <li>
                  <strong>Your right to data portability</strong> — You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. {" "}
                  <a className="text-sky-700 hover:underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/create-your-own-privacy-notice/your-data-protection-rights/#rtdp" target="_blank" rel="noopener noreferrer">Read more about the right to data portability</a>.
                </li>
                <li>
                  <strong>Your right to withdraw consent</strong> — When we use consent as our lawful basis you have the right to withdraw your consent at any time. {" "}
                  <a className="text-sky-700 hover:underline" href="https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/create-your-own-privacy-notice/your-data-protection-rights/#rtwc" target="_blank" rel="noopener noreferrer">Read more about the right to withdraw consent</a>.
                </li>
              </ul>
              <p>If you make a request, we must respond to you without undue delay and in any event within one month.</p>
              <p>To make a data protection rights request, please contact us using the contact details at the top of this privacy notice.</p>

              <h3 className="text-lg font-semibold text-gray-900 mt-8">Our lawful bases for the collection and use of your data</h3>
              <p>Our lawful bases for collecting or using personal information to <strong>provide and improve products and services for clients</strong> are:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Consent</strong> — we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.
                </li>
              </ul>
            </section>

            <section id="sources" className="space-y-4 mt-6 mb-12 scroll-mt-30">
              <h2 className="text-2xl font-bold text-gray-900">Where we get personal information from</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Directly from you</li>
              </ul>
            </section>

            <section id="retention" className="space-y-4 mt-6 mb-12 scroll-mt-30">
              <h2 className="text-2xl font-bold text-gray-900">How long we keep information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>For 5 years</li>
              </ul>
            </section>

            <section id="complaints" className="space-y-4 mt-6 mb-12 scroll-mt-30">
              <h2 className="text-2xl font-bold text-gray-900">How to complain</h2>
              <p>
                If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.
              </p>
              <p>
                If you remain unhappy with how we’ve used your data after raising a complaint with us, you can also complain to the ICO.
              </p>
              <div>
                <p className="font-semibold mt-8">The ICO’s address:</p>
                <address className="not-italic leading-7 text-gray-700 mb-4">
                  Information Commissioner’s Office<br />
                  Wycliffe House<br />
                  Water Lane<br />
                  Wilmslow<br />
                  Cheshire<br />
                  SK9 5AF
                </address>
                <p className="mt-2">Helpline number: 0303 123 1113</p>
                <p>
                  Website: {" "}
                  <a className="text-sky-700 hover:underline" href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
                    https://www.ico.org.uk/make-a-complaint
                  </a>
                </p>
              </div>
            </section>

            <section id="last-updated" className="space-y-2 my-6 scroll-mt-30">
              <h2 className="text-2xl font-bold text-gray-900">Last updated</h2>
              <p>This privacy notice was last updated on 18th August 2025.</p>
            </section>
          </div>
        </section>
        <TwFooter />

      </main>
    </div>
  );
}

