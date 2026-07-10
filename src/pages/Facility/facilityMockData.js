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
