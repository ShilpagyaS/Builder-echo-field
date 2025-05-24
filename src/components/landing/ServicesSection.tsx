import React from "react";
import {
  Cloud,
  GitBranch,
  ServerCog,
  FileCode,
  FileJson,
  Users,
  AlertTriangle,
  Fingerprint,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group flex flex-col rounded-md border border-green-900/30 bg-black/80 p-6 shadow-md transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] dark:border-green-900/30 dark:bg-black/80">
      <div className="mb-4 rounded-md bg-green-900/20 p-3 text-green-500 shadow-inner transition-all duration-300 group-hover:bg-green-900/30 group-hover:text-green-400 dark:bg-green-900/20">
        {icon}
      </div>
      <h3 className="mb-2 font-mono text-xl font-semibold text-green-500 dark:text-green-400">
        {title}
      </h3>
      <p className="font-mono text-sm text-slate-300 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Security Audits",
      description:
        "Comprehensive security reviews of your AWS/GCP/Azure infrastructure to identify vulnerabilities and compliance gaps.",
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "CI/CD Pipeline Hardening",
      description:
        "Secure your build and deployment pipelines against supply chain attacks and unauthorized access.",
    },
    {
      icon: <ServerCog className="h-6 w-6" />,
      title: "Kubernetes Security",
      description:
        "In-depth security reviews of your K8s clusters, focusing on configuration, network policies, and RBAC.",
    },
    {
      icon: <FileJson className="h-6 w-6" />,
      title: "Terraform Security",
      description:
        "Best practices implementation and security scanning for your infrastructure-as-code deployments.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Penetration Testing",
      description:
        "Identify vulnerabilities in your systems with ethical hacking techniques and detailed remediation plans.",
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "DevSecOps Strategy",
      description:
        "Strategic consulting to help your team implement security throughout the software development lifecycle.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-20"
      id="services"
    >
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMGYwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-green-500/5 to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-green-500/5 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-green-900/50 bg-black shadow-[0_0_10px_rgba(0,255,0,0.2)]">
            <Shield className="h-6 w-6 text-green-500" />
          </div>

          <h2 className="mb-4 font-mono text-3xl font-bold text-green-500 sm:text-4xl">
            What I Do
          </h2>
          <p className="mx-auto max-w-2xl font-mono text-lg text-slate-300">
            I provide specialized security services to help companies secure
            their cloud infrastructure, CI/CD pipelines, and development
            workflows.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
