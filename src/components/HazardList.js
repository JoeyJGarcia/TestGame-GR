const HazardList = (hazNames) => {
    if (hazNames.hazNames.length > 0) {
        return (
            <ul style={{ paddingLeft: '10px' }}>
                {hazNames.hazNames.map((hazard, idx) => {
                    return (
                        <li key={idx} style={{ listStyleType: 'none' }}>
                            {hazard}
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        return '  ';
    }
};

export default HazardList;
