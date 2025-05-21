# Importance of Security in FinTech Applications

## Description

Explore common vulnerabilities and compliance requirements in FinTech applications.

Acceptance Criteria:

- Engineer presents a security checklist tailored to FinTech applications.
- Engineer explains common vulnerabilities and compliance standards in the FinTech domain.

### Subtask 1: Research Common Threats in FinTech

Common Threats and Vulnerabilities in FinTech Applications:

| **Threat/Vulnerability**     | **Description**                                                       |
| ---------------------------- | --------------------------------------------------------------------- |
| **Phishing Attacks**         | Users tricked into providing sensitive credentials.                   |
| **Credential Stuffing**      | Reuse of stolen credentials from other breaches.                      |
| **Man-in-the-Middle (MitM)** | Intercepting data between users and servers.                          |
| **Data Leakage**             | Unintended exposure of customer data (e.g., logs, misconfigurations). |
| **API Vulnerabilities**      | Poorly secured or undocumented APIs expose back-end services.         |
| **Broken Authentication**    | Improper session management or weak login mechanisms.                 |
| **Injection Attacks**        | SQL, NoSQL, or OS command injection risks.                            |
| **Insufficient Encryption**  | Lack of or weak encryption in storage or transit.                     |
| **Third-party Risk**         | Weaknesses in integrated vendors or services.                         |
| **Insider Threats**          | Employees or partners with access to sensitive systems or data.       |

### Subtask 2: Understand FinTech Compliance Standards

Key Compliance Standards in FinTech:

| **Standard/Regulation**                                    | **Description**                                                                                 |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **PCI DSS** (Payment Card Industry Data Security Standard) | Mandatory for handling credit/debit card data. Requires encryption, access control, monitoring. |
| **GDPR** (EU General Data Protection Regulation)           | For companies handling EU user data. Focuses on consent, data protection, and user rights.      |
| **SOC 2 Type II**                                          | Verifies security, availability, processing integrity, confidentiality, and privacy.            |
| **ISO/IEC 27001**                                          | Global information security standard — framework for managing sensitive data.                   |
| **PSD2** (EU Payment Services Directive 2)                 | Requires secure communication and customer authentication for payment services.                 |
| **CCPA** (California Consumer Privacy Act)                 | Data privacy law for California residents — rights to access, delete, and restrict data.        |
| **MAS TRM** (Singapore)                                    | Technology Risk Management guidelines for FinTechs.                                             |
| **AML/KYC Requirements**                                   | Anti-Money Laundering and Know Your Customer regulations to prevent fraud.                      |

### Prepare a Security Checklist

🛡️ Security Checklist for FinTech Applications:
🔐 Application Security

- Enforce MFA (Multi-Factor Authentication)
- Implement secure session management
- Validate and sanitize all user inputs (prevent injection attacks)
- Use secure password policies and hashing algorithms (e.g., bcrypt)
- Protect APIs with rate limiting, authentication, and input validation
- Ensure client-side code does not expose secrets or sensitive logic

### Data Protection

- Encrypt sensitive data at rest and in transit (AES-256, TLS 1.2+)
- Tokenize or mask data where full access isn't required
- Secure storage of credentials and tokens (e.g., secrets manager, vault)

🛠️ **Infrastructure and DevOps**

- Use Infrastructure as Code with security scanning (Checkov, tfsec)

- Continuously scan containers and images for vulnerabilities

- Use role-based access control (RBAC) across systems

- Regularly patch systems and dependencies

📈 **Monitoring and Incident Response**

- Monitor access logs and flag suspicious activity
- Configure alerting for critical failures or breaches
- Maintain an incident response plan (IRP)
- Conduct regular penetration testing and vulnerability assessments

⚖️ Compliance and Governance

- Ensure GDPR, PCI-DSS, SOC 2, and relevant compliance is built into DevOps pipelines
- Automate compliance checks where possible
- Maintain audit logs and secure them appropriately
- Conduct regular security training for staff

## 🧱 Epic: Setting Up the Development Environment

*This epic focuses on preparing cloud infrastructure, version control, and CI/CD pipeline by leveraging AWS, Amazon EKS, GitHub, and GitHub Actions.*

