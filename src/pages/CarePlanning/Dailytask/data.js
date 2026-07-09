const dailyTasks = {
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

export default dailyTasks;

 
// data.js

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
    message2:
      "Saving will alert Anna Lee, RN and flags this record.",
  },
};