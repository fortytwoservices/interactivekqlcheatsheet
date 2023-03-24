const data = {
    "Microsoft": {
        "Automated Logic WebCTRL": {},
        "Azure Active Directory": {
            "AuditLogs": "",
            "AADNonInteractiveUserSignInLogs": "",
            "AADServicePrincipalSignInLogs": "",
            "AADManagedIdentitySignInLogs": "",
            "AADProvisioningLogs": "",
            "ADFSSignInLogs": "",
            "AADUserRiskEvents": "",
            "AADRiskyUsers": "",
            "NetworkAccessTraffic": "",
            "AADRiskyServicePrincipals": "",
            "AADServicePrincipalRiskEvents": ""
        },
        "Azure Active Directory Identity Protection": "",
        "Azure Activity": "",
        "Azure Batch Account": "",
        "Azure Cognitive Search": "",
        "Azure Data Lake Storage Gen1": "",
        "Azure DDoS Protection": "",
        "Azure Event Hub": "",
        "Azure Information Protection": "",
        "Azure Key Vault": "",
        "Azure Kubernetes Service (AKS)": "",
        "Azure Logic Apps": "",
        "Azure Service Bus": "",
        "Azure Storage Account": "",
        "Azure Stream Analytics": "",
        "Azure Web Application Firewall (WAF)": "",
        "Common Event Format (CEF)": "",
        "Common Event Format (CEF) via AMA": "",
        "DNS": "",
        "Fortinet FortiWeb Web Application Firewall": "",
        "Microsoft 365 Defender (TF-Connector: MicrosoftThreatProtection)": {
            "SecurityIncident": "",
            "SecurityAlert": "",
            "DeviceEvents": "",
            "DeviceFileEvents": "",
            "DeviceImageLoadEvents": "",
            "DeviceInfo": "",
            "DeviceLogonEvents": "",
            "DeviceNetworkEvents": "",
            "DeviceNetworkInfo": "",
            "DeviceProcessEvents": "",
            "DeviceRegistryEvents": "",
            "DeviceFileCertificateInfo": "",
            "EmailEvents": "",
            "EmailUrlInfo": "",
            "EmailAttachmentInfo": "",
            "EmailPostDeliveryEvents": "",
            "UrlClickEvents": "",
            "IdentityLogonEvents": "",
            "IdentityQueryEvents": "",
            "IdentityDirectoryEvents": "",
            "CloudAppEvents": "",
            "AlertInfo": "Information about alerts from Microsoft 365 Defender components",
            "AlertEvidence": "Information about various entities - files, IP addresses, URLs, users, devices - associated with alerts from Microsoft 365 Defender components"
        },
        "Microsoft 365 Insider Risk Management": "",
        "Microsoft Defender for Cloud": "",
        "Microsoft Defender for Cloud Apps": {
            "CloudAppEvents": "Information about activities in various cloud apps and services covered by Microsoft Defender for Cloud Apps"
        },
        "Microsoft Defender for Endpoint": {
            "DeviceInfo": "Machine information, including OS information",
            "DeviceNetworkInfo": "Network properties of devices, including physical adapters, IP and MAC addresses, as well as connected networks and domains",
            "DeviceProcessEvents": "Process creation and related events",
            "DeviceNetworkEvents": "Network connection and related events",
            "DeviceFileEvents": "File creation, modification, and other file system events",
            "DeviceRegistryEvents": "Creation and modification of registry entries",
            "DeviceLogonEvents": "Sign-ins and other authentication events on devices",
            "DeviceImageLoadEvents": "DLL loading events",
            "DeviceEvents": "Multiple event types, including events triggered by security controls such as Windows Defender Antivirus and exploit protection",
            "DeviceFileCertificateInfo": "Certificate information of signed files obtained from certificate verification events on endpoints"
        },
        "Microsoft Defender for Identity": {
            "IdentityDirectoryEvents": "Various identity-related events, like password changes, password expirations, and user principal name (UPN) changes, captured from an on-premises Active Directory domain controller \nAlso includes system events on the domain controller",
            "IdentityInfo": "Information about user accounts obtained from various services, including Azure Active Directory",
            "IdentityLogonEvents": "Authentication activities made through your on-premises Active Directory, as captured by Microsoft Defender for Identity\nAuthentication activities related to Microsoft online services, as captured by Microsoft Defender for Cloud Apps",
            "IdentityQueryEvents": "Information about queries performed against Active Directory objects such as users, groups, devices, and domains"

        },
        "Microsoft Defender for IoT": "",
        "Microsoft Defender for Office 365": {
            "EmailEvents": "Microsoft 365 email events, including email delivery and blocking events",
            "EmailUrlInfo": "Information about URLs on emails",
            "EmailAttachmentInfo": "Information about files attached to emails",
            "EmailPostDeliveryEvents": "Security events that occur post-delivery, after Microsoft 365 has delivered the emails to the recipient mailbox"
        },
        "Microsoft PowerBI": "",
        "Microsoft Project": "",
        "Microsoft Purview (Preview)": "",
        "Microsoft Purview Information Protection": "",
        "Network Security Groups": "",
        "Office 365": "",
        "Security Events via Legacy Agent": "",
        "SentinelOne (using Azure Function)": "",
        "Syslog": "",
        "Threat intelligence - TAXII": "",
        "Threat Intelligence Platforms": "",
        "Threat Intelligence Upload Indicators API (Preview)": "",
        "Windows DNS Events via AMA (Preview)": "",
        "Windows Firewall": "",
        "Windows Firewall Events via AMA (Preview)": "",
        "Windows Forwarded Events": "",
        "Windows Security Events via AMA": ""
    },
    "Microsoft Corporation": {
        "Azure Firewall": "",
        "Dynamics 365": ""
    },
    "Microsoft Corporation - sentinel4github": {
        "GitHub (using Webhooks) (using Azure Function)": "",
        "GitHub Enterprise Audit Log": ""
    },
    "Microsoft Sentinel Community, Microsoft Corporation": {
        "Forcepoint CASB": "",
        "Forcepoint CSG": "",
        "Forcepoint DLP": "",
        "Forcepoint NGFW": ""
    }
};
function randID() {
    return Math.random().toString(36).substring(2, 8);
}
function generateHTML(data) {
    let html = '';
    for (let key in data) {
        html += `<details id="${randID()}"><summary>${key}</summary>`;
        if (typeof data[key] === 'string') {
            html += `<ul><li>${data[key]}</li></ul>`;
        } else {
            html += generateHTML(data[key]);
        }
        html += '</details>';
    }
    return html;
}

