import Image from 'next/image';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../components/map/create'), {
    ssr: false,
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <Image src="/images/local.svg" alt="Happy" width="64" height="72" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>
                        Duque de Caxias
                    </strong>
                    <span>
                        Rio de Janeiro
                    </span>
                </footer>
            </aside>

            <MapWithNoSSR />

            <Link href="/" >
                <a className="create-orphanages">
                    <FiPlus size={32} color="#FFF" />
                </a>
            </Link>
        </div>
    );
}

export default OrphanagesMap;