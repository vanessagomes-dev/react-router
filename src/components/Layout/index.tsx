import "./styles.css"

import { Outlet } from "react-router"

export function Layout() {
    return (
        <div>
            <header className="layout-header">
                <p>Olá, Vanessa</p>
            </header>

            <Outlet />

            <footer>
                <span>© 2025 Minha Empresa. Todos os direitos reservados.</span>
            </footer>
        </div>
    )
}