const classCheckboxes = document.getElementById('classCheckboxes');
const generateTimetableButton = document.getElementById('generateTimetable');
const timetableContainer = document.getElementById('timetable');

// Your parsed CSV data, replace with actual data
const csvData = [
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "BMO (2)"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "BMO (4)"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "CSA"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "JAD"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "LHO"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "MSC/NMA"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "RPV"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SAM (2)"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SAM (3)"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SGI"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SPA"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "MSC"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCI",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "SPK"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCIE",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "IBU"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCIE",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "RKU"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCIE",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "SPK"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11SCA",
    "timeSlot": "9am-12pm",
    "venue": "S12",
    "teacher": "SCP"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11EAPR",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "LCA"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11HIS",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "EBR/TIV"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11HIS",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "LCD"
  },
  {
    "date": "2023-06-08T12:00:00.000Z",
    "class": "11HISE",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "ADA"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "BAL"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "CTH"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "CWL"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "DHA (3)"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "DHA (6)"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "JDA"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "JHA"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "KBY"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "MJA"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "MOR"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "RBW"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MACS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SSY"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MATE",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "COE"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MATE",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "DND"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MATE",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "MJA"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MATE",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "TVH"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MATH",
    "timeSlot": "9am-12pm",
    "venue": "L1",
    "teacher": "CGO"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MATH",
    "timeSlot": "9am-12pm",
    "venue": "L2",
    "teacher": "CMR"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MATH",
    "timeSlot": "9am-12pm",
    "venue": "L3",
    "teacher": "CWL"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11MATH",
    "timeSlot": "9am-12pm",
    "venue": "L4",
    "teacher": "KYU"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11TME",
    "timeSlot": "1pm-4pm",
    "venue": "D10",
    "teacher": "GST"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11ENGA",
    "timeSlot": "1pm-4pm",
    "venue": "GYM2",
    "teacher": "JCP/SME"
  },
  {
    "date": "2023-07-08T12:00:00.000Z",
    "class": "11ENGA",
    "timeSlot": "1pm-4pm",
    "venue": "L1",
    "teacher": "KJO"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11BUS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "CLA/PST"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11BUS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "LKE"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11BUS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "LKE/MFA"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11BUS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "MFA"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11BUS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SCA (1)"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11BUS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SCA/SDU"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11BUS",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SDU"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11ARP",
    "timeSlot": "1pm-4pm",
    "venue": "B5",
    "teacher": "CJU"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11DTP",
    "timeSlot": "1pm-4pm",
    "venue": "C6",
    "teacher": "LDO"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11DTP",
    "timeSlot": "1pm-4pm",
    "venue": "C7",
    "teacher": "THA"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11DTP",
    "timeSlot": "1pm-4pm",
    "venue": "C8",
    "teacher": "SOB"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11DTP",
    "timeSlot": "1pm-4pm",
    "venue": "C9",
    "teacher": "MST"
  },
  {
    "date": "2023-08-08T12:00:00.000Z",
    "class": "11HOS",
    "timeSlot": "1pm-4pm",
    "venue": "D2",
    "teacher": "CMN/LMA (GROUP 1)"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11GEO",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "ABN"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11GEO",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "ACL/TBE"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11GEOE",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "BCO"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11SST",
    "timeSlot": "9am-12pm",
    "venue": "E4",
    "teacher": "ABN"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11CHI",
    "timeSlot": "9am-12pm",
    "venue": "L1",
    "teacher": "DHU"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11MUC",
    "timeSlot": "9am-12pm",
    "venue": "M3",
    "teacher": "EHA"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11SCBE",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "CSA"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11SCBE",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "SKR"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11SCCE",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "JWE"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11SCPE",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "ANA"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11SCPE",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "BJA"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11SCPE",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "RKI"
  },
  {
    "date": "2023-11-08T11:00:00.000Z",
    "class": "11TME",
    "timeSlot": "1pm-4pm",
    "venue": "D10",
    "teacher": "JPR"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11DRA",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "CRO"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11DRA",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "NBR"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11TPD",
    "timeSlot": "9am-12pm",
    "venue": "D11",
    "teacher": "JPR"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11TPD",
    "timeSlot": "9am-12pm",
    "venue": "D12",
    "teacher": "JRI"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11TPD",
    "timeSlot": "9am-12pm",
    "venue": "D13",
    "teacher": "RBR"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11JPN",
    "timeSlot": "9am-12pm",
    "venue": "L4",
    "teacher": "NLB"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11SPN",
    "timeSlot": "9am-12pm",
    "venue": "L7",
    "teacher": "CBA"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11MUS",
    "timeSlot": "9am-12pm",
    "venue": "M2",
    "teacher": "WRO"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENF",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "MSA/CJU"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENF",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "VPE/AJE"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "ABE"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "ACR (3)"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "ACR (5)"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "CCL"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "CWI/DSM"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "CWI/JCM"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "EBE"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "EBE/JCM"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "JCM"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "JLA"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "KST/AJE"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "LDU"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "GYM2",
    "teacher": "RVI"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENG",
    "timeSlot": "1pm-4pm",
    "venue": "GYM2",
    "teacher": "SRU"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11ENGE",
    "timeSlot": "1pm-4pm",
    "venue": "GYM2",
    "teacher": "CCL"
  },
  {
    "date": "2023-12-08T11:00:00.000Z",
    "class": "11EAPW",
    "timeSlot": "1pm-4pm",
    "venue": "GYM2",
    "teacher": "NLB"
  },
  {
    "date": null,
    "class": "11ECO",
    "timeSlot": "9am-12pm",
    "venue": "L3",
    "teacher": "KEA"
  },
  {
    "date": null,
    "class": "11ECO",
    "timeSlot": "9am-12pm",
    "venue": "L4",
    "teacher": "SCA"
  },
  {
    "date": null,
    "class": "11ECOE",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "LGO"
  },
  {
    "date": null,
    "class": "11TBC",
    "timeSlot": "9am-12pm",
    "venue": "D11",
    "teacher": "DYO/JPR"
  },
  {
    "date": null,
    "class": "11KOR",
    "timeSlot": "9am-12pm",
    "venue": "L1",
    "teacher": "HJE"
  },
  {
    "date": null,
    "class": "11ACC",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "CLA"
  },
  {
    "date": null,
    "class": "11ACC",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "SYO"
  },
  {
    "date": null,
    "class": "11MAO",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "LRU/NMS/PFO"
  },
  {
    "date": null,
    "class": "11FRE",
    "timeSlot": "1pm-4pm",
    "venue": "L1",
    "teacher": "AKE"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "BAL"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "CTH"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "CWL"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "DHA (3)"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "DHA (6)"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "JDA"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "JHA"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "KBY"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "MJA"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "MOR"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "RBW"
  },
  {
    "date": null,
    "class": "MCAT (11MACS)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "SSY"
  },
  {
    "date": null,
    "class": "MCAT (11MATE)",
    "timeSlot": "9am-12pm",
    "venue": "AUD",
    "teacher": "COE"
  },
  {
    "date": null,
    "class": "MCAT (11MATE)",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "DND"
  },
  {
    "date": null,
    "class": "MCAT (11MATE)",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "MJA"
  },
  {
    "date": null,
    "class": "MCAT (11MATE)",
    "timeSlot": "9am-12pm",
    "venue": "GYM2",
    "teacher": "TVH"
  },
  {
    "date": null,
    "class": "11MED",
    "timeSlot": "1pm-4pm",
    "venue": "AUD",
    "teacher": "RVI"
  },
  {
    "date": null,
    "class": "11ARD",
    "timeSlot": "1pm-4pm",
    "venue": "B3",
    "teacher": "AJE"
  },
  {
    "date": null,
    "class": "11TRO",
    "timeSlot": "1pm-4pm",
    "venue": "D6",
    "teacher": "RPT/RTU"
  },
  {
    "date": null,
    "class": "11HOS",
    "timeSlot": "9am-12pm",
    "venue": "D2",
    "teacher": "CMN/LMA (GROUP 2)"
  },
  {
    "date": null,
    "class": "11GER",
    "timeSlot": "9am-12pm",
    "venue": "L1",
    "teacher": "AMA"
  },
  {
    "date": null,
    "class": "11DVC",
    "timeSlot": "1pm-4pm",
    "venue": "D3",
    "teacher": "MDU"
  },
  {
    "date": null,
    "class": "11DVC",
    "timeSlot": "1pm-4pm",
    "venue": "D4",
    "teacher": "MDU/RTU"
  },
  {
    "date": null,
    "class": "11TFO",
    "timeSlot": "1pm-4pm",
    "venue": "D5",
    "teacher": "SMN"
  },
  {
    "date": null,
    "class": "11TAH",
    "timeSlot": "1pm-4pm",
    "venue": "L1",
    "teacher": "JWA"
  }
];

