'use client'
import PulseLoader from 'react-spinners/PulseLoader'

const override = {
    display: 'block',
    margin: '100px auto'
}

export default function LoadingPage({ loading }) {

    return(
        <PulseLoader 
            color='#4361ee'
            
            size={150}
            margin={2}
            loading={true}
            speedMultiplier={.5}
            aria-label='Loading Spinner'
            cssOverride={override}

        />
    )
}