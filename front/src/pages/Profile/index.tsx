import ProfileHeader from "../../components/Header/Profile";
import { StyledProfilePage } from "./style";
// import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    // const { userId } = useParams();

    return (
        <StyledProfilePage>
            <ProfileHeader/>
            
        </StyledProfilePage>
    )
};

export default ProfilePage;