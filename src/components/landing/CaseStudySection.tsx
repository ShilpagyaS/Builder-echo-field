import React from "react";
import { CodeBlock } from "./CodeBlock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, FileWarning } from "lucide-react";

export function CaseStudySection() {
  const githubActionCode = `name: 'Terraform Security Scan'

on:
  pull_request:
    paths:
      - 'terraform/**'
      
jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v2
        
      - name: Terraform Init
        run: terraform init -backend=false
        working-directory: ./terraform
        
      - name: Run tfsec
        uses: aquasecurity/tfsec-action@v1.0.0
        with:
          working_directory: ./terraform
          
      - name: Run checkov
        uses: bridgecrewio/checkov-action@master
        with:
          directory: ./terraform
          framework: terraform`;

  const terraformCode = `# Secure S3 bucket configuration
resource "aws_s3_bucket" "secure_data" {
  bucket = "my-secure-data-bucket"
}

resource "aws_s3_bucket_public_access_block" "secure_data" {
  bucket = aws_s3_bucket.secure_data.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "secure_data" {
  bucket = aws_s3_bucket.secure_data.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_versioning" "secure_data" {
  bucket = aws_s3_bucket.secure_data.id
  
  versioning_configuration {
    status = "Enabled"
  }
}`;

  const penetrationTestCode = `#!/bin/bash
# Vulnerability scanning script

echo "[+] Starting security assessment..."
echo "[+] Target: $TARGET_DOMAIN"
echo 

echo "[+] Running port scan..."
nmap -sS -T4 -p- $TARGET_DOMAIN

echo "[+] Checking for common vulnerabilities..."
nikto -host $TARGET_DOMAIN

echo "[+] Testing for SQL injection in endpoints..."
sqlmap -u "$TARGET_DOMAIN/api/user?id=1" --batch --dbs

echo "[+] Scanning for exposed secrets..."
trufflehog --regex --entropy=True https://github.com/company/repo

echo "[+] Assessment complete - generating report..."`;

  return (
    <section className="relative bg-black py-20" id="case-studies">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHRleHQgeD0iMCIgeT0iMjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMwZjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+MDEwMTAxMTAxMDwvdGV4dD48L3N2Zz4=')]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-green-900/50 bg-black shadow-[0_0_10px_rgba(0,255,0,0.2)]">
            <FileWarning className="h-6 w-6 text-green-500" />
          </div>

          <h2 className="mb-4 font-mono text-3xl font-bold text-green-500 sm:text-4xl">
            Case Studies
          </h2>
          <p className="mx-auto max-w-2xl font-mono text-lg text-slate-300">
            Here are some examples of secure DevSecOps setups I've implemented
            for clients.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="border-green-900/30 bg-black/60 shadow-[0_0_15px_rgba(0,255,0,0.1)] dark:border-green-900/30 dark:bg-black/60">
            <CardHeader className="border-b border-green-900/20">
              <CardTitle className="font-mono text-green-500">
                Automated Security Scanning
              </CardTitle>
              <CardDescription className="font-mono text-slate-300">
                Implementing automated security scanning in CI/CD pipelines to
                catch security issues early
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 font-mono text-sm text-slate-300">
                This GitHub Action workflow automatically scans Terraform code
                for security issues and best practices whenever changes are made
                to infrastructure code.
              </p>
              <CodeBlock
                code={githubActionCode}
                language="yaml"
                fileName=".github/workflows/terraform-security.yml"
                animated={true}
              />
            </CardContent>
          </Card>

          <Card className="border-green-900/30 bg-black/60 shadow-[0_0_15px_rgba(0,255,0,0.1)] dark:border-green-900/30 dark:bg-black/60">
            <CardHeader className="border-b border-green-900/20">
              <CardTitle className="font-mono text-green-500">
                Secure Infrastructure as Code
              </CardTitle>
              <CardDescription className="font-mono text-slate-300">
                Implementing security best practices directly in your
                infrastructure code
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 font-mono text-sm text-slate-300">
                This Terraform code demonstrates how to create a secure S3
                bucket with encryption, versioning, and proper access controls.
              </p>
              <CodeBlock
                code={terraformCode}
                language="hcl"
                fileName="terraform/storage.tf"
                animated={true}
              />
            </CardContent>
          </Card>

          <Card className="border-green-900/30 bg-black/60 shadow-[0_0_15px_rgba(0,255,0,0.1)] lg:col-span-2 dark:border-green-900/30 dark:bg-black/60">
            <CardHeader className="border-b border-green-900/20">
              <CardTitle className="font-mono text-green-500">
                Penetration Testing
              </CardTitle>
              <CardDescription className="font-mono text-slate-300">
                Identifying vulnerabilities through ethical hacking techniques
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 font-mono text-sm text-slate-300">
                This script demonstrates a basic penetration testing workflow to
                identify security issues in web applications.
              </p>
              <CodeBlock
                code={penetrationTestCode}
                language="bash"
                fileName="pentest/scan.sh"
                animated={true}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
