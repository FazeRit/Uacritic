import {ChangeEvent, FC, FormEvent} from 'react';

interface EditableFieldFormProps {
    field: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const EditableFieldForm: FC<EditableFieldFormProps> = ({field, value, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="flex items-center space-x-4">
            <div className="flex-grow">
                <input
                    type={field === 'birthDate' ? 'date' : field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={value}
                    onChange={onChange}
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-300 ease-in-out"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
                Save
            </button>
        </form>
    );
};

export default EditableFieldForm;
