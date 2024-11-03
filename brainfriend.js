const title = document.querySelector(".title");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const showBtn = document.getElementById("show-btn");
const showResult = document.querySelector(".result-section");
const thinks = [
  "আপনি আপনার জীবনের যে সমস্যা বা বিষয় তথা Subject নিয়ে সমাধান বা সাজেশন Explore করতে চাচ্ছেন সেটাতে মনোযোগী হউন... ",
  "এখন এই মনোযোগী মানসিকতায় আপনি কনসানট্রেশন ও ফোকাস যুক্ত করে একাগ্র হউন",
  "Subject রিলেটেড বিষয়ে যাবতীয় দুঃশ্চিতা/দূর্ভাবনা/সংকোচ প্রভৃতি সকল নেগেটিভ ইনটেনশনগুলো আপাতভাবে মন হতে দূর করে দিন",
  "এখন উক্ত Subject এর সহিত আশাবাদী মানসিকতায় শুধুমাত্র পজেটিভ দিকসমূহ যুক্ত করুন",
  "সবিশেষ আপনার Subject এর সলিউশন বা সফলতা লাভে কি কি অথবা কোন কোন Fact সমূহ প্রয়োজন হবে সেটা সিলেক্ট করুন এবং ইমপ্লিমেন্ট নিশ্চিত করুন!",
];
// next and prev
let t = 0;
if (t === 0) {
  prevBtn.style.display = "none";
}
title.innerHTML = thinks[0];
nextBtn.addEventListener("click", () => {
  t++;
  title.innerHTML = thinks[t];

  if (t > 3) {
    showBtn.style.display = "block";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  } else {
    showBtn.style.display = "none";
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
  }
  let p = t;
  prevBtnDisable(p);
});

