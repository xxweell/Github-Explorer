import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: "unform",
    description: "Forms in React",
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() { // componente pai
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} /> {/* componente que pode receber informações do componente pai */}
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}