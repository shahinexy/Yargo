import UserTable from "@/components/modules/user/UserTable";

const UserPage = () => {
  return (
    <div className="h-screen">
      <h1 className="md:text-5xl text-2xl font-medium md:mb-4 mb-2">
        All Temple List
      </h1>

      <div className="md:p-7 p-3 md:rounded-3xl rounded-xl bg-white md:mt-12 mt-4">
        <UserTable />
      </div>
    </div>
  );
};

export default UserPage;
