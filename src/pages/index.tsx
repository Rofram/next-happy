
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Landing() {
  return (
    <div className="page-landing">
      <div className="content-wrapper">

        <Image src="/images/logo.svg" alt="Happy" width="240" height="74" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Duque de Caxias</strong>
          <span>Rio de Janeiro</span>
        </div>

        <Link href="/app" >
          <a className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </a>
        </Link>
      </div>
    </div>
  )
}
