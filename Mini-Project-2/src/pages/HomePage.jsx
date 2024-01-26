export default function HomePage() {
    return (
        <div>
            <h2>Cosmic Strip</h2>
            <label>
                <input type="text" value="Search" name="search"
                    onChange={(e) => e.filter(a => a.target.value)} />
            </label>
            
        </div>
    )
}