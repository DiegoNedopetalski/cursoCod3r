import { createRoot } from 'react-dom/client';
import Filho from './components/Filho';
import Pai from './components/Pai';



const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <div>
        <Pai nome="Julio" sobrenome="Menezes">
            <Filho nome="Mylon" />
            {/* <Filho nome="Paulo" />
            <Filho nome="Carolina" /> */}
        </Pai>
    </div>
)

// $(1<h1>).html('React 2')