export const minimumRequirement = {
  targetState: "California",
  minHours: 3.5,
  regulationRef: "BR-01 (CA)",
};

export const shifts = [
  {
    id: 1,
    label: "Day (07:00–15:00)",
    cnaHours: 1.5,
    nurseHours: 0.9,
    subtotal: 2.4,
  },
  {
    id: 2,
    label: "Evening (15:00–23:00)",
    cnaHours: 0.7,
    nurseHours: 0.5,
    subtotal: 1.2,
  },
  {
    id: 3,
    label: "Night (23:00–07:00)",
    cnaHours: 0.5,
    nurseHours: 0.3,
    subtotal: 0.8,
  },
];

export const complianceData = {
  census: 42,
  scheduledHours: 184.8,
  actualRatio: 4.4,
  minimumRatio: 3.5,
  isCompliant: true,
  usedBy: [
    "DON Dashboard staffing-ratio alert (BR-01)",
    "M2 Daily Task List capacity check",
  ],
};
