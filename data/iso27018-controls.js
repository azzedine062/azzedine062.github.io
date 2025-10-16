// data/iso27018-controls.js - ISO/IEC 27018:2019 PII Protection in Cloud

/**
 * ISO/IEC 27018:2019 Controls
 * Code of practice for protection of personally identifiable information (PII) 
 * in public clouds acting as PII processors
 * 
 * Structure:
 * - Based on ISO/IEC 27002 with specific guidance for PII protection
 * - Focus on cloud service providers as PII processors
 * - Compliance with privacy regulations (GDPR, CCPA, etc.)
 */

const ISO27018_CONTROLS = [
    // === CONSENT AND CHOICE ===
    {
        id: "A.3.1",
        title: "Consent and choice for PII processing",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Article 6 (Lawful basis), Article 7 (Conditions for consent)",
        description: "Cloud service providers should process PII only on instructions from the cloud service customer and should not use PII for any other purpose.",
        implementation: "Implement contractual agreements that clearly define PII processing purposes. Ensure no secondary use of customer PII. Provide mechanisms for customers to control PII processing. Document all processing activities.",
        guidance: "Create data processing agreements (DPA). Implement purpose limitation controls. Provide customer portals for consent management. Regular audits of PII usage. No advertising or marketing use of customer PII.",
        evidence: "Data processing agreements, consent management records, purpose documentation, audit logs of PII access",
        complianceNotes: "Critical for GDPR Article 28 (Processor obligations). Must demonstrate purpose limitation."
    },
    {
        id: "A.3.2",
        title: "Purpose legitimacy and specification",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Article 5(1)(b) (Purpose limitation)",
        description: "The purposes for which PII is collected and processed should be determined at the time of collection and processing should be limited to those purposes.",
        implementation: "Document specific purposes for each PII processing activity. Implement controls to prevent purpose creep. Regular review of processing purposes. Customer notification of purpose changes.",
        guidance: "Create purpose catalogs. Map PII to specific purposes. Implement technical controls to enforce purpose limitation. Data flow mapping to verify purpose compliance.",
        evidence: "Purpose documentation, PII inventory with purposes, processing activity records, change notifications",
        complianceNotes: "Demonstrates compliance with purpose limitation principle. Required for privacy impact assessments."
    },

    // === PII COLLECTION AND PROCESSING ===
    {
        id: "A.5.1",
        title: "Collection limitation",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Article 5(1)(c) (Data minimization)",
        description: "PII should be limited to what is necessary for the specified purposes.",
        implementation: "Implement data minimization principles. Regular review of collected PII. Technical controls to prevent over-collection. Customer input validation to limit unnecessary data.",
        guidance: "Create PII data maps. Implement field-level controls. Regular data minimization assessments. Automated alerts for excessive data collection.",
        evidence: "Data minimization assessments, PII collection policies, field validation rules, review records",
        complianceNotes: "Key GDPR principle. Reduces risk and storage costs. Important for data protection by design."
    },
    {
        id: "A.6.1",
        title: "Accuracy and quality",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 5(1)(d) (Accuracy)",
        description: "PII should be accurate, complete, and kept up to date as necessary for the purposes.",
        implementation: "Implement data quality checks. Provide mechanisms for data subjects to correct PII. Regular data quality audits. Automated data validation. Processes for handling inaccurate data.",
        guidance: "Implement validation rules. Provide self-service portals for updates. Regular data quality reports. Synchronization with authoritative sources.",
        evidence: "Data quality reports, correction logs, validation rules, update mechanisms, audit records",
        complianceNotes: "GDPR Article 16 (Right to rectification) requires accurate data. Reduces liability from incorrect data."
    },

    // === OPENNESS, TRANSPARENCY AND NOTICE ===
    {
        id: "A.7.1",
        title: "Openness, transparency and notice",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Articles 13-14 (Information to be provided)",
        description: "Cloud service customers should be provided with clear information about PII processing practices.",
        implementation: "Provide clear privacy notices to cloud customers. Document all PII processing activities. Transparency about sub-processors. Regular updates to privacy documentation.",
        guidance: "Create comprehensive privacy policies. Publish list of sub-processors. Provide API for programmatic access to processing records. Customer dashboards showing PII processing.",
        evidence: "Privacy notices, sub-processor lists, processing records, customer notifications, transparency reports",
        complianceNotes: "GDPR Articles 13-14 transparency requirements. Builds customer trust. Required for compliance."
    },

    // === INDIVIDUAL PARTICIPATION AND ACCESS ===
    {
        id: "A.8.1",
        title: "Data subject access",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 15 (Right of access)",
        description: "Cloud service providers should provide capabilities for cloud customers to comply with data subject access requests.",
        implementation: "Implement tools for customers to export PII. APIs for data access. Search and retrieval capabilities. Automated response mechanisms. Documentation of data location and format.",
        guidance: "Build self-service portals. Provide standardized export formats (JSON, CSV). Implement search by identifier. Response time SLAs. Comprehensive data mapping.",
        evidence: "Access request logs, export tools, API documentation, response time metrics, data maps",
        complianceNotes: "GDPR Article 15 - Must respond within 30 days. Critical for customer compliance with privacy laws."
    },
    {
        id: "A.8.2",
        title: "Right to rectification",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 16 (Right to rectification)",
        description: "Provide mechanisms for data subjects to correct inaccurate PII.",
        implementation: "Implement update APIs and interfaces. Audit trails for changes. Notification mechanisms for corrections. Validation of correction requests.",
        guidance: "Build update workflows. Version control for PII changes. Automated propagation of corrections. Notification to data subject when complete.",
        evidence: "Correction logs, update interfaces, audit trails, notification records",
        complianceNotes: "GDPR Article 16. Must implement without undue delay. Critical for data accuracy."
    },
    {
        id: "A.8.3",
        title: "Right to erasure (Right to be forgotten)",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 17 (Right to erasure)",
        description: "Provide mechanisms to securely delete PII upon request.",
        implementation: "Implement secure deletion procedures. Cascade deletions across backups. Verification of complete deletion. Documentation of deletion processes. Retention of deletion audit logs only.",
        guidance: "Implement 'delete by ID' APIs. Cryptographic erasure where possible. Document retention exceptions. Automated deletion workflows. Verification mechanisms.",
        evidence: "Deletion logs, retention policies, deletion procedures, verification reports, exception documentation",
        complianceNotes: "GDPR Article 17. Most complex right to implement. Consider legal retention requirements."
    },

    // === ACCOUNTABILITY ===
    {
        id: "A.9.1",
        title: "Accountability for PII processing",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Article 5(2) (Accountability)",
        description: "Cloud service providers should be accountable for PII processing and able to demonstrate compliance.",
        implementation: "Implement comprehensive logging. Regular compliance audits. Data protection impact assessments. Compliance reporting to customers. Third-party certifications.",
        guidance: "Create compliance dashboards. Implement automated compliance checks. Regular privacy audits. Maintain detailed processing records. Obtain ISO 27701, SOC 2 Type II certifications.",
        evidence: "Audit reports, compliance certifications, DPIA records, processing records, monitoring logs",
        complianceNotes: "GDPR Article 5(2). Foundation of GDPR compliance. Enables demonstration of compliance."
    },

    // === INFORMATION SECURITY ===
    {
        id: "A.10.1",
        title: "Information security for PII",
        category: "technical",
        type: "pii-specific",
        gdprMapping: "Article 32 (Security of processing)",
        description: "Appropriate technical and organizational measures should protect PII.",
        implementation: "Implement encryption at rest and in transit. Access controls for PII. Regular security assessments. Incident response procedures. Security monitoring and alerting.",
        guidance: "Use AES-256 encryption. Implement field-level encryption for sensitive PII. Regular penetration testing. Security information and event management (SIEM). Zero-trust architecture.",
        evidence: "Encryption configurations, access control policies, security assessment reports, incident logs, monitoring dashboards",
        complianceNotes: "GDPR Article 32. Required to implement appropriate technical measures. Critical for avoiding breaches."
    },
    {
        id: "A.10.2",
        title: "Operational security for PII",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 32 (Security of processing)",
        description: "Operational procedures should ensure ongoing security of PII.",
        implementation: "Implement change management for PII systems. Regular vulnerability scanning. Patch management. Security awareness training. Incident response procedures.",
        guidance: "Automated vulnerability scanning. Patch SLAs for critical vulnerabilities. Regular security training for staff. Simulated incident response exercises. Security champions program.",
        evidence: "Change management records, vulnerability scan reports, patch logs, training records, incident response tests",
        complianceNotes: "Demonstrates ongoing security measures. Important for Article 32 compliance."
    },

    // === PII BREACH NOTIFICATION ===
    {
        id: "A.11.1",
        title: "Notification of PII breach",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 33 (Notification of personal data breach)",
        description: "Cloud service providers should notify customers of PII breaches without undue delay.",
        implementation: "Implement breach detection systems. Automated notification procedures. Breach assessment workflows. Customer notification within 72 hours. Detailed breach reports.",
        guidance: "Deploy intrusion detection systems. Create breach response playbooks. Automated customer notification. Maintain breach register. Regular breach response drills.",
        evidence: "Breach detection systems, notification procedures, breach registers, customer notifications, response timelines",
        complianceNotes: "GDPR Article 33 - Notify supervisory authority within 72 hours. Article 34 - Notify data subjects if high risk."
    },

    // === TRANSFERS OF PII ===
    {
        id: "A.12.1",
        title: "International PII transfers",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Chapter V (Transfers to third countries)",
        description: "Transfers of PII to countries outside the jurisdiction should be controlled.",
        implementation: "Document all data transfer locations. Implement data residency controls. Use Standard Contractual Clauses (SCCs). Transfer impact assessments. Customer consent for transfers.",
        guidance: "Create data location maps. Implement region locking. Use EU Standard Contractual Clauses. Privacy Shield certification (if applicable). Regular transfer risk assessments.",
        evidence: "Data location documentation, SCCs, transfer impact assessments, region configurations, customer consent records",
        complianceNotes: "GDPR Chapter V. Critical post-Schrems II. Must implement supplementary measures for adequate protection."
    },
    {
        id: "A.12.2",
        title: "Transfer to sub-processors",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Article 28(2) (Sub-processors)",
        description: "Transfers to sub-processors should be controlled and documented.",
        implementation: "Maintain sub-processor register. Due diligence on sub-processors. Contractual agreements with sub-processors. Customer notification of sub-processor changes. Right to object.",
        guidance: "Create public sub-processor list. Implement sub-processor assessment process. Include security and privacy requirements in contracts. 30-day notice period for changes.",
        evidence: "Sub-processor register, due diligence records, contracts, change notifications, customer objections",
        complianceNotes: "GDPR Article 28(2) and 28(4). Must obtain customer authorization. Remains liable for sub-processor actions."
    },

    // === DATA SUBJECT RIGHTS ===
    {
        id: "A.13.1",
        title: "Right to data portability",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 20 (Right to data portability)",
        description: "Provide mechanisms for data subjects to receive and transfer PII.",
        implementation: "Implement export in machine-readable formats. APIs for data portability. Standard formats (JSON, XML, CSV). Direct transfer capabilities. Complete data export including metadata.",
        guidance: "Use standard schemas. Provide bulk export capabilities. Implement OAuth for secure transfer. Include all PII categories. Export within 30 days.",
        evidence: "Export APIs, format documentation, export logs, transfer capabilities, response time metrics",
        complianceNotes: "GDPR Article 20. Must provide in structured, commonly used, machine-readable format."
    },
    {
        id: "A.13.2",
        title: "Right to object and automated decision-making",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Articles 21-22 (Right to object, Automated decisions)",
        description: "Provide mechanisms to object to processing and contest automated decisions.",
        implementation: "Document automated decision systems. Provide opt-out mechanisms. Human review processes for automated decisions. Transparent decision logic. Appeal processes.",
        guidance: "Create registers of automated systems. Implement opt-out flags. Human-in-the-loop for significant decisions. Explainability features for decisions. Appeal workflows.",
        evidence: "Automated system registers, opt-out records, human review logs, decision explanations, appeal records",
        complianceNotes: "GDPR Articles 21-22. Particularly important for AI/ML systems. Must provide meaningful information about logic."
    },

    // === RETENTION AND DISPOSAL ===
    {
        id: "A.14.1",
        title: "PII retention and disposal",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 5(1)(e) (Storage limitation)",
        description: "PII should be retained only as long as necessary and securely disposed thereafter.",
        implementation: "Implement retention schedules by PII category. Automated deletion workflows. Secure disposal procedures. Retention policy enforcement. Documentation of legal holds.",
        guidance: "Create retention matrices. Implement time-to-live (TTL) for PII. Cryptographic erasure. Deletion verification. Consider legal and regulatory requirements.",
        evidence: "Retention policies, deletion logs, disposal certificates, legal hold documentation, TTL configurations",
        complianceNotes: "GDPR Article 5(1)(e). Balance with legal retention requirements. Document retention justifications."
    },

    // === CLOUD-SPECIFIC CONTROLS ===
    {
        id: "A.15.1",
        title: "Return and removal of PII on contract termination",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 28(3)(g) (Deletion after contract ends)",
        description: "Upon contract termination, PII should be returned or securely deleted.",
        implementation: "Implement data export tools for customer retrieval. Secure deletion after retention period. Certification of deletion. Multiple export format options. Grace period for data retrieval.",
        guidance: "Automate export and deletion workflows. Provide 30-90 day grace period. Multiple export attempts allowed. Deletion certificates with hash verification. Backup deletion procedures.",
        evidence: "Export logs, deletion certificates, grace period policies, customer confirmation records",
        complianceNotes: "GDPR Article 28(3)(g). Critical for contract compliance. Must be in data processing agreement."
    },
    {
        id: "A.16.1",
        title: "Privacy by design and by default",
        category: "technical",
        type: "pii-specific",
        gdprMapping: "Article 25 (Data protection by design and by default)",
        description: "Privacy should be embedded in system design and default settings.",
        implementation: "Privacy impact assessments for new systems. Privacy requirements in development. Default to minimal data collection. Automated privacy controls. Regular privacy reviews.",
        guidance: "Implement privacy design patterns. Use privacy-enhancing technologies (PETs). Default to strictest privacy settings. Privacy requirements in acceptance criteria. Privacy champions in teams.",
        evidence: "Privacy impact assessments, design documents, default configurations, privacy requirements, review records",
        complianceNotes: "GDPR Article 25. Foundational principle. Reduces privacy risks from the start."
    },
    {
        id: "A.17.1",
        title: "Data protection impact assessments (DPIA)",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Article 35 (Data protection impact assessment)",
        description: "Conduct DPIAs for high-risk processing operations.",
        implementation: "Implement DPIA process. Risk assessment methodology. Stakeholder consultation. Mitigation measures. Regular DPIA reviews. Documentation of decisions.",
        guidance: "Create DPIA templates. Use risk matrices. Consult data protection officer (DPO). Document risk acceptance decisions. Review DPIAs annually or when changes occur.",
        evidence: "DPIA documents, risk assessments, consultation records, mitigation plans, review schedules",
        complianceNotes: "GDPR Article 35. Mandatory for high-risk processing. Must consult supervisory authority if high residual risk."
    },
    {
        id: "A.18.1",
        title: "Cloud service transparency for PII",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Article 28(3)(h) (Information to controller)",
        description: "Provide transparency about how PII is processed in cloud services.",
        implementation: "Publish processing transparency reports. Document data flows. Provide customer visibility into processing activities. Regular transparency updates. Compliance certifications.",
        guidance: "Create customer portals showing PII processing. Publish regular transparency reports. Document all sub-processors. Provide real-time monitoring access. Obtain third-party certifications.",
        evidence: "Transparency reports, processing documentation, customer portals, certification records, audit reports",
        complianceNotes: "Builds trust with customers. Helps customers meet their transparency obligations. Differentiator in market."
    },
    {
        id: "A.19.1",
        title: "Customer control over PII",
        category: "operational",
        type: "pii-specific",
        gdprMapping: "Article 28 (Processor obligations)",
        description: "Provide customers with tools to control PII processing.",
        implementation: "Build customer control interfaces. APIs for PII management. Self-service capabilities. Consent management tools. Processing controls and toggles.",
        guidance: "Implement customer admin portals. RESTful APIs for all PII operations. Fine-grained access controls. Real-time processing controls. Audit logs accessible to customers.",
        evidence: "Control interfaces, API documentation, customer usage logs, consent management tools, audit log access",
        complianceNotes: "Demonstrates processor role clearly. Enables customer compliance. Reduces support burden."
    },
    {
        id: "A.20.1",
        title: "PII processor obligations",
        category: "organizational",
        type: "pii-specific",
        gdprMapping: "Article 28 (Processor obligations)",
        description: "Cloud service providers acting as processors should meet all processor obligations.",
        implementation: "Data processing agreements compliant with GDPR Article 28. Process only on instructions. Ensure staff confidentiality. Implement security measures. Assist with data subject rights. Assist with security and DPIAs. Delete or return data. Demonstrate compliance.",
        guidance: "Create comprehensive DPA templates. Training for all staff handling PII. Regular compliance audits. Documented procedures for all obligations. Legal review of DPAs.",
        evidence: "Data processing agreements, staff training records, compliance audits, procedure documentation, legal reviews",
        complianceNotes: "GDPR Article 28. Core processor obligations. Foundation of customer trust and legal compliance."
    }
];

// Export for browser usage
if (typeof window !== 'undefined') {
    window.ISO27018_CONTROLS = ISO27018_CONTROLS;
    console.log('✅ ISO 27018 controls loaded:', ISO27018_CONTROLS.length, 'controls');
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ISO27018_CONTROLS };
}