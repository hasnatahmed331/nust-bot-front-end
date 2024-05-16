import "./DocContainer.css";

import DocCard from "../Cards/DocCard";

import PropTypes from 'prop-types';

const DocContainers = ({ documents }) => {
    return (
        <div className="DocConatiner">
            <h1>Current Documents in the Knowledge Base</h1>
            {documents.map((document) => (
                <DocCard key={document.name} fileName={document.name} />
            ))}
        </div>
    );
};

DocContainers.propTypes = {
    documents: PropTypes.array.isRequired
};

export default DocContainers;