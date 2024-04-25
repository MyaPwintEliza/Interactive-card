import Complete from "../images/card-logo.svg";

function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-w-lg mx-auto">
      <img src={Complete} className="block mx-auto" />
      <h1 className="text-slate-800 text-3xl my-6 uppercase text-center">
        Thank you!
      </h1>
      <p className="text-slate-800 text-center">
        We've added your card details
      </p>
      <button className="btn block mx-auto mt-10 w-full">Continue</button>
    </div>
  );
}

export default ThankYouPage;
