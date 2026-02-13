import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Student | User CURD App",
  description: "Update student page of User CURD App",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-sm gap-2">
        <CardHeader className="grid place-items-center">
          <CardTitle className="text-2xl">Edit Student Form</CardTitle>
        </CardHeader>

        <Separator />
      </Card>
    </section>
  );
};

export default page;
