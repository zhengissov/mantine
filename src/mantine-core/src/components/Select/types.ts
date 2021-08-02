import type { InputStylesNames, InputBaseProps } from '../Input/Input';
import type { InputWrapperStylesNames, InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import type { SelectDropdownStylesNames } from './SelectDropdown/SelectDropdown';
import type { SelectItemsStylesNames } from './SelectItems/SelectItems';

export interface SelectItem {
  value: string;
  label?: string;
  [key: string]: any;
}

export type SelectDataItem = string | SelectItem;

export type BaseSelectStylesNames =
  | Exclude<InputStylesNames, 'rightSection'>
  | InputWrapperStylesNames
  | SelectItemsStylesNames
  | SelectDropdownStylesNames;

export type BaseSelectProps = InputWrapperBaseProps &
  Omit<InputBaseProps, 'rightSection' | 'rightSectionProps' | 'rightSectionWidth'> &
  Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size'>;