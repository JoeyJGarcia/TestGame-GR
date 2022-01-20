import { Button } from '@mui/material';

const AnswerButtons = ({ setShowCards, getNextCard, newGame, buttonColor, buttonText }) => {
    return newGame ? (
        <div>
            <Button
                color={buttonColor}
                variant="contained"
                size="small"
                onClick={() => {
                    setShowCards(true);
                    getNextCard();
                }}
            >
                {buttonText}
            </Button>
        </div>
    ) : (
        <div>
            <Button variant="contained" size="small" onClick={() => {}}>
                New Game?
            </Button>
        </div>
    );
};

export default AnswerButtons;
