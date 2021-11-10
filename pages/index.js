import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Welcome To TKY</h1>
            <p class="lead text-muted">welcome to our store, we provide various types of action figures with patented licenses from well-known companies. we also provide raft services or special orders in a short period of time.</p>
            <p>
              <Link href="/kategori"><a class="nav-link active" aria-current="page">Kategori</a></Link>
              <Link href="/contact"><a class="nav-link active" aria-current="page">Contact</a></Link>
            </p>
          </div>
        </div>
      </section>
      <div class="album py-5 bg-light ">
        <div class="container">
          <h1 class="text-center">Produk Pilihan </h1>
          <br/>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img width="100%" height="225" src="https://i.postimg.cc/VNmkGrPB/Home-1.jpg"></img>

                <div class="card-body">
                  <p>Gundam Mobile Suit XII RZ</p>
                  <p class="card-text">Ukuran : 1:8</p>
                  <p class="card-text">Harga :  Rp.650.000</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img width="100%" height="225" src="https://i.postimg.cc/BnW6F7hz/Home-2.jpg"></img>

                <div class="card-body">
                  <p>Gundam Mobile Suit KMZ Gen. 3</p>
                  <p class="card-text">Ukuran : 1:8</p>
                  <p class="card-text">Harga :  Rp.550.000</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img width="100%" height="225" src="https://i.postimg.cc/qv87xcSv/Home-3.jpg"></img>

                <div class="card-body">
                  <p>Gundam Mobile Suit XII RZ</p>
                  <p class="card-text">Ukuran : 1:2</p>
                  <p class="card-text">Harga :  Rp.1.250.000</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
