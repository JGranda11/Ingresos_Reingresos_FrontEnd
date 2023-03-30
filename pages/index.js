
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1>Página UdeA</h1>
      </header>
      <main>
        <div className="main-page-container">
          <Link href="/registro-ingreso">
            <button>Estudiantes/Aspirantes</button>
          </Link>
          <button>Admisiones y registro</button>
        </div>
      </main>
    </>
  );
}
