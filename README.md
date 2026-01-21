# Cloud Compliance Dashboard

A simple, practical dashboard for managing cloud security compliance. Map security frameworks to your cloud infrastructure, track implementation status, and generate audit reports.

![Cloud Compliance Dashboard](https://github.com/azzedine062/azzedine062.github.io/blob/main/Cloud%20Security%20Controls%20Mapping.png)

## What is this?

I built this dashboard to make cloud compliance less painful. It maps security standards like ISO 27001, ISO 27017, ISO 27018, and CSA CCM to actual cloud services and configurations on AWS, Azure, and GCP.

Instead of reading through hundreds of pages of control requirements, you get practical implementation guides and can track your progress in one place.

## Why?

Cloud security compliance can feel overwhelming, especially when traditional standards don't clearly translate to cloud services. This tool helps:

- **Organizations without expensive CSPM/CNAPP tools** - Get started with compliance tracking
- **Auditors with limited cloud experience** - Understand what controls mean in cloud context
- **CISOs and security leads** - Track compliance status across frameworks
- **Cloud engineers and DevOps teams** - Know exactly what needs to be configured

## What can you do with it?

- Choose your framework (ISO 27001, ISO 27017, ISO 27018, or CSA CCM v4)
- See all controls with clear implementation guides
- Map each control to specific cloud services (AWS, Azure, GCP)
- Mark status: Implemented, In Progress, Not Implemented, or N/A
- Add auditor comments and notes for each control
- Track your overall compliance progress
- Export everything to Excel or PDF for audits

## How it works

1. Pick your security framework from the home page
2. Browse through all controls with detailed implementation guidance
3. Click on cloud provider tabs to see specific service mappings
4. Update the compliance status for each control
5. Add notes about implementation details or evidence
6. Export your compliance report when you need it

All your progress is saved locally in your browser - no backend needed, no data leaves your machine.

## Frameworks included

- **ISO/IEC 27002:2022** - 93 information security controls
- **ISO/IEC 27017:2015** - Cloud security controls
- **ISO/IEC 27018:2019** - PII protection in public clouds (GDPR aligned)
- **CSA Cloud Controls Matrix v4** - 197 controls across 17 domains

## Technical stuff

Built with plain HTML, CSS, and JavaScript. No frameworks, no build steps, no backend. Just open it in a browser and it works.

Your data stays in your browser's local storage. Nothing is sent to any server.

## Use it for

- Preparing for ISO 27001 audits with cloud evidence
- Gap assessments and compliance checks
- Creating audit-ready documentation
- Learning how security controls apply to cloud
- Training teams on cloud security requirements

## Open Source

This project is open source. Use it, fork it, adapt it for your needs. If it helps you with compliance or audits, that's the whole point.

Built with help from AI tools (Claude.ai, ChatGPT) to speed up the control mapping and implementation guides.

---

**License:** Feel free to use this for your organization, modify it, or share it with others who might find it helpful.

