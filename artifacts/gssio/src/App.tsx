import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/home";
import WhoWeAre from "@/pages/who-we-are";
import WhatWeDo from "@/pages/what-we-do";
import ImpactReports from "@/pages/impact-reports";
import Stories from "@/pages/stories";
import GetInvolved from "@/pages/get-involved";
import Donate from "@/pages/donate";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/who-we-are" component={WhoWeAre} />
        <Route path="/what-we-do" component={WhatWeDo} />
        <Route path="/impact-reports" component={ImpactReports} />
        <Route path="/stories" component={Stories} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
