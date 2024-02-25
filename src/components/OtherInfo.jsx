import { useState } from "react";
import {
  BsInfoCircle,
  BsArrowRightCircle,
  BsQuestionCircle,
  BsChevronDown,
} from "react-icons/bs";
import { faqConfig } from "../configs/faq.config";

const OtherInfo = () => {
  const [faq, setFaq] = useState(null);

  return (
    <>
      <section className="space-y-2.5">
        <p className="flex items-center space-x-2.5">
          <BsInfoCircle />
          <span>Why brandBucket?</span>
        </p>
        <div>
          <p className="text-sm mb-0.5">A Premium domain name</p>
          <p className="text-xs">
            Every business name on brandbucket is curated by our experts.
          </p>
        </div>
        <div>
          <p className="text-sm mb-0.5">Professionally designed logo</p>
          <p className="text-xs">
            A creative logo created by a highly skilled logo designer.
          </p>
        </div>
        <div>
          <p className="text-sm mb-0.5">Transparent pricing</p>
          <p className="text-xs">
            No hidden fees, no escrow fees. guaranteed delivery.
          </p>
        </div>
      </section>
      <section className="space-y-2.5">
        <p className="flex items-center space-x-2.5">
          <BsArrowRightCircle />
          <span>What's next?</span>
        </p>
        <div>
          <p className="text-sm mb-0.5">Checkout securely</p>
          <p className="text-xs">
            We accept all major credit cards, bitcoin or wire transfers.
          </p>
        </div>
        <div>
          <p className="text-sm mb-0.5">Follow transfer instructions</p>
          <p className="text-xs">
            An agent will contact you with personalized information.
          </p>
        </div>
        <div>
          <p className="text-sm mb-0.5">Confirm delivery</p>
          <p className="text-xs">
            Payment is held in escrow until you've received the name.
          </p>
        </div>
      </section>
      <section className="space-y-2.5">
        <p className="flex items-center space-x-2.5">
          <BsQuestionCircle />
          <span>Frequently Asked Questions</span>
        </p>
        {faqConfig.map((i, j) => (
          <div
            key={j}
            onClick={() => {
              faq === j ? setFaq(null) : setFaq(j);
            }}
            className="border border-fuchsia-100 bg-fuchsia-50 text-sm px-3 md:px-5 py-2.5 rounded-lg cursor-default"
          >
            <div className="flex items-center justify-between">
              <p className="space-x-2.5 flex items-center">
                <span className="text-base text-fuchsia-500">{j + 1}</span>
                <span>{i.que}</span>
              </p>
              <div>
                <BsChevronDown
                  className={`text-base text-fuchsia-500 duration-300 ${
                    faq === j ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`duration-300 grid ${
                faq === j ? "active opacity-100" : "inactive opacity-0"
              }`}
            >
              <div className="overflow-hidden">{i.ans}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default OtherInfo;
