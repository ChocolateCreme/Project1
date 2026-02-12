import Wrapper from "../components/Wrapper";
import AddProfileForm from "../components/Form";

const AddProfilePage = ({updateProfiles}) => {
    return (
        <Wrapper id="add-profile">
            <AddProfileForm onAddProfile={updateProfiles}/>
        </Wrapper>
    )
}

export default AddProfilePage;