import Link from "next/link"
export default function Admin() {
    return (
        <div>
            <h1>This admin</h1>
            <Link href="/about" className="text-2xl border-4 ">To about</Link>
        </div> 
    )
}