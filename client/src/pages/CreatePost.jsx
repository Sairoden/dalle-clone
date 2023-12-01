// REACT & LIBRARIES
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import { FormField, Loader } from "../components";

// ASSETS
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";

function CreatePost() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = () => {};
  const handleChange = e => {};
  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            onChange={handleChange}
            isSurpriseMe
            onSurpriseMe={handleSurpriseMe}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}

export default CreatePost;
