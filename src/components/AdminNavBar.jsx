import React from 'react'

const AdminNavBar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ADMIN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link" to="/addstud">ADD-STUDENT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewstud">VIEW-STUDENT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewmark">VIEW-STUDENT-MARKS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">LogOut</Link>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>



    </div>
  )
}

export default AdminNavBar