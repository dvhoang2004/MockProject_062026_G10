export const mockRooms = [
  {
    id: 1,
    wing: "Wing A",
    room: "101",
    bed: "A",
    roomType: "Private",
    status: "Available",
    occupant: "—",
  },
  {
    id: 2,
    wing: "Wing A",
    room: "106",
    bed: "A",
    roomType: "Semi-private",
    status: "Occupied",
    occupant: "Elena Ramos",
  },
  {
    id: 3,
    wing: "Wing A",
    room: "114",
    bed: "B",
    roomType: "Semi-private",
    status: "Occupied",
    occupant: "Susan Wright",
  },
  {
    id: 4,
    wing: "Wing A",
    room: "118",
    bed: "A",
    roomType: "Semi-private",
    status: "Occupied",
    occupant: "Mary Coleman",
  },
  {
    id: 5,
    wing: "Wing B",
    room: "204",
    bed: "B",
    roomType: "Semi-private",
    status: "Occupied",
    occupant: "Robert Hayes",
  },
  {
    id: 6,
    wing: "Wing B",
    room: "210",
    bed: "B",
    roomType: "Semi-private",
    status: "Occupied",
    occupant: "James Porter",
  },
  {
    id: 7,
    wing: "Wing B",
    room: "215",
    bed: "A",
    roomType: "Private",
    status: "Out of Service",
    occupant: "Plumbing repair",
  },
  {
    id: 8,
    wing: "Wing C",
    room: "222",
    bed: "A",
    roomType: "Semi-private",
    status: "Occupied",
    occupant: "David Nguyen",
  },
];

export const generalInfoMockdata = {
  name: "NHMS Demo Skilled Nursing Facility",
  facilityId: "FAC-0042",
  timezone: "America/Los_Angeles (Pacific)",
  targetState: "California",
  licenseNumber: "CA-SNF-004821",
};

export const roomRatesMockdata = [
  { type: "Private", rate: 220.0 },
  { type: "Semi-private", rate: 185.0 },
  { type: "Ward", rate: 150.0 },
];

export const capabilitiesMockdata = [
  { label: "Wound care / pressure ulcer management", supported: true },
  { label: "IV therapy or complex medication administration", supported: true },
  { label: "Physical / Occupational / Speech therapy", supported: true },
  { label: "Ventilator or respiratory support", supported: true },
  { label: "Dementia or behavioral health management", supported: true },
  { label: "Hospice or palliative care coordination", supported: true },
  { label: "Bariatric care needs", supported: false },
  { label: "Isolation precautions (MRSA, C. diff, etc.)", supported: true },
];

export const stateHolidaysMockdata = [
  {
    id: 1,
    name: "Cesar Chavez Day",
    date: "03/31",
    repeatAnnually: "Yes",
    active: true,
  },
  {
    id: 2,
    name: "Native American Day",
    date: "4th Friday of September",
    repeatAnnually: "Yes",
    active: true,
  },
  {
    id: 3,
    name: "Admission Day",
    date: "09/09",
    repeatAnnually: "Yes",
    active: false,
  },
];

export const federalHolidaysMockdata = [
  { id: 1, name: "New Year's Day", date: "01/01" },
  { id: 2, name: "Martin Luther King Jr. Day", date: "3rd Monday of January" },
  { id: 3, name: "Washington's Birthday", date: "3rd Monday of February" },
  { id: 4, name: "Memorial Day", date: "Last Monday of May" },
  { id: 5, name: "Juneteenth", date: "06/19" },
  { id: 6, name: "Independence Day", date: "07/04" },
  { id: 7, name: "Labor Day", date: "1st Monday of September" },
  { id: 8, name: "Columbus Day", date: "2nd Monday of October" },
  { id: 9, name: "Veterans Day", date: "11/11" },
  { id: 10, name: "Thanksgiving Day", date: "4th Thursday of November" },
  { id: 11, name: "Christmas Day", date: "12/25" },
];
