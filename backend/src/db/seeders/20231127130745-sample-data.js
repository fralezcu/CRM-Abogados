const db = require('../models');
const Users = db.users;

const Activities = db.activities;

const Contacts = db.contacts;

const Leads = db.leads;

const Metrics = db.metrics;

const Notes = db.notes;

const Reports = db.reports;

const Resources = db.resources;

const Companies = db.companies;

const ActivitiesData = [
  {
    description: 'Meeting with Acme Corporation',

    start_time: new Date('2023-10-01T15:00:00Z'),

    end_time: new Date('2023-10-01T16:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Call with Global Tech',

    start_time: new Date('2023-10-02T16:00:00Z'),

    end_time: new Date('2023-10-02T17:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Demo for Innovate Solutions',

    start_time: new Date('2023-10-03T17:00:00Z'),

    end_time: new Date('2023-10-03T18:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Review meeting for Tech Dynamics',

    start_time: new Date('2023-10-04T18:00:00Z'),

    end_time: new Date('2023-10-04T19:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Strategy session with Future Enterprises',

    start_time: new Date('2023-10-05T19:00:00Z'),

    end_time: new Date('2023-10-05T20:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'Alice',

    last_name: 'Johnson',

    email: 'alice.johnson@example.com',

    phone: '123-456-7890',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Bob',

    last_name: 'Williams',

    email: 'bob.williams@example.com',

    phone: '234-567-8901',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Carol',

    last_name: 'Davis',

    email: 'carol.davis@example.com',

    phone: '345-678-9012',

    // type code here for "relation_one" field
  },

  {
    first_name: 'David',

    last_name: 'Miller',

    email: 'david.miller@example.com',

    phone: '456-789-0123',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Eve',

    last_name: 'Wilson',

    email: 'eve.wilson@example.com',

    phone: '567-890-1234',

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Acme Corporation',

    status: 'New',

    category: 'New',

    // type code here for "relation_one" field
  },

  {
    name: 'Global Tech',

    status: 'Contacted',

    category: 'Qualified',

    // type code here for "relation_one" field
  },

  {
    name: 'Innovate Solutions',

    status: 'Qualified',

    category: 'Lost',

    // type code here for "relation_one" field
  },

  {
    name: 'Tech Dynamics',

    status: 'Lost',

    category: 'Lost',

    // type code here for "relation_one" field
  },

  {
    name: 'Future Enterprises',

    status: 'New',

    category: 'Qualified',

    // type code here for "relation_one" field
  },
];

const MetricsData = [
  {
    name: 'Lead Conversion Rate',

    value: 0.25,

    recorded_at: new Date('2023-10-01T10:00:00Z'),
  },

  {
    name: 'Customer Satisfaction',

    value: 4.5,

    recorded_at: new Date('2023-10-02T11:00:00Z'),
  },

  {
    name: 'Average Response Time',

    value: 2.3,

    recorded_at: new Date('2023-10-03T12:00:00Z'),
  },

  {
    name: 'Sales Growth',

    value: 0.15,

    recorded_at: new Date('2023-10-04T13:00:00Z'),
  },

  {
    name: 'Churn Rate',

    value: 0.05,

    recorded_at: new Date('2023-10-05T14:00:00Z'),
  },
];

const NotesData = [
  {
    content: 'Initial contact made with Acme Corporation.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Follow-up call scheduled with Global Tech.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Qualified Innovate Solutions as a potential client.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Lost lead with Tech Dynamics.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Initial meeting scheduled with Future Enterprises.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ReportsData = [
  {
    title: 'Monthly Sales Report',

    description: 'Summary of sales activities for the month.',

    generated_at: new Date('2023-10-01T10:00:00Z'),

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    title: 'Quarterly Lead Report',

    description: 'Analysis of lead generation and conversion.',

    generated_at: new Date('2023-10-02T11:00:00Z'),

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    title: 'Annual Performance Report',

    description: 'Comprehensive review of yearly performance metrics.',

    generated_at: new Date('2023-10-03T12:00:00Z'),

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    title: 'Customer Feedback Report',

    description: 'Compilation of customer feedback and satisfaction scores.',

    generated_at: new Date('2023-10-04T13:00:00Z'),

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    title: 'Marketing Campaign Report',

    description: 'Evaluation of recent marketing campaigns and their impact.',

    generated_at: new Date('2023-10-05T14:00:00Z'),

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },
];

const ResourcesData = [
  {
    title: 'Legal Industry Trends 2023',

    content: 'An in-depth analysis of the latest trends in the legal industry.',

    published_at: new Date('2023-10-01T10:00:00Z'),
  },

  {
    title: 'Effective Client Communication',

    content:
      'Best practices for communicating with clients in the legal field.',

    published_at: new Date('2023-10-02T11:00:00Z'),
  },

  {
    title: 'Lead Generation Strategies',

    content: 'Proven strategies for generating leads in the legal industry.',

    published_at: new Date('2023-10-03T12:00:00Z'),
  },

  {
    title: 'Customer Service Excellence',

    content: 'How to provide exceptional customer service in a law firm.',

    published_at: new Date('2023-10-04T13:00:00Z'),
  },

  {
    title: 'Marketing for Law Firms',

    content: 'Effective marketing techniques tailored for law firms.',

    published_at: new Date('2023-10-05T14:00:00Z'),
  },
];

const CompaniesData = [
  {
    companyName: 'Ernest Rutherford',

    ruc: 'Noam Chomsky',

    razonSocial: 'Ernst Haeckel',

    // type code here for "relation_many" field

    address: 'Charles Lyell',

    phones: 'Murray Gell-Mann',
  },

  {
    companyName: 'Charles Lyell',

    ruc: 'Johannes Kepler',

    razonSocial: 'Nicolaus Copernicus',

    // type code here for "relation_many" field

    address: 'Werner Heisenberg',

    phones: 'Max Planck',
  },

  {
    companyName: 'Alexander Fleming',

    ruc: 'Euclid',

    razonSocial: 'Justus Liebig',

    // type code here for "relation_many" field

    address: 'John Dalton',

    phones: 'Max Planck',
  },

  {
    companyName: 'William Bayliss',

    ruc: 'Tycho Brahe',

    razonSocial: 'James Watson',

    // type code here for "relation_many" field

    address: 'August Kekule',

    phones: 'Emil Kraepelin',
  },

  {
    companyName: 'Charles Sherrington',

    ruc: 'Albert Einstein',

    razonSocial: 'George Gaylord Simpson',

    // type code here for "relation_many" field

    address: 'J. Robert Oppenheimer',

    phones: 'Leonard Euler',
  },
];

// Similar logic for "relation_many"

async function associateActivityWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setUser) {
    await Activity0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setUser) {
    await Activity1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setUser) {
    await Activity2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setUser) {
    await Activity3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setUser) {
    await Activity4.setUser(relatedUser4);
  }
}

async function associateActivityWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setLead) {
    await Activity0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setLead) {
    await Activity1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setLead) {
    await Activity2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setLead) {
    await Activity3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setLead) {
    await Activity4.setLead(relatedLead4);
  }
}

async function associateContactWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setLead) {
    await Contact0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setLead) {
    await Contact1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setLead) {
    await Contact2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setLead) {
    await Contact3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact4 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Contact4?.setLead) {
    await Contact4.setLead(relatedLead4);
  }
}

