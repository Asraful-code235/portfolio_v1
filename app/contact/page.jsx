import Button from "@/components/ui/Button";
import PageContainer from "@/components/ui/PageContainer";
import { Mail, MapPin } from "lucide-react";

export default function page() {
  return (
    <PageContainer className="text-sm md:text-base flex flex-col md:flex-row gap-6 md:gap-4">
      <section className="md:flex-[1.5] flex flex-col justify-between">
        <h3 className="text-xl md:text-6xl">LET’S TALK</h3>
        <div className="space-y-6 mt-8">
          <div className="flex md:flex-col md:items-start items-center gap-6">
            <MapPin className="w-6" />
            <p>
              50 CARROLL STREET <br />
              TORONTO, ON M4M 3G3
            </p>
          </div>
          <div className="flex md:flex-col md:items-start items-center gap-6">
            <Mail className="w-6" />
            <p>INFO@CBSTUDIO.CA</p>
          </div>
        </div>
      </section>

      <form className="space-y-6 md:flex-[2] p-4 border rounded-lg bg-gray-50">
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

        <div className="space-y-4">
          <label htmlFor="message" className="">
            Message *
          </label>
          <textarea
            id="message"
            className="w-full h-60 p-4 border rounded-lg space-y-6 bg-gray-50 placeholder:text-black"
          ></textarea>
        </div>

        <Button variant="warning" className="w-full md:w-fit">
          Submit
        </Button>
      </form>

      <div className="md:flex-1 border rounded-lg bg-gray-50 overflow-hidden"></div>
    </PageContainer>
  );
}
