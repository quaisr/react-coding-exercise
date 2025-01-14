import { EuiPageTemplate } from "@elastic/eui";

import { Comments } from "./components/Comments";

function App() {
  return (
    <EuiPageTemplate>
      <EuiPageTemplate.Header pageTitle="Comments" />
      <EuiPageTemplate.Section>
        <Comments />
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
}

export default App;
