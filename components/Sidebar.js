import Link from "next/link";

const Sidebar = () => (
    <>
        <aside className="sidebar">
            <ul className="sidebar-menu">
                <li className="treeview">
                    <a href="#">
                        <span className="fa fa-list-alt"></span>Cadastros
                        <i className="fa pull-right fa-angle-left"></i>
                    </a>
                    <ul className="treeview-menu" style={{ display: "none" }}>
                        <li>
                            <Link href="/clientes">
                                <a>
                                    <span className="fa icon-groups-friends"></span>
                                    Clientes
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/fornecedores">
                                <a>
                                    <span className="fa icon-groups-friends"></span>
                                    Fornecedores
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/produtos">
                                <a>
                                    <span className="fa icon-groups-friends"></span>
                                    Produtos
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    </>
);

export default Sidebar;
