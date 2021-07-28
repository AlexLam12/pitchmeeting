import React, { useContext, useEffect } from "react"
import "./SignUp.css"
import { ArtistContext } from "./ArtistProvider"
import { SignUpCard } from "./SignUpCard"

export const SignUpList = () => {
    const { artists, getArtists } = useContext(ArtistContext)

    useEffect(() => {
        getArtists()
    }, [])

    return(
        <> 
        <div className="artists">
            {artists.map(artist => {
                return <SignUpCard key={artist.id} artist={artist} />
            })}
        </div>
        </>
    )
}