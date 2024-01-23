import { Link } from "react-router-dom";
import { StyledFormHeader } from "./style";

const FormHeader = () => {
    return (
        <StyledFormHeader>
            <Link to="/" className="formHeader__title">ConnectWave</Link>
        </StyledFormHeader>
    )
};

export default FormHeader;