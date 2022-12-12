import './sources.css';
import { Source } from '../../../types/index';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp == null) return false;
            const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

            (sourceClone.querySelector('.source__item-name') as Node).textContent = item.name;
            (sourceClone.querySelector('.source__item') as Element).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as Element).append(fragment);
    }
}

export default Sources;
