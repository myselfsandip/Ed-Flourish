import { useEffect } from "react";
import CourseTemplate from "../components/bca_sheet/CourseTemplate";
import useLoggedIn from "../hooks/useLoggedIn"
import { useNavigate } from "react-router-dom";


function Bca() {
    const navigate = useNavigate();
    const { isLoggedIn, user, loading, error } = useLoggedIn();

    useEffect(() => {
        if (!loading && !isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, loading, navigate]);

    if (loading) {
        return (
            <div className="bg-[#0f1319] min-h-screen flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    if (!isLoggedIn) {
        return null;
    }
    return (
        <CourseTemplate />
    );
}

export default Bca;