async function associateLeadWithOwner() {
  const relatedOwner0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOwner) {
    await Lead0.setOwner(relatedOwner0);
  }

  const relatedOwner1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOwner) {
    await Lead1.setOwner(relatedOwner1);
  }

  const relatedOwner2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOwner) {
    await Lead2.setOwner(relatedOwner2);
  }

  const relatedOwner3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setOwner) {
    await Lead3.setOwner(relatedOwner3);
  }

  const relatedOwner4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead4 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Lead4?.setOwner) {
    await Lead4.setOwner(relatedOwner4);
  }
}

async function associateNoteWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setUser) {
    await Note0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setUser) {
    await Note1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setUser) {
    await Note2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setUser) {
    await Note3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setUser) {
    await Note4.setUser(relatedUser4);
  }
}

async function associateNoteWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setLead) {
    await Note0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setLead) {
    await Note1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setLead) {
    await Note2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setLead) {
    await Note3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setLead) {
    await Note4.setLead(relatedLead4);
  }
}

// Similar logic for "relation_many"

// Similar logic for "relation_many"

// Similar logic for "relation_many"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activities.bulkCreate(ActivitiesData);

    await Contacts.bulkCreate(ContactsData);

    await Leads.bulkCreate(LeadsData);

    await Metrics.bulkCreate(MetricsData);

    await Notes.bulkCreate(NotesData);

    await Reports.bulkCreate(ReportsData);

    await Resources.bulkCreate(ResourcesData);

    await Companies.bulkCreate(CompaniesData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateActivityWithUser(),

      await associateActivityWithLead(),

      await associateContactWithLead(),

      await associateLeadWithOwner(),

      await associateNoteWithUser(),

      await associateNoteWithLead(),

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('metrics', null, {});

    await queryInterface.bulkDelete('notes', null, {});

    await queryInterface.bulkDelete('reports', null, {});

    await queryInterface.bulkDelete('resources', null, {});

    await queryInterface.bulkDelete('companies', null, {});
  },
};
