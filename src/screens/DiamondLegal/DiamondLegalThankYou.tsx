import React from "react";
import { CheckCircle } from "lucide-react";

export const DiamondLegalThankYou = (): JSX.Element => {
  const phone = "(815) 657-1195";
  const phoneHref = "tel:8156571195";

  const nextSteps = [
    {
      title: "Watch for a call or email reply",
      description:
        "Our attorneys will reach out promptly to review your case and schedule your consultation.",
    },
    {
      title: "Gather any relevant documents",
      description:
        "Collect financial records, custody agreements, court notices, or prior attorney communications to help us understand your situation fully.",
    },
    {
      title: "Prepare for a clear strategy discussion",
      description:
        "During your consultation, we'll outline next steps, legal options, and a personalized plan to protect your children, finances, and long-term stability.",
    },
  ];

  const specialties = [
    "High-Conflict Divorce & Separation",
    "Child Custody & Parenting Time Disputes",
    "Financial & Asset Division (including hidden assets, retirement accounts, and multiple properties)",
    "Special Needs Parenting Plans",
    "Orders of Protection & High-Conflict Litigation",
  ];

  const geographicAreas = ["McHenry County (Core Market)", "Lake County", "Kane County"];

  const credentials = [
    "Founded by Samuel J. Diamond, former Assistant State's Attorney with deep courtroom insight",
    "Extensive experience navigating complex custody disputes, financial investigations, and contested divorces",
    "Strategic advocacy resulting in successful outcomes for children, families, and financial security",
    "Recognized for clear communication, personalized guidance, and compassionate representation",
  ];

  return (
    <div className="w-full min-h-screen bg-wosnik-light flex flex-col">
      {/* Navigation */}
      <div className="w-full bg-wosnik-dark border-b border-wosnik-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="font-heading text-white text-2xl font-normal tracking-wide">
              Diamond Legal
            </span>
            <span className="font-body text-wosnik-accent text-xs tracking-[3px] uppercase mt-0.5">
              P.C.
            </span>
          </div>
          <a
            href={phoneHref}
            className="font-body text-white hover:text-wosnik-accent transition-colors text-lg font-semibold"
          >
            {phone}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-16">
        {/* Success Card */}
        <div className="bg-white rounded-lg shadow-lg p-10 text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="font-heading text-wosnik-dark text-4xl md:text-5xl font-normal mb-4">
            Your Request Has Been Received
          </h1>
          <p className="font-body text-wosnik-dark text-lg">
            A member of our team will contact you shortly.
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
            Next Steps
          </h2>
          <div className="space-y-6">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-9 h-9 bg-wosnik-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-wosnik-dark text-base font-normal">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-wosnik-dark text-lg font-normal mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-wosnik-dark/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialty Focus */}
        <div className="bg-wosnik-dark rounded-lg p-8 mb-8">
          <h2 className="font-heading text-white text-xl font-normal mb-2">
            Specialty Focus — Diamond Legal, P.C.
          </h2>
          <p className="font-body text-wosnik-accent text-xs uppercase tracking-wider mb-4">
            Primary Practice Areas
          </p>
          <ul className="space-y-2">
            {specialties.map((specialty, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-wosnik-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-white text-sm">{specialty}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Geographic Areas & Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-heading text-wosnik-dark text-lg font-normal mb-3">
              Geographic Areas Served
            </h3>
            <div className="flex flex-wrap gap-2">
              {geographicAreas.map((area, i) => (
                <span
                  key={i}
                  className="bg-wosnik-accent text-wosnik-dark font-body text-sm px-3 py-1 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="font-body text-wosnik-dark/60 text-sm mt-4">
              Over 40 years of combined experience in family law and high-conflict cases
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-heading text-wosnik-dark text-lg font-normal mb-3">
              Notable Achievements
            </h3>
            <ul className="space-y-2">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wosnik-accent flex-shrink-0 mt-0.5" />
                  <span className="font-body text-wosnik-dark/80 text-xs leading-relaxed">
                    {cred}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center">
          <a
            href="./lp-family-law.html"
            className="font-body text-wosnik-dark/60 hover:text-wosnik-dark text-sm underline transition-colors"
          >
            Return to Diamond Legal
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-wosnik-dark py-6 text-center">
        <p className="font-body text-white/60 text-sm">
          © Diamond Legal, P.C. - 2025, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
