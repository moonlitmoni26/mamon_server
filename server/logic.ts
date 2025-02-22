/**
 * ফাংশন: serverer_thikana
 * বর্ণনা: এই ফাংশন সার্ভারের ঠিকানা প্রদান করে যেখানে আইপি এবং পোর্ট থাকে।
 *
 * @returns {Object} - একটি অবজেক্ট যার মধ্যে হোস্টনেম ও পোর্ট আছে।
 */
export function serverer_thikana() {
  const address = {
    hostname: "192.168.0.111", // স্থানীয় সার্ভারের আইপি ঠিকানা
    port: 7797, // পোর্ট নম্বর
  };
  return address;
}

/**
 * ফাংশন: number_jog_koro
 * বর্ণনা: এই ফাংশন দুটি সংখ্যা ইনপুট হিসেবে গ্রহণ করে এবং তাদের যোগফল প্রদান করে।
 *
 * @param {number} number_1 - প্রথম সংখ্যা।
 * @param {number} number_2 - দ্বিতীয় সংখ্যা।
 * @returns {number} - দুটি সংখ্যার যোগফল।
 *
 * @example
 * ```ts
 * console.log(number_jog_koro(5, 10)); // আউটপুট: 15
 * console.log(number_jog_koro(-3, 7)); // আউটপুট: 4
 * ```
 */
export function number_jog_koro(number_1: number, number_2: number) {
  const sum = number_1 + number_2; // দুটি সংখ্যার যোগফল নির্ণয়
  return sum;
}

/**
 * ফাংশন: dokaner_bill_firiyao
 * বর্ণনা: এই ফাংশন দোকানের বিল সংক্রান্ত তথ্য সহ JSON প্রতিক্রিয়া প্রদান করে।
 * এটি `name` এবং `total_amount` নামে দুটি ফিল্ড সম্বলিত একটি অবজেক্ট ফিরিয়ে দেয়।
 *
 * @returns {Response} - JSON স্ট্রিং সম্বলিত HTTP প্রতিক্রিয়া।
 */
export function dokaner_bill_firiyao() {
  const name = "jalebi bi"; // একটি নির্দিষ্ট নাম সেট করা
  const total_amount = number_jog_koro(3, 7); // ৩ এবং ৭ যোগ করে মান নির্ধারণ করা
  const response_data = { name: name, total_amount: total_amount }; // অবজেক্ট তৈরি করা
  const response_string = JSON.stringify(response_data); // অবজেক্টকে JSON স্ট্রিং এ রূপান্তর
  const http_status_code = { status: 200 }; // HTTP প্রতিক্রিয়ার স্ট্যাটাস কোড
  return new Response(response_string, http_status_code); // HTTP প্রতিক্রিয়া তৈরি
}

// ফাংশনটিকে একটি ভেরিয়েবলে সংরক্ষণ
const add_function = number_jog_koro;

// ফাংশনটি ৩ এবং ৭ মান সহ কল করা এবং ফলাফল সংরক্ষণ
const sum_result = number_jog_koro(3, 7);

// ফাংশনটি ভেরিয়েবল ব্যবহার করে কল করা
const sum_result_using_variable = add_function(3, 7);

// ফাংশনের রেফারেন্স কনসোলে দেখানো
console.log(add_function); // আউটপুট: ফাংশন রেফারেন্স

// ফাংশনের আউটপুট কনসোলে দেখানো
console.log(sum_result); // আউটপুট: 10

// ভেরিয়েবলের মাধ্যমে ফাংশন কল করার আউটপুট কনসোলে দেখানো
console.log(sum_result_using_variable); // আউটপুট: 10
