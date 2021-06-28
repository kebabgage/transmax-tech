import { RouteItem } from "./components/delayedRouteBox/RouteItem";
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'


test('Test that status prop is not displayed', () => {
    const props = { 
        status: 'yellow'
    }

    render(<RouteItem info={props} />)

    expect(screen.queryByText(props.status)).toBeNull()
})

test('Test that name prop is displayed and correct', () => {
    const props = { 
        name: 'Eastern Fwy',
    }

    render(<RouteItem info={props} />)

    expect(screen.queryByText(props.name)).toBeInTheDocument()
})

test('Test that distance value is displayed and correct', () => {
    const props = {
        distanceValue: '15'
    }

    render(<RouteItem info={props} />)

    expect(screen.queryByText(props.distanceValue)).toBeInTheDocument()
})

test('Test that distance unit is displayed and correct', () => {
    const props = {
        distanceUnit: 'km',
    }

    render(<RouteItem info={props} />)

    expect(screen.queryByText(props.distanceUnit)).toBeInTheDocument()
})

test('Test that from value is displayed and correct', () => {
    const props = {
        from: 'Hoddle St',
    }

    render(<RouteItem info={props} />)

    expect(screen.queryByText(props.from)).toBeInTheDocument()
})

test('Test that to value is displayed and correct', () => {
    const props = {
        to: 'Springvale Rd',
    }

    render(<RouteItem info={props} />)

    expect(screen.queryByText(props.to)).toBeInTheDocument()
})

test('Test that delayTime value is displayed and correct', () => {
    const props = {
        delayTime: '25',
    }

    render(<RouteItem info={props} />)

    expect(screen.queryByText(props.delayTime)).toBeInTheDocument()
})

test('Test that delayTime value is displayed and correct', () => {
    const props = {
        delayUnit: 'min'
    }

    render(<RouteItem info={props} />)

    expect(screen.queryByText(props.delayUnit)).toBeInTheDocument()
})


test('When an empty object is passed, regularly used words arent hardcoded ', 
    () => {
        const vvar = 
        {
            // status: 'yellow', 
            // name: 'Eastern Fwy',
            // distanceValue: '15',
            // distanceUnit: 'km',
            // from: 'Hoddle St',
            // to: 'Springvale Rd',
            // delayTime: '25',
            // delayUnit: 'min'
        }
        
        render(<RouteItem info={vvar} />)

        expect(screen.queryByText(' Fwy')).toBeNull()
        expect(screen.queryByText(' km')).toBeNull()
        expect(screen.queryByText(' Rd')).toBeNull()
        expect(screen.queryByText(' St')).toBeNull()
        expect(screen.queryByText(' min')).toBeNull()




    })