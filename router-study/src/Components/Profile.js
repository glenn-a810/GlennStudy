import React from 'react'

const profileData = {
    cat1: {
        name: '루이',
        description: '코숏 치즈태비 첫째냥'
    },
    cat2: {
        name: '오드',
        description: '터앙 흰색브릿지 둘째냥'
    },
    cat3: {
        name: '미르',
        description: '코숏 턱시도 셋째악마새끼'
    }
}

const Profile = ({match}) => {
    const {catname} = match.params
    const profile = profileData[catname]

    if(!profile) {
        return <div>냥없</div>
    }

    return(
        <div>
            <h3>
                {catname} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile