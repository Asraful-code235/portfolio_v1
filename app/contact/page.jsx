import Button from "@/components/ui/Button";
import PageContainer from "@/components/ui/PageContainer";
import { Mail, MapPin } from "lucide-react";

export default function page() {
  return (
    <PageContainer className="space-y-6 md:space-y-10 text-sm md:text-base">
      <section>
        <h3 className="text-xl md:text-3xl">LET’S TALK</h3>
        <div className="space-y-6 mt-8">
          <div className="flex items-center gap-6">
            <MapPin className="w-6" />
            <p>
              50 CARROLL STREET <br />
              TORONTO, ON M4M 3G3
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Mail className="w-6" />
            <p>INFO@CBSTUDIO.CA</p>
          </div>
        </div>
      </section>

      <form className="space-y-6">
        <div className="p-4 border rounded-lg space-y-6 bg-gray-50">
          <input
            type="text"
            placeholder="First name *"
            className="w-full border-b pb-4 placeholder:text-black bg-transparent"
          />
          <input
            type="text"
            placeholder="Last name *"
            className="w-full border-b pb-4 placeholder:text-black bg-transparent"
          />
          <input
            type="text"
            placeholder="Email *"
            className="w-full border-b pb-4 placeholder:text-black bg-transparent"
          />
          <input
            type="text"
            placeholder="Subject *"
            className="w-full border-b pb-4 placeholder:text-black bg-transparent"
          />
        </div>

        <textarea
          placeholder="Message *"
          className="w-full h-[300px] p-4 border rounded-lg space-y-6 bg-gray-50 placeholder:text-black"
        ></textarea>

        <Button variant="warning" className="w-full">
          Submit
        </Button>
      </form>
    </PageContainer>
  );
}
