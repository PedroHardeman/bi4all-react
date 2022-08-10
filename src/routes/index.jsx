import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Candidates } from "../components/candidates";
import { Winners } from '../components/winners';
import { About } from "../components/about";
import { CandidateDetails } from "../components/candidateDetails";

const Routes = () => {
  return (
    <>
			<BrowserRouter>
        <Switch>
          <Route path="/" exact component={Candidates} />
          <Route path="/candidates" exact component={Candidates} />
          <Route path="/winners" exact component={Winners} />
          <Route path="/candidates/:id" exact component={CandidateDetails} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
		</>
  );
};

export default Routes;