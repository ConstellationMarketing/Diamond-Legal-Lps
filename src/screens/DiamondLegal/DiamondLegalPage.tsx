import React from "react";
import { CheckCircle, Phone, MapPin, Mail } from "lucide-react";

export const DiamondLegalPage = (): JSX.Element => {
  const phone = "(815) 657-1195";
  const phoneHref = "tel:8156571195";

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const practiceAreas = [
    {
      title: "Child Custody & Parenting Time Disputes",
      description:
        "When your time with your children is at risk, every decision matters. We represent parents in contested custody cases, parenting time disputes, and situations involving GALs—fighting to protect your role in your child's life.",
    },
    {
      title: "High-Conflict Divorce Cases",
      description:
        "Divorces involving constant conflict, allegations, or court battles require a strategic approach. We take control of complex cases and guide you through each step with clarity, structure, and strong legal advocacy.",
    },
    {
      title: "Hidden Assets & Financial Protection",
      description:
        "If you suspect your spouse is hiding money or misusing marital assets, we take action. From uncovering hidden assets to protecting your financial future, we ensure nothing is overlooked in your case.",
    },
    {
      title: "Complex Divorce & Asset Division",
      description:
        "Dividing retirement accounts, property, and shared financial obligations can be overwhelming. We handle complex asset division cases involving homes, pensions, 401(k)s, and financial disputes with precision and strategy.",
    },
    {
      title: "Orders of Protection & Emergency Matters",
      description:
        "When immediate action is needed, we help clients navigate orders of protection, emergency custody issues, and urgent legal situations involving safety, stability, and child wellbeing.",
    },
    {
      title: "Strategy Consultations for Ongoing Cases",
      description:
        "If your case has stalled or your previous attorney hasn't delivered results, we provide strategic consultations to assess your situation, identify gaps, and create a clear path forward.",
    },
  ];

  const clientCategories = [
    {
      number: "1",
      title: "Custody or Parenting Time Disputes? We Protect Your Role",
      description:
        "If you're facing disagreements over child custody, parenting time, or visitation, Diamond Legal provides strategic guidance to ensure your voice is heard and your time with your children is safeguarded. We also handle cases involving GAL involvement, court-appointed professionals, and complex parenting plans.",
    },
    {
      number: "2",
      title: "High-Conflict Divorce? We Take Control",
      description:
        "For divorces involving allegations, hostility, or stalled litigation, our attorneys craft clear, actionable strategies to manage conflict, move the case forward, and protect your interests. From restraining orders to emergency filings, we handle complicated divorce scenarios with confidence and authority.",
    },
    {
      number: "3",
      title: "Hidden Assets or Financial Concerns? We Investigate and Protect",
      description:
        "If you suspect your spouse is hiding money, misusing marital funds, or concealing assets like retirement accounts, real estate, or investments, we take action. Diamond Legal ensures financial transparency and works to secure your fair share of marital property and financial stability.",
    },
    {
      number: "4",
      title: "Special Circumstances or Complex Cases? We Navigate the Challenges",
      description:
        "Whether your case involves special needs children, multiple properties, retirement division, or prior attorney issues, our team creates tailored legal strategies. We guide you through every step of complex family law matters to protect your children, finances, and long-term wellbeing.",
    },
  ];

  const highlights = [
    {
      title: "Proven Family Law Results",
      description:
        "Trusted attorneys with decades of experience achieving successful outcomes in high-conflict divorces, contested custody cases, and complex financial disputes throughout McHenry, Lake, and Kane Counties.",
    },
    {
      title: "Local Advocacy You Can Count On",
      description:
        "Dedicated representation for families in McHenry, Lake, and Kane Counties, providing personalized attention, strategic guidance, and hands-on support through every step of your divorce or custody matter.",
    },
    {
      title: "Strong Representation in High-Conflict Cases",
      description:
        "Experienced legal counsel for challenging divorce scenarios, custody disputes, financial misconduct investigations, and special-needs parenting plans — protecting your children, assets, and long-term stability.",
    },
    {
      title: "Free Strategy Consultation",
      description:
        "Speak directly with an accomplished family law attorney today to review your case, explore options, and develop a clear plan to safeguard your children, finances, and future — at no cost.",
    },
  ];

  const serviceHighlights = [
    {
      title: "Proven Family Law Expertise",
      description:
        "Decades of experience successfully handling high-conflict divorces, contested custody disputes, and complex financial matters.",
    },
    {
      title: "Strategy Consultation",
      description:
        "Speak directly with an experienced attorney to review your case, explore options, and develop a clear plan for protecting your children and assets.",
    },
    {
      title: "Successful Outcomes in Local Courts",
      description:
        "Track record of favorable resolutions across McHenry, Lake, and Kane County family courts.",
    },
    {
      title: "Local Representation with Deep Court Knowledge",
      description:
        "Extensive familiarity with regional judges, procedures, and legal nuances ensures strategic advocacy tailored to your case.",
    },
    {
      title: "Strategic, Compassionate, Client-Focused Advocacy",
      description:
        "We guide you through every step of your divorce or custody matter, combining strong legal strategy with clear communication and personal support.",
    },
  ];

  return (
    <div className="w-full bg-wosnik-light">
      <div className="flex flex-col">
        {/* ============ HERO SECTION ============ */}
        <section className="relative w-full min-h-[500px] bg-wosnik-dark">
          {/* Navigation Bar */}
          <div className="relative w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/diamond-legal-logo.webp"
                  alt="Diamond Legal, P.C."
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col items-end">
                <p className="font-body text-wosnik-dark text-xs uppercase tracking-wider">
                  McHenry's Trusted Family Law Attorneys
                </p>
                <a
                  href={phoneHref}
                  className="font-body text-wosnik-dark hover:text-wosnik-accent transition-colors text-lg font-semibold"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
            <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4">
              Protect Your Children, Your Finances, and Your Future in a High-Conflict Divorce
            </h1>
            <h2 className="font-body text-wosnik-accent text-xl md:text-2xl font-semibold mb-6">
              McHenry, Lake &amp; Kane County Divorce Attorneys — Diamond Legal
            </h2>
            <p className="font-body text-white text-base max-w-3xl mx-auto leading-relaxed mb-8">
              Facing a custody battle, financial uncertainty, or a high-conflict spouse? Diamond Legal provides experienced, strategic divorce representation for parents navigating complex cases involving children, parenting time, and asset division. With over 40 years of serving McHenry, Lake, and Kane Counties, we help you take control, protect what matters most, and move forward with clarity and confidence.
            </p>
            <button
              className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-white/20 transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              onClick={scrollToContact}
            >
              Get Your Strategy Consultation
            </button>
          </div>
        </section>

        {/* ============ PRACTICE AREAS SECTION ============ */}
        <section id="practice-areas" className="w-full bg-wosnik-light py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
                Strategic Divorce Representation for High-Conflict Cases
              </h2>
              <p className="font-body text-wosnik-dark/70 text-base max-w-3xl mx-auto mb-8">
                You don't have to navigate custody battles, financial uncertainty, or a high-conflict spouse alone. We guide parents through complex divorce cases with a clear strategy, strong advocacy, and a focus on protecting what matters most.
              </p>
              <h3 className="font-heading text-wosnik-dark text-2xl font-normal">
                High-Conflict Divorce &amp; Family Law Cases We Handle
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
              {practiceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <h4 className="font-heading text-wosnik-dark text-lg font-normal mb-3">
                    {area.title}
                  </h4>
                  <p className="font-body text-wosnik-dark/70 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary CTA Bar */}
            <div className="bg-wosnik-accent rounded-lg p-12 text-center">
              <h3 className="font-heading text-white text-2xl md:text-3xl font-normal mb-4">
                Speak With a Divorce Attorney Today. Protect Your Children, Finances &amp; Future
              </h3>
              <p className="font-body text-white text-base mb-6">
                Get clear guidance on custody, parenting time, and financial protection from a seasoned family law attorney.
              </p>
              <a
                href={phoneHref}
                className="inline-block font-heading text-white text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
              >
                {phone}
              </a>
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-wosnik-dark hover:bg-wosnik-dark/90 text-white font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
                >
                  Get Your Strategy Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CLIENT CATEGORY CARDS SECTION ============ */}
        <section className="w-full bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
                Why Choose Diamond Legal, P.C.
              </h2>
              <p className="font-body text-gray-600 text-lg">
                Over 40 Years of Combined Experience Protecting Families, Children, and Financial Futures
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientCategories.map((cat, index) => (
                <div
                  key={index}
                  className="bg-wosnik-accent p-6 rounded-lg flex flex-col"
                >
                  <div className="w-10 h-10 bg-wosnik-dark rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                    <span className="font-heading text-white text-lg font-normal">
                      {cat.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-white text-base font-normal mb-3 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="font-body text-white/90 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ABOUT US SECTION ============ */}
        <section id="about-us" className="w-full bg-wosnik-light py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
              Meet the Diamond Legal Team
            </h2>

            <div className="flex flex-col items-center">
              <div className="flex flex-col space-y-6 text-center max-w-4xl mb-10">
                <p className="font-body text-wosnik-dark text-base leading-relaxed">
                  At Diamond Legal, P.C., you're represented by a seasoned team of family law attorneys with over 40 years of combined experience serving McHenry, Lake, and Kane Counties. Founded by Samuel J. Diamond, who began his career as an Assistant State's Attorney after earning his Juris Doctor from Chicago‑Kent College of Law, the firm brings decades of courtroom insight, local knowledge, and strong community relationships to every case.
                </p>
                <p className="font-body text-wosnik-dark text-base leading-relaxed">
                  Our attorneys understand the emotional and legal complexities of high-conflict divorces and focus on strategic case evaluation, clear guidance through difficult decisions, and tailored approaches that protect your children, finances, and long-term future — whether your case involves contested custody, financial disputes, or prior legal representation that hasn't delivered results.
                </p>
                <p className="font-body text-wosnik-dark text-base leading-relaxed">
                  From complex custody battles to intricate asset divisions, Diamond Legal combines experience, strategic thinking, and compassionate advocacy to guide you through every stage of your family law matter, providing personalized attention, clear explanations, and a dedicated legal partner committed to achieving the best possible outcome for you and your family.
                </p>
              </div>

              <div className="mb-12">
                <button
                  onClick={scrollToContact}
                  className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-white/20 transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
                >
                  Speak With a Divorce Attorney Today
                </button>
              </div>

              {/* Highlight Boxes */}
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-wosnik-accent rounded-lg p-6 flex flex-col items-center text-center"
                    >
                      <CheckCircle className="w-10 h-10 text-white mb-3" />
                      <h4 className="font-heading text-white text-base font-normal mb-2">
                        {highlight.title}
                      </h4>
                      <p className="font-body text-white/90 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHY US SECTION ============ */}
        <section className="w-full bg-white py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
                Why Choose Diamond Legal, P.C.
              </h2>
              <p className="font-body text-gray-600 text-lg">
                Proven family law advocacy built on local competence and strategic guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <p className="font-body text-wosnik-dark text-base leading-relaxed">
                  Going through a high-conflict divorce or custody dispute can be overwhelming, but you don't have to face it alone. Diamond Legal, P.C. begins by carefully listening to understand your situation, priorities, and the challenges unique to your family.
                </p>
                <p className="font-body text-wosnik-dark text-base leading-relaxed">
                  We focus on honest guidance, personalized strategies, and clear communication throughout every stage of your case. Our goal is to help you feel informed, supported, and confident in the decisions that affect your children, home, and financial future.
                </p>
                <p className="font-body text-wosnik-dark text-base leading-relaxed">
                  Our firm handles complex divorce cases, contested custody battles, financial disputes, and special-needs parenting plans with precision and determination. We provide strong, strategic representation for families across McHenry, Lake, and Kane Counties.
                </p>
                <p className="font-body text-wosnik-dark text-base leading-relaxed">
                  We ensure each client understands the legal process, potential outcomes, and available options, empowering you to make informed decisions that protect your children, finances, and long-term stability.
                </p>
              </div>

              <div className="space-y-4">
                {serviceHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-wosnik-light rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-wosnik-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading text-wosnik-dark text-base font-normal mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-wosnik-dark/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ CALL TO ACTION MAIN SECTION ============ */}
        <section className="w-full bg-wosnik-accent py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="font-heading text-white text-3xl md:text-4xl font-normal mb-6">
              Ready to Discuss Your Case?
            </h2>
            <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Don't face a high-conflict divorce, custody dispute, or complex family law matter alone. Contact the experienced team at Diamond Legal, P.C. today for a confidential, personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={phoneHref}
                className="bg-wosnik-dark text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Call Now: {phone}
              </a>
              <button
                onClick={scrollToContact}
                className="bg-white text-wosnik-dark border-2 border-wosnik-dark font-body font-semibold px-8 py-4 rounded-lg hover:bg-wosnik-dark hover:text-white transition-all"
              >
                Request Strategy Consultation
              </button>
            </div>
          </div>
        </section>

        {/* ============ CONTACT SECTION ============ */}
        <section id="contact" className="w-full bg-wosnik-light py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
                Contact Diamond Legal, P.C.
              </h2>
              <p className="font-body text-wosnik-dark text-lg">
                Let's discuss your family law matter. Get trusted guidance for divorce, custody, and high-conflict cases today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
                  Request a Strategy Consultation
                </h3>
                <form
                  id="contact-form"
                  name="diamond-legal-family-law"
                  action="https://usebasin.com/f/REPLACE_WITH_FORM_ID"
                  method="POST"
                  className="space-y-4"
                >
                  {/* Basin redirect to thank-you page */}
                  <input type="hidden" name="_redirect" value="./lp-family-law-thank-you.html" />

                  {/* Hidden tracking fields */}
                  <input type="hidden" id="utm_source" name="utm_source" />
                  <input type="hidden" id="utm_medium" name="utm_medium" />
                  <input type="hidden" id="utm_campaign" name="utm_campaign" />
                  <input type="hidden" id="utm_term" name="utm_term" />
                  <input type="hidden" id="utm_content" name="utm_content" />
                  <input type="hidden" id="gclid" name="gclid" />
                  <input type="hidden" id="fbclid" name="fbclid" />
                  <input type="hidden" id="msclkid" name="msclkid" />
                  <input type="hidden" id="first_utm_source" name="first_utm_source" />
                  <input type="hidden" id="first_utm_medium" name="first_utm_medium" />
                  <input type="hidden" id="first_utm_campaign" name="first_utm_campaign" />
                  <input type="hidden" id="first_utm_term" name="first_utm_term" />
                  <input type="hidden" id="first_utm_content" name="first_utm_content" />
                  <input type="hidden" id="first_referrer" name="first_referrer" />
                  <input type="hidden" id="first_landing_page" name="first_landing_page" />
                  <input type="hidden" id="first_visit_timestamp" name="first_visit_timestamp" />
                  <input type="hidden" id="referrer" name="referrer" />
                  <input type="hidden" id="referrer_domain" name="referrer_domain" />
                  <input type="hidden" id="search_engine" name="search_engine" />
                  <input type="hidden" id="social_platform" name="social_platform" />
                  <input type="hidden" id="traffic_source_category" name="traffic_source_category" />
                  <input type="hidden" id="is_paid_traffic" name="is_paid_traffic" />
                  <input type="hidden" id="is_returning_visitor" name="is_returning_visitor" />
                  <input type="hidden" id="lead_source" name="lead_source" />
                  <input type="hidden" id="lead_medium" name="lead_medium" />
                  <input type="hidden" id="lead_campaign" name="lead_campaign" />
                  <input type="hidden" id="lead_keyword" name="lead_keyword" />
                  <input type="hidden" id="lead_content" name="lead_content" />
                  <input type="hidden" id="landing_url" name="landing_url" />
                  <input type="hidden" id="landing_page" name="landing_page" />
                  <input type="hidden" id="current_page_url" name="current_page_url" />
                  <input type="hidden" id="session_id" name="session_id" />
                  <input type="hidden" id="session_count" name="session_count" />
                  <input type="hidden" id="pages_visited" name="pages_visited" />
                  <input type="hidden" id="time_on_page" name="time_on_page" />
                  <input type="hidden" id="user_agent" name="user_agent" />
                  <input type="hidden" id="device_type" name="device_type" />
                  <input type="hidden" id="browser" name="browser" />
                  <input type="hidden" id="os" name="os" />
                  <input type="hidden" id="screen_resolution" name="screen_resolution" />
                  <input type="hidden" id="timestamp" name="timestamp" />

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-white/20 transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <a
                          href={phoneHref}
                          className="font-body text-wosnik-dark font-medium hover:text-wosnik-accent transition-colors"
                        >
                          {phone}
                        </a>
                        <p className="font-body text-gray-600 text-sm">
                          Family Law Attorneys
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <a
                          href="mailto:law@dlfirm.com"
                          className="font-body text-wosnik-dark font-medium hover:text-wosnik-accent transition-colors"
                        >
                          law@dlfirm.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
                    Office Location
                  </h3>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body text-wosnik-dark font-medium mb-1">
                        Diamond Legal, P.C.
                      </p>
                      <p className="font-body text-wosnik-dark">3431 West Elm Street</p>
                      <p className="font-body text-wosnik-dark">McHenry, IL 60050</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-4">
                    What To Expect
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-wosnik-accent flex-shrink-0 mt-0.5" />
                      <p className="font-body text-wosnik-dark text-sm leading-relaxed">
                        A confidential consultation with an experienced family law attorney
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-wosnik-accent flex-shrink-0 mt-0.5" />
                      <p className="font-body text-wosnik-dark text-sm leading-relaxed">
                        A clear review of your case, legal options, and recommended next steps
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-wosnik-accent flex-shrink-0 mt-0.5" />
                      <p className="font-body text-wosnik-dark text-sm leading-relaxed">
                        A personalized strategy focused on protecting your children, finances, and future
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=3431+West+Elm+Street,+McHenry,+IL+60050&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map view of Diamond Legal, P.C. office in McHenry, IL"
              ></iframe>
            </div>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <section className="w-full bg-wosnik-dark py-8">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="font-body text-white/60 text-sm">
                © Diamond Legal, P.C. - 2025, All Rights Reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
