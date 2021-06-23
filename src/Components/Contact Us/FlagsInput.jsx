import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import styles from './contact.module.css'
function Flags() {
    const [value, setValue] = useState()
    return (
            <PhoneInput
                className={styles.phoneInput}
                placeholder="Phone Number"
                international
                defaultCountry="AM"
                countryCallingCodeEditable={false}
                value={value}
                onChange={setValue}
            />




    )
}

export default Flags