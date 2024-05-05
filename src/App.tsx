import { useState } from "react";
import MobileImg from "./images/bg-main-mobile.png";
import DesktopImg from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";
import ThankYouPage from "./compotents/ThankYouPage";

export default function App() {
  const [confirm, setConfrimed] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  return (
    <section>
      <div className="absolute -z-10">
        <picture>
          <source media="(min-width: 1024px)" srcSet={DesktopImg} />
          <img src={MobileImg} alt="" />
        </picture>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="mt-20 mx-5 grid lg:grid-cols-1 ">
          <article className="front-card p-5 flex flex-col justify-between">
            <img src={logo} alt="" className="w-28 lg:w-20" />
            <div>
              <h2 className="text-xl lg:text-2xl text-bold mb-6 tracking-widest">
                {cardNumber}
              </h2>

              <ul className="flex justify-between uppercase tracking-widest text-base lg:text-1xl">
                <li>{name}</li>
                <li>{date}</li>
              </ul>
            </div>
          </article>
          <article className="back-card relative lg:ml-20">
            <p className="absolute right-10  tracking-widest text-lg lg:text-1xl">
              {cvc}
            </p>
          </article>
        </div>

        <div>
          {!confirm && (
            <form className="flex flex-col justify-center gap-8 h-screen max-w-lg">
              <div>
                <label htmlFor="cardholdre-name">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholder-name"
                  id="cardholder-name"
                  placeholder="e.g. Jane Appleseed"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="cardholdre-number">Cardholder Number</label>
                <input
                  type="text"
                  name="cardholder-number"
                  id="cardholder-number"
                  placeholder="e.g. 1234 3523 2353 5647"
                  value={cardNumber
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={19}
                  required
                />
              </div>

              <article className="flex items-center justify-between gap-8 ">
                <div className="flex-1">
                  <label htmlFor="expiry-date">Exp.Date( MM/YY)</label>
                  <input
                    className="text-slate-800"
                    type="month"
                    name="expiry-date"
                    id="expiry-date"
                    placeholder="MM YY"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="number"
                    name="cvc"
                    id="cvc"
                    placeholder="e.g. 123"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </article>

              <button
                onClick={() => setConfrimed(true)}
                type="submit"
                className=""
              >
                Confirm
              </button>
            </form>
          )}
          {confirm && <ThankYouPage setConfirmed={setConfrimed} />}
        </div>
      </div>
    </section>
  );
}
