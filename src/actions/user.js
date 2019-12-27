import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS
} from './types';

export function setPurchaseDetail(_id) {
  return ({
    type: SET_PURCHASE_DETAIL,
    payload: _id
  })
}

export function fetchCartProducts() {
  return ({
    type: SET_CART_PRODUCTS,
    payload: [
      {
        product: {
          _id: 0,
          title: 'JavaScript in the Browser',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, repellat ex sequi aliquid voluptatem voluptatibus dolores praesentium, nobis obcaecati nemo sint. Illum, provident! Repudiandae tempora, sed est iure cumque quibusdam.',
          price: 1.99,
          belongsTo: [0, 1]
        },
        quantity: 2
      },
      {
        product: {
          _id: 1,
          title: 'Graph Database',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, repellat ex sequi aliquid voluptatem voluptatibus dolores praesentium, nobis obcaecati nemo sint. Illum, provident! Repudiandae tempora, sed est iure cumque quibusdam.',
          price: 1.99,
          belongsTo: [0, 6]
        },
        quantity: 1
      }
    ]
  })
}

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: 'A0048248343',
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Jordan Hudgens',
          shippingAddress: '1234 West State Street'
        }
      }
    ]
  })
}