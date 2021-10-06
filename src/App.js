import { BrowserRouter, Route } from "react-router-dom";
import { MarketplaceLayout } from "./components/marketplace/layouts/MarketplaceLayout";
import { MarketplaceBody } from "./components/marketplace/MarketplaceBody";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <MarketplaceLayout>
          <MarketplaceBody/>
        </MarketplaceLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
