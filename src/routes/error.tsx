import { ErrorResponse, useRouteError, useNavigate } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError() as ErrorResponse;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>

      <button onClick={goBack}>Go Back</button>
    </div>
  );
};
