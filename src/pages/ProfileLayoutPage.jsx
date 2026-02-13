import { Outlet, Link} from "react-router-dom";
import Wrapper from "../components/Wrapper";

const ProfileLayoutPage = () => {
    return (
        <>
        <Outlet/>
        <Wrapper>
            <Link to="/fetched-profiles">Go Back</Link>
        </Wrapper>
        </>
    )
}

export default ProfileLayoutPage;