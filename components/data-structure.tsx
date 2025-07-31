"use client";

import React from "react";

const DataSubjectAccessRequests: React.FC = () => {
  return (
    <div className="p-4 md:px-20 md:py-20 mx-auto text-gray-800 leading-7">
      <h1 className="text-2xl font-bold mb-4">
        DATA SUBJECT ACCESS REQUESTS (DSARS): BEST PRACTICES FOR MEETING LEGAL REQUIREMENTS
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">WHAT IS DATA SUBJECT ACCESS REQUEST?</h2>
        <p>
          A Data Subject Access Request (DSAR) is a request directed to the organization by a
          data subject (individual), granting the data subject right to access information
          about his/her personal data the organization is processing.
        </p>
        <p className="mt-2">
          This request is made by a data subject to understand how and why their personal
          data is being used, and how to check that it is being used lawfully. It is one of the
          fundamental rights of the data subject which allows for the exercise of other rights
          including the (legal) right to obtain a copy of their personal data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          WHAT INFORMATION CAN DATA SUBJECTS REQUEST FROM DATA CONTROLLERS?
        </h2>
        <ul className="list-disc pl-6">
          <li>Confirmation that the data Controller/Processor is processing their personal data.</li>
          <li>A copy of their personal data.</li>
          <li>
            Other supplementary information. E.g. copies of email correspondence, list of third
            parties their information is shared with or any other information contained in the
            organization&apos;s privacy policy documentations.
          </li>
        </ul>
        <p className="mt-2">
          It is worthy of note that data subjects access requests may be limited where
          disclosing their data may also lead to the disclosure of other individual&apos;s data or
          when they are exercising another Individual&apos;s right of access on their behalf.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">HOW DO DATA SUBJECTS MAKE ACCESS REQUESTS?</h2>
        <p>
          An individual can make a request for rectification, erasure or sharing of their
          personal data verbally or in writing.
        </p>
        <p className="mt-2">
          Such requests can be made to any department of the organization or to designated
          personnel assigned for such purposes.
        </p>
        <p className="mt-2">
          A practical approach is to publish the details of the Data Protection Officer (DPO) on
          your website or other media platforms to which requests can be directed.
        </p>
        <p className="mt-2">
          Likewise, social media companies and online platforms simply provide user activity
          logs where a user can download all the information about them. Organisation with
          sufficient resources can also add this feature into their platforms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          PRACTICAL STEPS FOR HANDLING DATA SUBJECTS ACCESS REQUESTS
        </h2>
        <p>Handling DSARs adequately and effectively requires the following steps:</p>
        <ul className="list-decimal pl-6 mt-2 space-y-1">
          <li>
            <strong>Designation of office:</strong> Allocate data protection to a “lead” if not already
            in place. It enables the organization specify a contact point in the event of a DSAR.
          </li>
          <li>
            <strong>Acknowledgement of the request:</strong> A simple acknowledgement can build
            trust, followed by timely feedback with the expected time.
          </li>
          <li>
            <strong>Confirmation of identity:</strong> Request recognized identity where necessary to
            prevent data leaks.
          </li>
          <li>
            <strong>Check validity and scope:</strong> Ensure the request is appropriate and determine
            the extent of information required.
          </li>
          <li>
            <strong>Set reminders:</strong> Monitor and track pending requests that need answers.
          </li>
          <li>
            <strong>Double-check requests:</strong> Verify the nature of information requested.
          </li>
          <li>
            <strong>Search for relevant information:</strong> Only disclose devolved information within
            scope.
          </li>
          <li>
            <strong>Consider impact on other people:</strong> Ensure other people&apos;s data is not
            inadvertently disclosed.
          </li>
          <li>
            <strong>Prepare your response:</strong> Use templates as required under data privacy
            laws.
          </li>
          <li>
            <strong>Send reply in machine-readable format:</strong> Maintain security and records of
            the response.
          </li>
        </ul>
        <p className="mt-2">
          Having an appropriate DSAR mechanism cannot be underrated. Failure to respond may
          cause affected individuals to complain to data protection authorities, leading to
          investigations, fines, and penalties.
        </p>
        <p className="mt-2">
          Constant and unsolicited access requests may hamper a data controller&apos;s trust and
          regulation.
        </p>
        <p className="mt-2">
          Overall, responding to DSARs is not just about compliance, but maintaining trust and
          transparency with your data subjects.
        </p>
      </section>

      <section className="mb-6">
        <p>
          Faven LP provides data protection and privacy compliance across various sectors.
          You can speak to one of our experts to build a comprehensive data protection and
          privacy framework that is suited for your institution. Through our specialized
          services, we have worked with edtech, fintech, medtech and legaltech to attain
          compliance and remain relevant in today&apos;s constantly evolving digital landscape.
        </p>
        <p className="mt-2">
          Email us at <a href="mailto:favenchambers@gmail.com" className="text-blue-600 underline">favenchambers@gmail.com</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">References</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nigeria Data Protection Act, 2023, Section 34(1)(b), 54.</li>
          <li>Digital Rights Lawyers Initiative & Ors V. National Identity Management Commission (Nimc) (2021) LPELR-55623(CA)</li>
          <li>General Application and Implementation Directive (GAID), 2025</li>
          <li>National Identity Management Commission Act, 2007, S. 31(d)(i) and (ii)</li>
          <li>
            Muhammad Deckri, Algamar et al, “Data Subject Access Request: What Indonesia Can Learn
            and Operationalise in 2024?”, [2023] Journal of Central Banking Law and Institutions,
            Vol. 2(3), pp. 481–512, available at{" "}
            <a
              href="https://www.jcli-bi.org/index.php/jcli/article/view/171/47"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://www.jcli-bi.org/index.php/jcli/article/view/171/47
            </a>{" "}
            accessed 21st January, 2024.
          </li>
        </ul>
        <p className="mt-4 italic text-sm">
          This content of this article is for general information on the subject matter only. Consult
          with an expert on your specific circumstance before taking any further actions.
        </p>
      </section>
    </div>
  );
};

export default DataSubjectAccessRequests;
