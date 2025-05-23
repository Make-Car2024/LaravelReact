import CD from './Card';
import CB from './Coba';
import FT from './footer';
import LY from './layanan';
import LI from './Link';
import Wuhu from './Wuhu';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Wuhu />
            <CB />
            <LY />
            <CD />
            <LI />
            <FT />
        </>
    );
}
