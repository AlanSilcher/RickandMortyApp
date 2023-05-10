import React from "react"
import { useEffect, useState } from "react"
import Card from "../../Components/Card/Card"
import Pagination from "../../Components/Pagination/Pagination"
import './Home.css'

export default function Home () {
    const [ characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})

    const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                console.log(data.results)
                setInfo(data.info)
            })
            .catch(error => console.log(error))
    }

    const onPrevious = () => {
        if (info.prev) {
            fetchCharacters(info.prev)
        }
    }

    const onNext = () => {
        if (info.next) {
            fetchCharacters(info.next)
        }
    }

    useEffect(() => {
        fetchCharacters("https://rickandmortyapi.com/api/character")
    }, [])

      
        return (
          <div>
            <div className="container">
              <Card characters={characters} className="card-grid" />
            </div>
            <Pagination
              prev={info.prev}
              next={info.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </div>
        );
      }
      