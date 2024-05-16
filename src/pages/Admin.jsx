import AdminContainer from "../components/Containers/AdminContainer";

const Admin = () => {
    return (
        <div>
          <AdminContainer 
                title="Admin Nust Bot"
                documents={[
                    {
                        name: "UG Handbook.pdf",
                    },
                ]}
          />
        </div>
    );
};

export default Admin;