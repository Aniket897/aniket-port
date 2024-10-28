function Contact() {
  return (
    <div className="bg border-t p-10 relative">
      <h1 className="text-4xl">Opportunities to Contribute?</h1>
      <h1 className="text-xl pb-5">Feel free to react out me</h1>
      <a
        href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent(
          ""
        )}&body=${encodeURIComponent("")}`}
      >
        <span
          style={{
            fontFamily: "menlo",
          }}
          className="bg-[#82FF1F] text-black p-2 mt-4 cursor-pointer"
        >
          aniketbkangane9637@gmail.com
        </span>
      </a>
      <div className="text-center py-10">made with ❣️ by Aniket</div>
      <div className="absolute bottom-0 left-[0%] w-[150px] h-[150px] rounded-full bg-red-500 opacity-30 blur-2xl animate-pulse" />
    </div>
  );
}

export default Contact;
