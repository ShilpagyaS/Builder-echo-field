import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, CheckCircle, User } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <Card className="group h-full border-green-900/30 bg-black/80 shadow-[0_0_10px_rgba(0,255,0,0.05)] transition-all duration-300 hover:border-green-900/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.15)] dark:border-green-900/30 dark:bg-black/80">
      <CardContent className="flex h-full flex-col p-6">
        <MessageSquare className="mb-4 h-8 w-8 text-green-500 transition-all duration-300 group-hover:text-green-400" />
        <p className="mb-6 flex-1 font-mono text-base text-slate-300 dark:text-slate-300">
          "{quote}"
        </p>
        <div className="flex items-center gap-3 rounded-md border border-green-900/20 bg-black/50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-green-900/20 bg-black">
            <User className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="flex items-center gap-1 font-mono font-semibold text-green-500 dark:text-green-400">
              {author}
              <CheckCircle className="ml-1 h-3.5 w-3.5 text-green-500" />
            </p>
            <p className="font-mono text-xs text-slate-400 dark:text-slate-400">
              {role}, {company}
            </p>
          </div>
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
    <section className="relative bg-slate-950 py-20" id="testimonials">
      <div className="absolute inset-0 z-0">
        <div className="grid h-full grid-cols-8 gap-px opacity-5">
          {Array.from({ length: 8 }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="h-full w-full border-l border-green-500/20"
            ></div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.05),transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-green-900/50 bg-black shadow-[0_0_10px_rgba(0,255,0,0.2)]">
            <MessageSquare className="h-6 w-6 text-green-500" />
          </div>

          <h2 className="mb-4 font-mono text-3xl font-bold text-green-500 sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mx-auto max-w-2xl font-mono text-lg text-slate-300">
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
