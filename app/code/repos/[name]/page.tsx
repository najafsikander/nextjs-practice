import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({params}:{params:any}) => {
  const {name}:{name:string} = params;
  return (
    <div className="card">
        <Link href={'/code/repos'} className="btn btn-back">Back To Repositories</Link>
        <Suspense fallback={<div>Loading Repo...</div>}>
          <Repo name={name}/>
        </Suspense>
        <Suspense fallback={<div>Loading Directories...</div>}>
          <RepoDirs name={name}/>
        </Suspense>
    </div>
  )
}

export default RepoPage