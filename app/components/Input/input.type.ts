export interface InputProps {
    value?: string;
    type?: 'text' | 'password' | 'email' | 'search';
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    error?: string;
    disabled?: boolean;
    label?: string;
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}