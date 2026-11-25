type UserAPIRole = "employee" | "manager";

type UserAPIResponse = {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserAPIRole;
  };
};
