import React from 'react'
import PhoneInput from 'react-phone-input-2'

interface PhoneNumberInput2Props {
name: string;
value: string;
onChange: (value: any, country: any, e: any, formattedValue: any) => void;
id?: string;
disabled?: boolean;
placeholder?: string;
label?: string;
country?: string;
}

const PhoneNumberInput2 = (props: PhoneNumberInput2Props) => {
    const {
    name,
    value,
    onChange,
    id = "phoneInput",
    disabled = false,
    placeholder,
    label,
    country
    } = props;

    return (
    <div>
        <PhoneInput
        value={value}
        onChange={onChange}
        inputProps={{
            id: id,
            name: name,
            autoComplete: "off"
        }}
        country={country ?? "us"}
        preferredCountries={["us", "ca"]}
        disabled={disabled}
        placeholder={placeholder}
        buttonStyle={{
            backgroundColor: "#EEEEEE",
            border: "1px solid #d3d3d3"
        }}
        inputStyle={{
            borderRadius: "3px",
            height: "44px",
            width: "100%"
        }}
        copyNumbersOnly={false}
        enableSearch={true}
        disableSearchIcon={true}
        />
    </div>
    );
};

export default PhoneNumberInput2