const container = document.getElementById('jayson');
container.innerHTML = generateHTML(data);

function highlightMatches(searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const elements = document.querySelectorAll("summary");

    for (let element of elements) {
        if (element.innerHTML) {
            const newHTML = element.innerHTML.replace(regex, '<span class="search-hit">$1</span>');
            element.innerHTML = newHTML;
            const hits = element.querySelectorAll(".search-hit");
            for (let hit of hits) {
                const parent = hit.parentElement;
                if (parent) {
                    parent.classList.add("search-hit");
                }
            }
        }
    }
}

function removeSearchHits() {
    const elements = document.querySelectorAll(".search-hit");
    for (let element of elements) {
        element.classList.remove("search-hit");
    }
}




function searchNestedDetails() {
    removeSearchHits();
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const details = document.querySelectorAll("details");

    for (let detail of details) {
        if (detail.innerHTML.toLowerCase().includes(searchTerm)) {
            openParentDetails(detail);
        } else {
            searchNestedSummaries(detail, searchTerm);
        }
    }
    highlightMatches(searchTerm);
}

function searchNestedSummaries(parentDetail, searchTerm) {
    const summaries = parentDetail.querySelectorAll("summary");

    for (let summary of summaries) {
        if (summary.innerHTML.toLowerCase().includes(searchTerm)) {
            openParentDetails(parentDetail);
        } else {
            const nestedDetail = summary.nextElementSibling;
            if (nestedDetail && nestedDetail.tagName.toLowerCase() === "details") {
                searchNestedSummaries(nestedDetail, searchTerm);
            }
        }
    }
    highlightMatches(searchTerm)
}

function openParentDetails(detail) {
    const parentDetails = getParents(detail, "details");
    for (let parentDetail of parentDetails) {
        parentDetail.open = true;
    }
}

function getParents(element, parentTagName) {
    const parents = [];
    let parent = element.parentElement;
    while (parent && parent.tagName.toLowerCase() !== parentTagName) {
        parent = parent.parentElement;
    }
    if (parent) {
        parents.push(parent);
        parents.push(...getParents(parent, parentTagName));
    }
    return parents;
}

function collapseAllDetails() {
    const details = document.querySelectorAll("details");
    for (let detail of details) {
        detail.open = false;
    }
}

const collapseButton = document.getElementById("collapse-button");
collapseButton.addEventListener("click", collapseAllDetails);


const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchNestedDetails);



