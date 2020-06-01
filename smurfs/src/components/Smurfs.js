import React, { useContext } from 'react'
import SmurfContext from '../contexts/SmurfContext'
import styled from 'styled-components'
import SmurfCard from './SmurfCard'

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Smurfs = () => {
    const {smurfList } = useContext(SmurfContext)
    return (
    <CardContainer>
        {smurfList && smurfList.map(smurf => {
            return <SmurfCard smurf={smurf} key={smurf.id}/>
        })}
    </CardContainer>
    )
}

export default Smurfs
