/**
 * Express router paths go here.
 */

export default {
  Base: '/',
  Factures: {
    Base: '/factures',
    Get: '/',
    GetOne: '/:numeroFacture',
    Add: '/',
    Update: '/',
  },
  Services: {
    Base: '/services',
    Get: '/:nomService',
  },
  Stats: {
    Base: '/stats',
    Moyenne: '/:moyenne',
  },
} as const;
