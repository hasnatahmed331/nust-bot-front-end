import './DocCard.css';

import PropTypes from 'prop-types';
import { Button } from "@/components/ui/button"


const DocCard = ({fileName}) => {

    const onRemove = () => {
        console.log('Remove file');
    };

    return (
        <div className="DocumentCard">
            <p>{fileName}</p>
            <Button variant="destructive" onClick={onRemove}>Remove</Button>
        </div>
    );
};

DocCard.propTypes = {
    fileName: PropTypes.string.isRequired
};


export default DocCard;