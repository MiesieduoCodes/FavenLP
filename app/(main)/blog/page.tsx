'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import DataProtectionArticle from '@/components/data-privacy'
import DataSubjectAccessRequests from '@/components/data-structure'
import NigeriaTaxAct2025 from '@/components/nigeriantax'
import BootcampPopup from '@/components/bootcamp-reg-popup'
import Conference from '@/components/conference'
import DataController from '@/components/data-controller'

const componentMap: Record<string, React.ReactNode> = {
  '#conference': <Conference />,
  '#dataController': <DataController />,
  '#dataPrivacy': <DataProtectionArticle />,
  '#dataStructure': <DataSubjectAccessRequests />,
  '#nigerianTax': <NigeriaTaxAct2025 />,
  // '#bootcamp': <BootcampPopup />,
}

export default function BlogPage() {
  const pathname = usePathname()
  const [activeComponent, setActiveComponent] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash && componentMap[hash]) {
      setActiveComponent(componentMap[hash])
    } else {
      setActiveComponent(null) // fallback if no hash
    }
  }, [pathname])

  return (
    <section className="flex flex-col w-full gap-10">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights and analysis on legal technology, compliance, and business strategy
          </p>
        </div>
      </section>

      {/* Render selected component */}
      <div className="container mx-auto px-4">
        {activeComponent || <p className="text-center text-lg">Select a topic from the menu.</p>}
      </div>
      <BootcampPopup />
    </section>
  )
}
