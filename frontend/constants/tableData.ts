import { DataType } from './types';

export const allUserData: DataType[] = [
    {
      userId: "user1",
      profile: "https://randomuser.me/api/portraits/men/72.jpg",
      firstname: "Kristen",
      lastname: "Dominguez",
      address: "5201 Tonya Garden Apt. 898, Lake Joseph, CA 36068",
      service: { serviceName: "Permits", key: "service1" },
      date: "12 January 2024",
      key: "user1-service1",
    },
    {
      userId: "user1",
      profile: "https://randomuser.me/api/portraits/men/72.jpg",
      firstname: "Kristen",
      lastname: "Dominguez",
      address: "5201 Tonya Garden Apt. 898, Lake Joseph, CA 36068",
      service: { serviceName: "Affordable Housing", key: "service2" },
      date: "22 January 2024",
      key: "user1-service2",
    },
    {
      userId: "user2",
      profile: "https://randomuser.me/api/portraits/women/68.jpg",
      firstname: "Laura",
      lastname: "Smith",
      address: "1234 Maple Street, Springville, IL 62704",
      service: { serviceName: "Permits", key: "service3" },
      date: "25 January 2024",
      key: "user2-service3",
    },
    {
      userId: "user3",
      profile: "https://randomuser.me/api/portraits/men/34.jpg",
      firstname: "Brian",
      lastname: "Johnson",
      address: "7896 Oak Street, Riverside, CA 92501",
      service: { serviceName: "Archived Applications", key: "service4" },
      date: "18 January 2024",
      key: "user3-service4",
    },
    {
      userId: "user4",
      profile: "https://randomuser.me/api/portraits/women/45.jpg",
      firstname: "Emily",
      lastname: "Rodriguez",
      address: "4567 Pine Street, Boulder, CO 80301",
      service: { serviceName: "All Applications", key: "service5" },
      date: "20 January 2024",
      key: "user4-service5",
    },
    {
      userId: "user5",
      profile: "https://randomuser.me/api/portraits/men/56.jpg",
      firstname: "Alex",
      lastname: "Green",
      address: "9123 Elm Street, Newtown, PA 18940",
      service: { serviceName: "Affordable Housing", key: "service6" },
      date: "29 January 2024",
      key: "user5-service6",
    },
  ];


  export const affordableHousingColumnsData = [
    {
      key: '1',
      projectName: '15th Avenue Cooperative',
      address: '444 W 15th Ave',
      contact: '760-745-1500',
      emailOrWebsite: '15avecooperative@chworks.net',
      numberOfUnits: '16',
      numberOfBedrooms: '1, 2, 3, 4',
      ami: 'N/A',
    },
  ];

export const permitsColumnsData = [
  {
    key: '1',
    permitType: 'Accessory Dwelling Unit (ADU)',
    turnaroundTime: '193'
  }
]


export const transportationColumnsData = [
  {
    key: '1',
    name: 'Glendale Line A',
    route: 'Central to Brand',
    stops: 10,
    startStop: 'Central Ave',
    endStop: 'Brand Blvd',
    timelines: '6am - 10pm',
    deposit: '$2.00',
  },
  {
    key: '2',
    name: 'Glendale Line B',
    route: 'Pacific to Colorado',
    stops: 8,
    startStop: 'Pacific Ave',
    endStop: 'Colorado St',
    timelines: '5am - 11pm',
    deposit: '$2.50',
  },
  {
    key: '3',
    name: 'Glendale Shuttle',
    route: 'Downtown Loop',
    stops: 5,
    startStop: 'Glendale Station',
    endStop: 'Americana at Brand',
    timelines: '7am - 7pm',
    deposit: 'Free',
  },
  {
    key: '4',
    name: 'Glendale Express',
    route: 'North to South',
    stops: 12,
    startStop: 'Montrose',
    endStop: 'South Glendale',
    timelines: '6am - 8pm',
    deposit: '$3.00',
  },
  {
    key: '5',
    name: 'Glendale Line C',
    route: 'East to West',
    stops: 15,
    startStop: 'East Glendale',
    endStop: 'West Glendale',
    timelines: '5:30am - 9:30pm',
    deposit: '$2.00',
  },
];
