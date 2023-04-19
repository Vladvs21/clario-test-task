import styled from "styled-components";

export const HeaderCon = styled.header`
    display: flex;
    justify-content: center;
    padding: 17px 24px;
    background: white;
`

export const StickyHeaderCon = styled.header`
    position: sticky;
    top: -56px;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    max-height: 0;
    opacity: 0;
    background: white;
    box-shadow: 0px 3px 17px 0px #6094E336;
    z-index: 1;

    &.visible {
        top: 0;
        max-height: 100000px;
        padding: 12px 24px;
        opacity: 1;
    }

    .btn {
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: -0.5400000214576721px;
        text-align: center;
        padding: 6px 15px 8px;
    }
`