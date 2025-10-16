// data/ccm-base-controls.js - CSA Cloud Controls Matrix v4.0.12 Official Controls

/**
 * CSA Cloud Controls Matrix (CCM) v4.0.12 Base Controls
 * 197 control objectives across 17 domains
 * Source: Cloud Security Alliance (CSA)
 * Official Release: https://cloudsecurityalliance.org/artifacts/cloud-controls-matrix-v4/
 * Generated: 2025-10-16T16:36:37.952Z
 */

const CCM_BASE_CONTROLS = [
  {
    "id": "A&A-01",
    "domain": "A&A",
    "domainName": "Audit & Assurance",
    "title": "Audit and Assurance Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\naudit and assurance policies and procedures and standards. Review and update\nthe policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "A&A-02",
    "domain": "A&A",
    "domainName": "Audit & Assurance",
    "title": "Independent Assessments",
    "controlSpecification": "Conduct independent audit and assurance assessments according to\nrelevant standards at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "A&A-03",
    "domain": "A&A",
    "domainName": "Audit & Assurance",
    "title": "Risk Based Planning Assessment",
    "controlSpecification": "Perform independent audit and assurance assessments according to\nrisk-based plans and policies.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "A&A-04",
    "domain": "A&A",
    "domainName": "Audit & Assurance",
    "title": "Requirements Compliance",
    "controlSpecification": "Verify compliance with all relevant standards, regulations, legal/contractual,\nand statutory requirements applicable to the audit.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "A&A-05",
    "domain": "A&A",
    "domainName": "Audit & Assurance",
    "title": "Audit Management Process",
    "controlSpecification": "Define and implement an Audit Management process to support audit\nplanning, risk analysis, security control assessment, conclusion, remediation\nschedules, report generation, and review of past reports and supporting evidence.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "A&A-06",
    "domain": "A&A",
    "domainName": "Audit & Assurance",
    "title": "Remediation",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\na risk-based corrective action plan to remediate audit findings, review and\nreport remediation status to relevant stakeholders.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "AIS-01",
    "domain": "AIS",
    "domainName": "Application & Interface Security",
    "title": "Application and Interface Security Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for application security to provide guidance to the\nappropriate planning, delivery and support of the organization's application\nsecurity capabilities. Review and update the policies and procedures at least\nannually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "AIS-02",
    "domain": "AIS",
    "domainName": "Application & Interface Security",
    "title": "Application Security Baseline Requirements",
    "controlSpecification": "Establish, document and maintain baseline requirements for securing\ndifferent applications.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "AIS-03",
    "domain": "AIS",
    "domainName": "Application & Interface Security",
    "title": "Application Security Metrics",
    "controlSpecification": "Define and implement technical and operational metrics in alignment\nwith business objectives, security requirements, and compliance obligations.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "AIS-04",
    "domain": "AIS",
    "domainName": "Application & Interface Security",
    "title": "Secure Application Design and Development",
    "controlSpecification": "Define and implement a SDLC process for application design, development,\ndeployment, and operation in accordance with security requirements defined by\nthe organization.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "AIS-05",
    "domain": "AIS",
    "domainName": "Application & Interface Security",
    "title": "Automated Application Security Testing",
    "controlSpecification": "Implement a testing strategy, including criteria for acceptance of\nnew information systems, upgrades and new versions, which provides application\nsecurity assurance and maintains compliance while enabling organizational speed\nof delivery goals. Automate when applicable and possible.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "AIS-06",
    "domain": "AIS",
    "domainName": "Application & Interface Security",
    "title": "Automated Secure Application Deployment",
    "controlSpecification": "Establish and implement strategies and capabilities for secure, standardized,\nand compliant application deployment. Automate where possible.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "AIS-07",
    "domain": "AIS",
    "domainName": "Application & Interface Security",
    "title": "Application Vulnerability Remediation",
    "controlSpecification": "Define and implement a process to remediate application security\nvulnerabilities, automating remediation when possible.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "BCR-01",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Business Continuity Management Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\nbusiness continuity management and operational resilience policies and procedures.\nReview and update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "BCR-02",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Risk Assessment and Impact Analysis",
    "controlSpecification": "Determine the impact of business disruptions and risks to establish\ncriteria for developing business continuity and operational resilience strategies\nand capabilities.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "BCR-03",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Business Continuity Strategy",
    "controlSpecification": "Establish strategies to reduce the impact of, withstand, and recover\nfrom business disruptions within risk appetite.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "BCR-04",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Business Continuity Planning",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\na business continuity plan based on the results of the operational resilience\nstrategies and capabilities.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "BCR-05",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Documentation",
    "controlSpecification": "Develop, identify, and acquire documentation that is relevant to\nsupport the business continuity and operational resilience programs. Make the\ndocumentation available to authorized stakeholders and review periodically.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "BCR-06",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Business Continuity Exercises",
    "controlSpecification": "Exercise and test business continuity and operational resilience\nplans at least annually or upon significant changes.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "BCR-07",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Communication",
    "controlSpecification": "Establish communication with stakeholders and participants in the\ncourse of business continuity and resilience procedures.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "BCR-08",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Backup",
    "controlSpecification": "Periodically backup data stored in the cloud. Ensure the confidentiality,\nintegrity and availability of the backup, and verify data restoration from backup\nfor resiliency.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "BCR-09",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Disaster Response Plan",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\na disaster response plan to recover from natural and man-made disasters. Update\nthe plan at least annually or upon significant changes.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "BCR-10",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Response Plan Exercise",
    "controlSpecification": "Exercise the disaster response plan annually or upon significant\nchanges, including if possible local emergency authorities.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "BCR-11",
    "domain": "BCR",
    "domainName": "Business Continuity Management and Operational Resilience",
    "title": "Equipment Redundancy",
    "controlSpecification": "Supplement business-critical equipment with redundant equipment independently\nlocated at a reasonable minimum distance in accordance with applicable industry\nstandards.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CCC-01",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Change Management Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for managing the risks associated with applying changes\nto organization assets, including application, systems, infrastructure, configuration,\netc., regardless of whether the assets are managed internally or externally\n(i.e., outsourced). Review and update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CCC-02",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Quality Testing",
    "controlSpecification": "Follow a defined quality change control, approval and testing process\nwith established baselines, testing, and release standards.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CCC-03",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Change Management Technology",
    "controlSpecification": "Manage the risks associated with applying changes to organization\nassets, including application, systems, infrastructure, configuration, etc.,\nregardless of whether the assets are managed internally or externally (i.e.,\noutsourced).",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CCC-04",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Unauthorized Change Protection",
    "controlSpecification": "Restrict the unauthorized addition, removal, update, and management\nof organization assets.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CCC-05",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Change Agreements",
    "controlSpecification": "Include provisions limiting changes directly impacting CSCs owned\nenvironments/tenants to explicitly authorized requests within service level\nagreements between CSPs and CSCs.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CCC-06",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Change Management Baseline",
    "controlSpecification": "Establish change management baselines for all relevant authorized\nchanges on organization assets.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CCC-07",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Detection of Baseline Deviation",
    "controlSpecification": "Implement detection measures with proactive notification in case\nof changes deviating from the established baseline.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CCC-08",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Exception Management",
    "controlSpecification": "'Implement a procedure for the management of exceptions, including\nemergencies, in the change and configuration process. Align the procedure with\nthe requirements of GRC-04: Policy Exception Process.'",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CCC-09",
    "domain": "CCC",
    "domainName": "Change Control and Configuration Management",
    "title": "Change Restoration",
    "controlSpecification": "Define and implement a process to proactively roll back changes to\na previous known good state in case of errors or security concerns.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-01",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Encryption and Key Management Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for Cryptography, Encryption and Key Management. Review\nand update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-02",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "CEK Roles and Responsibilities",
    "controlSpecification": "Define and implement cryptographic, encryption and key management\nroles and responsibilities.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-03",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Data Encryption",
    "controlSpecification": "Provide cryptographic protection to data at-rest and in-transit,\nusing cryptographic libraries certified to approved standards.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-04",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Encryption Algorithm",
    "controlSpecification": "Use encryption algorithms that are appropriate for data protection,\nconsidering the classification of data, associated risks, and usability of the\nencryption technology.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-05",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Encryption Change Management",
    "controlSpecification": "Establish a standard change management procedure, to accommodate\nchanges from internal and external sources, for review, approval, implementation\nand communication of cryptographic, encryption and key management technology\nchanges.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-06",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Encryption Change Cost Benefit Analysis",
    "controlSpecification": "Manage and adopt changes to cryptography-, encryption-, and key management-related\nsystems (including policies and procedures) that fully account for downstream\neffects of proposed changes, including residual risk, cost, and benefits analysis.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-07",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Encryption Risk Management",
    "controlSpecification": "Establish and maintain an encryption and key management risk program\nthat includes provisions for risk assessment, risk treatment, risk context,\nmonitoring, and feedback.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-08",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "CSC Key Management Capability",
    "controlSpecification": "CSPs must provide the capability for CSCs to manage their own data\nencryption keys.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-09",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Encryption and Key Management Audit",
    "controlSpecification": "Audit encryption and key management systems, policies, and processes\nwith a frequency that is proportional to the risk exposure of the system with\naudit occurring preferably continuously but at least annually and after any\nsecurity event(s).",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-10",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Generation",
    "controlSpecification": "Generate Cryptographic keys using industry accepted cryptographic\nlibraries specifying the algorithm strength and the random number generator\nused.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-11",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Purpose",
    "controlSpecification": "Manage cryptographic secret and private keys that are provisioned\nfor a unique purpose.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-12",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Rotation",
    "controlSpecification": "Rotate cryptographic keys in accordance with the calculated cryptoperiod,\nwhich includes provisions for considering the risk of information disclosure\nand legal and regulatory requirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-13",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Revocation",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to revoke and remove cryptographic keys prior to the end of its established\ncryptoperiod, when a key is compromised, or an entity is no longer part of the\norganization, which include provisions for legal and regulatory requirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-14",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Destruction",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to destroy keys stored outside a secure environment and revoke keys\nstored in Hardware Security Modules (HSMs) when they are no longer needed, which\ninclude provisions for legal and regulatory requirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "CEK-15",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Activation",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to create keys in a pre-activated state when they have been generated\nbut not authorized for use, which include provisions for legal and regulatory\nrequirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-16",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Suspension",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to monitor, review and approve key transitions from any state to/from\nsuspension, which include provisions for legal and regulatory requirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-17",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Deactivation",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to deactivate keys at the time of their expiration date, which include\nprovisions for legal and regulatory requirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-18",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Archival",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to manage archived keys in a secure repository requiring least privilege\naccess, which include provisions for legal and regulatory requirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-19",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Compromise",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to use compromised keys to encrypt information only in controlled circumstance,\nand thereafter exclusively for decrypting data and never for encrypting data,\nwhich include provisions for legal and regulatory requirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-20",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Recovery",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to assess the risk to operational continuity versus the risk of the\nkeying material and the information it protects being exposed if control of\nthe keying material is lost, which include provisions for legal and regulatory\nrequirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "CEK-21",
    "domain": "CEK",
    "domainName": "Cryptography, Encryption & Key Management",
    "title": "Key Inventory Management",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures in order for the key management system to track and report all cryptographic\nmaterials and changes in status, which include provisions for legal and regulatory\nrequirements.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-01",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Off-Site Equipment Disposal Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for the secure disposal of equipment used outside the\norganization's premises. If the equipment is not physically destroyed a data\ndestruction procedure that renders recovery of information impossible must be\napplied. Review and update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-02",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Off-Site Transfer Authorization Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for the relocation or transfer of hardware, software,\nor data/information to an offsite or alternate location. The relocation or transfer\nrequest requires the written or cryptographically verifiable authorization.\nReview and update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-03",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Secure Area Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for maintaining a safe and secure working environment\nin offices, rooms, and facilities. Review and update the policies and procedures\nat least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DCS-04",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Secure Media Transportation Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for the secure transportation of physical media. Review\nand update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-05",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Assets Classification",
    "controlSpecification": "Classify and document the physical, and logical assets (e.g., applications)\nbased on the organizational business risk.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DCS-06",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Assets Cataloguing and Tracking",
    "controlSpecification": "Catalogue and track all relevant physical and logical assets located\nat all of the CSP's sites within a secured system.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DCS-07",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Controlled Access Points",
    "controlSpecification": "Implement physical security perimeters to safeguard personnel, data,\nand information systems. Establish physical security perimeters between the\nadministrative and business areas and the data storage and processing facilities\nareas.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-08",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Equipment Identification",
    "controlSpecification": "Use equipment identification as a method for connection authentication.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-09",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Secure Area Authorization",
    "controlSpecification": "Allow only authorized personnel access to secure areas, with all\ningress and egress points restricted, documented, and monitored by physical\naccess control mechanisms. Retain access control records on a periodic basis\nas deemed appropriate by the organization.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-10",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Surveillance System",
    "controlSpecification": "Implement, maintain, and operate datacenter surveillance systems\nat the external perimeter and at all the ingress and egress points to detect\nunauthorized ingress and egress attempts.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-11",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Unauthorized Access Response Training",
    "controlSpecification": "Train datacenter personnel to respond to unauthorized ingress or\negress attempts.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-12",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Cabling Security",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures that ensure a risk-based protection of power and telecommunication\ncables from a threat of interception, interference or damage at all facilities,\noffices and rooms.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-13",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Environmental Systems",
    "controlSpecification": "Implement and maintain data center environmental control systems\nthat monitor, maintain and test for continual effectiveness the temperature\nand humidity conditions within accepted industry standards.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-14",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Secure Utilities",
    "controlSpecification": "Secure, monitor, maintain, and test utilities services for continual\neffectiveness at planned intervals.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DCS-15",
    "domain": "DCS",
    "domainName": "Datacenter Security",
    "title": "Equipment Location",
    "controlSpecification": "Keep business-critical equipment away from locations subject to high\nprobability for environmental risk events.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DSP-01",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Security and Privacy Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for the classification, protection and handling of data\nthroughout its lifecycle, and according to all applicable laws and regulations,\nstandards, and risk level. Review and update the policies and procedures at\nleast annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-02",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Secure Disposal",
    "controlSpecification": "Apply industry accepted methods for the secure disposal of data from\nstorage media such that data is not recoverable by any forensic means.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DSP-03",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Inventory",
    "controlSpecification": "Create and maintain a data inventory, at least for any sensitive\ndata and personal data.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-04",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Classification",
    "controlSpecification": "Classify data according to its type and sensitivity level.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-05",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Flow Documentation",
    "controlSpecification": "Create data flow documentation to identify what data is processed,\nstored or transmitted where. Review data flow documentation at defined intervals,\nat least annually, and after any change.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-06",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Ownership and Stewardship",
    "controlSpecification": "Document ownership and stewardship of all relevant documented personal\nand sensitive data. Perform review at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-07",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Protection by Design and Default",
    "controlSpecification": "Develop systems, products, and business practices based upon a principle\nof security by design and industry best practices.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-08",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Privacy by Design and Default",
    "controlSpecification": "Develop systems, products, and business practices based upon a principle\nof privacy by design and industry best practices. Ensure that systems' privacy\nsettings are configured by default, according to all applicable laws and regulations.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-09",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Protection Impact Assessment",
    "controlSpecification": "Conduct a Data Protection Impact Assessment (DPIA) to evaluate the\norigin, nature, particularity and severity of the risks upon the processing\nof personal data, according to any applicable laws, regulations and industry\nbest practices.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DSP-10",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Sensitive Data Transfer",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures that ensure any transfer of personal or sensitive data is protected\nfrom unauthorized access and only processed within scope as permitted by the\nrespective laws and regulations.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-11",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Personal Data Access, Reversal, Rectification and Deletion",
    "controlSpecification": "Define and implement, processes, procedures and technical measures\nto enable data subjects to request access to, modification, or deletion of their\npersonal data, according to any applicable laws and regulations.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-12",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Limitation of Purpose in Personal Data Processing",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to ensure that personal data is processed according to any applicable\nlaws and regulations and for the purposes declared to the data subject.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-13",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Personal Data Sub-processing",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures for the transfer and sub-processing of personal data within the service\nsupply chain, according to any applicable laws and regulations.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-14",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Disclosure of Data Sub-processors",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to disclose the details of any personal or sensitive data access by\nsub-processors to the data owner prior to initiation of that processing.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-15",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Limitation of Production Data Use",
    "controlSpecification": "Obtain authorization from data owners, and manage associated risk\nbefore replicating or using production data in non-production environments.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DSP-16",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Retention and Deletion",
    "controlSpecification": "Data retention, archiving and deletion is managed in accordance with\nbusiness requirements, applicable laws and regulations.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-17",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Sensitive Data Protection",
    "controlSpecification": "Define and implement, processes, procedures and technical measures\nto protect sensitive data throughout it's lifecycle.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "DSP-18",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Disclosure Notification",
    "controlSpecification": "The CSP must have in place, and describe to CSCs the procedure to\nmanage and respond to requests for disclosure of Personal Data by Law Enforcement\nAuthorities according to applicable laws and regulations. The CSP must give\nspecial attention to the notification procedure to interested CSCs, unless otherwise\nprohibited, such as a prohibition under criminal law to preserve confidentiality\nof a law enforcement investigation.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "DSP-19",
    "domain": "DSP",
    "domainName": "Data Security and Privacy Lifecycle Management",
    "title": "Data Location",
    "controlSpecification": "Define and implement, processes, procedures and technical measures\nto specify and document the physical locations of data, including any locations\nin which data is processed or backed up.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "GRC-01",
    "domain": "GRC",
    "domainName": "Governance, Risk and Compliance",
    "title": "Governance Program Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for an information governance program, which is sponsored\nby the leadership of the organization. Review and update the policies and procedures\nat least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "GRC-02",
    "domain": "GRC",
    "domainName": "Governance, Risk and Compliance",
    "title": "Risk Management Program",
    "controlSpecification": "Establish a formal, documented, and leadership-sponsored Enterprise\nRisk Management (ERM) program that includes policies and procedures for identification,\nevaluation, ownership, treatment, and acceptance of cloud security and privacy\nrisks.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "GRC-03",
    "domain": "GRC",
    "domainName": "Governance, Risk and Compliance",
    "title": "Organizational Policy Reviews",
    "controlSpecification": "Review all relevant organizational policies and associated procedures\nat least annually or when a substantial change occurs within the organization.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "GRC-04",
    "domain": "GRC",
    "domainName": "Governance, Risk and Compliance",
    "title": "Policy Exception Process",
    "controlSpecification": "Establish and follow an approved exception process as mandated by\nthe governance program whenever a deviation from an established policy occurs.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "GRC-05",
    "domain": "GRC",
    "domainName": "Governance, Risk and Compliance",
    "title": "Information Security Program",
    "controlSpecification": "Develop and implement an Information Security Program, which includes\nprograms for all the relevant domains of the CCM.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "GRC-06",
    "domain": "GRC",
    "domainName": "Governance, Risk and Compliance",
    "title": "Governance Responsibility Model",
    "controlSpecification": "Define and document roles and responsibilities for planning, implementing,\noperating, assessing, and improving governance programs.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "GRC-07",
    "domain": "GRC",
    "domainName": "Governance, Risk and Compliance",
    "title": "Information System Regulatory Mapping",
    "controlSpecification": "Identify and document all relevant standards, regulations, legal/contractual,\nand statutory requirements, which are applicable to your organization.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "GRC-08",
    "domain": "GRC",
    "domainName": "Governance, Risk and Compliance",
    "title": "Special Interest Groups",
    "controlSpecification": "Establish and maintain contact with cloud-related special interest\ngroups and other relevant entities in line with business context.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-01",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Background Screening Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for background verification of all new employees (including\nbut not limited to remote employees, contractors, and third parties) according\nto local laws, regulations, ethics, and contractual constraints and proportional\nto the data classification to be accessed, the business requirements, and acceptable\nrisk. Review and update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-02",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Acceptable Use of Technology Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for defining allowances and conditions for the acceptable\nuse of organizationally-owned or managed assets. Review and update the policies\nand procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-03",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Clean Desk Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures that require unattended workspaces to not have openly\nvisible confidential data. Review and update the policies and procedures at\nleast annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "HRS-04",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Remote and Home Working Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures to protect information accessed, processed or stored\nat remote sites and locations. Review and update the policies and procedures\nat least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "HRS-05",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Asset returns",
    "controlSpecification": "Establish and document procedures for the return of organization-owned\nassets by terminated employees.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-06",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Employment Termination",
    "controlSpecification": "Establish, document, and communicate to all personnel the procedures\noutlining the roles and responsibilities concerning changes in employment.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-07",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Employment Agreement Process",
    "controlSpecification": "Employees sign the employee agreement prior to being granted access\nto organizational information systems, resources and assets.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-08",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Employment Agreement Content",
    "controlSpecification": "The organization includes within the employment agreements provisions\nand/or terms for adherence to established information governance and security\npolicies.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-09",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Personnel Roles and Responsibilities",
    "controlSpecification": "Document and communicate roles and responsibilities of employees,\nas they relate to information assets and security.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-10",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Non-Disclosure Agreements",
    "controlSpecification": "Identify, document, and review, at planned intervals, requirements\nfor non-disclosure/confidentiality agreements reflecting the organization's\nneeds for the protection of data and operational details.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-11",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Security Awareness Training",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\na security awareness training program for all employees of the organization\nand provide regular training updates.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "HRS-12",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Personal and Sensitive Data Awareness and Training",
    "controlSpecification": "Provide all employees with access to sensitive organizational and\npersonal data with appropriate security awareness training and regular updates\nin organizational procedures, processes, and policies relating to their professional\nfunction relative to the organization.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "HRS-13",
    "domain": "HRS",
    "domainName": "Human Resources",
    "title": "Compliance User Responsibility",
    "controlSpecification": "Make employees aware of their roles and responsibilities for maintaining\nawareness and compliance with established policies and procedures and applicable\nlegal, statutory, or regulatory compliance obligations.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IAM-01",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Identity and Access Management Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, implement, apply, evaluate\nand maintain policies and procedures for identity and access management. Review\nand update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-02",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Strong Password Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, implement, apply, evaluate\nand maintain strong password policies and procedures. Review and update the\npolicies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IAM-03",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Identity Inventory",
    "controlSpecification": "Manage, store, and review the information of system identities, and\nlevel of access.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-04",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Separation of Duties",
    "controlSpecification": "Employ the separation of duties principle when implementing information\nsystem access.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-05",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Least Privilege",
    "controlSpecification": "Employ the least privilege principle when implementing information\nsystem access.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-06",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "User Access Provisioning",
    "controlSpecification": "Define and implement a user access provisioning process which authorizes,\nrecords, and communicates access changes to data and assets.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-07",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "User Access Changes and Revocation",
    "controlSpecification": "De-provision or respectively modify access of movers / leavers or\nsystem identity changes in a timely manner in order to effectively adopt and\ncommunicate identity and access management policies.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-08",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "User Access Review",
    "controlSpecification": "Review and revalidate user access for least privilege and separation\nof duties with a frequency that is commensurate with organizational risk tolerance.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-09",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Segregation of Privileged Access Roles",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures for the segregation of privileged access roles such that administrative\naccess to data, encryption and key management capabilities and logging capabilities\nare distinct and separated.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-10",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Management of Privileged Access Roles",
    "controlSpecification": "Define and implement an access process to ensure privileged access\nroles and rights are granted for a time limited period, and implement procedures\nto prevent the culmination of segregated privileged access.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-11",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "CSCs Approval for Agreed Privileged Access Roles",
    "controlSpecification": "Define, implement and evaluate processes and procedures for customers\nto participate, where applicable, in the granting of access for agreed, high\nrisk (as defined by the organizational risk assessment) privileged access roles.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IAM-12",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Safeguard Logs Integrity",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to ensure the logging infrastructure is read-only for all with write\naccess, including privileged access roles, and that the ability to disable it\nis controlled through a procedure that ensures the segregation of duties and\nbreak glass procedures.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IAM-13",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Uniquely Identifiable Users",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures that ensure users are identifiable through unique IDs or which can\nassociate individuals to the usage of user IDs.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IAM-14",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Strong Authentication",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures for authenticating access to systems, application and data assets,\nincluding multifactor authentication for at least privileged user and sensitive\ndata access. Adopt digital certificates or alternatives which achieve an equivalent\nlevel of security for system identities.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IAM-15",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Passwords Management",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures for the secure management of passwords.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IAM-16",
    "domain": "IAM",
    "domainName": "Identity & Access Management",
    "title": "Authorization Mechanisms",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to verify access to data and system functions is authorized.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IPY-01",
    "domain": "IPY",
    "domainName": "Interoperability & Portability",
    "title": "Interoperability and Portability Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for interoperability and portability including\nrequirements for:\na. Communications between application interfaces\nb. Information processing interoperability\nc. Application development portability\nd. Information/Data exchange, usage, portability, integrity, and persistence\nReview and update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IPY-02",
    "domain": "IPY",
    "domainName": "Interoperability & Portability",
    "title": "Application Interface Availability",
    "controlSpecification": "Provide application interface(s) to CSCs so that they programmatically\nretrieve their data to enable interoperability and portability.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IPY-03",
    "domain": "IPY",
    "domainName": "Interoperability & Portability",
    "title": "Secure Interoperability and Portability Management",
    "controlSpecification": "Implement cryptographically secure and standardized network protocols\nfor the management, import and export of data.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IPY-04",
    "domain": "IPY",
    "domainName": "Interoperability & Portability",
    "title": "Data Portability Contractual Obligations",
    "controlSpecification": "Agreements must include provisions specifying CSCs access to data\nupon contract termination and will include:\na. Data format\nb. Length of time the data will be stored\nc. Scope of the data retained and made available to the CSCs\nd. Data deletion policy",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IVS-01",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "Infrastructure and Virtualization Security Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for infrastructure and virtualization security. Review\nand update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IVS-02",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "Capacity and Resource Planning",
    "controlSpecification": "Plan and monitor the availability, quality, and adequate capacity\nof resources in order to deliver the required system performance as determined\nby the business.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IVS-03",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "Network Security",
    "controlSpecification": "Monitor, encrypt and restrict communications between environments\nto only authenticated and authorized connections, as justified by the business.\nReview these configurations at least annually, and support them by a documented\njustification of all allowed services, protocols, ports, and compensating controls.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IVS-04",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "OS Hardening and Base Controls",
    "controlSpecification": "Harden host and guest OS, hypervisor or infrastructure control plane\naccording to their respective best practices, and supported by technical controls,\nas part of a security baseline.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IVS-05",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "Production and Non-Production Environments",
    "controlSpecification": "Separate production and non-production environments.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IVS-06",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "Segmentation and Segregation",
    "controlSpecification": "Design, develop, deploy and configure applications and infrastructures\nsuch that CSP and CSC (tenant) user access and intra-tenant access is appropriately\nsegmented and segregated, monitored and restricted from other tenants.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IVS-07",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "Migration to Cloud Environments",
    "controlSpecification": "Use secure and encrypted communication channels when migrating servers,\nservices, applications, or data to cloud environments. Such channels must include\nonly up-to-date and approved protocols.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "IVS-08",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "Network Architecture Documentation",
    "controlSpecification": "Identify and document high-risk environments.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "IVS-09",
    "domain": "IVS",
    "domainName": "Infrastructure & Virtualization Security",
    "title": "Network Defense",
    "controlSpecification": "Define, implement and evaluate processes, procedures and defense-in-depth\ntechniques for protection, detection, and timely response to network-based attacks.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "LOG-01",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Logging and Monitoring Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for logging and monitoring. Review and update the policies\nand procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "LOG-02",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Audit Logs Protection",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to ensure the security and retention of audit logs.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-03",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Security Monitoring and Alerting",
    "controlSpecification": "Identify and monitor security-related events within applications\nand the underlying infrastructure. Define and implement a system to generate\nalerts to responsible stakeholders based on such events and corresponding metrics.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-04",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Audit Logs Access and Accountability",
    "controlSpecification": "Restrict audit logs access to authorized personnel and maintain records\nthat provide unique access accountability.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "LOG-05",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Audit Logs Monitoring and Response",
    "controlSpecification": "Monitor security audit logs to detect activity outside of typical\nor expected patterns. Establish and follow a defined process to review and take\nappropriate and timely actions on detected anomalies.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "LOG-06",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Clock Synchronization",
    "controlSpecification": "Use a reliable time source across all relevant information processing\nsystems.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-07",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Logging Scope",
    "controlSpecification": "Establish, document and implement which information meta/data system\nevents should be logged. Review and update the scope at least annually or whenever\nthere is a change in the threat environment.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-08",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Log Records",
    "controlSpecification": "Generate audit records containing relevant security information.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-09",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Log Protection",
    "controlSpecification": "The information system protects audit records from unauthorized access,\nmodification, and deletion.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-10",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Encryption Monitoring and Reporting",
    "controlSpecification": "Establish and maintain a monitoring and internal reporting capability\nover the operations of cryptographic, encryption and key management policies,\nprocesses, procedures, and controls.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-11",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Transaction/Activity Logging",
    "controlSpecification": "Log and monitor key lifecycle management events to enable auditing\nand reporting on usage of cryptographic keys.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-12",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Access Control Logs",
    "controlSpecification": "Monitor and log physical access using an auditable access control\nsystem.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "LOG-13",
    "domain": "LOG",
    "domainName": "Logging and Monitoring",
    "title": "Failures and Anomalies Reporting",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures for the reporting of anomalies and failures of the monitoring system\nand provide immediate notification to the accountable party.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "SEF-01",
    "domain": "SEF",
    "domainName": "Security Incident Management, E-Discovery, & Cloud Forensics",
    "title": "Security Incident Management Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for Security Incident Management, E-Discovery, and Cloud\nForensics. Review and update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "SEF-02",
    "domain": "SEF",
    "domainName": "Security Incident Management, E-Discovery, & Cloud Forensics",
    "title": "Service Management Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for the timely management of security incidents. Review\nand update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "SEF-03",
    "domain": "SEF",
    "domainName": "Security Incident Management, E-Discovery, & Cloud Forensics",
    "title": "Incident Response Plans",
    "controlSpecification": "'Establish, document, approve, communicate, apply, evaluate and maintain\na security incident response plan, which includes but is not limited to: relevant\ninternal departments, impacted CSCs, and other business critical relationships\n(such as supply-chain) that may be impacted.'",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "SEF-04",
    "domain": "SEF",
    "domainName": "Security Incident Management, E-Discovery, & Cloud Forensics",
    "title": "Incident Response Testing",
    "controlSpecification": "Test and update as necessary incident response plans at planned intervals\nor upon significant organizational or environmental changes for effectiveness.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "SEF-05",
    "domain": "SEF",
    "domainName": "Security Incident Management, E-Discovery, & Cloud Forensics",
    "title": "Incident Response Metrics",
    "controlSpecification": "Establish and monitor information security incident metrics.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "SEF-06",
    "domain": "SEF",
    "domainName": "Security Incident Management, E-Discovery, & Cloud Forensics",
    "title": "Event Triage Processes",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures supporting business processes to triage security-related events.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "SEF-07",
    "domain": "SEF",
    "domainName": "Security Incident Management, E-Discovery, & Cloud Forensics",
    "title": "Security Breach Notification",
    "controlSpecification": "Define and implement, processes, procedures and technical measures\nfor security breach notifications. Report security breaches and assumed security\nbreaches including any relevant supply chain breaches, as per applicable SLAs,\nlaws and regulations.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "SEF-08",
    "domain": "SEF",
    "domainName": "Security Incident Management, E-Discovery, & Cloud Forensics",
    "title": "Points of Contact Maintenance",
    "controlSpecification": "Maintain points of contact for applicable regulation authorities,\nnational and local law enforcement, and other legal jurisdictional authorities.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-01",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "SSRM Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for the application of the Shared Security Responsibility\nModel (SSRM) within the organization. Review and update the policies and procedures\nat least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-02",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "SSRM Supply Chain",
    "controlSpecification": "Apply, document, implement and manage the SSRM throughout the supply\nchain for the cloud service offering.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "STA-03",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "SSRM Guidance",
    "controlSpecification": "Provide SSRM Guidance to the CSC detailing information about the\nSSRM applicability throughout the supply chain.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-04",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "SSRM Control Ownership",
    "controlSpecification": "Delineate the shared ownership and applicability of all CSA CCM controls\naccording to the SSRM for the cloud service offering.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "STA-05",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "SSRM Documentation Review",
    "controlSpecification": "Review and validate SSRM documentation for all cloud services offerings\nthe organization uses.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-06",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "SSRM Control Implementation",
    "controlSpecification": "Implement, operate, and audit or assess the portions of the SSRM\nwhich the organization is responsible for.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-07",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "Supply Chain Inventory",
    "controlSpecification": "Develop and maintain an inventory of all supply chain relationships.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "STA-08",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "Supply Chain Risk Management",
    "controlSpecification": "CSPs periodically review risk factors associated with all organizations\nwithin their supply chain.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-09",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "Primary Service and Contractual Agreement",
    "controlSpecification": "Service agreements between CSPs and CSCs (tenants) must incorporate at least the following mutually-agreed upon provisions and/or terms:\n• Scope, characteristics and location of business relationship and services offered\n• Information security requirements (including SSRM)\n• Change management process\n• Logging and monitoring capability\n• Incident management and communication procedures\n• Right to audit and third party assessment\n• Service termination\n• Interoperability and portability requirements\n• Data privacy",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-10",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "Supply Chain Agreement Review",
    "controlSpecification": "Review supply chain agreements between CSPs and CSCs at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-11",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "Internal Compliance Testing",
    "controlSpecification": "Define and implement a process for conducting internal assessments\nto confirm conformance and effectiveness of standards, policies, procedures,\nand service level agreement activities at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-12",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "Supply Chain Service Agreement Compliance",
    "controlSpecification": "Implement policies requiring all CSPs throughout the supply chain\nto comply with information security, confidentiality, access control, privacy,\naudit, personnel policy and service level requirements and standards.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-13",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "Supply Chain Governance Review",
    "controlSpecification": "Periodically review the organization's supply chain partners' IT\ngovernance policies and procedures.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "STA-14",
    "domain": "STA",
    "domainName": "Supply Chain Management, Transparency, and Accountability",
    "title": "Supply Chain Data Security Assessment",
    "controlSpecification": "Define and implement a process for conducting security assessments\nperiodically for all organizations within the supply chain.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "TVM-01",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Threat and Vulnerability Management Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures to identify, report and prioritize the remediation of\nvulnerabilities, in order to protect systems against vulnerability exploitation.\nReview and update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "TVM-02",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Malware Protection Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures to protect against malware on managed assets. Review\nand update the policies and procedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "TVM-03",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Vulnerability Remediation Schedule",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to enable both scheduled and emergency responses to vulnerability identifications,\nbased on the identified risk.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "TVM-04",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Detection Updates",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to update detection tools, threat signatures, and indicators of compromise\non a weekly, or more frequent basis.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "TVM-05",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "External Library Vulnerabilities",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to identify updates for applications which use third party or open\nsource libraries according to the organization's vulnerability management policy.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "TVM-06",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Penetration Testing",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures for the periodic performance of penetration testing by independent\nthird parties.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "TVM-07",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Vulnerability Identification",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures for the detection of vulnerabilities on organizationally managed assets\nat least monthly.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "TVM-08",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Vulnerability Prioritization",
    "controlSpecification": "Use a risk-based model for effective prioritization of vulnerability\nremediation using an industry recognized framework.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "TVM-09",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Vulnerability Management Reporting",
    "controlSpecification": "Define and implement a process for tracking and reporting vulnerability\nidentification and remediation activities that includes stakeholder notification.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "TVM-10",
    "domain": "TVM",
    "domainName": "Threat & Vulnerability Management",
    "title": "Vulnerability Management Metrics",
    "controlSpecification": "Establish, monitor and report metrics for vulnerability identification\nand remediation at defined intervals.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "UEM-01",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Endpoint Devices Policy and Procedures",
    "controlSpecification": "Establish, document, approve, communicate, apply, evaluate and maintain\npolicies and procedures for all endpoints. Review and update the policies and\nprocedures at least annually.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "UEM-02",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Application and Service Approval",
    "controlSpecification": "Define, document, apply and evaluate a list of approved services,\napplications and sources of applications (stores) acceptable for use by endpoints\nwhen accessing or storing organization-managed data.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "UEM-03",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Compatibility",
    "controlSpecification": "Define and implement a process for the validation of the endpoint\ndevice's compatibility with operating systems and applications.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "UEM-04",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Endpoint Inventory",
    "controlSpecification": "Maintain an inventory of all endpoints used to store and access company\ndata.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "UEM-05",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Endpoint Management",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to enforce policies and controls for all endpoints permitted to access\nsystems and/or store, transmit, or process organizational data.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "UEM-06",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Automatic Lock Screen",
    "controlSpecification": "Configure all relevant interactive-use endpoints to require an automatic\nlock screen.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "UEM-07",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Operating Systems",
    "controlSpecification": "Manage changes to endpoint operating systems, patch levels, and/or\napplications through the company's change management processes.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "UEM-08",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Storage Encryption",
    "controlSpecification": "Protect information from unauthorized disclosure on managed endpoint\ndevices with storage encryption.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "UEM-09",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Anti-Malware Detection and Prevention",
    "controlSpecification": "Configure managed endpoints with anti-malware detection and prevention\ntechnology and services.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "UEM-10",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Software Firewall",
    "controlSpecification": "Configure managed endpoints with properly configured software firewalls.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "UEM-11",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Data Loss Prevention",
    "controlSpecification": "Configure managed endpoints with Data Loss Prevention (DLP) technologies\nand rules in accordance with a risk assessment.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "UEM-12",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Remote Locate",
    "controlSpecification": "Enable remote geo-location capabilities for all managed mobile endpoints.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  },
  {
    "id": "UEM-13",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Remote Wipe",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nmeasures to enable the deletion of company data remotely on managed endpoint\ndevices.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": true
  },
  {
    "id": "UEM-14",
    "domain": "UEM",
    "domainName": "Universal Endpoint Management",
    "title": "Third-Party Endpoint Security Posture",
    "controlSpecification": "Define, implement and evaluate processes, procedures and technical\nand/or contractual measures to maintain proper security of third-party endpoints\nwith access to organizational assets.",
    "applicability": "Both CSP and CSC",
    "category": "technical",
    "isLite": false
  }
];

// Export for browser usage
if (typeof window !== 'undefined') {
    window.CCM_BASE_CONTROLS = CCM_BASE_CONTROLS;
    console.log('✅ CCM Base Controls loaded:', CCM_BASE_CONTROLS.length, 'controls');
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CCM_BASE_CONTROLS };
}