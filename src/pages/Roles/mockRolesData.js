const mockRoles = [
  {
    id: "admission",
    name: "Admission Staff",
    type: "Internal",
    description:
      "Manages resident intake: pre-admission screening, admission forms, and profile creation. Full access to M1 registration.",
  },
  {
    id: "nurse",
    name: "Nurse (RN/LPN)",
    type: "Internal",
    description:
      "Performs clinical assessments, drafts and manages care plans, records bedside vitals. Cannot approve care plans (DON).",
  },
  {
    id: "cna",
    name: "CNA",
    type: "Internal",
    description:
      "Executes daily assigned tasks and records bedside vitals for assigned residents. Mobile-first view.",
  },
  {
    id: "don",
    name: "DON (Director of Nursing)",
    type: "Internal",
    description:
      "Reviews/approves care plans, oversees incidents with SLA tracking, monitors staffing ratio + census/billing snapshot.",
  },
  {
    id: "admin",
    name: "System Admin",
    type: "Internal",
    description:
      "Configures facility settings, rates, staffing thresholds, user accounts, and equipment inventory. No clinical access.",
  },
  {
    id: "physician",
    name: "Physician",
    type: "External",
    description:
      "Limited-access external signer. Reviews care plans for residents under their care; e-signs M2-US-10 only.",
  },
  {
    id: "dietary",
    name: "Dietary",
    type: "External",
    description:
      "Limited-access external signer. Reviews nutrition-related care plan sections; e-signs M2-US-10 only.",
  },
];

const matrixRoles = [
  "Admission",
  "Nurse (RN/LPN)",
  "CNA",
  "DON",
  "System Admin",
];

const matrixScreens = [
  {
    id: "AD-01...16",
    name: "Admin Config",
    access: { "System Admin": { level: "full" } },
  },
  {
    id: "M1-US-01",
    name: "Resident List",
    access: {
      Admission: { level: "full" },
      "Nurse (RN/LPN)": { level: "view" },
      CNA: { level: "view" },
      DON: { level: "view" },
    },
  },
  {
    id: "M1-US-02",
    name: "Profile Detail",
    access: {
      Admission: { level: "full" },
      "Nurse (RN/LPN)": { level: "view" },
      CNA: { level: "view" },
      DON: { level: "view" },
    },
  },
  {
    id: "M1-US-06",
    name: "Initial Assessment",
    access: {
      "Nurse (RN/LPN)": { level: "full" },
      DON: { level: "view" },
    },
  },
  {
    id: "M2-US-01",
    name: "Care Plan List",
    access: {
      "Nurse (RN/LPN)": { level: "full" },
      DON: { level: "full" },
    },
  },
  {
    id: "M2-US-04",
    name: "DON Review (Approve/Reject)",
    access: {
      "Nurse (RN/LPN)": { level: "view" },
      DON: { level: "full" },
    },
  },
  {
    id: "M2-US-06",
    name: "Bedside Vitals",
    access: {
      "Nurse (RN/LPN)": { level: "full" },
      CNA: { level: "full" },
      DON: { level: "view" },
    },
  },
  {
    id: "M7-US-01",
    name: "Report Incident",
    access: {
      "Nurse (RN/LPN)": { level: "full" },
      CNA: { level: "full" },
      DON: { level: "full" },
    },
  },
  {
    id: "M7-US-04",
    name: "Incident List",
    access: {
      "Nurse (RN/LPN)": { level: "view" },
      DON: { level: "full" },
    },
  },
  {
    id: "M2-US-10",
    name: "IDT Acknowledgment",
    access: {
      "Nurse (RN/LPN)": { level: "view" },
      DON: { level: "view" },
    },
  },
];

export { mockRoles, matrixRoles, matrixScreens };
