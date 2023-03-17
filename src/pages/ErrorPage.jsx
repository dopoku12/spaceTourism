import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError()
    console.error(error);
    return (
        <div id="error-page">
            <div>
                Oops!
            </div>

            <div>
                Sorry,an unexpected error has occured.
            </div>

            <i>{error.statusText || error.message}</i>

        </div>

    );
}

export default ErrorPage;