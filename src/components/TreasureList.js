const TreasureList = (treNames) => {
    if (treNames.treNames.length > 0) {
        return (
            <ul style={{ paddingLeft: '10px' }}>
                {treNames.treNames.map((treasure, idx) => {
                    return (
                        <li key={idx} style={{ listStyleType: 'none' }}>
                            {treasure}
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        return '  ';
    }
};

export default TreasureList;
