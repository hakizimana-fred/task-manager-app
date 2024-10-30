import React from 'react';
import { render, cleanup,  } from '@testing-library/react';
import { Sidebar  } from '../components/Sidebar';



beforeEach(cleanup)

describe('<Sidebar />', () => {
    describe('Passed', () => {
        it('renders Sidebar Component', () => {
            const { queryByTestId } = render(<Sidebar />)
            expect(queryByTestId('sidebar')).toBeTruthy()
        })
    })
})