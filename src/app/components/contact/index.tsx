"use client";

import { useState } from "react";
import config from "./config.json"
import { EmailIcon, EmailShareButton, FacebookMessengerIcon, FacebookMessengerShareButton, InstapaperIcon, InstapaperShareButton, LinkedinIcon, LinkedinShareButton, WhatsappIcon, WhatsappShareButton } from "next-share";
import { Transition } from "@headlessui/react";
import classNames from "classnames";

function Contact(){
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="absolute bottom-8 right-8">
        <Transition
          show={showInfo}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
        <div className="grid gap-2 justify-end">
          <WhatsappShareButton
            url={config.whatsapp}
          >
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>
          <EmailShareButton
            url={'https://github.com/next-share'}
            subject={'Next Share'}
          >
            <EmailIcon size={48} round />
          </EmailShareButton>
          <LinkedinShareButton url={'https://github.com/next-share'}>
            <LinkedinIcon size={48} round />
          </LinkedinShareButton>
        </div>
        </Transition>
      <button
        className={classNames("bg-gray-hard h-12 rounded-full drop-shadow-lg flex justify-center items-center text-white text-2xl mt-3", {
          'w-28': !showInfo,
          'w-12': showInfo
        })}
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo && "X"}
        {!showInfo && "Contact"}
      </button>
    </div>


  )

}

export default Contact;