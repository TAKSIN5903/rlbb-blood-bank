# DFSL — Donate for Save Life (প্রাথমিক সংস্করণ)

## এখন কী কাজ করে
- মোবাইল-উপযোগী হোমপেজ
- বিভাগ → জেলা → উপজেলা cascading filter (প্রাথমিক নমুনা ভৌগোলিক ডেটা)
- ব্লাড গ্রুপ ও নাম দিয়ে ডেমো সার্চ
- ডোনার নিবন্ধন ফর্মের UI
- স্পষ্টভাবে চিহ্নিত fictional sample donor cards

## গুরুত্বপূর্ণ
এটি এখনো পূর্ণ কার্যকর সাইট নয়। ফর্ম কোনো তথ্য সংরক্ষণ করে না, বাস্তব ডোনারের যোগাযোগের তথ্য নেই, এবং প্রশাসনিক অনুমোদন চালু হয়নি। বাস্তব ব্যবহারকারীর ব্যক্তিগত তথ্য এই সংস্করণে যোগ করবেন না।

## কম্পিউটারে চালানো
1. ZIP ফাইল Extract করুন।
2. `index.html` ফাইলে ডাবল ক্লিক করুন অথবা VS Code-এ ফোল্ডার খুলে Live Server দিয়ে চালান।
3. `app.js`-এ বিভাগ/জেলার ডেটা বর্তমানে আংশিক ডেমো। বাস্তব চালুর আগে সম্পূর্ণ ও যাচাইকৃত প্রশাসনিক ডেটা যোগ করতে হবে।

## পরের ধাপ
Supabase project তৈরি করে SQL schema এবং Row Level Security policy যোগ করতে হবে। তারপর Auth, ডোনার submission, admin approval, approved-only directory, profile update/delete এবং contact-consent যুক্ত করতে হবে।

## নিরাপত্তা
- Supabase frontend-এ শুধু publishable/anon key ব্যবহার করবেন এবং RLS policy সঠিকভাবে সেট করবেন।
- `service_role` বা secret key কখনো HTML/JavaScript/GitHub repository-তে রাখবেন না।
- বাস্তব ফোন নম্বর প্রকাশের আগে স্পষ্ট সম্মতি নিন।
- admin approval কখনো শুধু browser-side JavaScript দিয়ে নিয়ন্ত্রণ করবেন না।
