// data.js

export const dailyTasks = {
  date: "Thursday, 2026-07-02",
  shift: "Day shift",

  summary: {
    completed: 8,
    total: 14,
  },

  residents: [
    {
      id: 1,
      name: "Robert Hayes",
      room: "204B",
      status: "Active",

      tasks: [
        {
          id: 1,
          title: "Ambulation assist (AM)",
          due: "08:00",
          status: "Done",
          overdue: false,
        },
        {
          id: 2,
          title: "Reposition + skin check",
          due: "10:00",
          status: "Done",
          overdue: false,
        },
        {
          id: 3,
          title: "Vitals check",
          due: "14:00",
          status: "Refused",
          overdue: true,
        },
      ],
    },
    {
      id: 2,
      name: "Elena Ramos",
      room: "106A",
      status: "Draft",
      tasks: [],
    },
    {
      id: 3,
      name: "David Nguyen",
      room: "222A",
      status: "Active",
      tasks: [
        {
          id: 1,
          title: "Assist with meal",
          due: "12:00",
          status: "Done",
          overdue: false,
        },
        {
          id: 2,
          title: "Fluid intake monitoring",
          due: "15:00",
          status: "Refused",
          overdue: false,
        },
      ],
    },
  ],
};

export const recordVitalsData = {
  patient: {
    name: "Robert Hayes",
    room: "Room 204B",
    task: "Vitals check",
    due: "14:00",
  },

  recorder: {
    name: "Marcus Rivera, CNA",
    captured: "Captured automatically",
    timestamp: "2026-07-02 14:05",
    linkedTask: "Vitals check",
  },

  vitals: {
    systolic: 128,
    diastolic: 82,
    heartRate: 76,
    spo2: 88,
    temperature: 98.9,
    notes: "Resident resting; recheck SpO2 in 15 min per nurse.",
  },

  abnormal: {
    count: 1,
    title: "1 abnormal reading",
    message1: "SpO2 88% is below 92% threshold.",
    message2: "Saving will alert Anna Lee, RN and flags this record.",
  },
};

export const reassessmentData = [
  {
    id: 1,
    name: "Robert Hayes · 204B",
    trigger: "90-day cycle",
    dueDate: "2026-06-28",
    overdue: "4 days",
    status: "Review Due",
    statusClass: "review",
    action: "Start",
  },
  {
    id: 2,
    name: "James Porter · 210B",
    trigger: "90-day cycle",
    dueDate: "2026-07-03",
    overdue: "2 days",
    status: "Review Due",
    statusClass: "review",
    action: "Start",
  },
  {
    id: 3,
    name: "Susan Wright · 114B",
    trigger: "Significant Change (SCS)",
    dueDate: "—",
    overdue: "—",
    status: "Needs Update",
    statusClass: "update",
    action: "Start",
  },
  {
    id: 4,
    name: "Mary Coleman · 118A",
    trigger: "90-day cycle",
    dueDate: "2026-07-20",
    overdue: "—",
    status: "Active",
    statusClass: "active",
    action: "View",
  },
];
export const careCostData = {
  patient: {
    name: "Robert Hayes",
    room: "Room 204B",
    planId: "CP-1042",
    subtotal: "$865.00",
  },

  badges: {
    loc: "LOC Tier 3 - High",
    status: "Care Plan: Active",
  },

  summaryCards: [
    {
      id: 1,
      icon: "$",
      color: "blue",
      label: "Estimated daily cost",
      value: "$865.00",
    },
    {
      id: 2,
      icon: "✔",
      color: "green",
      label: "Coverage",
      value: "Medicare Part A",
    },
    {
      id: 3,
      icon: "⚠",
      color: "orange",
      label: "Coverage Remaining",
      value: "18 days",
      note: "Review recommended",
    },
  ],

  breakdown: [
    {
      id: 1,
      name: "Skilled Nursing",
      code: "AD-06",
      source: "LOC pricing",
      type: "ad06",
      rate: "$420.00",
    },
    {
      id: 2,
      name: "Rehabilitation Therapy",
      code: "AD-05",
      source: "Therapy schedule",
      type: "ad05",
      rate: "$180.00",
    },
    {
      id: 3,
      name: "Medication Management",
      code: "eMAR",
      source: "Medication administration",
      type: "emar",
      rate: "$95.00",
    },
    {
      id: 4,
      name: "Meals & Nutrition",
      code: "AD-06",
      source: "Dietary services",
      type: "ad06",
      rate: "$70.00",
    },
    {
      id: 5,
      name: "Personal Care Assistance",
      code: "AD-06",
      source: "Daily care plan",
      type: "ad06",
      rate: "$100.00",
    },
  ],

  medicare: {
    day: 82,
    maxDay: 100,
    alertDay: 90,
  },
};
// data.js

