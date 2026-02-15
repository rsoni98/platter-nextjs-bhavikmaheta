"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(data: ContactFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form submitted:", data)
    setIsSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
          >
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-3xl font-bold text-gray-900 dark:text-white"
          >
            Message Sent
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 max-w-md text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed"
          >
            Thank you for your message. We'll get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10"
          >
            <Button
              className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-white/90 font-semibold px-8"
              onClick={() => {
                setIsSubmitted(false)
                form.reset()
              }}
            >
              Send Another
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-900 dark:text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="mt-3 rounded-lg bg-white dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-white/20 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-900 dark:text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          type="email"
                          className="mt-3 rounded-lg bg-white dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-white/20 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-900 dark:text-white">Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="How can we help?"
                        className="mt-3 rounded-lg bg-white dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-white/20 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all py-3"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-900 dark:text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="mt-3 min-h-[160px] resize-none rounded-lg bg-white dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-white/20 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all py-3"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-white/90 font-semibold py-6 mt-4 sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
