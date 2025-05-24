import React from "react";
import {
  Cloud,
  GitBranch,
  ServerCog,
  FileCode,
  FileJson,
  Users,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 rounded-full bg-blue-50 p-3 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
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
      icon: <FileCode className="h-6 w-6" />,
      title: "Security Automation",
      description:
        "Custom tooling and workflows to automate security testing, scanning, and compliance checks.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "DevSecOps Strategy",
      description:
        "Strategic consulting to help your team implement security throughout the software development lifecycle.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            What I Do
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
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
