import Score from "./components/Score"
import Summary from "./components/Summary"

function App() {
  return (
    <main className="flex flex-col lg:grid lg:place-items-center lg:h-screen font-body">
      <section className="flex flex-col items-center lg:flex-row lg:shadow-lg lg:w-fit lg:shadow-slate-200 lg:rounded-3xl">
        <Score />
        <Summary />
      </section>
    </main>
  )
}

export default App
