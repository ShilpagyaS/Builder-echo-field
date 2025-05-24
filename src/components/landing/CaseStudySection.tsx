import React from "react";
import { CodeBlock } from "./CodeBlock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  return (
    <section className="py-20" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Case Studies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Here are some examples of secure DevSecOps setups I've implemented
            for clients.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Automated Security Scanning</CardTitle>
              <CardDescription>
                Implementing automated security scanning in CI/CD pipelines to
                catch security issues early
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                This GitHub Action workflow automatically scans Terraform code
                for security issues and best practices whenever changes are made
                to infrastructure code.
              </p>
              <CodeBlock
                code={githubActionCode}
                language="yaml"
                fileName=".github/workflows/terraform-security.yml"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secure Infrastructure as Code</CardTitle>
              <CardDescription>
                Implementing security best practices directly in your
                infrastructure code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                This Terraform code demonstrates how to create a secure S3
                bucket with encryption, versioning, and proper access controls.
              </p>
              <CodeBlock
                code={terraformCode}
                language="hcl"
                fileName="terraform/storage.tf"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
