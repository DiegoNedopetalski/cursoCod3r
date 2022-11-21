import { createRoot } from 'react-dom/client';
import BomDia from './components/BomDia'

const container = document.getElementById('root')

const root = createRoot(container)

root.render(<BomDia nome='Diego'/>)

// $(1<h1>).html('React 2')