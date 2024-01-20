import ProfileFooter from "../../components/Footer/Profile";
import ProfileHeader from "../../components/Header/Profile";
import { StyledProfilePage } from "./style";
// import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    // const { userId } = useParams();

    return (
        <StyledProfilePage>
            <ProfileHeader/>
            <ProfileFooter/>
        </StyledProfilePage>
    )
};

export default ProfilePage;