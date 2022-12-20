import React from 'react'
import { Outlet } from 'react-router-dom'

import {Nav} from '../nav'
import "./index.css"
export function MainLayout() {
    return(
        <React.Fragment>
            <header><Nav /></header>
            <main><Outlet /></main>
        </React.Fragment>
    )
}