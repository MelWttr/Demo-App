import { Sidebar } from 'widgets/Sidebar';
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(toggleButton).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(sidebar).toHaveClass('collapsed');
        fireEvent.click(toggleButton);
        expect(sidebar).not.toHaveClass('collapsed');
        screen.debug();
    });
});
