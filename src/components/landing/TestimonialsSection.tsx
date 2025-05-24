import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <Card className="h-full border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <CardContent className="flex h-full flex-col p-6">
        <QuoteIcon className="mb-4 h-8 w-8 text-blue-500" />
        <p className="mb-6 flex-1 text-lg text-slate-700 dark:text-slate-300">
          "{quote}"
        </p>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            {author}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {role}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The security audit of our AWS infrastructure was incredibly thorough. They found vulnerabilities we had no idea existed and provided clear remediation steps. Our cloud is much more secure now.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc.",
    },
    {
      quote:
        "Our CI/CD pipelines are now a security asset rather than a liability. The implementation of proper secret management and SLSA compliance has been game-changing for our security posture.",
      author: "Michael Chen",
      role: "DevOps Lead",
      company: "DataFlow Systems",
    },
    {
      quote:
        "The Kubernetes security review saved us from what could have been a major breach. The detailed documentation and remediation plan made it easy for our team to implement the necessary changes.",
      author: "Emma Rodriguez",
      role: "Cloud Security Architect",
      company: "FinServe Solutions",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            I've helped numerous companies strengthen their security posture.
            Here's what they have to say about our work together.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
