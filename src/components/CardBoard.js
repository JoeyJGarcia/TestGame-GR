import TreasureList from './TreasureList';
import HazardList from './HazardList';

const CardBoard = ({ showCards, treasureNames, hazardNames }) => {
    return (
        showCards && (
            <div className="container-short" style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ paddingBottom: '100px' }}>
                    <div className="container-short">[Treasures]</div>
                    <TreasureList treNames={treasureNames} />
                </span>
                <span style={{ padding: '50px' }}> </span>
                <span style={{ paddingBottom: '100px' }}>
                    <div className="container-short">[Hazards]</div>
                    <HazardList hazNames={hazardNames} />
                </span>
            </div>
        )
    );
};

export default CardBoard;
