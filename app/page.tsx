'use client';

import React, { Suspense } from 'react';
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import FeatureSection from "@/components/feature-section";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactCta from "@/components/contact-cta";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <AboutSection />
        <FeatureSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactCta />
        <BlogSection />
        <ContactSection />
      </Suspense>

    </div>
  )
}
