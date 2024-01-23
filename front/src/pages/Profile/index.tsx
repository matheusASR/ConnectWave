import ProfileFooter from "../../components/Footer/Profile";
import ProfileHeader from "../../components/Header/Profile";
import ImagePostBox from "../../components/ImagePostBox";
import TextPostBox from "../../components/TextPostBox";
import { StyledProfilePage } from "./style";
// import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    // const { userId } = useParams();

    return (
        <StyledProfilePage>
            <ProfileHeader/>
            <main className="profile__mainContainer">
                <TextPostBox/>
                <ImagePostBox/>
            </main>
            <ProfileFooter/>
        </StyledProfilePage>
    )
};

export default ProfilePage;