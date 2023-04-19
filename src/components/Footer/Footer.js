import styled from "styled-components";

import { COLOR } from '../../values/colors'

export const FooterCon = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 7px;
    padding: 40px 25px 20px;
    color: ${COLOR.color_footer_text};
`