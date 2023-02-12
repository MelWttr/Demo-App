import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });
    test('with additional param', () => {
        expect(classNames('someClass', {}, ['someClass2'])).toBe('someClass someClass2');
    });
    test('with mod param', () => {
        const expected = 'someClass someClass2 hover active';
        expect(classNames(
            'someClass',
            {
                hover: true,
                active: true,
            },
            ['someClass2'],
        )).toBe(expected);
    });
    test('with and without mod param', () => {
        const expected = 'someClass someClass2 hover';
        expect(classNames(
            'someClass',
            {
                hover: true,
                active: false,
            },
            ['someClass2'],
        )).toBe(expected);
    });
});
