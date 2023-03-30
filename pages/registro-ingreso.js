export default function RegistroIngreso() {
  return (
    <>
      <header>
        <h1>
          Registro para ingreso <br></br> UdeA
        </h1>
      </header>
      <main className="main-page-container">
        <div className="ingreso-container">
          <button className="ingreso-button">Ingreso</button>
          <span className="advertencia-ingreso">
            Solo válido para ingresos por primera vez a la Universidad de
            Antioquia o proviene de transferencia
          </span>
        </div>
      </main>
    </>
  );
}
