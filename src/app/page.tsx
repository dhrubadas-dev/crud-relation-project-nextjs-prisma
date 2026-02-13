import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Student | User CURD App",
  description: "All student page of User CURD App",
};

const page = () => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3"></section>
  );
};

export default page;