prevBtn.addEventListener("click", () => {
  t--;
  title.innerHTML = thinks[t];
  let p = t;
  prevBtnDisable(p);
});
const prevBtnDisable = (p) => {
  if (p === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
};
const allResults = [
  {
    text: " জীবনে Risk নিয়ে জেতার জন্য WinKing অনুসরণ করুন [Risk / ঝুঁকি / Risk নেওয়ার সঠিক কৌশল / Risk নিয়ে জীবনে জেতার উপায় / Risk নিয়ে সফল হওয়ার উপায় / WinKing",
    link: "https://www.discoverymind.xyz/2024/10/winking-for-winning-with-risk-in-life.html",
  },
  {
    text: " আল্লাহর সান্নিধ্য লাভের সাইকোলজিক্যাল প্রোগ্রাম Murakaba [আল্লাহ / আল্লাহ সান্নিধ্য লাভ / সাইকোলজিক্যালি আল্লাহর সান্নিধ্য লাভ / আল্লাহর সান্নিধ্য লাভ করার উপায় / আল্লাহর নিকট মনের চাওয়া পূরণের উপায় / আল্লাহর দোয়া কবুল হওয়ার উপায় / Murakaba",
    link: "https://www.discoverymind.xyz/2024/10/murakaba.html",
  },
  {
    text: " বিশ্বাসে মিলায় বস্তু তর্কে বহুদূর [বিশ্বাস / মনের বিশ্বাস / বিশ্বাস এর ক্ষমতা / বিশ্বাসের সুফলতা / আত্মবিশ্বাস / সাবকনশিয়াস মাইন্ড / সাবকনশিয়াস মাইন্ডের পাওয়ার / মনের ক্ষমতা / মনের শক্তি / ইচ্ছাশক্তি / অবচেতন মনের ক্ষমতা",
    link: "https://www.discoverymind.xyz/2024/10/benefit-of-belief.html",
  },

  {
    text: " PsychoElectron এর মাধ্যমে মস্তিষ্কের সাইকোলজির এনালাইসিস [ মস্তিষ্ক / হিউম্যান ব্রেইন / হিউম্যান সাইকোলজি / মস্তিষ্কের ইলেকট্রনিক্স বিন্যাসে মনের সাইকোলজি / কনশিয়াস মাইন্ড / সচেতন মন / সাবকনশিয়াস মাইন্ড / অবচেতন মন / আনকনশিয়াস মাইন্ড / অচেতন মন / আবেগ",
    link: "https://www.discoverymind.xyz/2024/10/electronic-analysis-of-human-psychology.html",
  },

  {
    text: " অদ্ভূত রহস্যময় হিউম্যান সাইকোলজির জগত আবিষ্কার করুন [ আধ্যাত্মিক / আধ্যাত্মিকতা / BrainBuzz / মানব মনের আধ্যাত্মিকতায় সিদ্ধি লাভ / একজন মিসির আলী হয়ে উঠুন / যুক্তি / লজিক / মনের পরিতৃপ্তি লাভ করার উপায় / Lit এর মুখে আপনার মনের কথা শুনুন / রক্তের প্রতি আমাদের সাইকোলজিক্যাল ফেনোমেনা / সাইকো / সাইকোপ্যাথ / স্যাডিস্ট / কূটবুদ্ধির সাইকোলজি / মৃত্যু / মৃত্যু মায়া / আত্মহত্যার সাইকোলজি / ডার্ক সাইকোলজি",
    link: "https://www.discoverymind.xyz/2024/10/discover-mysterious-psychology.html",
  },

  {
    text: " Crypto Mind এর মাধ্যমে নিরাপদে মনের ভাব আদান প্রদান করুন [নিরাপদে মনের কথা আদান প্রদান / সিক্রেট কথপোকথন / সেইফ কমিউনিকেশন / সিকিউড যোগাযোগের উপায় / সিকিউরিটি / সেইফটি",
    link: "https://www.discoverymind.xyz/2024/10/crypto-mind-conversation.html",
  },

  {
    text: " নেশা কি? নেশা করলে কেমন ফিলিংস হয়? [ নেশা / আসক্তি / নেশার অনুভূতি / নেশা করলে কেমন লাগে / নেশার সাইকোলজি / সাইকোডেলিক / স্নায়ুবিক উদ্দীপনা / নেশার মনস্তাত্ত্বিক এনালাইসিস",
    link: "https://www.discoverymind.xyz/2024/10/feelings-of-intoxication.html",
  },

  {
    text: " সম্মোহনী দুনিয়াতে আপন অবচেতন মন'কে আবিষ্কার করুন [ সম্মোহন / সম্মোহনী / হিপনোটিজম / হিপ্নোসিস / হিপ্নোটাইজ / সেল্ফ হিপনোটিজম / সাবকনশিয়াস মাইন্ড / অবচেতন মন / অবচেতন মন আবিষ্কার / সম্মোহন বিদ্যা শেখা",
    link: "https://www.discoverymind.xyz/2024/10/discover-your-sub-conscious-mind-with-hypnotism.html",
  },

  {
    text: " সুরের ঝংকারে মনস্তাত্ত্বিক উদ্দীপনা [সুর / সুরের প্রতি স্নায়ুবিক উদ্দীপনা / সুরের কম্পন / ইনফ্রা সাউন্ড / ইনফ্রা সাউন্ড ইফেক্ট",
    link: "https://www.discoverymind.xyz/2024/10/psychological-effect-of-sound-wave.html",
  },

  {
    text: " লৌকিক ঈশ্বরের মনস্তাত্ত্বিক উপখ্যান [ ঈশ্বর / ঈশ্বর চেতনা / ইশ্বর বিশ্বাস / ঈশ্বর ধারনার মনস্তাত্ত্বিক প্রভাব / GOD / ঈশ্বর ধারনায় মনস্তাত্ত্বিক চিন্তা চেতনা / ঈশ্বর ধারণায় উগ্র মানসিকতা / doG / সর্বেশ্বরবাদ",
    link: "https://www.discoverymind.xyz/2024/10/psychological-analysis-of-god.html",
  },

  {
    text: " আমরা যা দেখি সেটা কতোটুকু সত্য? [ সত্য ও মিথ্যার আপেক্ষিকতা / অপ্টিক্যাল ইলিউশন / দৃষ্টিভ্রম / অপ্টিক্যাল ইলিউশনের সাইকোলজিক্যাল সিগনিফিকেন্স / দৃষ্টিভ্রম এর মানসিক তাৎপর্য",
    link: "https://www.discoverymind.xyz/2024/10/psychological-analysis-of-optical-illusion.html",
  },

  {
    text: " রিয়েল লাইফ Spider Man হউন [স্পাইডার ম্যান / মাকড়সার গতিবিধি থেকে শিক্ষা লাভ / মাকড়সার চলাচল হতে বাস্তব জীবনে সফলতার শিক্ষা",
    link: "https://www.discoverymind.xyz/2024/10/real-life-spiderman.html",
  },

  {
    text: " জীবন যুদ্ধে Winner হউন [জীবন যুদ্ধ / জীবনে জয়ী হওয়ার শিক্ষা / জীবনে বিজয়ী হওয়ার কৌশল / Winner / জীবনে সফলতা লাভের উপায় / জীবনে টিকে থাকার উপায় / জীবনে জয়ী হওয়ার সাইকোলজি",
    link: "https://www.discoverymind.xyz/2024/10/winner-on-life.html",
  },

  {
    text: " ভালোবাসার অনুভূতি কেমন হয়? [ভালোবাসা / ভালোবাসার অনুভূতি / ভালোবাসার সাইকোলজি / ভালোবাসার মনস্তাত্ত্বিক বিশ্লেষণ",
    link: "https://www.discoverymind.xyz/2024/10/psychological-feelings-of-love.html",
  },

  {
    text: " মানসিক গোলকধাঁধা থেকে মুক্ত হউন [গোলকধাঁধা / মানসিক গোলকধাঁধা / গোলকধাঁধা কেমন হয় / গোলকধাঁধা হতে মুক্তির উপায় / অবসেশান / অবসেসিভ মানসিকতা / অবসেশান থেকে মুক্তির উপায়",
    link: "https://www.discoverymind.xyz/2024/10/psychological-looping-infinitive-thinking.html",
  },

  {
    text: " আপনার মাইন্ড'কে ফ্ল্যাশ করুন [মাইন্ড ফ্ল্যাশিং / লাইফ রিসেট / জীবনের প্রচ্ছন্নতা থেকে মুক্তি",
    link: "https://www.discoverymind.xyz/2024/10/mind-flashing.html",
  },

  {
    text: " আপনার মনে আশার আলো জাগিয়ে তুলুন [আশা / আশার আলো / আশার আলো থেকে সফলতা লাভ",
    link: "https://www.discoverymind.xyz/2024/10/hope-of-light-in-life.html",
  },

  {
    text: " অসুস্থ মনের রঙ্গিলা ক্যানভাস [অসুস্থ মন / অসুস্থ মনের প্রতিকৃতি / অসুস্থ মনের অবস্থিতি",
    link: "https://www.discoverymind.xyz/2024/10/mind-lighting-canvas.html",
  },

  {
    text: " আপনার মনের দুঃখগুলো Black Hole এ হারিয়ে যাক [মনের দুঃখ কষ্ট যান্ত্রণা লাঘব করার সাইকোলজিক্যাল উপায় / মনের দুঃখ কষ্ট ভোলার উপায়",
    link: "https://www.discoverymind.xyz/2024/10/black-hole.html",
  },

  {
    text: " আসুন ভার্চুয়াল বৃষ্টিতে আপন মন'কে সিক্ত করি [ভার্চুয়াল বৃষ্টি / বৃষ্টির আবোহ / বৃষ্টি ভেজা / মনের আবেগ ও অনুভূতি অনুভব / ফিলিংস / নস্টালজিক / নস্টালজিয়া",
    link: "https://www.discoverymind.xyz/2024/10/rainy-feelings-on-your-mind.html",
  },

  {
    text: " আপনার মনের ঘরে আলোক বাতি জ্বালান [মনকে আলোকিত করার উপায় / মনের অন্ধকার দূর করার উপায় / অবচেতন মন",
    link: "https://www.discoverymind.xyz/2024/10/enlight-your-mind.html",
  },

  {
    text: " আপন মনের মুক্তি ঘটান ক্যানভাসে [মনের ক্যানভাস / মনের যা ইচ্ছা তাই করার স্বাধীনতা / মনের মুক্তি",
    link: "https://www.discoverymind.xyz/2024/10/psychological-mind-canvas.html",
  },

  {
    text: " আমরা কতোটুকু দেখতে ভালোবাসি? [অবজারভেশন / পর্যবেক্ষণ / দৃষ্টিসীমা / দৃষ্টিসীমার সীমাবদ্ধতা / আমাদের চোখের দৃষ্টিসীমার সাইকোলজিক্যাল এনালাইসিস",
    link: "https://www.discoverymind.xyz/2024/10/how-much-we-can-loook-over.html",
  },

  {
    text: " প্রিয়জনের বন্ধন কিভাবে সুস্থভাবে টিকিয়ে রাখবেন? [সম্পর্ক / বন্ধন / রিলেশনশীপ / ভালোবাসা / সুস্পর্ক রক্ষা করার উপায়",
    link: "https://www.discoverymind.xyz/2024/10/healthy-relationship-conditions.html",
  },

  {
    text: " আপনার জীবনের আর কতোটুকু সময় বাকি আছে? [জীবনকাল / আয়ু / মৃত্যু / জীবন ও মৃত্যুর সময়সীমা উপলব্ধিতে সাইকোলজিক্যাল সিগনিফিকেন্স",
    link: "https://www.discoverymind.xyz/2024/10/how-much-time-remaining-on-your-life.html",
  },

  {
    text: " জীবনের রেসে না দৌড়েও জেতা যায় [জীবনের রেস / জীবনের দৌড় / পরিস্থিতির সঠিক ব্যবহার / লাইফ হ্যাকিং / জীবনে এগিয়ে যাওয়ার উপায়",
    link: "https://www.discoverymind.xyz/2024/10/race-of-life-without-run.html",
  },

  {
    text: " আপনার জীবনে সময়ের মূল্য উপলব্ধি করুন [সময় / সময়ের মূল্য / সময়ের মূল্য উপলব্ধি / মুহূর্ত / সময়ের গতিশীলতা",
    link: "https://www.discoverymind.xyz/2024/10/time-value-of-life-realisation.html",
  },

  {
    text: " Binaural Beats এর মাধ্যমে মন নিয়ন্ত্রণ করুন [সুরের মাধ্যমে মন নিয়ন্ত্রণ / সুরের মাধ্যমে মনের বিকাশ / সুরের মাধ্যমে ব্রেইন ডেভেলপমেন্ট / বাইনারাল বিটস / আলফা / বিটা / ডেলটা / গামা / থেটা / ব্রেইন ওয়েভ মিউজিক / বাইনারাল বিট জেনারেটর / বাইনারাল বিটস মিউজিক এর সাইকোলজিক্যাল উপযোগীতা",
    link: "https://www.discoverymind.xyz/2024/10/mind-control-with-binaural-beats-music.html",
  },

  {
    text: " ঘুমের মাঝেই আপনার বাস্তব জীবনের স্বপ্ন'কে সত্যি করুন [ ঘুমের মাঝে স্বপ্ন পূরণ / স্বপ্ন / ড্রিম নোট / অবচেতন মন / অচেতন মন / স্বপ্ন পূরণ / ইচ্ছাপূরণ / জীবনের লক্ষ্য বা স্বপ্ন পূরণের সাইকোলজিক্যাল উপায়",
    link: "https://www.discoverymind.xyz/2024/10/success-your-dream-with-dream-note.html",
  },

  {
    text: " Mind Reading Game এর মাধ্যমে অন্যের মনের কথা জানার উপায় [মাইন্ড রিডিং / মাইন্ড রিডিং গেইম / অন্যের মনের কথা জানার উপায় / অন্যের মন পড়া / মাইন্ড রিডিং কৌশল",
    link: "https://www.discoverymind.xyz/2024/10/mind-reading-game.html",
  },

  {
    text: " আসুন সঠিকভাবে Thinking করতে শিখি [ চিন্তা / সঠিকভাবে চিন্তা করার উপায় / ফলপ্রসূ উপায়ে চিন্তার মাধ্যমে সফলতা লাভ / সঠিকভাবে চিন্তার মাধ্যমে সমস্যা সমাধান",
    link: "https://www.discoverymind.xyz/2024/10/psychologically-right-thinking-method.html",
  },

  {
    text: " Mind Math এর মাধ্যমে আপনার জীবনের সমস্যা সমাধানের উপায় খুঁজে পান [ মনের অংক / সমস্যা সমাধানের গণিত / সমস্যা সমাধানের বিভিন্ন উপায় / বিপদ মুক্তির পথ",
    link: "https://www.discoverymind.xyz/2024/10/mind-math.html",
  },

  {
    text: " Mind Clock এর মাধ্যমে জীবনে সফলতার অধ্যায়ন করুন [ জীবনে সফলতা লাভ করার উপায় / সফলতা লাভ করার নিয়ম / সফলতা লাভের সাধনা / জীবনে সফল হওয়ার পর্যায়ভিত্তিক অনুশীলনী",
    link: "https://www.discoverymind.xyz/2024/10/mind-clock-for-success.html",
  },

  {
    text: " Moon Meditation এর মাধ্যমে সুখ ও সফলতা লাভে প্রয়াসী হউন [ ধ্যান / মেডিটেশান / অবচেতন মন / সাবকনশিয়াস মাইন্ড / অবচেতন মনের ক্ষমতা / মেডিটেশনের মাধ্যমে সফলতা লাভ",
    link: "https://www.discoverymind.xyz/2024/10/moon-meditation.html",
  },

  {
    text: " সাইকোলজিক্যালি অমরত্ব লাভ করুন [অমরত্ব লাভ / মৃত্যুকে জয় করার উপায় / অমরত্ব লাভের সাইকোলজিক্যাল উপায় / মাইন্ড ডাউনলোড / মাইন্ড ট্রান্সপ্লান্টেশান",
    link: "https://www.discoverymind.xyz/2024/10/psychological-immortality.html",
  },

  {
    text: " দুরারোগ্য রোগ সমাধানে Zero Therapy [ দুরারোগ্য রোগের সমাধান / প্লাসিবো ইফেক্ট / Zero Therapy / দুরারোগ্য রোগ সমাধানে সাইকোলজিক্যাল পন্থা",
    link: "https://www.discoverymind.xyz/2024/10/zero-therapy.html",
  },

  {
    text: " Psychological Relief এর মাধ্যমে যাবতীয় মানসিক অশান্তি হতে স্থায়ীভাবে মুক্তিলাভ করুন [সাইকোলজিক্যাল রিলিফ / সাইকোলজিক্যাল মুক্তি / মানসিক অশান্তি দূর করার উপায় / জীবনের সমস্যার সমাধান",
    link: "https://www.discoverymind.xyz/2024/10/psychological-relief.html",
  },

  {
    text: " আনকনশিয়াস মাইন্ড এক্সেস করুন [অচেতন মন / অচেতন মন নিয়ন্ত্রণ / অচেতন মনের সঠিক ব্যবহার / অচেতন মনের মাধ্যমে সফলতা লাভ",
    link: "https://www.discoverymind.xyz/2024/10/unconscious-mind-access.html",
  },

  {
    text: " Magic Mind এর মাধ্যমে আপনার মনের সুপ্ত অতীন্দ্রিয় ক্ষমতা লাভ [অবচেতন মনের বিকাশের মাধ্যমে অতীন্দ্রিয় অতীন্দ্রিয় ক্ষমতা উপলব্ধির কৌশল",
    link: "https://www.discoverymind.xyz/2024/10/psychological-magic-mind.html",
  },

  {
    text: " সাইকোলজিক্যাল টাইম ট্রাভেল [সময় ভ্রমণ / সময় উপলব্ধি / টাইম-সাইকোলজি রিয়েলাইজেশান / সাইকোলজিক্যাল সময় নিয়ন্ত্রণ / অতীত সময় ভ্রমণ / বর্তমান সময় যাপন / ভবিষ্যত সময় ভ্রমণ",
    link: "https://www.discoverymind.xyz/2024/10/psychological-time-travel.html",
  },

  {
    text: " চলুন Music Mind এর মাধ্যমে Brain ডেভেলপমেন্ট করি [ সুরের মাধ্যমে সাইকোলজিক্যাল ডেভেলপমেন্ট / সুরের মাধ্যমে মানসিক উন্নয়ন / বাইনারাল বিটস / ব্রেইন ওয়েভ মিউজিক",
    link: "https://www.discoverymind.xyz/2024/10/brain-development-with-music-mind.html",
  },

  {
    text: " সাইকোলজিক্যাল টেলিপ্যাথিক Mind Wave এর মাধ্যমে মনের ভাব আদান প্রদান করুন [ টেলিপ্যাথি / সাইকোলজিক্যালি মনের ভাবের আদান প্রদান",
    link: "https://www.discoverymind.xyz/2024/10/psychological-telepathic-mind-wave-system.html",
  },

  {
    text: " আসুন সাইকোলজিক্যাল Mind Reading শিখে নিই [ মাইন্ড রিডিং / অন্যের মনের কথা জানার উপায় / মাইন্ড রিডিং এর কৌশল / মাইন্ড রিড করার উপায় / মাইন্ড রিডিং এর সাইকোলজিক্যাল কৌশল / মাইন্ড রিডিং এর নিয়ম / মাইন্ড রিড করার উদাহরণ",
    link: "https://www.discoverymind.xyz/2024/10/psychological-mind-reading.html",
  },

  {
    text: " সাইকোলজির ভুবনে নিজেকে নতুন করে আবিষ্কার করুন [সাইকোলজিক্যাল বিশ্লেষণ / আমাদের চিন্তা জগৎ / ফ্রি মাইন্ড / আরাধনা / উৎসব / শয়তান / মৃত্যু",
    link: "https://www.discoverymind.xyz/2024/10/discover-yourself-with-psychology.html",
  },

  {
    text: " আপনার জীবনের পরম বন্ধু Mind Master কে আবিষ্কার করুন [মনের বন্ধু / মনের শক্তি / সাইকোলজিক্যাল গাইড / মন নিয়ন্ত্রণ / মনকে সঠিকভাবে পরিচালনা / মনের পরিচালক",
    link: "https://www.discoverymind.xyz/2024/10/discover-your-mind-master.html",
  },

  {
    text: " আধ্যাত্মিকতার মনস্তাত্ত্বিক বিশ্লেষণ [আধ্যাত্মিকতার সাইকোলজিক্যাল এনালাইসিস / সাইকোলজিক্যালি আধ্যাত্মিকতার ব্যবহার / আধ্যাত্মিকতার সাইকোলজিক্যাল ব্যবহারিক উদাহরণ / ডার্ক সাইকোলজি",
    link: "https://www.discoverymind.xyz/2024/10/psychological-analysis-of-spirituality.html",
  },

  {
    text: " জীবন নষ্ট হয়ে গিয়েছে? আসুন নতুন করে জীবনটাকে সাজিয়ে তুলি [লাইফ রিপেয়ারমেন্ট / জীবন সংশোধন / সফল জীবন / জীবনে সফলতা লাভ / জীবনের সমস্যার সমাধান / জীবনকে সুন্দর করার উপায় / সাইকোলজিক্যাল সলিউশন / আত্ম অনুসন্ধান / মন নিয়ন্ত্রণ / দুঃশ্চিতার সমাধান / মুড অফ সলিউশন / মুড সুয়িং সলিউশন / একাকীত্বের সমাধান / ডিপ্রেশন মুক্তি / ইনট্রোভার্ট সমাধান / খারাপ ব্যবহার থেকে দূরে থাকার উপায় / মেজাজ গরম বা উত্তেজিত থাকার সমাধান / নেশার আসক্তি থেকে মুক্তির উপায় / সাইকোলজিক্যাল শক / বাস্তবতার জগতে ফেরা / অবসেশান থেকে মুক্তির উপায়",
    link: "https://www.discoverymind.xyz/2024/10/psychological-life-repair.html",
  },

  {
    text: " সুখ কি? সুখী হওয়ার মনস্তাত্ত্বিক উপায় [সুখ / সুখ এর সংজ্ঞা / সুখ এর মনস্তাত্ত্বিক অবস্থান / সুখ লাভের সূত্র / পরম সুখ লাভ / সুখী মানুষ / সুখী হওয়ার উপায় / সুখ উপলব্ধি",
    link: "https://www.discoverymind.xyz/2024/10/psychology-of-happiness.html",
  },

  {
    text: " জীবনে সফলতা লাভের উপায় [ জীবনের লক্ষ্য নির্ধারণ / জীবনের লক্ষ্য নির্ধারণের উপায় / জীবনের লক্ষ্য নির্ধারণ সূত্র / জীবনের স্বপ্ন পূরণের উপায় / নৈতিক শিক্ষা / মেডিটেশন / ধ্যান / সৌভাগ্য / সৌভাগ্য অর্জন করার উপায় / সময়ের সাথে সাইকোলজি এর সম্পর্ক / আত্মবিশ্বাস / ব্যর্থতা দূর করার উপায়",
    link: "https://www.discoverymind.xyz/2024/10/how-to-successful-in-life.html",
  },

  {
    text: " জীবনের যেকোন সমস্যা সমাধানের মনস্তাত্ত্বিক উপায় [ জীবনের সমস্যা সমাধানে মাইন্ড ম্যাপ / মাইন্ড ম্যাপ ইউটিলাইজেশান / সমস্যা সমাধানের সাইকোলজিক্যাল উপায় / বিপদ মুক্তির উপায় / সমস্যা সমাধানে পথ",
    link: "https://www.discoverymind.xyz/2024/10/psychological-solution.html",
  },

  {
    text: " জীবন কি? জীবনের সাইকোলজিক্যাল উপলব্ধি [জীবন কি / জীবনের সাইকোলজিক্যাল উপলব্ধি / জীবনের মূল কি / জীবনের উদ্দেশ্য / জীবনের সাইকোলজিক্যাল দর্শন",
    link: "https://www.discoverymind.xyz/2024/10/psychological-realization-of-life.html",
  },

  {
    text: " এক সাইকোলজিক্যাল ঈশ্বর অনুসন্ধান [ঈশ্বর কে / ঈশ্বর কি / ঈশ্বর ধারনা / ঈশ্বর চেতনা / সাইকোলজিক্যাল ঈশ্বর / সাইকোলজিক্যাল ঈশ্বরের উপযোগীতা",
    link: "https://www.discoverymind.xyz/2024/10/psychological-god.html",
  },

  {
    text: " মোটিভেশানের পেছনের সাইকোলজিক্যাল কলকব্জা [মোটিভেশান কি / মোটিভেশান কিভাবে কাজ করে / অপ্টিক্যাল ভিজ্যুয়াল মোটিভেশান / অডিটরীয়াল মোটিভেশান / সিক্স সেন্স মোটিভেশান / সাইকো কেমিক্যাল মোটিভেশান / রিভার্স সাইকোলজিক্যাল মোটিভেশান / মোটিভেশান কেন কাজ করে না / মেডিটেশান ও মোটিভেশন / সঠিক মোটিভেশানে সফলতা লাভ / কার্যকরী মোটিভেশান",
    link: "https://www.discoverymind.xyz/2024/10/psychology-of-motivation.html",
  },
];

const resultShow = document.querySelector(".all-result");

// Loop through each object in the array
allResults.forEach((result) => {
  const li = document.createElement("li"); // Create an li element
  const a = document.createElement("a"); // Create an a element
  a.href = result.link; // Set the href to the link in the object
  a.textContent = result.text; // Set the link text
  a.target = "_blank"; // Optional: open link in a new tab
  li.appendChild(a); // Append a to li
  resultShow.appendChild(li); // Append li to the ul
});
showBtn.addEventListener("click", () => {
  showResult.style.display = "flex";
});
