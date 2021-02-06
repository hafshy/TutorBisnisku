import React from 'react';
import { ConsultContainer, ConsultContent, ConsultH1, ConsultBtnWrapper } from './ConsultElements';
import {Button} from '../ButtonElement';

const Consult = () => {

    return (
        <ConsultContainer>
            <ConsultContent>
                <ConsultH1>Consult Your Business Right Now!</ConsultH1>
                <ConsultBtnWrapper>
                    <Button href=" https://wa.me/message/WHABKDM5XLPME1" target="_blank" aria-label="Whatsapp">
                        Apply
                    </Button>
                </ConsultBtnWrapper>
            </ConsultContent>
        </ConsultContainer>
    )
}

export default Consult
