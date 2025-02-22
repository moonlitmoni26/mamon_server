import { assertEquals } from "@std/assert";
import {
  dokaner_bill_firiyao,
  number_jog_koro,
  serverer_thikana,
} from "./logic.ts";

Deno.test("serverer_thikana - সঠিক সার্ভার ঠিকানা ফেরত দিচ্ছে", () => {
  const expected = { hostname: "192.168.0.111", port: 7797 };
  assertEquals(serverer_thikana(), expected);
});

Deno.test("number_jog_koro - দুটি সংখ্যা সঠিকভাবে যোগ হচ্ছে", () => {
  assertEquals(number_jog_koro(5, 10), 15);
  assertEquals(number_jog_koro(-3, 7), 4);
});

Deno.test("dokaner_bill_firiyao - সঠিক JSON প্রতিক্রিয়া প্রদান করছে", async () => {
  const response = dokaner_bill_firiyao();
  const text = await response.text();
  const data = JSON.parse(text);
  assertEquals(data, { name: "jalebi bi", total_amount: 10 });
  // HTTP status code টেস্ট
  assertEquals(response.status, 200);
});
