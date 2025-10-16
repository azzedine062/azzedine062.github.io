// data/base-controls.js - Base ISO 27002:2022 Controls (No Cloud Mappings)

/**
 * Base ISO 27002:2022 Controls
 * Contains only the control definitions without cloud-specific mappings
 * Cloud mappings will be added dynamically from separate provider files
 */
const ISO27002_BASE_CONTROLS = [
    // === ORGANIZATIONAL CONTROLS (5.1 - 5.37) ===
    { id: "5.1", title: "Policies for information security", category: "5", implementation: "Establish comprehensive information security policies covering cloud environments.", evidence: "Security policy documents, policy approval records, compliance reports" },
    { id: "5.2", title: "Information security roles and responsibilities", category: "5", implementation: "Define clear roles and responsibilities for cloud security.", evidence: "Role definition documents, IAM policy attachments, role assignment logs" },
    { id: "5.3", title: "Segregation of duties", category: "5", implementation: "Implement separation of duties through cloud IAM systems.", evidence: "IAM policy reviews, approval workflow logs, privilege audit trails" },
    { id: "5.4", title: "Management responsibilities", category: "5", implementation: "Establish management oversight for cloud security.", evidence: "Management review minutes, security dashboards, compliance reports" },
    { id: "5.5", title: "Contact with authorities", category: "5", implementation: "Maintain procedures for contacting authorities.", evidence: "Authority contact lists, incident escalation procedures" },
    { id: "5.6", title: "Contact with special interest groups", category: "5", implementation: "Engage with cloud security communities.", evidence: "Security bulletins, threat intelligence reports" },
    { id: "5.7", title: "Threat intelligence", category: "5", implementation: "Implement threat intelligence for cloud threats.", evidence: "Threat intelligence reports, security alerts" },
    { id: "5.8", title: "Information security in project management", category: "5", implementation: "Integrate security into cloud project lifecycles.", evidence: "Security requirements, gate approvals, pipeline scans" },
    { id: "5.9", title: "Inventory of information and other associated assets", category: "5", implementation: "Maintain comprehensive inventory of cloud assets.", evidence: "Asset inventory reports, tagging compliance" },
    { id: "5.10", title: "Acceptable use of information and other associated assets", category: "5", implementation: "Define acceptable use policies for cloud resources.", evidence: "Acceptable use policies, violation reports" },
    { id: "5.11", title: "Return of assets", category: "5", implementation: "Secure return and disposal of cloud assets.", evidence: "Asset return procedures, credential rotation logs" },
    { id: "5.12", title: "Classification of information", category: "5", implementation: "Implement data classification with cloud security controls.", evidence: "Classification policy, labels applied, access matrices" },
    { id: "5.13", title: "Labelling of information", category: "5", implementation: "Apply consistent labeling to cloud resources.", evidence: "Labeling standards, tag compliance reports" },
    { id: "5.14", title: "Information transfer", category: "5", implementation: "Secure information transfer between cloud services.", evidence: "Transfer logs, encryption certificates" },
    { id: "5.15", title: "Access control", category: "5", implementation: "Implement comprehensive access control using cloud IAM.", evidence: "Access control policies, IAM assignments" },
    { id: "5.16", title: "Identity management", category: "5", implementation: "Establish centralized identity management with federation.", evidence: "Identity procedures, provisioning logs" },
    { id: "5.17", title: "Authentication information", category: "5", implementation: "Secure management of authentication credentials.", evidence: "Credential policies, rotation logs, MFA reports" },
    { id: "5.18", title: "Access rights", category: "5", implementation: "Regular review and management of access rights.", evidence: "Access review reports, assignment changes" },
    { id: "5.19", title: "Information security in supplier relationships", category: "5", implementation: "Assess security risks in cloud supplier relationships.", evidence: "Supplier assessments, audit reports" },
    { id: "5.20", title: "Addressing information security within supplier agreements", category: "5", implementation: "Include security requirements in cloud agreements.", evidence: "Contract security annexes, SLA requirements" },
    { id: "5.21", title: "Managing information security in the ICT supply chain", category: "5", implementation: "Secure ICT supply chain including cloud services.", evidence: "Supply chain assessments, dependency scans" },
    { id: "5.22", title: "Monitoring, review and change management of supplier services", category: "5", implementation: "Monitor and review cloud supplier services.", evidence: "Supplier performance reports, monitoring dashboards" },
    { id: "5.23", title: "Information security for use of cloud services", category: "5", implementation: "Implement security controls for cloud service usage.", evidence: "Cloud security assessments, architecture reviews" },
    { id: "5.24", title: "Information security incident management planning and preparation", category: "5", implementation: "Develop incident response plans for cloud environments.", evidence: "Incident response plans, exercise records" },
    { id: "5.25", title: "Assessment and decision on information security events", category: "5", implementation: "Establish procedures for assessing security events.", evidence: "Event classification procedures, security logs" },
    { id: "5.26", title: "Response to information security incidents", category: "5", implementation: "Implement coordinated incident response.", evidence: "Incident response logs, automated executions" },
    { id: "5.27", title: "Learning from information security incidents", category: "5", implementation: "Learn from cloud security incidents.", evidence: "Post-mortem reports, lessons learned" },
    { id: "5.28", title: "Collection of evidence", category: "5", implementation: "Implement evidence collection for cloud forensics.", evidence: "Evidence collection procedures, log retention" },
    { id: "5.29", title: "Information security during disruption", category: "5", implementation: "Maintain security during business disruptions.", evidence: "Continuity plans, backup tests" },
    { id: "5.30", title: "ICT readiness for business continuity", category: "5", implementation: "Ensure ICT systems are prepared for continuity.", evidence: "ICT continuity plans, availability testing" },
    { id: "5.31", title: "Legal, statutory, regulatory and contractual requirements", category: "5", implementation: "Ensure cloud deployments comply with requirements.", evidence: "Compliance assessments, regulatory mapping" },
    { id: "5.32", title: "Intellectual property rights", category: "5", implementation: "Protect intellectual property in cloud environments.", evidence: "IP protection procedures, data ownership docs" },
    { id: "5.33", title: "Protection of records", category: "5", implementation: "Implement protection for records in cloud.", evidence: "Retention schedules, immutable storage configs" },
    { id: "5.34", title: "Privacy and protection of PII", category: "5", implementation: "Implement privacy protection for PII in cloud.", evidence: "Privacy impact assessments, PII inventories" },
    { id: "5.35", title: "Independent review of information security", category: "5", implementation: "Conduct independent reviews of cloud security.", evidence: "Independent audit reports, security findings" },
    { id: "5.36", title: "Compliance with policies, rules and standards for information security", category: "5", implementation: "Ensure ongoing compliance across cloud.", evidence: "Compliance monitoring reports, violation tracking" },
    { id: "5.37", title: "Documented operating procedures", category: "5", implementation: "Maintain documented procedures for cloud operations.", evidence: "Operating procedure documentation, update logs" },

    // === PEOPLE CONTROLS (6.1 - 6.8) ===
    { id: "6.1", title: "Screening", category: "6", implementation: "Implement background screening for cloud access.", evidence: "Screening records, clearance documentation" },
    { id: "6.2", title: "Terms and conditions of employment", category: "6", implementation: "Include cloud security responsibilities in employment.", evidence: "Employment contracts, signed agreements" },
    { id: "6.3", title: "Information security awareness, education and training", category: "6", implementation: "Provide cloud security awareness training.", evidence: "Training completion records, test results" },
    { id: "6.4", title: "Disciplinary process", category: "6", implementation: "Establish disciplinary procedures for violations.", evidence: "Disciplinary procedures, violation records" },
    { id: "6.5", title: "Responsibilities after termination or change of employment", category: "6", implementation: "Manage cloud access termination procedures.", evidence: "Termination checklists, revocation logs" },
    { id: "6.6", title: "Confidentiality or non-disclosure agreements", category: "6", implementation: "Implement confidentiality agreements for cloud data.", evidence: "Signed NDAs, confidentiality training" },
    { id: "6.7", title: "Remote working", category: "6", implementation: "Secure remote access to cloud resources.", evidence: "Remote work policies, VPN logs, MFA reports" },
    { id: "6.8", title: "Information security event reporting", category: "6", implementation: "Establish procedures for reporting security events.", evidence: "Event reporting procedures, incident logs" },

    // === PHYSICAL CONTROLS (7.1 - 7.14) ===
    { id: "7.1", title: "Physical security perimeters", category: "7", implementation: "Ensure cloud providers maintain physical security.", evidence: "Security certifications, audit reports" },
    { id: "7.2", title: "Physical entry", category: "7", implementation: "Verify cloud providers implement physical entry controls.", evidence: "Physical access procedures, audit reports" },
    { id: "7.3", title: "Protection against environmental threats", category: "7", implementation: "Ensure environmental threat protection.", evidence: "Environmental certifications, disaster recovery tests" },
    { id: "7.4", title: "Equipment maintenance", category: "7", implementation: "Verify proper equipment maintenance.", evidence: "Maintenance schedules, service health notifications" },
    { id: "7.5", title: "Secure disposal or reuse of equipment", category: "7", implementation: "Ensure secure disposal of equipment.", evidence: "Data destruction certificates, disposal procedures" },
    { id: "7.6", title: "Clear desk and clear screen", category: "7", implementation: "Implement clear desk and screen policies.", evidence: "Clear desk policies, screen lock configurations" },
    { id: "7.7", title: "Equipment siting and protection", category: "7", implementation: "Ensure proper equipment siting and protection.", evidence: "Equipment siting procedures, device protection policies" },
    { id: "7.8", title: "Equipment maintenance", category: "7", implementation: "Maintain equipment with security controls.", evidence: "Equipment maintenance logs, patch reports" },
    { id: "7.9", title: "Removal of assets", category: "7", implementation: "Secure procedures for removing equipment.", evidence: "Asset removal procedures, deregistration logs" },
    { id: "7.10", title: "Storage media", category: "7", implementation: "Secure management of storage media.", evidence: "Storage encryption policies, key management" },
    { id: "7.11", title: "Supporting utilities", category: "7", implementation: "Ensure supporting utilities are secured.", evidence: "Utility redundancy configs, backup tests" },
    { id: "7.12", title: "Cabling security", category: "7", implementation: "Secure network cabling for cloud connectivity.", evidence: "Cabling security procedures, physical audits" },
    { id: "7.13", title: "Equipment maintenance", category: "7", implementation: "Maintain network and security equipment.", evidence: "Equipment maintenance schedules, firmware logs" },
    { id: "7.14", title: "Secure disposal or reuse of equipment", category: "7", implementation: "Securely dispose of equipment accessing cloud.", evidence: "Disposal procedures, credential removal logs" },

    // === TECHNOLOGICAL CONTROLS (8.1 - 8.34) ===
    { id: "8.1", title: "User endpoint devices", category: "8", implementation: "Secure user endpoint devices accessing cloud.", evidence: "Device security policies, compliance reports" },
    { id: "8.2", title: "Privileged access rights", category: "8", implementation: "Manage privileged access with just-in-time access.", evidence: "Privileged access policies, activation logs" },
    { id: "8.3", title: "Information access restriction", category: "8", implementation: "Implement access restrictions with DLP.", evidence: "Access restriction policies, DLP violations" },
    { id: "8.4", title: "Access to source code", category: "8", implementation: "Control access to source code repositories.", evidence: "Source code policies, repository logs" },
    { id: "8.5", title: "Secure authentication", category: "8", implementation: "Implement secure authentication with MFA.", evidence: "Authentication policies, MFA reports" },
    { id: "8.6", title: "Capacity management", category: "8", implementation: "Implement capacity management with auto-scaling.", evidence: "Capacity procedures, auto-scaling configs" },
    { id: "8.7", title: "Protection against malware", category: "8", implementation: "Implement malware protection across cloud workloads.", evidence: "Malware protection policies, scan reports" },
    { id: "8.8", title: "Management of technical vulnerabilities", category: "8", implementation: "Manage technical vulnerabilities systematically.", evidence: "Vulnerability procedures, scan reports" },
    { id: "8.9", title: "Configuration management", category: "8", implementation: "Implement configuration management with monitoring.", evidence: "Configuration procedures, drift reports" },
    { id: "8.10", title: "Information deletion", category: "8", implementation: "Implement secure information deletion procedures.", evidence: "Deletion procedures, verification logs" },
    { id: "8.11", title: "Data masking", category: "8", implementation: "Implement data masking for sensitive information.", evidence: "Data masking policies, configurations" },
    { id: "8.12", title: "Data leakage prevention", category: "8", implementation: "Implement data leakage prevention controls.", evidence: "DLP policies, detection logs" },
    { id: "8.13", title: "Information backup", category: "8", implementation: "Implement comprehensive backup strategies.", evidence: "Backup procedures, verification tests" },
    { id: "8.14", title: "Redundancy of information processing facilities", category: "8", implementation: "Implement redundancy using multiple zones.", evidence: "Redundancy configs, failover tests" },
    { id: "8.15", title: "Logging", category: "8", implementation: "Implement comprehensive logging for cloud resources.", evidence: "Logging policies, retention configs" },
    { id: "8.16", title: "Monitoring activities", category: "8", implementation: "Continuously monitor cloud activities.", evidence: "Monitoring configs, security dashboards" },
    { id: "8.17", title: "Clock synchronization", category: "8", implementation: "Ensure accurate clock synchronization.", evidence: "Time sync policies, NTP verification" },
    { id: "8.18", title: "Use of system utilities", category: "8", implementation: "Control and monitor system utilities.", evidence: "Utility policies, usage logs" },
    { id: "8.19", title: "Installation of software on operational systems", category: "8", implementation: "Control software installation through approved processes.", evidence: "Software policies, installation logs" },
    { id: "8.20", title: "Networks security management", category: "8", implementation: "Implement comprehensive network security.", evidence: "Network security policies, firewall configs" },
    { id: "8.21", title: "Security of network services", category: "8", implementation: "Secure network services and hybrid connections.", evidence: "Network service configs, connection logs" },
    { id: "8.22", title: "Segregation of networks", category: "8", implementation: "Implement network segregation using VPCs.", evidence: "Network segmentation diagrams, configs" },
    { id: "8.23", title: "Web filtering", category: "8", implementation: "Implement web filtering for cloud resources.", evidence: "Web filtering policies, blocked content logs" },
    { id: "8.24", title: "Use of cryptography", category: "8", implementation: "Implement appropriate cryptography for data protection.", evidence: "Cryptography policies, key management" },
    { id: "8.25", title: "Secure development life cycle", category: "8", implementation: "Establish rules for the secure development of software and systems.", evidence: "SDLC documentation, security gates, code review records" },
    { id: "8.26", title: "Application security requirements", category: "8", implementation: "Implement application security for cloud applications.", evidence: "Application security requirements, testing reports" },
    { id: "8.27", title: "Secure system architecture and engineering principles", category: "8", implementation: "Apply secure architecture principles to cloud design.", evidence: "Security architecture documentation, reviews" },
    { id: "8.28", title: "Secure coding", category: "8", implementation: "Implement secure coding practices for cloud applications.", evidence: "Secure coding standards, code reviews" },
    { id: "8.29", title: "Security testing in development and acceptance", category: "8", implementation: "Integrate security testing throughout development.", evidence: "Security testing procedures, scan results" },
    { id: "8.30", title: "Outsourced development", category: "8", implementation: "Secure outsourced development for cloud applications.", evidence: "Outsourced development contracts, access records" },
    { id: "8.31", title: "Separation of development, testing and operational environments", category: "8", implementation: "Maintain separation between cloud environments.", evidence: "Environment separation procedures, configs" },
    { id: "8.32", title: "Change management", category: "8", implementation: "Implement comprehensive change management.", evidence: "Change management procedures, approval records" },
    { id: "8.33", title: "Test information", category: "8", implementation: "Secure test information in cloud environments.", evidence: "Test data procedures, masking configs" },
    { id: "8.34", title: "Protection of information systems during audit testing", category: "8", implementation: "Protect cloud systems during audit testing.", evidence: "Audit protection procedures, access logs" }
];

// Export for browser usage
if (typeof window !== 'undefined') {
    window.ISO27002_BASE_CONTROLS = ISO27002_BASE_CONTROLS;
    console.log('✅ Base controls loaded:', ISO27002_BASE_CONTROLS.length, 'controls');
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ISO27002_BASE_CONTROLS };
}