// Dynamically create checkboxes and teacher selects for subjects
const subjects = [...new Set(csvData.map(item => item.class))];
subjects.forEach(subject => {
    const subjectContainer = document.createElement('div');
    subjectContainer.classList.add('subject-container');

    const subjectCheckbox = document.createElement('input');
    subjectCheckbox.type = 'checkbox';
    subjectCheckbox.name = 'class';
    subjectCheckbox.value = subject;
    subjectContainer.appendChild(subjectCheckbox);

    const subjectLabel = document.createElement('label');
    subjectLabel.innerHTML = subject;
    subjectContainer.appendChild(subjectLabel);

    const teacherSelect = document.createElement('select');
    teacherSelect.name = 'teacherSelect'; // Use a different name for each teacher select
    csvData
        .filter(item => item.class === subject)
        .forEach(item => {
            const option = document.createElement('option');
            option.value = item.teacher;
            option.textContent = item.teacher;
            teacherSelect.appendChild(option);
        });
    subjectContainer.appendChild(teacherSelect);

    classCheckboxes.appendChild(subjectContainer);
});

// Function to sort CSV data by date
function sortByDate(data) {
    return data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Generate timetable based on selected subjects and teachers
generateTimetableButton.addEventListener('click', () => {
    const selectedSubjectContainers = Array.from(document.querySelectorAll('.subject-container'));

    const selectedEntries = selectedSubjectContainers
        .filter(container => container.querySelector('input[name="class"]').checked)
        .map(container => {
            const selectedSubject = container.querySelector('input[name="class"]').value;
            const selectedTeacher = container.querySelector('select[name="teacherSelect"]').value;

            return csvData
                .filter(item => item.class === selectedSubject && item.teacher === selectedTeacher)
                .map(({ date, class: selectedSubject, timeSlot, venue, teacher }) => {
                    return {
                        date: new Date(date),
                        subject: selectedSubject,
                        timeSlot,
                        venue,
                        teacher,
                    };
                });
        })
        .flat();

    const sortedEntries = sortByDate(selectedEntries);

    const timetableHTML = sortedEntries
        .map(({ date, subject, timeSlot, venue, teacher }) => {
            return `<tr>
                        <td>${date.toLocaleDateString()}</td>
                        <td>${subject}</td>
                        <td>${timeSlot}</td>
                        <td>${venue}</td>
                        <td>${teacher}</td>
                    </tr>`;
        })
        .join('');

    const timetableTable = `
        <table class="timetable-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Time Slot</th>
                    <th>Venue</th>
                    <th>Teacher</th>
                </tr>
            </thead>
            <tbody>
                ${timetableHTML}
            </tbody>
        </table>
    `;

    timetableContainer.innerHTML = timetableTable;
});