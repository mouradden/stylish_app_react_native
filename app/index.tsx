import { Redirect } from "expo-router";

export default function Index() {
  // Redirect to the "splash" screen initially
  return <Redirect href="/splash" />;
}
