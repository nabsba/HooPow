import styled from '@emotion/styled';
import * as React from 'react';

export type TButtonV1 = {
    text: string
}

const ButtonV1: React.FC<TButtonV1> = ({ text }) => {

    return (<div >
        <span className={'police_baloo'}>{text}</span>
    </div>)
}
export default ButtonV1