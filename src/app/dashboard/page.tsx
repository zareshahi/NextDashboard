import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <form
      action={async () => {
        "use server";
        // sign out
      }}
    >
      <Button type="submit">خروج از حساب کاربری</Button>
    </form>
  );
};

export default DashboardPage;