export const acknowledgmentData = {
  patient: {
    name: "Robert Hayes",
    room: "204B",
    submitDate: "2026-07-02",
    reviewStatus: "Pending Review",
  },

  role: {
    title: "Physician (Attending)",
    name: "Dr. Alan Cho, MD",
    license: "CA-MD-88231",
    npi: "1720493857",
  },

  acknowledgment: {
    dietaryStatus: "Dietary",
    signedBy: "Grace Liu, RD",
    signedStatus: "Signed",
    signedTime: "2026-07-02 15:30",
  },

  sections: [
    {
      id: 1,
      title: "Mobility",
      status: "On Track",
      statusClass: "on-track",
      goal: "Goal: Ambulate 50 ft with walker x2/day.",
      tasks: ["Assist ambulation w/ walker, 2x daily."],
    },
    {
      id: 2,
      title: "Skin Integrity",
      status: "At Risk",
      statusClass: "at-risk",
      goal: "Goal: Maintain skin integrity (no stage-2 injury).",
      tasks: ["Reposition q2h; skin check each shift."],
    },
    {
      id: 3,
      title: "Nutrition",
      status: "On Track",
      statusClass: "on-track",
      goal: "Goal: Maintain fluid intake ≥ 1500 mL/day.",
      tasks: ["Monitor fluid intake; document I/O."],
    },
  ],
};
// data.js

export const incidentData = {
  patient: {
    name: "Robert Hayes",
    room: "204B",
  },

  reporter: {
    name: "Anna Lee, RN",
    captured: "Captured automatically",
    timestamp: "2026-07-03 09:22",
  },

  form: {
    resident: "Robert Hayes · Room 204B",
    incidentType: "Fall",
    severity: "Major",
    incidentDate: "2026-07-03 09:15",
    location: "Room 204B — bathroom",
    description:
      "Resident found on bathroom floor near the toilet; c/o right hip pain. No loss of consciousness observed.",
    witnesses: "Marcus Rivera, CNA (present at time of fall)",
    actionTaken:
      "Assisted resident to bed, vitals taken, physician notified per facility protocol.",
  },

  workflow: [
    "Chart auto-locks (BR-07)",
    "DON is notified",
    "SLA countdown starts (24–48h, NFR-06)",
    "Incident enters review queue",
  ],

  warning:
    "Submitting will lock this resident's chart until DON review (LC-06).",
};
// data.js

export const chartLockData = {
  patient: {
    name: "Robert Hayes",
  },

  incident: {
    reference: "#INC-2044",
    date: "2026-07-03",
    time: "09:22",
    rule: "BR-07",
    lockRule: "LC-06",
  },

  message: {
    title: "Chart Locked",
    description:
      "Robert Hayes's chart was automatically locked at 2026-07-03 09:22 (BR-07).",
    detail:
      "M1, M2 and M3 records for this resident are now read-only until a DON unlocks the chart (LC-06).",
  },

  buttons: {
    back: "Back to Resident Profile",
    view: "View Incident",
  },
};
// data.js

