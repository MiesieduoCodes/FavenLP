// app/privacy-policy/page.tsx

"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-2"
        >
            <h2 className="text-lg font-bold">{title}</h2>
            <div>{children}</div>
        </motion.section>
    );
};

const PrivacyPolicy = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center pb-20 text-gray-800"
        >

            <div className="w-full text-3xl bg-[#DED2BC] py-10 text-foreground">
                <h1 className="text-2xl font-semibold text-center">Privacy Policy</h1>

            </div>
            <div className=" w-full flex flex-col gap-8 p-8 max-w-4xl">

                <Section title="Who We Are">
                    <p>
                        We, Faven LP specializing in data protection and privacy compliance,
                        corporate governance, intellectual property, media & technology law. We are committed to protecting your personal data
                        in compliance with applicable data protection laws. When we collect, use, and process personal data, we are governed
                        by the provisions of the Nigeria Data Protection Act, 2023. As a &quot;controller&quot; of personal information under this law, we bear
                        primary responsibility for the data. This means we are the legal entity that, alone or in collaboration with others, determines
                        the purposes and methods of processing personal data.
                    </p>
                </Section>

                <Section title="Types of Data Collected">
                    <p>
                        We collect the following types of personal data:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li> Personal Identification Information: Name, email address, phone number, and job title.</li>
                        <li>Business Information: Company name, industry, and business address.</li>
                        <li>Communication Data: Any messages or inquiries you send through our contact forms or email.</li>
                    </ul>
                </Section>

                <Section title="How We Collect Data">
                    <p>
                        We collect personal data through:
                    </p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Direct interactions (e.g., when you fill out forms, subscribe to newsletters, or contact us).</li>
                        <li>Communicate with us through any of our available channels. </li>
                    </ul>
                </Section>

                <Section title="Purposes of Data Collection">
                    <ul className="list-disc list-inside space-y-1">
                        <li>With your consent</li>
                        <li>To comply with legal and regulatory obligations.</li>
                        <li>To perform contractual obligations </li>
                        <li>For the vital interest of third parties </li>
                    </ul>
                </Section>

                <Section title="Data Sharing & Third Parties">
                    <p>We do not sell or rent personal data. However, we may share your data with:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Legal or regulatory authorities when required by law.</li>
                        <li>Professional advisors, such as auditors or legal consultants, when necessary.</li>
                    </ul>
                </Section>

                <Section title="User Rights">
                    <p>
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            Access, correct, or delete your personal data.
                        </li>
                        <li>Withdraw consent for processing where applicable but this shall not affect the validity of processing prior to such withdrawal.
                        </li>
                        <li>Object to or restrict certain processing activities.
                        </li>
                        <li>Request data portability.
                        </li>
                        <li>Lodge a complaint with a relevant data protection authority.</li>
                    </ul>
                </Section>

                <Section title="Data Security Measures">
                    <p>
                    We implement security measures such as:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Encryption of sensitive data</li>
                        <li>Access controls and authentication measures.</li>
                        <li>Regular security assessments and updates.</li>
                        <li>Secure data storage and restricted access to personal data</li>
                    </ul>
                </Section>

                <Section title="Data Retention">
                    <p>
                    We retain personal data for as long as necessary to fulfill legal, business, and contractual obligations. When data is no
                    longer required, we securely delete or anonymize it.
                    </p>
                </Section>

                <Section title="Contact Information">
                    <p>
                    For questions or requests regarding this Privacy Policy, please contact us at:
                        <br />
                        <br />
                        Bayelsa Tech Hub, 4th Floor, Transperacy Plaza, Besides CBN Headquarters, Oxbow lake Road, Swali, Yenagoa Bayelsa State. 
                        <br />
                        <br />
                        Phone number: 09068126885
                        <br />
                        Email: ikionanaezekiel@gmail.com
                    </p>
                </Section>
            </div>
        </motion.main>
    );
};

export default PrivacyPolicy;
