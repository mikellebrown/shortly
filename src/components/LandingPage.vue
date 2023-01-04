<template>
  <div class="xxs:overflow-x-hidden">
    <div class="flex justify-center mt-10">
      <div class="flex justify-between w-9/12">
        <div class="flex gap-10 items-center">
          <img src="../assets/images/logo.svg" />
          <span
            class="text-md text-gray hover:text-vDarkViolet hover:cursor-pointer xxs:invisible md:visible"
            >Features</span
          >
          <span
            class="text-md text-gray hover:text-vDarkViolet hover:cursor-pointer xxs:invisible md:visible"
            >Pricing</span
          >
          <span
            class="text-md text-gray hover:text-vDarkViolet hover:cursor-pointer xxs:invisible md:visible"
            >Resources</span
          >
        </div>
        <div class="flex items-center gap-10">
          <span
            class="text-md text-gray hover:text-vDarkViolet hover:cursor-pointer xxs:invisible md:visible"
            >Login</span
          >
          <button
            class="rounded-full bg-cyan w-28 h-10 hover:bg-cyanActive xxs:invisible md:visible"
          >
            <span class="text-md text-white">Sign Up</span>
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center w-full">
      <div
        class="flex justify-between items-center xxs:mt-5 md:mt-20 xxs:w-screen md:w-9/12 xxs:flex-col-reverse md:flex-row"
      >
        <div
          class="flex flex-col xxs:w-11/12 md:w-6/12 2xl:w-5/12 xxs:items-center md:items-start"
        >
          <h1
            class="xxs:text-4xl xxs:mt-10 md:text-6xl text-darkViolet font-bold leading-2 xxs:text-center md:text-left"
          >
            {{ header }}
          </h1>
          <h3
            class="text-gray text-lg mt-5 xxs:pr-0 md:pr-24 xxs:text-center md:text-left"
          >
            {{ subHeader }}
          </h3>
          <button
            type="button"
            class="bg-cyan hover:bg-cyanActive rounded-full w-40 h-12 mt-10 ml-1"
          >
            <span class="text-lg text-white text-center">Get Started</span>
          </button>
        </div>
        <div class="flex justify-end xxs:w-screen md:w-7/12 xxs:ml-20">
          <img
            src="../assets/images/illustration-working.svg"
            class="xxs:pl-10 md:pl-0"
          />
        </div>
      </div>
    </div>
    <div
      class="flex relative flex-col items-center bg-backgroundGray min-h-fit mt-32"
    >
      <div class="flex items-center flex-col">
        <img
          src="../assets/images/bg-shorten-desktop.svg"
          class="absolute rounded-md h-28 xxs:w-10/12 md:w-9/12 justify-self-center bg-darkViolet -top-14"
        />
        <div
          class="flex absolute justify-center items-center xxs:gap-3 md:gap-0 z-10 h-20 -top-10 w-9/12 xxs:flex-col md:flex-row"
        >
          <input
            class="xxs:w-full md:w-3/4 xxs:h-4/6 md:h-1/2 rounded-md xxs:mr-0 md:mr-5 pl-5"
            :class="{ [`border-2 border-red`]: noLinkInputed }"
            type="text"
            v-model="input"
            placeholder="Shorten a link here..."
            :placeholder="{ [`text-red`]: noLinkInputed }"
          />
          <button
            @click="input ? getShortenedLink() : (noLinkInputed = true)"
            type="button"
            class="bg-cyan hover:bg-cyanActive rounded-md xxs:w-full md:w-1/6 xxs:h-4/6 md:h-1/2"
          >
            <span class="text-lg text-white text-center">Shorten It!</span>
          </button>
        </div>
        <div
          class="flex w-screen justify-center z-10 mt-7"
          :class="{ [`opacity-0`]: !noLinkInputed }"
        >
          <span class="flex w-9/12 text-sm text-red italic pl-9"
            >Please add a link</span
          >
        </div>
      </div>

      <div class="mt-5 xxs:w-10/12 md:w-9/12">
        <div
          class="flex xxs:flex-col md:flex-row justify-between items-center w-full min-h-20 bg-white mt-4 rounded-md p-3"
          v-for="link in links"
        >
          <div class="xxs:w-full md:w-4/6 text-left xxs:pl-0 md:pl-4">
            <span class="text-md text-darkViolet">{{ link.ogLink }}</span>
          </div>
          <div
            class="flex xxs:flex-col md:flex-row justify-between items-center xxs:w-full md:w-2/6 xxs:mr-0 md:mr-4 xxs:mt-3 md:mt-0"
          >
            <span class="text-md text-cyan" v-on:input="setLinkReady()">{{
              link.shortenedLink
            }}</span>
            <button
              class="xxs:w-full md:w-28 h-10 bg-cyan rounded-md hover:bg-cyanActive xxs:mt-5 md:mt-0"
              :class="linkCopied === link.shortenedLink && 'bg-darkViolet'"
              @click="copyLink(link.shortenedLink)"
            >
              <span
                class="text-sm text-white"
                :class="linkCopied === link.shortenedLink && 'font-bold'"
                >{{
                  linkCopied === link.shortenedLink ? "Copied!" : "Copy"
                }}</span
              >
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center xxs:w-11/12 md:w-2/6 xxs:mt-16 md:mt-32"
      >
        <span class="text-3xl font-bold text-darkViolet">{{ header2 }}</span>
        <span class="text-md text-gray text-center mt-5">{{ subHeader2 }}</span>
      </div>
      <div
        class="flex relative xxs:flex-col md:flex-row xxs:w-2 md:w-9/12 justify-between items-center gap-16 bg-cyan xxs:h-screen md:h-2 xxs:mt-40 md:mt-64"
      >
        <div
          class="flex flex-col relative justify-center bg-white xxs:w-80 md:w-1/3 h-60 rounded-md xxs:mb-0 md:mb-14 p-8"
        >
          <div
            class="flex absolute justify-center items-center w-20 h-20 bg-darkViolet rounded-full -top-10"
          >
            <img
              src="../assets/images/icon-brand-recognition.svg"
              class="h-9 w-9"
            />
          </div>
          <span class="text-xl text-darkViolet font-bold my-3"
            >Brand Recognition</span
          >
          <span class="text-sm text-gray leading-6">{{ brandText }}</span>
        </div>
        <div
          class="flex flex-col relative justify-center bg-white xxs:w-80 md:w-1/3 h-60 rounded-md xxs:mt-0 md:mt-5 p-8"
        >
          <div
            class="flex absolute justify-center items-center w-20 h-20 bg-darkViolet rounded-full -top-10"
          >
            <img
              src="../assets/images/icon-detailed-records.svg"
              class="h-9 w-9"
            />
          </div>
          <span class="text-xl text-darkViolet font-bold my-3"
            >Detailed Records</span
          >
          <span class="text-sm text-gray leading-6">{{ detailedText }}</span>
        </div>
        <div
          class="flex flex-col relative justify-center bg-white xxs:w-80 md:w-1/3 h-60 rounded-md xxs:mt-0 md:mt-24 p-8"
        >
          <div
            class="flex absolute justify-center items-center w-20 h-20 bg-darkViolet rounded-full -top-10"
          >
            <img
              src="../assets/images/icon-fully-customizable.svg"
              class="h-10 w-10"
            />
          </div>
          <span class="text-xl text-darkViolet font-bold my-3"
            >Fully Customizable</span
          >
          <span class="text-sm text-gray leading-6">{{ fullyText }}</span>
        </div>
      </div>
      <div class="flex justify-center bg-backgroundGray w-100">
        <div class="flex justify-center mt-64 relative">
          <img
            src="../assets/images/bg-boost-desktop.svg"
            class="w-screen bg-darkViolet xxs:h-80 md:h-auto"
          />

          <div
            class="flex flex-col justify-center text-center items-center absolute xxs: top-20 md:top-16"
          >
            <span class="xxs:text-2xl md:text-4xl text-white font-bold"
              >Boost your links today</span
            >
            <button
              class="w-40 h-12 bg-cyan rounded-full mt-8 hover:bg-cyanActive"
            >
              <span class="text-lg text-white">Get Started</span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex justify-between xxs:items-center md:items-start w-full h-auto bg-vDarkViolet p-10 pt-14 pb-16 xxs:flex-col md:flex-row xxs:text-center md:text-left"
      >
        <div class="flex items-top w-1/3 xxs:ml-0 md:ml-36">
          <span class="text-3xl font-sans font-bold text-white">Shortly</span>
        </div>
        <div
          class="flex xxs:items-center md:items-start w-2/3 columns-4 xxs:gap-10 md:gap-20 xxs:flex-col md:flex-row"
        >
          <div class="flex flex-col">
            <span class="text-md text-white font-bold mb-5 xxs:mt-16 md:mt-0"
              >Features</span
            >
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Link Shortening</span
            >
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Branded Links</span
            >
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Analytics</span
            >
          </div>
          <div class="flex flex-col">
            <span class="text-md text-white font-bold mb-5">Resources</span>
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Blogs</span
            >
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Developer</span
            >
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Support</span
            >
          </div>
          <div class="flex flex-col">
            <span class="text-md text-white font-bold mb-5">Company</span>
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >About</span
            >
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Our Team</span
            >
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Careers</span
            >
            <span
              class="text-sm text-gray hover:text-cyan hover:cursor-pointer mb-3"
              >Contact</span
            >
          </div>
          <div class="flex gap-5">
            <img
              src="../assets/images/icon-facebook.svg"
              class="hover:cursor-pointer"
            />
            <img
              src="../assets/images/icon-twitter.svg"
              class="hover:cursor-pointer"
            />
            <img
              src="../assets/images/icon-pinterest.svg"
              class="hover:cursor-pointer"
            />
            <img
              src="../assets/images/icon-instagram.svg"
              class="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LandingPage",
  data() {
    return {
      input: "",
      links: [],
      linkCopied: "",
      noLinkInputed: false,
      linkReady: false,
      supportsCB: false,
      header: "More than just shorter links",
      subHeader:
        "Build your brand's recognition and get detailed insights on how your links are performing.",
      header2: "Advanced Statistics",
      subHeader2:
        "Track how your links are performing across the web with our advanced statistics dashboard.",
      brandText:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
      detailedText:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      fullyText:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    };
  },
  mounted() {
    if (navigator.clipboard) {
      this.supportsCB = true;
    }
  },
  methods: {
    async getShortenedLink() {
      try {
        this.reset();
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${this.input}`
        );

        // JSON responses are automatically parsed.

        const linksObj = {
          ogLink: response.data.result.original_link,
          shortenedLink: response.data.result.short_link,
        };

        this.links.push(linksObj);
      } catch (error) {
        console.log(error);
      }
    },
    reset() {
      this.noLinkInputed = false;
    },
    setLinkReady() {
      this.linkReady = true;
    },
    copyLink(link) {
      this.linkCopied = "";
      this.setLinkReady();
      this.linkCopied = link;

      if (this.linkReady && this.supportsCB) {
        navigator.clipboard
          .writeText(link)
          .then(() => {
            console.log("Text is on the clipboard.");
          })
          .catch((e) => {
            console.error(e);
            alert("Sorry, unable to copy to clipboard.");
          });
      }
    },
  },
};
</script>
