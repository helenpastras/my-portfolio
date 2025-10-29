// Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="px-6 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <textarea placeholder="Let's connect about Product, Projects, Work..." className="border p-2 rounded" />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
}