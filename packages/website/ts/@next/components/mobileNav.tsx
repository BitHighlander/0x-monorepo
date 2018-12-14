import * as React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import {WrapGrid, WrapProps} from 'ts/@next/components/newLayout';

interface Props {
    isToggled: boolean;
    toggleMobileNav: () => void;
}

export class MobileNav extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { isToggled, toggleMobileNav } = this.props;

        return (
            <MediaQuery maxWidth={800}>
                <Wrap isToggled={isToggled}>
                    <Section>
                        <h4>Products</h4>

                        <ul>
                            <li>
                                <Link to="#">
                                    0x instant
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    0x Launch Kit
                                </Link>
                            </li>
                        </ul>
                    </Section>

                    <Section isDark={true}>
                        <Grid as="ul" isFullWidth={true} isWrapped={true}>
                            <li>
                                <Link to="/next/why">
                                    Why 0x
                                </Link>
                            </li>
                            <li>
                                <Link to="/next/about/mission">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/next">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="https://blog.0xproject.com/latest">
                                    Blog
                                </Link>
                            </li>
                        </Grid>
                    </Section>

                    {isToggled &&
                        <Overlay onClick={toggleMobileNav} />
                    }
                </Wrap>
            </MediaQuery>
        );
    }
}

const Wrap = styled.nav<{ isToggled: boolean }>`
    width: 100%;
    height: 357px;
    background-color: ${props => props.theme.mobileNavBgUpper};
    color: ${props => props.theme.mobileNavColor};
    transition: transform 0.5s;
    transform: translate3d(0, ${props => props.isToggled ? 0 : '-100%'}, 0);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 20;
    top: 0;
    left: 0;
    font-size: 20px;

    a {
        padding: 15px 0;
        display: block;
        color: inherit;
    }

    h4 {
        font-size: 14px;
        opacity: 0.5;
    }
`;

const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 100%;
    background: transparent;
    cursor: pointer;
`;

const Section = styled.div<{ isDark?: boolean }>`
    width: 100%;
    padding: 15px 30px;
    background-color: ${props => props.isDark && props.theme.mobileNavBgLower};
`;

const Grid = styled(WrapGrid)<WrapProps>`
    li {
        width: 50%;
        flex-shrink: 0;
    }
`;
