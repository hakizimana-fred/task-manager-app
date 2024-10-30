import { render, cleanup, fireEvent } from '@testing-library/react';
import { Navbar  } from '../components/Navbar';
import {  ThemeContext } from '../context/ThemeContext'

const mockToggleTheme = jest.fn();


beforeEach(cleanup)

describe('<Navbar />', () => {
    describe('Passed', () => {
        it('renders Navbar Component', () => {
            const { queryByTestId } = render(<Navbar />)
            expect(queryByTestId('navbar')).toBeTruthy()
        })
    })
    const renderNavbarWithTheme = (theme: string) =>
        render(
            <ThemeContext.Provider value={{ theme, toggleTheme: mockToggleTheme }}>
                <Navbar />
            </ThemeContext.Provider>
        );

    it('renders Navbar Component', () => {
        const { queryByTestId } = renderNavbarWithTheme('light');
        expect(queryByTestId('navbar')).toBeTruthy();
    });

    it('renders Moon icon when theme is light', () => {
        const { queryByTestId } = renderNavbarWithTheme('light');
        expect(queryByTestId('moon-icon')).toBeTruthy()
    });

    it('renders Sun icon when theme is dark', () => {
        const { queryByTestId } = renderNavbarWithTheme('dark');
        expect(queryByTestId('sun-icon')).toBeTruthy()
    });

    it('calls toggleTheme on icon click', () => {
        const { getByTestId } = renderNavbarWithTheme('light');
        fireEvent.click(getByTestId('moon-icon'));
        expect(mockToggleTheme).toHaveBeenCalled();
    });
})