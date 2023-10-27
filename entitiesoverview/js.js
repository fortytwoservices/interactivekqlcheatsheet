const data = {
    "Account": {
        "displayNameV3": "Account",
        "identifiersV3":
        {
            "Name": "",
            "FullName": "",
            "NTDomain": "",
            "DnsDomain": "",
            "UPNSuffix": "",
            "Sid": "",
            "AadTenantId": "",
            "AadUserId": "",
            "PUID": "",
            "IsDomainJoined": "",
            "DisplayName": "",
            "ObjectGuid": ""
        },
        "requiredFieldsV3": {
            "FullName": "",
            "Sid": "",
            "Name": "",
            "AadUserId": "",
            "PUID": "",
            "ObjectGuid": ""
        },
        "requiredInputFieldsSetsV3": {
            "Name": "",
            "NTDomain": "",
            "Name": "",
            "UPNSuffix": "",
            "AadUserId": "",
            "Sid": ""
        },
        "armStrongIdentifiers": [
            [
                "upnSuffix",
                "accountName"
            ],
            [
                "aadUserId"
            ],
            [
                "sid"
            ],
            [
                "hostEntityId",
                "sid"
            ],
            [
                "hostEntityId",
                "ntDomain",
                "accountName"
            ],
            [
                "ntDomain",
                "accountName"
            ],
            [
                "dnsDomain",
                "accountName"
            ],
            [
                "puid"
            ],
            [
                "objectGuid"
            ]
        ]
    },
    "Host": {
        "displayNameV3": "Host",
        "identifiersV3": {
            "DnsDomain": "",
            "NTDomain": "",
            "HostName": "",
            "FullName": "",
            "NetBiosName": "",
            "AzureID": "",
            "OMSAgentID": "",
            "OSFamily": "",
            "OSVersion": "",
            "IsDomainJoined": ""
        },
        "requiredFieldsV3": {
            "FullName": "",
            "HostName": "",
            "NetBiosName": "",
            "AzureID": "",
            "OMSAgentID": ""
        },
        "requiredInputFieldsSetsV3": {
            "HostName": "",
            "NTDomain": "",
            "HostName": "",
            "DnsDomain": "",
            "NetBiosName": "",
            "NTDomain": "",
            "NetBiosName": "",
            "DnsDomain": "",
            "AzureID": "",
            "OMSAgentID": ""
        },
        "armStrongIdentifiers": {
            "hostName": "",
            "ntDomain": "",
            "hostName": "",
            "dnsDomain": "",
            "netBiosName": "",
            "ntDomain": "",
            "netBiosName": "",
            "dnsDomain": "",
            "azureID": "",
            "omsAgentID": ""
        }
    },
    "IP": {
        "displayNameV3": "IP",
        "identifiersV3": [
            "Address",
            "AddressScope"
        ],
        "requiredFieldsV3": [
            [
                "Address"
            ]
        ],
        "armStrongIdentifiers": [
            [
                "address"
            ]
        ]
    },
    "Malware": {
        "displayNameV3": "Malware",
        "identifiersV3": [
            "Name",
            "Category"
        ],
        "requiredFieldsV3": [
            [
                "Name"
            ]
        ]
    },
    "File": {
        "displayNameV3": "File",
        "identifiersV3": [
            "Directory",
            "Name"
        ],
        "requiredFieldsV3": [
            [
                "Name"
            ]
        ]
    },
    "Process": {
        "displayNameV3": "Process",
        "identifiersV3": [
            "ProcessId",
            "CommandLine",
            "ElevationToken",
            "CreationTimeUtc"
        ],
        "requiredFieldsV3": [
            [
                "CommandLine"
            ],
            [
                "ProcessId"
            ]
        ]
    },
    "CloudApplication": {
        "displayNameV3": "Cloud application",
        "identifiersV3": [
            "AppId",
            "Name",
            "InstanceName"
        ],
        "requiredFieldsV3": [
            [
                "AppId"
            ],
            [
                "Name"
            ]
        ]
    },
    "DNS": {
        "displayNameV3": "DNS",
        "identifiersV3": [
            "DomainName"
        ],
        "requiredFieldsV3": [
            [
                "DomainName"
            ]
        ]
    },
    "AzureResource": {
        "displayNameV3": "Azure resource",
        "identifiersV3": [
            "ResourceId"
        ],
        "requiredFieldsV3": [
            [
                "ResourceId"
            ]
        ]
    },
    "FileHash": {
        "displayNameV3": "File hash",
        "identifiersV3": [
            "Algorithm",
            "Value"
        ],
        "requiredFieldsV3": [
            [
                "Value"
            ]
        ]
    },
    "RegistryKey": {
        "displayNameV3": "Registry key",
        "identifiersV3": [
            "Hive",
            "Key"
        ],
        "requiredFieldsV3": [
            [
                "Hive"
            ],
            [
                "Key"
            ]
        ]
    },
    "RegistryValue": {
        "displayNameV3": "Registry value",
        "identifiersV3": [
            "Name",
            "Value",
            "ValueType"
        ],
        "requiredFieldsV3": [
            [
                "Name"
            ]
        ]
    },
    "SecurityGroup": {
        "displayNameV3": "Security group",
        "identifiersV3": [
            "DistinguishedName",
            "SID",
            "ObjectGuid"
        ],
        "requiredFieldsV3": [
            [
                "DistinguishedName"
            ],
            [
                "SID"
            ],
            [
                "ObjectGuid"
            ]
        ]
    },
    "URL": {
        "displayNameV3": "URL",
        "identifiersV3": [
            "Url"
        ],
        "requiredFieldsV3": [
            [
                "Url"
            ]
        ]
    },
    "IoTDevice": {
        "displayNameV3": "IoT device",
        "identifiersV3": [
            "DeviceId",
            "DeviceName",
            "Manufacturer",
            "Model",
            "FirmwareVersion",
            "OperatingSystem",
            "MacAddress",
            "Protocols",
            "SerialNumber",
            "Source",
            "IoTSecurityAgentId",
            "DeviceType"
        ],
        "requiredFieldsV3": [
            [
                "DeviceId"
            ]
        ]
    },
    "Mailbox": {
        "displayNameV3": "Mailbox",
        "identifiersV3": [
            "MailboxPrimaryAddress",
            "DisplayName",
            "Upn",
            "ExternalDirectoryObjectId",
            "RiskLevel"
        ],
        "requiredFieldsV3": [
            [
                "MailboxPrimaryAddress"
            ]
        ]
    },
    "MailCluster": {
        "displayNameV3": "Mail cluster",
        "identifiersV3": [
            "NetworkMessageIds",
            "CountByDeliveryStatus",
            "CountByThreatType",
            "CountByProtectionStatus",
            "Threats",
            "Query",
            "QueryTime",
            "MailCount",
            "IsVolumeAnomaly",
            "Source",
            "ClusterSourceIdentifier",
            "ClusterSourceType",
            "ClusterQueryStartTime",
            "ClusterQueryEndTime",
            "ClusterGroup"
        ],
        "requiredFieldsV3": [
            [
                "Query"
            ],
            [
                "Source"
            ]
        ]
    },
    "MailMessage": {
        "displayNameV3": "Mail message",
        "identifiersV3": [
            "Recipient",
            "Urls",
            "Threats",
            "Sender",
            "P1Sender",
            "P1SenderDisplayName",
            "P1SenderDomain",
            "SenderIP",
            "P2Sender",
            "P2SenderDisplayName",
            "P2SenderDomain",
            "ReceivedDate",
            "NetworkMessageId",
            "InternetMessageId",
            "Subject",
            "BodyFingerprintBin1",
            "BodyFingerprintBin2",
            "BodyFingerprintBin3",
            "BodyFingerprintBin4",
            "BodyFingerprintBin5",
            "AntispamDirection",
            "DeliveryAction",
            "DeliveryLocation",
            "Language",
            "ThreatDetectionMethods"
        ],
        "requiredFieldsV3": [
            [
                "NetworkMessageId"
            ],
            [
                "Recipient"
            ]
        ]
    },
    "SubmissionMail": {
        "displayNameV3": "Submission mail",
        "identifiersV3": [
            "NetworkMessageId",
            "Timestamp",
            "Recipient",
            "Sender",
            "SenderIp",
            "Subject",
            "ReportType",
            "SubmissionId",
            "SubmissionDate",
            "Submitter"
        ],
        "requiredFieldsV3": [
            [
                "SubmissionId"
            ],
            [
                "NetworkMessageId"
            ],
            [
                "Recipient"
            ],
            [
                "Submitter"
            ]
        ]
    }
};

