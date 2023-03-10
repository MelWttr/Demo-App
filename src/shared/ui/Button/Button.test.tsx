import { Button } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('test classname', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('button');
        screen.debug();
    });
});
