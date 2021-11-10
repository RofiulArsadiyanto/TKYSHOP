import Link from 'next/link';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md sticky-topnpm navbar-dark bg-dark">
      <div class="container-fluid">
        <h1 class="navbar-brand" href="#">TKY Action Figure</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <Link href="/"><a class="nav-link active" aria-current="page">Home</a></Link>
            </li>
            <li class="nav-item">
              <Link href="/kategori"><a class="nav-link active" aria-current="page">Kategori</a></Link>
            </li>
            <li class="nav-item">
              <Link href="/contact"><a class="nav-link active" aria-current="page">Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;