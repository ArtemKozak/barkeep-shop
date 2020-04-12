import React, {useContext} from 'react'
import {__RouterContext, Route, Switch} from 'react-router-dom'
import {animated, useTransition} from 'react-spring'

import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component";
import PersonalInformationContainerPage
    from "../../components/profile-personal-information/profile-personal-information.container";
import LoyaltyContainerPage from "../../components/profile-loyalty/profile-loyalty.container";

import {Line, ProfilePageContainer} from './profile.styles';


function useRouter() {
    return useContext(__RouterContext)
}

const ProfilePage = () => {
    const {location} = useRouter();
    const mq = window.matchMedia( "(max-width: 800px)" ).matches;
    const configs = {from: {
            opacity: 0,
            transform: `${(mq ? 'translateX(60%)' : 'translateY(60%)')}`,
            overflow: `hidden`,
        },
        enter: {
            opacity: 1,
            transform: `${(mq ? 'translateX(0)' : 'translateY(0)')}`,
        },
        leave: {
            left: `${(mq ? '0' : '321px')}`,
            top: `${(mq ? '275px' : 'unset')}`,
            position: 'absolute',
            opacity: 0,
            transform: `${(mq ? 'translateX(-60%)' : 'translateY(60%)')}`,
        }};

    const transitions = useTransition(location, location => location.key, configs);

    return (
        <ProfilePageContainer>
            <ProfileNavigation/>
            <Line/>
            {
                transitions.map(({item, props: transition, key}) => (
                    <animated.div key={key} style={transition}>
                        <Switch location={item}>
                            <Route exact path='/profile/personal-information/'
                                   component={PersonalInformationContainerPage}/>
                            <Route exact path='/profile/loyalty' component={LoyaltyContainerPage}/>
                        </Switch>
                    </animated.div>
                ))
            }

            <Line/>
        </ProfilePageContainer>
    )

};

export default ProfilePage;