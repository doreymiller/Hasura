import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const PageSelect = ({ currentPage, numPages, selectPage }) => {

    let buttons = [];
    
    const getButton = (whichButton) => {
        if (whichButton === "next") {
            return (
                <Button className="page-button" key="next" variant="secondary" onClick={() => selectPage(currentPage + 1)}>Next</Button>
            )
        } else {
            return (
                <Button className="page-button" key="previous" variant="secondary" onClick={() => selectPage(currentPage - 1)}>Previous</Button>
            )
        }
    };

    if (currentPage === 0) {
        if (numPages >= 1) {
            buttons.push(getButton("next"));
        }
    } else {
        buttons.push(getButton("previous"));
        if (currentPage < numPages - 1) {
            buttons.push(getButton("next"));        }
    }

    return (
        <div className="page-select">
            <ButtonGroup aria-label="Basic example">
               { buttons }
            </ButtonGroup>
        </div>
    )
};

export default PageSelect;