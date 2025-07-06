import { StrictMode, Component, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ✅ REAL OPTIMIZATION: Error boundary para landing page en producción
const ErrorFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="p-8 text-center">
      <h1 className="mb-4 text-2xl font-bold text-gray-900">
        Algo salió mal
      </h1>
      <p className="mb-6 text-gray-600">
        Por favor, recarga la página
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Recargar Página
      </button>
    </div>
  </div>
);

// ✅ SIMPLE: Error boundary básico para producción
class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);