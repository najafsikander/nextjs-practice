import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye} from "react-icons/fa";

const fetchRepos = async () => {
    const res = await fetch('https://api.github.com/users/najafsikander/repos',{
        next: {
            revalidate: 60,
        }
    });
    const repos = await res.json();
    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();
    return (
    <>
    <div className="repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
            {
                repos.map((repo:any) => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                          <h3>{repo.name}</h3>
                          <h3>{repo.description}</h3>
                          <div className="repo-details">
                            <span>
                                <FaStar/> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch/> {repo.forks_count}
                            </span>
                            <span>
                                <FaEye/> {repo.watchers_count}
                            </span>
                          </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
    </>
  )
}

export default ReposPage