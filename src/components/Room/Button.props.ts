import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type ButtonProps = {
    active: IconDefinition;
    unable: IconDefinition;
    activeColor: string;
    unableColor: string;
    isActive: boolean;
    procedure: () => void;
};