function randID() {
    return Math.random().toString(36).substring(2, 8);
}


function generateHTML(data, level = 0) {
    let html = '';
    const imgMap = {
        1: "<img src='icons/connector.svg' class='detail-icon' />",
        2: "<img src='icons/tables.svg' class='detail-icon'/>",
        3: "<img src='icons/adx-columns.svg' class='detail-icon'/>"
    };
    // If level is less than or equal to 3, sort the keys
    // Check if data is an object before getting keys
    if (typeof data === 'object' && data !== null) {
        const keys = level <= 3 ? Object.keys(data).sort() : Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            html += `<details id="${randID()}"><summary>`;
            if (level in imgMap) {
                html += imgMap[level];
            }
            html += `${key}</summary>`;
            if (typeof data[key] === 'string') {
                html += `<div class="content">${data[key]}</div>`;
            } else {
                html += generateHTML(data[key], level + 1);
            }
            html += '</details>';
        }
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
        if (summary.textContent.toLowerCase().includes(searchTerm)) {
            openParentDetails(summary.closest('details'));
            highlightMatches(summary, searchTerm);
        }
        const nestedDetails = summary.parentElement.querySelectorAll("details");
        for (let nestedDetail of nestedDetails) {
            searchNestedSummaries(nestedDetail, searchTerm);
        }
    }
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

    while (parent) {
        if (parent.tagName.toLowerCase() === parentTagName) {
            parents.push(parent);
        }
        parent = parent.parentElement;
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



