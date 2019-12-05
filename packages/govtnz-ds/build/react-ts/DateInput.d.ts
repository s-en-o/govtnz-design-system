import * as React from "react";
declare type Props = {
    error?: boolean;
    hintId?: string;
    errorId?: string;
    label?: React.ReactNode;
    hint?: React.ReactNode;
    id?: string;
    dayId?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    dayName: string;
    value?: string;
    spellCheck?: boolean;
    autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    onChange: any;
    monthId?: string;
    yearName: string;
    yearId?: string;
};
declare const DateInput: ({ error, hintId, errorId, label, hint, id, dayId, disabled, readOnly, autoFocus, dayName, value, spellCheck, autoComplete, onChange, monthId, yearName, yearId }: Props) => JSX.Element;
export default DateInput;
