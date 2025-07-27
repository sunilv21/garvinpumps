"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"
import { useActionState, useRef } from "react"
import { sendContactForm } from "@/app/actions"

export function ContactSection() {
  const initialState = { success: false, message: "" }
  const [state, formAction, pending] = useActionState(sendContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  if (state.success && formRef.current) {
    formRef.current.reset()
    state.success = false
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Get in Touch</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Have questions or need more information about our products? Feel free to reach out to us. We'd love to hear
          from you!
        </p>
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold text-blue-900">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 text-lg">
                <MapPin className="h-6 w-6 text-blue-900" />
                <span>
                  Garvin Pumps - Rajkot, Gujarat, India
                  <br />
                </span>
              </div>
              <a
                href="mailto:garvinpumps@gmail.com"
                className="flex items-center gap-3 text-gray-700 text-lg hover:underline"
              >
                <Mail className="h-6 w-6 text-blue-900" />
                <span>garvinpumps@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-left text-blue-900">Send Us a Message</h3>
            <form action={formAction} ref={formRef} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md"
                required
              />
              <Input
                type="tel" // Changed to type="tel"
                name="phone" // Changed name to "phone"
                placeholder="Your Phone Number" // Updated placeholder
                className="w-full p-3 border rounded-md"
                required
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border rounded-md"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border rounded-md"
                required
              />
              <Button
                type="submit"
                disabled={pending}
                className="w-full hover:bg-green-600 text-lg py-3 rounded-md text-black bg-slate-100"
              >
                {pending ? "Sending..." : "Send Message"}
              </Button>
              {state?.message && (
                <p
                  aria-live="polite"
                  className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
