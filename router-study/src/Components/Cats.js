import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Profile from './Profile'
import WithRouterSample from './WithRouterSample'

const Cats = () => {
    return(
        <div>
            <h3>냥 목록</h3>
            <ul>
                <li>
                    {/* <Link to='/cats/cat1'>루이</Link> */}
                    <NavLink
                        to='/cats/cat1'
                        activeStyle={{background: 'black', color: 'white'}}
                    >루이
                    </NavLink>
                </li>
                <li>
                    {/* <Link to='/cats/cat2'>오드</Link> */}
                    <NavLink
                        to='/cats/cat2'
                        activeStyle={{background: 'black', color: 'white'}}
                    >
                        오드
                    </NavLink>
                </li>
                <li>
                    {/* <Link to='/cats/cat3'>미르</Link> */}
                    <NavLink
                        to='/cats/cat3'
                        activeStyle={{background: 'black', color: 'white'}}
                    >
                        미르
                    </NavLink>
                </li>
            </ul>

            <Route
                path='/cats'
                exact
                render={() => <div>아무놈이나 골라잡으슈</div>}
            />
            <Route path='/cats/:catname' component={Profile} />
            <WithRouterSample />
        </div>
    )
}

export default Cats