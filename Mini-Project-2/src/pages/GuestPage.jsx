import { Link } from "react-router-dom";
import Post from "../components/Post";

export default function GuestPage() {
    return (
        <div>
            <h1>Cosmic Strip</h1>
            <section>
                <article className="margin">
                    Welcome to Cosmic Strip, the website where you can find all your favorite webcomics in one place!
                    Log in to comment and post!
                </article>
                <Link to="/login"><button>LOG IN</button></Link>
            </section>
            <section className="margin">
                <label>
                    <input type="text" value="Search" name="search"
                        onChange={(e) => e.filter(a => a.target.value)} />
                </label>
            </section>
            <section>
                <h3 className="featured margin">Featured Posts</h3>
                <Post />
                <Post />    
            </section>
        </div>
    )
}