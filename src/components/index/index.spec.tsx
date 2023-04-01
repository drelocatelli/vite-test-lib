import {describe, expect, it, test} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import Index from './index.component';

describe('render index', () => {
    test('wait text appers on screen', async () => {
        render(<Index />);

        waitFor(() => {
            expect(screen.findByText('Ola mundo')).toBeInTheDocument();
        });
        screen.debug();
    })
})