function Post() {
    return (
        <div>
            <section className="border margin">
                <figure>
                    <img className="margin" alt="placeholder comic" src="https://placehold.co/1000x200?text=Comic+Strip" />
                    <figcaption className="align-left margin">This is where the author puts the caption/description for their comic</figcaption>
                </figure>
                <figure>
                    <div className="flex margin border padding">
                        <img alt="avatar" src="https://placehold.co/70x70" style={{borderRadius: "50%"}} />
                        <section className="padding align-left">
                            <div><strong>User</strong></div>
                            <div>This is a comment about this comic strip</div>
                        </section>
                    </div>
                </figure>
            </section>
        </div>
    )
}

export default Post;