- Create and configure a secure and ready-to-use AWS account for deploying Kubernetes workloads (Amazon EKS).
- ✅ Checklist:

  - Create AWS Account
  - Visit aws.amazon.com and create a new account (if one doesn’t already exist).
  - Enable MFA (Multi-Factor Authentication) on the root user.
  - Create IAM User for CLI Access
  - Create an IAM user with programmatic access.
  - Assign AdministratorAccess (or use fine-grained permissions for production).
  - Generate and securely store the Access Key ID and Secret Access Key.
  - Install & Configure AWS CLI
    - Install: brew install awscli or download from AWS site.
    - Configure:`aws configure`
    - Enter the access key, secret key, region (e.g., us-east-1), and output format (json).
    - Set Up Billing Alerts: Enable billing alerts via AWS Budgets to avoid unexpected costs.

## Initialize Local Development Environment

### Set up your machine with the tools and configuration required for cloud-native Kubernetes development and deployment

✅ Checklist:

#### Install Required Tools

- AWS CLI
- kubectl (Kubernetes CLI): `brew install kubectl`
- eksctl (EKS Cluster provisioning tool):

```bash
brew tap weaveworks/tap
brew install weaveworks/tap/eksctl

```

- helm (Kubernetes package manager): `brew install helm`
- git
- Docker (for building images)
- kubectx/kubens (optional tools for switching between clusters/namespaces)
- Terraform (if IaC is involved)
  
#### Authenticate AWS CLI

`aws sts get-caller-identity`

#### Set Up Kubernetes Context (Once EKS is created)

`aws eks --region us-east-1 update-kubeconfig --name your-cluster-name`

#### Test Environment

```bash
kubectl get nodes
helm version
eksctl version

```

## Set Up GitHub Repository

### 🎯 Goal

#### Create and initialize a GitHub repository for storing application and infrastructure code

`gh repo create secure-fintech-devSecOps-pipeline --public`

### Clone and Set Up Project Locall

`git clone git@github.com:githhub-name/secure-fintech-devSecOps-pipeline --public`

### Initialize Directory Structure

Root_folder
├── kubernetes/
│   └── helm/
│       └── fintech-app/
├── .github/
│   └── workflows/
├── terraform/
├── README.md

#### Add CI/CD Workflow File

- Example: .github/workflows/deploy.yml should include:
- Build Docker image
- Test
- Push to container registry (e.g., ECR)
- Deploy to EKS via Helm/Kubectl

#### Enable GitHub Actions

- Push to main or develop branch.
- Validate the workflow runs under Actions tab.

#### Set Up Secrets in GitHub

- Go to Settings → Secrets and variables → Actions
- Add:
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - DOCKER_USERNAME / DOCKER_PASSWORD (if using DockerHub)
  - EKS_CLUSTER_NAME
  - AWS_ROLE_TO_ASSUME IAM Role ARN for GitHub OIDC (if using)
  - REGION

## Understand AWS Fundamentals

- Amazon Web Services (AWS) is the world’s most widely adopted cloud platform, offering over 200 fully featured services including:
- Compute (EC2, Lambda)
- Storage (S3, EBS)
- Networking (VPC, Route 53)
- Databases (RDS, DynamoDB)
- Security & Compliance (IAM, KMS, CloudTrail)

## Core Benefits for FinTech

- Global infrastructure with low latency
- Security-first architecture (data encryption, access control)
- Scalability to handle usage spikes
- Regulatory compliance (PCI-DSS, SOC, ISO, etc.)

## Amazon EKS (Kubernetes on AWS)

Key EKS Features:
Amazon Elastic Kubernetes Service (EKS) is a fully managed service for running Kubernetes clusters on AWS without managing control plane infrastructure.

| Feature                 | Description                                       |
| ----------------------- | ------------------------------------------------- |
| **Fully Managed**       | AWS runs and scales the Kubernetes control plane  |
| **Integrated Security** | IAM for auth, VPC for networking, KMS for secrets |
| **Scalability**         | Supports auto-scaling of nodes & pods             |
| **High Availability**   | Runs across multiple AZs                          |
| **Flexibility**         | Works with EC2, Fargate, and self-managed nodes   |
