export type Category =
  | "Any"
  | "Misc"
  | "Programming"
  | "Dark"
  | "Pun"
  | "Spooky"
  | "Christmas";

export type FlagKeys =
  | "nfsw"
  | "religious"
  | "political"
  | "racist"
  | "sexist"
  | "explicit";

export type Flag = {
  nfsw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
};

export type Joke = {
  id: number;
  safe: boolean;
  lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
  type: "single" | "twopart";
  category: Category;
  setup?: string;
  delivery?: string;
  joke?: string;
  flags: Flag;
};
