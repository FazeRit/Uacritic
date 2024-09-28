import {ChangeEvent, FC, FormEvent} from 'react';

interface EditableFieldFormProps {
    field: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const EditableFieldForm: FC<EditableFieldFormProps> = ({field, value, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="flex items-center">
            <input
                type={field === 'birthDate' ? 'date' : 'text'}
                name={field}
                value={value}
                onChange={onChange}
                className="border rounded px-2 py-1 mr-2"
            />
            <button type="submit" className="bg-blue-600 text-white rounded px-2 py-1">Save</button>
        </form>
    );
};

export default EditableFieldForm;
