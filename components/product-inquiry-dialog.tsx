"use client"

import { useState, useRef, useActionState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactForm } from "@/app/actions"

interface ProductInquiryDialogProps {
  productName: string
}

export function ProductInquiryDialog({ productName }: ProductInquiryDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const initialState = { success: false, message: "" }
  const [state, formAction, pending] = useActionState(sendContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset()
      setIsOpen(false) // Close dialog on successful submission
    }
  }, [state.success])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-6 py-3 rounded-md">Enquire Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enquire About {productName}</DialogTitle>
          <DialogDescription>Fill out the form below to send an inquiry about {productName}.</DialogDescription>
        </DialogHeader>
        <form action={formAction} ref={formRef} className="grid gap-4 py-4">
          <Input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-md" required />
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
            value={`Enquiry for ${productName}`}
            readOnly // Make it read-only as it's pre-filled
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
            <p aria-live="polite" className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
              {state.message}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
