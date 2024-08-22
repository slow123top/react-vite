import { SelectProps } from "./Select.props";

function Select(options:SelectProps){
    return <>
        <select multiple={options.multiple} disabled={options.disabled}>
            {options.children}
        </select>
    </>
}

export default Select;