import { redirect } from "next/navigation";

const RootPage = () => {
  console.log("Có render không ta");
  return redirect("home");
};

export default RootPage;