export const incidentDetailData = {
  incident: {
    id: "#INC-2044",
    resident: "Robert Hayes",
    room: "Room 204B",
    status: "Open",
    severity: "Major",
    reporter: "Anna Lee, RN",
    incidentDate: "2026-07-03 09:15",
  },

  reportDetails: {
    location: "Room 204B — bathroom",

    description:
      "Resident found on bathroom floor near the toilet; c/o right hip pain.",

    witnesses: "Marcus Rivera, CNA (present at time of fall)",

    immediateAction:
      "Assisted resident to bed, vitals taken, physician notified.",
  },

  attachments: [
    {
      id: 1,
      name: "incident_form_signed.pdf",
      type: "pdf",
    },
    {
      id: 2,
      name: "photo_bruise.jpg",
      type: "image",
    },
  ],

  timeline: [
    {
      id: 1,
      title: "Chart auto-locked (BR-07)",
      user: "System",
      time: "2026-07-03 09:22",
      active: true,
    },
    {
      id: 2,
      title: "DON notified · SLA countdown started",
      user: "System",
      time: "2026-07-03 09:20",
      active: false,
    },
    {
      id: 3,
      title: "Incident reported",
      user: "Anna Lee, RN",
      time: "2026-07-03 09:15",
      active: false,
    },
  ],

  sla: {
    title: "SLA — Regulatory Reporting",
    remaining: "14h remaining",
    reportBy: "2026-07-04 09:15",
    note: "NFR-06 · 24–48h regulatory window",
  },

  chartStatus: {
    status: "Locked",
    since: "Since 09:22",
  },

  donActions: [
    {
      id: 1,
      label: "Add Progress Note",
      type: "secondary",
    },
    {
      id: 2,
      label: "Submit External Report",
      type: "secondary",
    },
    {
      id: 3,
      label: "Unlock Chart",
      type: "danger",
    },
    {
      id: 4,
      label: "Mark Resolved",
      type: "disabled",
    },
  ],
};
export const incidentListData = {
  summary: {
    total: 12,
    open: 3,
  },

  filters: {
    status: "All",
    severity: "All",
  },

  cards: [
    {
      id: 1,
      title: "Open",
      value: 3,
      icon: "⏰",
      color: "yellow",
    },
    {
      id: 2,
      title: "Overdue (SLA)",
      value: 1,
      icon: "🕒",
      color: "red",
    },
    {
      id: 3,
      title: "Chart Locked",
      value: 2,
      icon: "📚",
      color: "pink",
    },
    {
      id: 4,
      title: "Resolved (month)",
      value: 9,
      icon: "✅",
      color: "green",
    },
  ],

  incidents: [
    {
      id: 1,
      resident: "Susan Wright",
      room: "114B",
      type: "Elopement Risk",
      severity: "Critical",
      severityClass: "critical",
      reported: "2026-07-02 22:10",
      sla: "OVERDUE",
      slaClass: "overdue",
      status: "Open",
      statusClass: "open",
      chart: "Locked",
      chartClass: "locked",
    },

    {
      id: 2,
      resident: "Robert Hayes",
      room: "204B",
      type: "Fall",
      severity: "Major",
      severityClass: "major",
      reported: "2026-07-03 09:15",
      sla: "14h left",
      slaClass: "warning",
      status: "Open",
      statusClass: "open",
      chart: "Locked",
      chartClass: "locked",
    },

    {
      id: 3,
      resident: "Mary Coleman",
      room: "118A",
      type: "Skin Injury",
      severity: "Moderate",
      severityClass: "moderate",
      reported: "2026-07-02 08:00",
      sla: "36h left",
      slaClass: "good",
      status: "Open",
      statusClass: "open",
      chart: "Unlocked",
      chartClass: "unlocked",
    },

    {
      id: 4,
      resident: "James Porter",
      room: "210B",
      type: "Behavioral",
      severity: "Minor",
      severityClass: "minor",
      reported: "2026-06-30 14:20",
      sla: "—",
      slaClass: "",
      status: "Submitted",
      statusClass: "submitted",
      chart: "Unlocked",
      chartClass: "unlocked",
    },

    {
      id: 5,
      resident: "David Nguyen",
      room: "222A",
      type: "Medication Error",
      severity: "Major",
      severityClass: "major",
      reported: "2026-06-28 11:05",
      sla: "—",
      slaClass: "",
      status: "Resolved",
      statusClass: "resolved",
      chart: "Unlocked",
      chartClass: "unlocked",
    },
  ],
};
