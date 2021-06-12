import React from 'react'
import qs from 'qs'

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })
    const detail = query.detail === 'true' // 쿼리 파싱결과는 문자열

    return(
        <div>
            <h1>소개</h1>
            <p>About : A810에 살고있는 냥놈들 소개</p>
            {detail && <p>냥놈들 상세한 정보가 필요한...가?</p>}
        </div>
    )
}

export default About