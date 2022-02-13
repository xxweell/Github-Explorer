import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useState, useEffect } from "react"


interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() { // componente pai

    const [repositories, setRepositories] = useState<Repository[]>([]) // como vai ser uma lista, começa o estado com um array vazio

    useEffect(() =>{
        fetch('https://api.github.com/orgs/rocketseat/repos') // faz uma chamada pra api externa
        .then(response => response.json()) // quando a api responder, transforma a resposta para um tipo de dado json
        .then(data => setRepositories(data)) // dai temos os dados que serão salvos dentro da variável data que será atribuida para a variável repositories
    }, []) // colchetes varios no final pra atualização acontecer somente uma vez


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} /> /* componente que pode receber informações do componente pai */
                })}
                
            </ul>
        </section>
    )
}