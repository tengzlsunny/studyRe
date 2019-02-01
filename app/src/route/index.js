import React from 'react';

import Home from '../pages/home/home.js'

import Product from '../pages/product/product.js'

import Active from '../pages/active/active.js'

import Mine from '../pages/mine/mine.js'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/active',
        component: Active
    },
    {
        path: '/mine',
        component: Mine
    }
    
]
export {routes}