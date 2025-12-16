import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <main className="bg-neutral-900 min-h-screen text-white">
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Parallax Setup Ready</h1>
        </div>
        <div className="h-screen"></div> {/* Spacer to test scroll */}
      </main>
    </SmoothScroll>
  )
}