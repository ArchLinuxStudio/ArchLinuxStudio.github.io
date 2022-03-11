import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';
/**
 * https://stackoverflow.com/questions/69871987/react-router-v6-navigate-outside-of-components
 */

const CustomRouter = ({
  history,
  children,
}: {
  history: BrowserHistory;
  children: React.ReactNode;
}) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export default CustomRouter;
