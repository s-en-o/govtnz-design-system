import * as React from "react";
declare type Props = {
    id?: string;
    label?: React.ReactNode;
    hintId?: string;
    hint?: React.ReactNode;
    name: string;
    disabled?: boolean;
    readOnly?: boolean;
    rows?: number;
    cols?: number;
    autoFocus?: boolean;
    spellCheck?: boolean;
    autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    maxLength?: number;
    value?: string;
    onChange: any;
};
declare const TextareaBlock: ({ id, label, hintId, hint, name, disabled, readOnly, rows, cols, autoFocus, spellCheck, autoComplete, maxLength, value, onChange }: Props) => JSX.Element;
export default TextareaBlock;
