import * as icon from '@mdi/js';
import { MenuAsideItem } from './interfaces';

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: icon.mdiViewDashboardOutline,
    label: 'Dashboard',
  },

  {
    href: '/users/users-list',
    label: 'Users',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiAccountGroup ? icon.mdiAccountGroup : icon.mdiTable,
    permissions: 'READ_USERS',
  },
  {
    href: '/activities/activities-list',
    label: 'Activities',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiCalendar ? icon.mdiCalendar : icon.mdiTable,
    permissions: 'READ_ACTIVITIES',
  },
  {
    href: '/contacts/contacts-list',
    label: 'Contacts',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiContactMail ? icon.mdiContactMail : icon.mdiTable,
    permissions: 'READ_CONTACTS',
  },
  {
    href: '/leads/leads-list',
    label: 'Leads',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiAccount ? icon.mdiAccount : icon.mdiTable,
    permissions: 'READ_LEADS',
  },
  {
    href: '/metrics/metrics-list',
    label: 'Metrics',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiChartLine ? icon.mdiChartLine : icon.mdiTable,
    permissions: 'READ_METRICS',
  },
  {
    href: '/notes/notes-list',
    label: 'Notes',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiNote ? icon.mdiNote : icon.mdiTable,
    permissions: 'READ_NOTES',
  },
  {
    href: '/reports/reports-list',
    label: 'Reports',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiFileDocument ? icon.mdiFileDocument : icon.mdiTable,
    permissions: 'READ_REPORTS',
  },
  {
    href: '/resources/resources-list',
    label: 'Resources',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiBookOpenPageVariant
      ? icon.mdiBookOpenPageVariant
      : icon.mdiTable,
    permissions: 'READ_RESOURCES',
  },
  {
    href: '/companies/companies-list',
    label: 'Companies',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiTable ? icon.mdiTable : icon.mdiTable,
    permissions: 'READ_COMPANIES',
  },
  {
    href: '/roles/roles-list',
    label: 'Roles',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiShieldAccountVariantOutline
      ? icon.mdiShieldAccountVariantOutline
      : icon.mdiTable,
    permissions: 'READ_ROLES',
  },
  {
    href: '/permissions/permissions-list',
    label: 'Permissions',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiShieldAccountOutline
      ? icon.mdiShieldAccountOutline
      : icon.mdiTable,
    permissions: 'READ_PERMISSIONS',
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: icon.mdiAccountCircle,
  },
  {
    href: '/api-docs',
    target: '_blank',
    label: 'Swagger API',
    icon: icon.mdiFileCode,
    permissions: 'READ_API_DOCS',
  },
];

export default menuAside;
