const meta = {
    title: 'Components/MyComponent',
    tags: ['autodocs'],
    argTypes: {
        name: { control: 'text', type: 'string' },
        lastName: { control: 'text', type: 'string' },
        age: { control: 'number', type: 'number' },
    },
};
export default meta;
export const Default = {
    args: {
        name: 'John',
        lastName: 'Doe',
        age: 30,
    },
    render: (args) => {
        return `<my-component first="${args.name}" middle="${args.lastName}" last="${args.age}"></my-component>`;
    },
};
