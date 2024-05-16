import "./AdminContainer.css";

import PdfInput from "@/components/pdfinput/PdfInput";
import DocContainers from "@/components/Containers/DocContainers";
import Title from "../Title/Title";

import PropTypes from 'prop-types';

const AdminContainer = ({documents , title}) => {


    return (
        <>
        <Title title={title} />

        <div className="adminpage">
            
            <div>
                <DocContainers documents={documents} />
            </div>
            
            <div className="adddocument" >
                <h1>Add New Document in Knowledge Base</h1>
                <PdfInput />
            </div>

        </div>
        </>
    );
};

AdminContainer.propTypes = {
    documents: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default AdminContainer;