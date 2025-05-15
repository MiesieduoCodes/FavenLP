import ContactComponent from "@/components/contactPage";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactComponent />
    </Suspense>
  );
}
