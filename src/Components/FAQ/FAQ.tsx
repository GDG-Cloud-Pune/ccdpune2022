import { useState } from 'react'

const FAQ = () => {
  const [selectedfaq, setSelectedfaq] = useState<number>(5)
  const openAQuestion = (index) => {
    setSelectedfaq(index)
  }
  const questionClickHandler = (index) => {
    if (selectedfaq === index) {
      setSelectedfaq(5)
    } else {
      openAQuestion(index)
    }
  }

  return (
    <div className="faq-bg text-white font-mono pt-8 pb-10 ">
      <div className="grid mx-10 md:flex md:m-10">
        <div className="lg:w-1/2 md:w-1/2">
          <div className="lg:text-4xl font-semibold text-2xl text-primary-gold">FAQ</div>
          <div className="lg:text-lg text-sm font-semibold lg:w-3/5 md:w-3/5">Need Answers?</div>
          <div className="text-base font-semibold ">
            Find them here. <br />
            <div className="mt-2 w-fit lg:w-3/5 font-semibold ">
              For any queries related to sponsorship, please reach out to us at{' '}
              <a className="no-underline text-primary-gold" href="mailto:contact@gdgcloudpune.com">
                contact@gdgcloudpune.com
              </a>
              . Any question related to participation can be asked at{' '}
              <a className="no-underline text-primary-gold" href="mailto:contact@gdgcloudpune.com">
                contact@gdgcloudpune.com
              </a>
              .
            </div>
          </div>
        </div>


        <div className="max-w-3xl mx-auto space-y-2 font-medium lg:py-0 py-10 lg:text-xl text-xs">

          <div
            className="item border-1 border-g-gray-3 rounded-md p-3 "
            onClick={() => {
              questionClickHandler(0)
            }}
          >
            <div className="flex items-center cursor-pointer ">
              <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg  font-light">
                <span>What is CCD 2023 Pune?</span>
              </div>
              
              <span className="w-5 h-5 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className={selectedfaq===0?"rotate-180 h-5 w-5 transition-transform text-white":"h-5 w-5 transition-transform text-white"} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7">
                    </path>
                    </svg>
                    </span>
            </div>

            <div
              className="relative overflow-hidden transition-all  duration-700"
              style={selectedfaq === 0 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
            >
              <div className="   pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
                <hr />
                <div>
                  CCD 2023 Pune is short form of Cloud Community Days 2023 Pune
                  which is among the largest free Cloud developer conferences in
                  Western India.
                </div>
              </div>
            </div>
          </div>

          <div
            className="item border-1 border-g-gray-3 rounded-md p-3 "
            onClick={() => {
              questionClickHandler(1)
            }}
          >
            <div className="flex items-center cursor-pointer">
              <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-light">
                <span>Where can I find updates related to CCD 2023 Pune?</span>

              </div>
              <span
                className="w-5 h-5 ml-4"><svg xmlns="http://www.w3.org/2000/svg"
                className={selectedfaq===1?"rotate-180 h-5 w-5 transition-transform text-white":"h-5 w-5 transition-transform text-white"} fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg></span>
            </div>
            <div
              className="relative overflow-hidden transition-all  duration-700"
              style={selectedfaq === 1 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
            >
              <div className=" pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
                <hr />

                <div>
                  <p className="mb-2 ">
                    All announcements related to the event are posted to the GDG Cloud
                    Pune chapter mailing list which you can join by Joining the
                    chapter at -{' '}
                    <a href="https://gdg.community.dev/gdg-cloud-pune/">
                      GDG Cloud Pune Chapter Page
                    </a>
                    . You can receive the updates by following us on{' '}
                    <a href="https://twitter.com/gdgcloudpune">
                      Twitter (@gdgcloudpune)
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item border-1 border-g-gray-3 rounded-md p-3 "
            onClick={() => {
              questionClickHandler(2)
            }}
          >
            <div className="flex items-center cursor-pointer">
              <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-light">
                <span>How can I attend CCD 2023 Pune? How much does it cost?</span>
              </div>
              <span
                className="w-5 h-5 ml-4"><svg xmlns="http://www.w3.org/2000/svg"
                className={selectedfaq===2?"rotate-180 h-5 w-5 transition-transform text-white":"h-5 w-5 transition-transform text-white"} fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg></span>
            </div>
            <div
              className="relative overflow-hidden transition-all  duration-700"
              style={selectedfaq === 2 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
            >
              <div className="  pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
                <hr />

                <div>
                  CCD 2023 Pune is a Free event. There are no costs for the ticket
                  to this event. However, you must apply to be a participant to the
                  event and only upon a positive review of your application you shall
                  be allowed to claim a ticket. You can apply to be a participant by
                  clicking the "Reserve Your Seat" button on this website's home page.
                </div>
              </div>
            </div>
          </div>

          <div
            className="item border-1 border-g-gray-3 rounded-md p-3  "
            onClick={() => {
              questionClickHandler(3)
            }}
          >
            <div className="flex items-center cursor-pointer">
              <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-light">
                <span>
                  I want to present a talk/workshop at the conference. What should I
                  do?
                </span>
              </div>
              <span
                className="w-5 h-5 ml-4"><svg xmlns="http://www.w3.org/2000/svg"
                className={selectedfaq===3?"rotate-180 h-5 w-5 transition-transform text-white":"h-5 w-5 transition-transform text-white"} fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg></span>
            </div>
            <div
              className="relative overflow-hidden transition-all  duration-700"
              style={selectedfaq === 3 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
            >
              <div className="   pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
                <hr />

                <p className="mb-2 ">
                  You can submit your talk/workshop proposal on our{' '}
                  <a href="https://sessionize.com/ccd-pune">CFS Page</a>.
                  The deadline for submitting CFS for this year’s conference is 31st
                  August, however, the earlier you submit, more the chances of us
                  reviewing your submission in depth.
                </p>
              </div>
            </div>
          </div>

          <div
            className="item border-1 border-g-gray-3 rounded-md p-3  "
            onClick={() => {
              questionClickHandler(4)
            }}
          >
            <div className="flex items-center cursor-pointer">
              <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-light">
                <span>
                  Will I be provided travel/stay accommodation to attend the event?
                </span>
              </div>
              <span
                className="w-5 h-5 ml-4"><svg xmlns="http://www.w3.org/2000/svg"
                className={selectedfaq===4?"rotate-180 h-5 w-5 transition-transform text-white":"h-5 w-5 transition-transform text-white"} fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg></span>
            </div>
            <div
              className="relative overflow-hidden transition-all  duration-700"
              style={selectedfaq === 4 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
            >
              <div className="   pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
                <hr />

                <div>
                  No. There is no provision for covering attendee travel/stay. For
                  speakers, we will decide on case-by-case basis.
                </div>
              </div>
            </div>
          </div>


        </div>


        <div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
