import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, Send, Terminal, ShieldAlert } from "lucide-react";
import { TerminalEffect } from "./TerminalEffect";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    // In a real implementation, this would send the form data to a backend
    console.log(values);
    alert("Thanks for your message! I'll get back to you soon.");
    form.reset();
  }

  return (
    <section className="relative bg-black py-20" id="contact">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.05),transparent_70%)]"></div>
        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-green-900/50 bg-black shadow-[0_0_10px_rgba(0,255,0,0.2)]">
            <Terminal className="h-6 w-6 text-green-500" />
          </div>

          <h2 className="mb-4 font-mono text-3xl font-bold text-green-500 sm:text-4xl">
            Establish Connection
          </h2>
          <p className="mx-auto max-w-2xl font-mono text-lg text-slate-300">
            Ready to secure your infrastructure? Have questions about my
            services? I'm here to help you implement robust security practices.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div>
            <Card className="border-green-900/30 bg-black/60 shadow-[0_0_15px_rgba(0,255,0,0.1)] dark:border-green-900/30 dark:bg-black/60">
              <CardHeader className="border-b border-green-900/20">
                <CardTitle className="font-mono text-green-500">
                  Connection Info
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 pt-6">
                <div className="flex items-center gap-3 rounded-md border border-green-900/20 bg-black/50 p-3">
                  <Mail className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-mono font-medium text-green-400">
                      Email Channel
                    </p>
                    <p className="font-mono text-sm text-slate-400">
                      contact@yourdomain.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-green-900/20 bg-black/50 p-3">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-mono font-medium text-green-400">
                      Secure Meeting
                    </p>
                    <p className="font-mono text-sm text-slate-400">
                      Book a free 30-minute consultation
                    </p>
                  </div>
                </div>
                <div className="rounded-md border border-green-900/20 bg-black/50 p-4">
                  <TerminalEffect
                    text="Security consultation initialized. Ready to identify and mitigate threats to your systems."
                    speed={20}
                    prompt="$"
                    className="text-sm"
                  />
                </div>
                <Button className="flex items-center gap-2 border border-green-500/30 bg-black font-mono text-green-500 shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                  <ShieldAlert className="h-4 w-4" />
                  Book Free Security Audit
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-green-900/30 bg-black/60 shadow-[0_0_15px_rgba(0,255,0,0.1)] dark:border-green-900/30 dark:bg-black/60">
            <CardHeader className="border-b border-green-900/20">
              <CardTitle className="font-mono text-green-500">
                Secure Message Channel
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-green-400">
                          Identifier
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="border-green-900/30 bg-black/70 font-mono text-green-400 placeholder:text-green-900/50 focus-visible:border-green-500/50 focus-visible:ring-green-500/20"
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-green-400">
                          Secure Channel
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            {...field}
                            className="border-green-900/30 bg-black/70 font-mono text-green-400 placeholder:text-green-900/50 focus-visible:border-green-500/50 focus-visible:ring-green-500/20"
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-green-400">
                          Organization{" "}
                          <span className="text-sm text-green-900/70">
                            (Optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company"
                            {...field}
                            className="border-green-900/30 bg-black/70 font-mono text-green-400 placeholder:text-green-900/50 focus-visible:border-green-500/50 focus-visible:ring-green-500/20"
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-green-400">
                          Transmission
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can I help with your security needs?"
                            className="min-h-[120px] border-green-900/30 bg-black/70 font-mono text-green-400 placeholder:text-green-900/50 focus-visible:border-green-500/50 focus-visible:ring-green-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-red-400" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full gap-2 border border-green-500/30 bg-black font-mono text-green-500 shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                  >
                    Transmit Secure Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
