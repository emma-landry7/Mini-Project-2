import Post from "../components/Post";

export default function HomePage() {
    return (
        <div>
            <h1>Cosmic Strip</h1>
            <label>
                <input type="text" value="Search" name="search"
                    onChange={(e) => e.filter(a => a.target.value)} />
            </label>

            <Post />
            <Post />
        </div>
    )
}