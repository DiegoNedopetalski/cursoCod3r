import { createRoot } from 'react-dom/client';
import Saudacao from './components/Saudacao';


const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João"/>
    </div>
)

// $(1<h1>).html('React 2')