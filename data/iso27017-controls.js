// data/iso27017-controls.js - ISO/IEC 27017:2015 Cloud Security Controls

/**
 * ISO/IEC 27017:2015 Controls
 * Code of practice for information security controls based on ISO/IEC 27002 
 * for cloud services
 * 
 * Structure:
 * - CLD prefix = Cloud-specific controls (new controls)
 * - Other numbers = ISO 27002 controls with cloud guidance
 */

const ISO27017_CONTROLS = [
    // === CLOUD SERVICE PROVIDER CONTROLS ===
    {
        id: "CLD.6.3.1",
        title: "Shared roles and responsibilities",
        category: "organizational",
        type: "cloud-specific",
        appliesTo: "both", // cloud provider and customer
        description: "Cloud service providers and cloud service customers should clearly identify and document their respective information security roles and responsibilities.",
        implementation: "Document and communicate the shared responsibility model. Define which security controls are managed by the provider vs. customer. Establish clear boundaries of responsibility.",
        guidance: "Create a responsibility matrix (RACI) for all security controls. Include this in service agreements. Update documentation when services or responsibilities change.",
        evidence: "Shared responsibility documentation, service agreements, responsibility matrix, communication records"
    },
    {
        id: "CLD.8.1.5",
        title: "Removal or return of assets on termination",
        category: "organizational",
        type: "cloud-specific",
        appliesTo: "both",
        description: "When a cloud service is terminated, the cloud service customer's assets should be returned or securely destroyed.",
        implementation: "Establish procedures for secure data return or destruction upon service termination. Provide multiple formats for data export. Implement secure deletion methods that comply with standards.",
        guidance: "Define data retention periods. Provide tools for data export in standard formats. Use cryptographic erasure for efficient data destruction. Document the destruction process.",
        evidence: "Data return procedures, destruction certificates, export logs, customer confirmation"
    },
    {
        id: "CLD.9.5.1",
        title: "Virtual computing environment security",
        category: "technical",
        type: "cloud-specific",
        appliesTo: "provider",
        description: "The allocation and use of virtual computing environments should include controls to provide adequate segregation between cloud service customers.",
        implementation: "Implement hypervisor security hardening. Use network segregation between tenants. Deploy virtual firewalls and security groups. Monitor for VM escape attempts.",
        guidance: "Keep hypervisors patched and updated. Use micro-segmentation. Implement multi-tenant isolation at network and compute layers. Regular security assessments of virtualization infrastructure.",
        evidence: "Hypervisor configuration, network segmentation diagrams, isolation test results, security assessments"
    },
    {
        id: "CLD.9.5.2",
        title: "Virtual machine hardening",
        category: "technical",
        type: "cloud-specific",
        appliesTo: "customer",
        description: "Cloud service customers should harden virtual machine configurations.",
        implementation: "Remove unnecessary services and software. Apply security baselines. Enable logging and monitoring. Use encrypted storage. Implement least privilege access.",
        guidance: "Use hardened base images. Apply CIS benchmarks. Automate hardening with configuration management. Regular vulnerability scanning.",
        evidence: "Hardened VM images, configuration baselines, vulnerability scan reports, compliance checks"
    },
    {
        id: "CLD.12.1.5",
        title: "Operational security procedures for cloud",
        category: "operational",
        type: "cloud-specific",
        appliesTo: "both",
        description: "Operating procedures should be documented and made available to cloud service customers and cloud service providers as appropriate.",
        implementation: "Document all operational procedures for cloud services. Include incident response, backup/recovery, change management, and monitoring procedures. Keep documentation current.",
        guidance: "Create runbooks for common operations. Document escalation procedures. Include SLA commitments. Version control all documentation.",
        evidence: "Operational procedure documents, runbooks, change logs, version history"
    },
    {
        id: "CLD.12.4.5",
        title: "Monitoring of cloud services",
        category: "operational",
        type: "cloud-specific",
        appliesTo: "both",
        description: "Cloud services should be monitored, including information security events, performance, and capacity.",
        implementation: "Implement comprehensive logging of security events, API calls, and access. Set up alerting for security incidents. Monitor resource utilization and performance metrics.",
        guidance: "Use SIEM for log aggregation. Enable audit logging for all services. Set up automated alerts. Regular log review and analysis. Retain logs per compliance requirements.",
        evidence: "Monitoring dashboards, security event logs, alert configurations, log retention policies"
    },
    {
        id: "CLD.13.1.4",
        title: "Network security for cloud services",
        category: "technical",
        type: "cloud-specific",
        appliesTo: "both",
        description: "Security controls should be in place to protect the network infrastructure supporting cloud services.",
        implementation: "Implement network segmentation, firewalls, DDoS protection. Use VPCs/VNets for isolation. Deploy web application firewalls. Enable network flow logging.",
        guidance: "Follow zero-trust network principles. Use private connectivity where possible. Implement network access controls. Regular network security assessments.",
        evidence: "Network architecture diagrams, firewall rules, DDoS protection configs, flow logs"
    },

    // === ISO 27002 CONTROLS WITH CLOUD GUIDANCE ===
    {
        id: "5.1",
        title: "Policies for information security (Cloud Guidance)",
        category: "organizational",
        type: "enhanced",
        appliesTo: "both",
        description: "Information security policies should address cloud-specific considerations.",
        implementation: "Develop policies that explicitly address cloud computing risks, shared responsibility, data location, and third-party risks. Include cloud service selection criteria.",
        guidance: "Address data sovereignty, encryption requirements, incident response in cloud context, and vendor management for cloud services.",
        evidence: "Cloud security policy, vendor assessment criteria, data governance policy"
    },
    {
        id: "6.1",
        title: "Screening (Cloud Guidance)",
        category: "organizational",
        type: "enhanced",
        appliesTo: "both",
        description: "Screening should include verification of cloud service provider personnel who have access to customer data.",
        implementation: "Verify that cloud providers conduct appropriate background checks on their staff. Include screening requirements in contracts. Request evidence of screening programs.",
        guidance: "Define screening requirements in SLAs. Request regular attestations. Consider compliance certifications like SOC 2 that verify screening processes.",
        evidence: "Vendor screening attestations, SOC 2 reports, contractual screening requirements"
    },
    {
        id: "8.1",
        title: "Inventory of assets (Cloud Guidance)",
        category: "organizational",
        type: "enhanced",
        appliesTo: "both",
        description: "Asset inventory should include cloud resources and be automatically maintained.",
        implementation: "Use cloud-native asset inventory tools. Tag all cloud resources. Implement automated discovery. Track asset ownership and classification in cloud.",
        guidance: "Use cloud asset management services (AWS Config, Azure Resource Graph, GCP Asset Inventory). Automate tagging policies. Regular reconciliation.",
        evidence: "Asset inventory reports, tagging compliance, automated discovery configurations"
    },
    {
        id: "9.1",
        title: "Access control policy (Cloud Guidance)",
        category: "technical",
        type: "enhanced",
        appliesTo: "both",
        description: "Access control policies should address cloud service models (IaaS, PaaS, SaaS).",
        implementation: "Define access control policies for each service model. Use identity federation where possible. Implement least privilege for cloud IAM. Enable MFA for all privileged accounts.",
        guidance: "Use centralized identity management. Implement just-in-time access. Regular access reviews. Separate duties in cloud administration.",
        evidence: "IAM policies, access review logs, MFA enrollment reports, privileged access logs"
    },
    {
        id: "9.2",
        title: "User access management (Cloud Guidance)",
        category: "technical",
        type: "enhanced",
        appliesTo: "both",
        description: "User access management should leverage cloud identity services.",
        implementation: "Use cloud identity providers (Azure AD, AWS IAM Identity Center, Google Cloud Identity). Implement automated provisioning/deprovisioning. Enable SSO where possible.",
        guidance: "Integrate with existing identity sources. Use service principals for applications. Implement lifecycle management. Regular access certification.",
        evidence: "User provisioning logs, SSO configuration, access certification reports"
    },
    {
        id: "10.1",
        title: "Cryptographic controls (Cloud Guidance)",
        category: "technical",
        type: "enhanced",
        appliesTo: "both",
        description: "Cryptographic controls should address data in transit and at rest in cloud.",
        implementation: "Encrypt data at rest using cloud-native encryption. Use TLS 1.2+ for data in transit. Implement proper key management using cloud KMS. Consider customer-managed keys for sensitive data.",
        guidance: "Use cloud key management services. Enable encryption by default. Implement key rotation. Consider bring-your-own-key (BYOK) for sensitive data.",
        evidence: "Encryption configurations, key rotation logs, TLS implementation details"
    },
    {
        id: "12.3",
        title: "Information backup (Cloud Guidance)",
        category: "operational",
        type: "enhanced",
        appliesTo: "both",
        description: "Backup procedures should leverage cloud capabilities and address cloud-specific risks.",
        implementation: "Use automated cloud backup services. Implement cross-region replication for critical data. Test restore procedures regularly. Consider backup to different cloud provider.",
        guidance: "Define RPO/RTO objectives. Use immutable backups where possible. Separate backup accounts. Regular restore testing. Geographic distribution.",
        evidence: "Backup policies, restore test results, replication configurations"
    },
    {
        id: "12.4",
        title: "Logging and monitoring (Cloud Guidance)",
        category: "operational",
        type: "enhanced",
        appliesTo: "both",
        description: "Logging should capture cloud-specific events including API calls, configuration changes, and access.",
        implementation: "Enable comprehensive cloud audit logging. Centralize logs to SIEM. Monitor for unauthorized changes. Implement automated alerting for security events.",
        guidance: "Enable CloudTrail/Activity Log/Cloud Audit Logs. Log management plane and data plane activities. Protect log integrity. Meet retention requirements.",
        evidence: "Audit log configurations, SIEM integration, alert rules, log retention settings"
    },
    {
        id: "13.1",
        title: "Network security management (Cloud Guidance)",
        category: "technical",
        type: "enhanced",
        appliesTo: "both",
        description: "Network security should leverage cloud-native controls and virtual networking.",
        implementation: "Use VPCs/VNets for network isolation. Implement security groups and NACLs. Deploy cloud firewalls and WAF. Use private endpoints where possible.",
        guidance: "Follow principle of least privilege for network access. Use private connectivity (Direct Connect/ExpressRoute). Implement micro-segmentation. Enable flow logs.",
        evidence: "Network architecture, security group rules, WAF configurations, flow logs"
    },
    {
        id: "14.1",
        title: "Security requirements analysis (Cloud Guidance)",
        category: "organizational",
        type: "enhanced",
        appliesTo: "customer",
        description: "Security requirements should address cloud service selection and integration.",
        implementation: "Define security requirements for cloud service selection. Assess compliance certifications. Evaluate shared responsibility model. Consider data residency requirements.",
        guidance: "Use cloud security assessment frameworks. Review provider compliance certifications (SOC 2, ISO 27001, etc.). Assess data protection capabilities.",
        evidence: "Security requirements documents, vendor assessments, compliance verification"
    },
    {
        id: "15.1",
        title: "Supplier relationships (Cloud Guidance)",
        category: "organizational",
        type: "enhanced",
        appliesTo: "customer",
        description: "Cloud service provider relationships should be managed with appropriate security requirements.",
        implementation: "Include security requirements in cloud service agreements. Conduct regular vendor assessments. Monitor provider security posture. Have exit strategy documented.",
        guidance: "Define security SLAs. Regular review of provider certifications. Incident notification requirements. Data portability provisions.",
        evidence: "Service agreements, vendor assessments, security reviews, exit plans"
    },
    {
        id: "16.1",
        title: "Incident management (Cloud Guidance)",
        category: "operational",
        type: "enhanced",
        appliesTo: "both",
        description: "Incident management should address cloud service provider notification and collaboration.",
        implementation: "Define incident response procedures that include cloud provider communication. Establish contact procedures with provider. Include cloud-specific incident types.",
        guidance: "Document provider notification requirements. Define escalation procedures. Include cloud-specific incident scenarios in tabletop exercises.",
        evidence: "Incident response plan, provider contact procedures, incident logs"
    },
    {
        id: "17.1",
        title: "Business continuity (Cloud Guidance)",
        category: "organizational",
        type: "enhanced",
        appliesTo: "both",
        description: "Business continuity planning should consider cloud service dependencies.",
        implementation: "Document dependencies on cloud services. Implement multi-region deployments for critical systems. Test failover procedures. Understand provider's availability commitments.",
        guidance: "Use multiple availability zones. Consider multi-cloud for critical services. Regular DR testing. Review provider SLAs and track actual availability.",
        evidence: "Business continuity plan, DR test results, availability reports"
    },
    {
        id: "18.1",
        title: "Compliance (Cloud Guidance)",
        category: "organizational",
        type: "enhanced",
        appliesTo: "both",
        description: "Compliance requirements should be verified in cloud deployments.",
        implementation: "Map compliance requirements to cloud controls. Use cloud compliance tools. Request provider compliance reports. Maintain evidence of compliance.",
        guidance: "Leverage provider compliance certifications. Use cloud-native compliance monitoring. Regular compliance assessments. Document control implementations.",
        evidence: "Compliance reports, control mappings, audit artifacts, certification documents"
    },

    // === ADDITIONAL CLOUD-SPECIFIC CONTROLS ===
    {
        id: "CLD.6.3.2",
        title: "Cloud service customer's right to audit",
        category: "organizational",
        type: "cloud-specific",
        appliesTo: "both",
        description: "Cloud service customers should have the right to audit or obtain independent verification of security controls.",
        implementation: "Include audit rights in contracts. Accept third-party audit reports (SOC 2, ISO 27001). Provide compliance documentation and certifications.",
        guidance: "Most cloud providers provide compliance reports instead of direct audits. Review SOC 2 Type II reports annually. Verify scope matches your usage.",
        evidence: "Audit rights in contracts, SOC 2 reports, ISO 27001 certificates, compliance documentation"
    },
    {
        id: "CLD.8.2.3",
        title: "Data locality and protection",
        category: "organizational",
        type: "cloud-specific",
        appliesTo: "both",
        description: "The cloud service provider should allow the cloud service customer to specify data storage locations.",
        implementation: "Document where data is stored and processed. Implement region selection for data sovereignty. Ensure data doesn't leave specified geographic boundaries.",
        guidance: "Use region-specific deployments. Enable region restrictions where available. Document data flows. Consider data residency requirements.",
        evidence: "Data location documentation, region configurations, data flow diagrams"
    },
    {
        id: "CLD.9.4.6",
        title: "Virtual machine isolation",
        category: "technical",
        type: "cloud-specific",
        appliesTo: "provider",
        description: "Cloud service providers should implement controls to prevent unauthorized access between virtual machines.",
        implementation: "Use hardware-assisted virtualization. Implement memory isolation. Network isolation between tenants. Regular security testing of hypervisor.",
        guidance: "Keep virtualization platform updated. Use latest security features. Independent security assessments. Monitor for anomalies.",
        evidence: "Virtualization security configurations, isolation test results, security assessment reports"
    },
    {
        id: "CLD.12.1.4",
        title: "Secure development in cloud",
        category: "operational",
        type: "cloud-specific",
        appliesTo: "customer",
        description: "Secure development practices should address cloud deployment models.",
        implementation: "Use infrastructure-as-code with security scanning. Implement CI/CD with security gates. Scan container images. Use cloud-native security tools.",
        guidance: "Security scanning in build pipelines. Immutable infrastructure. Automated compliance checking. Secret management in code.",
        evidence: "CI/CD pipeline configurations, security scan results, IaC templates, secret management implementation"
    },
    {
        id: "CLD.13.1.3",
        title: "Administrative access to cloud infrastructure",
        category: "technical",
        type: "cloud-specific",
        appliesTo: "both",
        description: "Administrative access to cloud infrastructure should be strictly controlled and monitored.",
        implementation: "Use privileged access management. Implement just-in-time access. Enable MFA for admin access. Comprehensive logging of administrative actions.",
        guidance: "Separate admin accounts from regular accounts. Use bastion hosts or secure admin portals. Regular review of admin access. Session recording.",
        evidence: "PAM configurations, admin access logs, MFA reports, access review records"
    }
];

// Export for browser usage
if (typeof window !== 'undefined') {
    window.ISO27017_CONTROLS = ISO27017_CONTROLS;
    console.log('✅ ISO 27017 controls loaded:', ISO27017_CONTROLS.length, 'controls');
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ISO27017_CONTROLS };
}