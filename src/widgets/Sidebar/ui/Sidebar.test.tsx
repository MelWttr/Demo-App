import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
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
