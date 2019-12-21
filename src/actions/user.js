import {
  SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: 'A0048248343',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Jordan Hudgens',
          shippingAddress: '1234 West State Street'
        }
      },
      {
        _id: 1,
        total: 1.30,
        orderNumber: 'a54sdf54wef',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Parker Stone',
          shippingAddress: '4321 West State Street'
        }
      },
      {
        _id: 2,
        total: 88.02,
        orderNumber: 'b0048248343',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Jordan Hudgens',
          shippingAddress: '1234 West State Street'
        }
      },
      {
        _id: 3,
        total: 8.02,
        orderNumber: 'A0048248343',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Jordan Hudgens',
          shippingAddress: '1234 West State Street'
        }
      },
      {
        _id: 4,
        total: 8.02,
        orderNumber: 'A0048248343',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Jordan Hudgens',
          shippingAddress: '1234 West State Street'
        }
      },
      {
        _id: 5,
        total: 8.02,
        orderNumber: 'A0048248343',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Jordan Hudgens',
          shippingAddress: '1234 West State Street'
        }
      },
      {
        _id: 6,
        total: 8.02,
        orderNumber: 'A0048248343',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Jordan Hudgens',
          shippingAddress: '1234 West State Street'
        }
      },
      {
        _id: 7,
        total: 8.02,
        orderNumber: 'A0048248343',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Jordan Hudgens',
          shippingAddress: '1234 West State Street'
        }
      }
    ]
  })
}