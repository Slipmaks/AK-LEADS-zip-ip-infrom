import { defineStore } from "pinia";
import { optionsZippo, optionsAPICAgent } from "./ApiOptions";

export const useStore = defineStore("ak-leads", {
  state: () => ({
    cityInfo: {},
    userAgentInfo: {},
    ipLookupInfo: {},
    errorValue: undefined,
  }),
  getters: {
    cityGetter: (state) => state.cityInfo,
    userAgentGetter: (state) => state.userAgentInfo,
    ipLookupGetter: (state) => state.ipLookupInfo,
    errorValueGetter: (state) => state.errorValue,
  },
  actions: {
    async getCityInfo(zip) {
      try {
        const data = await fetch(
          `https://community-zippopotamus.p.rapidapi.com/us/${zip}`,
          optionsZippo
        );
        if (!data.ok) {
          throw new Error("Failed to get ZIP information");
        }
        const response = await data.json();
        this.cityInfo = response;
      } catch (error) {
        console.log(error);
        this.errorValue = error;
      }
    },
    async getUserAgentInfo() {
      try {
        const data = await fetch(
          `https://apic-agent.p.rapidapi.com/?ua=${window.navigator.userAgent}`,
          optionsAPICAgent
        );
        if (!data.ok) {
          throw new Error("Failed to get user agent information");
        }
        const response = await data.json();
        this.userAgentInfo = response;
      } catch (error) {
        console.log(error);
        this.errorValue = error;
      }
    },
    async getUserIpInfo() {
      try {
        const data = await fetch("http://ip-api.com/json/");
        if (!data.ok) {
          throw new Error("Failed to get user IP");
        }
        const response = await data.json();
        this.ipLookupInfo = response;
      } catch (error) {
        console.log(error);
        this.errorValue = error;
      }
    },
    clearErrorMEssage() {
      this.errorValue = "";
    },
  },
});
