import { ExtendedClock } from "./extended-clock.js";

debugger;

let lowResolutionClock = new ExtendedClock({
  template: "h:m:s",
  precision: 2000,
});

lowResolutionClock.start();

setTimeout(() => lowResolutionClock.stop(), 5000);
