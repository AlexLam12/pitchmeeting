import React, { useState, createContext } from "react"

export const ArtistContext = createContext()

export const ArtistProvider = (props) => {
    const [ artists, setArtists ] = useState([])
    const [ likes, setLikes ] = useState([])

    const getArtists = () => {
        return fetch("http://localhost:8088/artists")
        .then(res => res.json())
        .then(setArtists)
    }

    const getLikes = () => {
      return fetch("http://localhost:8088/likes")
      .then(res => res.json())
      .then(setLikes)
  }

    const addArtist = artist => {
        return fetch("http://localhost:8088/artists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artist)
        })
        .then(response => response.json())
        .then(getArtists)
    }

    const updateArtist = artist => {
        return fetch(`http://localhost:8088/artists/${artist.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(artist)
        })
          .then(getArtists)
      }

      const getArtistById = (id) => {
          return fetch(`http://localhost:8088/artists/${id}`)
          .then(res => res.json())
      }


      return (
        <ArtistContext.Provider value={{
            artists, 
            getArtists, 
            addArtist, 
            updateArtist, 
            getArtistById,
            likes,
            getLikes 
        }}>
            {props.children}
        </ArtistContext.Provider>
    )
    }