import React, {useContext} from 'react'
import {__RouterContext, Route, Switch} from 'react-router-dom'
import {animated, useTransition} from 'react-spring'

import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component";
import PersonalInformationContainerPage
    from "../../components/profile-personal-information/profile-personal-information.container";
import LoyaltyContainerPage from "../../components/profile-loyalty/profile-loyalty.container";

import {HorizontalLine, ProfilePageContainer} from './profile.styles';


function useRouter() {
    return useContext(__RouterContext)
}

const ProfilePage = () => {
    const {location} = useRouter();

    const transitions = useTransition(location, location => location.key, {
        from: {
            opacity: 0,
            transform: `translateY(80%)`,
            background: `white`,
            overflow: `hidden`
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0)',
            background: `white`,
        },
        leave: {
            left: '321px',
            position: 'absolute',
            opacity: 0,
            background: `white`,
            transform: `translateY(60%)`,
        }
    });

    return (
        <ProfilePageContainer>
            <ProfileNavigation/>
            <HorizontalLine/>
            {
                transitions.map(({item, props: transition, key}) => (
                    <animated.div key={key} style={transition}>
                        <Switch location={item}>
                            <Route exact path='/profile/personal-information/'
                                   component={PersonalInformationContainerPage}/>
                            <Route path='/profile/loyalty' component={LoyaltyContainerPage}/>
                        </Switch>
                    </animated.div>
                ))
            }

            <HorizontalLine/>
        </ProfilePageContainer>
    )

};

export default ProfilePage;