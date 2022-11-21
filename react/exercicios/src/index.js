import { createRoot } from 'react-dom/client';
import { BoaNoite, BoaTarde } from './components/Multiplos';


const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <div>
        <BoaTarde nome="Gab"/>
        <BoaNoite nome="Styve"/>
    </div>
)

// $(1<h1>).html('React 2')