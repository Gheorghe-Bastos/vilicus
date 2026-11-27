import { useId, type ChangeEventHandler, type FocusEventHandler, type KeyboardEventHandler } from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export interface inputDemoProps {
  inputLabel?: string
  placeholder?: string
  inputDescription?: string
  inputType: string
  value: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  autoFocus?: boolean
  className?: string
}

export function InputDemo(
  {
    inputLabel,
    placeholder,
    inputDescription,
    inputType,
    value,
    onChange,
    onKeyDown,
    onBlur,
    autoFocus,
    className,
  }: inputDemoProps) {
  const id = useId()

  return (
    <Field className={className}>
      {inputLabel && <FieldLabel htmlFor={id}>{inputLabel}</FieldLabel>}
      <Input
        id={id}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        autoFocus={autoFocus}
      />
      {inputDescription && (
        <FieldDescription>
          {inputDescription}
        </FieldDescription>
      )}
    </Field>
  )
}
