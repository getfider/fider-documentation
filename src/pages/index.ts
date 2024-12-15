import { useEffect } from "react";
import { useHistory } from "@docusaurus/router";

export default function Home(): null {
  const history = useHistory();

  useEffect(() => {
    history.replace("/docs/");
  }, [history]);

  return null;
}
