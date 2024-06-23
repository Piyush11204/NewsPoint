

const Nevbar = ({ setCategory }) => {
    return (
        <div className="nevbar">
            <nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#"><span className="badge bg-light fs-4 text-dark"> News Point</span></a>
                        
                        <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Latest</a>
                            </li>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Nevbar