// Complete Bangladesh Geo Data (8 Divisions & All 64 Districts with Upazilas)
const geoData = {
    "ঢাকা": {
        "ঢাকা": ["ধানমন্ডি", "মিরপুর", "উত্তরা", "গুলшан", "মোহাম্মদপুর", "সাভার", "কেরানীগঞ্জ", "ধামরাই", "নবাবগঞ্জ", "তেজগাঁও", "রমনা", "লালবাগ"],
        "গাজীপুর": ["গাজীপুর সদর", "কালীগঞ্জ", "কালিয়াকৈর", "শ্রীপুর", "কাপাসিয়া"],
        "নারায়ণগঞ্জ": ["নারায়ণগঞ্জ সদর", "রূপগঞ্জ", "সোনারগাঁও", "আড়াইহাজার", "বন্দর"],
        "টাঙ্গাইল": ["টাঙ্গাইল সদর", "মির্জাপুর", "ঘাটাইল", "কালিহাতী", "সখিপুর", "মধুপুর", "বাসাইল", "দেলদুয়ার", "ভূঞাপুর", "নাগরপুর", "সাদুল্লাপুর"],
        "কিশোরগঞ্জ": ["কিশোরগঞ্জ সদর", "ভৈরব", "হোসেনপুর", "বাজিতপুর", "কুলিয়ারচর", "করিমগঞ্জ", "তাড়াইল", "পাকুন্দিয়া", "কاتیادی", "অষ্টগ্রাম", "ইটনা", "মিঠামইন"],
        "মানিকগঞ্জ": ["মানিকগঞ্জ সদর", "সিংগাইর", "সাটুরিয়া", "শিবালয়", "ঘিওর", "দৌলতপুর", "হরিরামপুর"],
        "মুন্সিগঞ্জ": ["মুন্সিগঞ্জ সদর", "শ্রীনগর", "সিরাজদিখান", "গজারিয়া", "টঙ্গীবাড়ি", "লৌহজং"],
        "নরসিংদী": ["নরসিংদী সদর", "পলাশ", "শিবপুর", "রায়পুরা", "মনোহরদী", "বেলাবো"],
        "ফরিদপুর": ["ফরিদপুর সদর", "মধুখালী", "বোয়ালমারী", "ভাংগা", "চরভদ্রাসন", "সালথা", "নগরকান্দা", "আলফাডাঙ্গা", "বোচাগঞ্জ"],
        "মাদারীপুর": ["মাদারীপুর সদর", "শিবচর", "কালকিনি", "রাজৈর", "ডাসার"],
        "গোপালগঞ্জ": ["গোপালগঞ্জ সদর", "টুঙ্গিপাড়া", "কোটালীপাড়া", "কাশিয়ানী", "মুকসুদপুর"],
        "রাজবাড়ী": ["রাজবাড়ী সদর", "গোয়ালন্দ", "পাংশা", "কালুখালী", "বালিয়াকান্দি"],
        "শরীয়তপুর": ["শরীয়তপুর সদর", "নড়িয়া", "জাজিরা", "গোসাইরহাট", "ভেদরগঞ্জ", "ডামুড্যা"]
    },
    "চট্টগ্রাম": {
        "চট্টগ্রাম": ["কোতোয়ালী", "পাঁচলাইশ", "হালিশহর", "পটিয়া", "হাটহাজারী", "সীতাকুণ্ড", "মিরসরাই", "আন্দকান্দি", "বোয়ালখালী", "আনোয়ারা", "চন্দনাইশ", "সাতকানিয়া", "লোহাগাড়া", "বাঁশখালী", "ফটিকছড়ি", "রাউজান", "রাঙ্গুনিয়া"],
        "কক্সবাজার": ["কক্সবাজার সদর", "উখিয়া", "টেকনাফ", "চকোরিয়া", "মহেশখালী", "পেকুয়া", "রামু", "kutubdia"],
        "কুমিল্লা": ["কুমিল্লা সদর", "লাকসাম", "দাউদকান্দি", "চৌদ্দগ্রাম", "দেবিদ্বার", "ব্রাহ্মণপাড়া", "বুড়িচং", "চান্দিনা", "হোমনা", "মুরাদনগর", "নাঙ্গলকোট", "তিতাস", "মেঘনা", "মনোহরগঞ্জ"],
        "ব্রাহ্মণবাড়িয়া": ["ব্রাহ্মণবাড়িয়া সদর", "আশুগঞ্জ", "নবীনগর", "কসবা", "সরাইল", "আখাউড়া", "বাঞ্ছারামপুর", "বিজয়নগর", "নাসিরনগর"],
        "চাঁদপুর": ["চাঁদপুর সদর", "হাজীগঞ্জ", "মতলব উত্তর", "মতলব দক্ষিণ", "শাহরাস্তি", "ফরিদগঞ্জ", "হাইমচর", "কচুয়া"],
        "নোয়াখালী": ["নোয়াখালী সদর", "বেগমগঞ্জ", "চাটখিল", "কোম্পানীগঞ্জ", "সেনবাগ", "सुবর্ণচর", "কবিরহাট", "হাতিয়া", "চাটখিল"],
        "ফেনী": ["ফেনী সদর", "দাগনভূঞা", "ছাগলনাইয়া", "সোনারগাজী", "পরশুরাম", "ফুলগাজী"],
        "লক্ষ্মীপুর": ["লক্ষ্মীপুর সদর", "রায়পুর", "রামগঞ্জ", "কমলনগর", "রামগতি"],
        "রাঙ্গামাটি": ["রাঙ্গামাটি সদর", "কাপ্তাই", "কাউখালী", "বাঘাইছড়ি", "বরকল", "লংগদু", "রাজস্থলী", "বেলাড়িছড়ি", "জুরাছড়ি", "নানিয়ারচর"],
        "বান্দরবান": ["বান্দরবান সদর", "রুমা", "থানচি", "রোয়াংছড়ি", "লামা", "আলীকদম", "নাইক্ষ্যংছড়ি"],
        "খাগড়াছড়ি": ["খাগড়াছড়ি সদর", "দীঘিনালা", "রামগড়", "মহিউদ্দিন", "পানছড়ি", "মাটিরাঙ্গা", "লক্ষ্মীছড়ি", "মানিকছড়ি"]
    },
    "রাজশাহী": {
        "রাজশাহী": ["বোয়ালিয়া", "রাজপাড়া", "পবা", "বাঘা", "চারঘাট", "মোহনপুর", "তানোর", "দুর্গাপুর", "বাগমারা"],
        "বগুড়া": ["বগুড়া সদর", "শেরপুর", "শিবগঞ্জ", "ধুনট", "গাবতলী", "সারিয়াকান্ডি", "কাহালু", "নন্দীগ্রাম", "শাজাহানপুর", "দুপচাঁচিয়া", "আদমদীঘি"],
        "পাবনা": ["পাবনা সদর", "ঈশ্বরদী", "বেড়া", "সাঁথিয়া", "সুজানগর", "চাটমোহর", "ভাঙ্গুড়া", "ফরিদপুর", "আটঘরিয়া"],
        "সিরাজগঞ্জ": ["সিরাজগঞ্জ সদর", "শাহজাদপুর", "উল্লাপাড়া", "কাজীপুর", "বেলকুচি", "চৌহালি", "রায়গঞ্জ", "তারাস", "কামারখন্দ"],
        "নওগাঁ": ["নওগাঁ সদর", "মহাদেবপুর", "পোরশা", "পত্নীতলা", "ধামইরহাট", "বদলগাছী", "মান্দা", "আত্রাই", "রানীনগর", "নিয়ামতপুর", "সাপাহার"],
        "নাটোর": ["নাটোর সদর", "সিংড়া", "বড়াইগ্রাম", "লালপুর", "গুরুদাসপুর", "বাগাতিপাড়া", "নলডাঙ্গা"],
        "চাঁপাইনবাবগঞ্জ": ["চাঁপাইনবাবগঞ্জ সদর", "শিবগঞ্জ", "গোমস্তাপুর", "নাচোল", "ভোলাহাট"],
        "জয়পুরহাট": ["জয়পুরহাট সদর", "পাঁচবিবি", "ক্ষেতলাল", "আক্কেলপুর", "কাললাই"]
    },
    "খুলনা": {
        "খুলনা": ["খুলনা সদর", "সোনাডাঙ্গা", "খালিশপুর", "রূপসা", "ডুমুরিয়া", "বটিয়াঘাটা", "দাকোপ", "পাইকগাছা", "দিঘলিয়া", "তেরখাদা", "কয়রা"],
        "যশোর": ["যশোর সদর", "ঝিকরগাছা", "শার্শা", "মণিরামপুর", "অভয়নগর", "বাঘারপাড়া", "কেশবপুর", "চৌগাছা"],
        "কুষ্টিয়া": ["কুষ্টিয়া সদর", "কুমারখালী", "ভেড়ামারা", "মিরপুর", "দৌলতপুর", "খোকসা"],
        "সাতক্ষীরা": ["সাতক্ষীরা সদর", "শ্যামনগর", "কালীগঞ্জ", "তালা", "আশাশুনি", "দেবহাটা", "কলারোয়া"],
        "বাগেরহাট": ["বাগেরহাট সদর", "মোংলা", "রামপাল", "মোড়েলগঞ্জ", "শরণখোলা", "চিতলমারী", "ফকিরহাট", "মোল্লাহাট", "kachua"],
        "ঝিনাইদহ": ["ঝিনাইদহ সদর", "কালীগঞ্জ", "শৈলকুপা", "কোটচাঁদপুর", "মহেশপুর", "হরিণাকুন্ডু"],
        "মেহেরপুর": ["মেহেরপুর সদর", "গাংনী", "মুজিবনগর"],
        "নড়াইল": ["নড়াইল সদর", "লোহাগড়া", "কালিয়া"],
        "মাগুরা": ["মাগুরা সদর", "মহম্মদপুর", "শালিখা", "শ্রীপুর"],
        "চুয়াডাঙ্গা": ["চুয়াডাঙ্গা সদর", "আলমডাঙ্গা", "দামুড়হুদা", "জীবননগর"]
    },
    "বরিশাল": {
        "বরিশাল": ["বরিশাল সদর", "বাকেরগঞ্জ", "গৌরনদী", "উজিরপুর", "বাবুগঞ্জ", "আগৈলঝাড়া", "মেহেন্দিগঞ্জ", "মুলাদী", "হিজলা", "বানারীপাড়া"],
        "পটুয়াখালী": ["পটুয়াখালী সদর", "গলাচিপা", "কলাপাড়া", "বাউফল", "দশমিনা", "মির্জাগঞ্জ", "রাঙ্গাবালী", "দুমকি"],
        "ভোলা": ["ভোলা সদর", "চরফ্যাশন", "বোরহানউদ্দিন", "লালমোহন", "তজুমদ্দিন", "মনপুরা", "দৌলতখান"],
        "পিরোজপুর": ["পিরোজপুর সদর", "মঠবাড়িয়া", "নেছারাবাদ", "ভান্ডারিয়া", "কাউখালী", "ইন্দুরকানী", "জিয়ানগর"],
        "বরগুনা": ["বরগুনা সদর", "আমতলী", "পাথরঘাটা", "বেতাগী", "বামনা", "তালতলী"],
        "ঝালকাঠি": ["ঝালকাঠি সদর", "নলছিটি", "কাঠালিয়া", "রাজাপুর"]
    },
    "সিলেট": {
        "সিলেট": ["সিলেট সদর", "গোলাপগঞ্জ", "বিয়ানীবাজার", "জৈন্তাপুর", "কোম্পানীগঞ্জ", "কানাইঘাট", "গোয়াইনঘাট", "বিশ্বনাথ", "ফেঞ্চুগঞ্জ", "দক্ষিণ সুরমা", "জকিগঞ্জ"],
        "মৌলভীবাজার": ["মৌলভীবাজার সদর", "শ্রীমঙ্গল", "কুলাউড়া", "কমলগঞ্জ", "রাজনগর", "বড়লেখা", "জুড়ী"],
        "হবিগঞ্জ": ["হবিগঞ্জ সদর", "মাধবপুর", "চুনারুঘাট", "নবীগঞ্জ", "বাহুবল", "আজমিরীগঞ্জ", "লাখাই", "বানিয়াচং", "শায়েস্তাগঞ্জ"],
        "সুনামগঞ্জ": ["সুনামগঞ্জ সদর", "ছাতক", "জগন্নাথপুর", "তাহিরপুর", "ধর্মপাশা", "বিশ্বম্ভরপুর", "দিরাই", "শাল্লা", "শান্তিগঞ্জ", "দোয়ারাবাজার", "মধ্যনগর"]
    },
    "রংপুর": {
        "রংপুর": ["রংপুর সদর", "মিঠাপুকুর", "পীরগঞ্জ", "কাউনিয়া", "তারাগঞ্জ", "বদরগঞ্জ", "পীরগাছা", "Haragachh"],
        "দিনাজপুর": ["দিনাজপুর সদর", "ফুলবাড়ী", "বীরগঞ্জ", "পার্বতীপুর", "বিরামপুর", "নবাবগঞ্জ", "ঘোড়াঘাট", "হাকিমপুর", "চিরিরবন্দর", "কাহারোল", "ববাগঞ্জ"],
        "গাইবান্ধা": ["গাইবান্ধা সদর", "গোবিন্দগঞ্জ", "পলাশবাড়ী", "সাঘাটা", "ফুলছড়ি", "সুন্দরগঞ্জ", "সাদুল্লাপুর"],
        "কুড়িগ্রাম": ["কুড়িগ্রাম সদর", "উলিপুর", "নাগেশ্বরী", "ভুরুঙ্গামারী", "রাজারহাট", "ফুলবাড়ী", "চিলমারী", "রৌমারী", "চর রাজিবপুর"],
        "নীলফামারী": ["নীলফামারী সদর", "সৈয়দপুর", "ডিমলা", "জলঢাকা", "কিশোরগঞ্জ", "ডোমার"],
        "পঞ্চগড়": ["পঞ্চগড় সদর", "তেঁতুলিয়া", "বোদা", "আটোয়ারী", "দেবীগঞ্জ"],
        "ঠাকুরগাঁও": ["ঠাকুরগাঁও সদর", "পীরগঞ্জ", "বালিয়াডাংগী", "রানীশংকৈল", "হরিপুর"],
        "লালমনিরহাট": ["লালমনিরহাট সদর", "পাটগ্রাম", "হাতীবান্ধা", "কালীগঞ্জ", "আদিতমারী"]
    },
    "ময়মনসিংহ": {
        "ময়মনসিংহ": ["ময়মনসিংহ সদর", "মুক্তাগাছা", "ফুলবাড়ীয়া", "ত্রিশাল", "গফরগাঁও", "ভালুকা", "হালুয়াঘাট", "ধোবাউড়া", "নান্দাইল", "ঈশ্বরগঞ্জ", "ফুলপুর", "তারাকান্দা"],
        "জামালপুর": ["জামালপুর সদর", "সরিষাবাড়ী", "মেলান্দহ", "ইসলামপুর", "বকশীগঞ্জ", "দেওয়ানগঞ্জ", "মাদারগঞ্জ"],
        "শেরপুর": ["শেরপুর সদর", "নালীতাবাড়ী", "শ্রীবরদী", "ঝিনাইগাতী", "নকলা"],
        "নেত্রকোণা": ["নেত্রকোণা সদর", "মোহনগঞ্জ", "দুর্গাপুর", "কলমাকোটা", "পূর্বধলা", "কেন্দুয়া", "আটপাড়া", "বারহাট্টা", "মদন", "খালিয়াজুরী"]
    }
};

// Initial Mock Donors
const initialDonors = [
    {
        id: "1",
        name: "মোঃ রফিকুল ইসলাম",
        division: "ঢাকা",
        district: "ঢাকা",
        upazila: "ধানমন্ডি",
        blood: "A+",
        phone: "01711000000",
        whatsapp: "01711000000",
        lastDate: "2025-10-15",
        height: "5 ft 8 in",
        weight: "70"
    },
    {
        id: "2",
        name: "অনন্যা চৌধুরী",
        division: "চট্টগ্রাম",
        district: "চট্টগ্রাম",
        upazila: "পাঁচলাইশ",
        blood: "O+",
        phone: "01819111222",
        whatsapp: "01819111222",
        lastDate: "2026-02-01",
        height: "5 ft 4 in",
        weight: "58"
    }
];

// Load Donors from LocalStorage or Init Defaults
let donors = JSON.parse(localStorage.getItem('rlbb_donors')) || initialDonors;

// App Init
document.addEventListener('DOMContentLoaded', () => {
    populateDivisions();
    renderDonors();
});

function saveToLocalStorage() {
    localStorage.setItem('rlbb_donors', JSON.stringify(donors));
}

// Populate Division Dropdowns
function populateDivisions() {
    const searchDiv = document.getElementById('search-division');
    const regDiv = document.getElementById('reg-division');
    
    Object.keys(geoData).forEach(div => {
        searchDiv.add(new Option(div, div));
        regDiv.add(new Option(div, div));
    });
}

// Cascading Dropdowns for Search Filter
function onSearchDivisionChange() {
    const div = document.getElementById('search-division').value;
    const distSelect = document.getElementById('search-district');
    const upaSelect = document.getElementById('search-upazila');

    distSelect.innerHTML = '<option value="">সকল জেলা</option>';
    upaSelect.innerHTML = '<option value="">সকল উপজেলা</option>';
    upaSelect.disabled = true;

    if (div && geoData[div]) {
        distSelect.disabled = false;
        Object.keys(geoData[div]).forEach(dist => {
            distSelect.add(new Option(dist, dist));
        });
    } else {
        distSelect.disabled = true;
    }
    renderDonors();
}

function onSearchDistrictChange() {
    const div = document.getElementById('search-division').value;
    const dist = document.getElementById('search-district').value;
    const upaSelect = document.getElementById('search-upazila');

    upaSelect.innerHTML = '<option value="">সকল উপজেলা</option>';

    if (div && dist && geoData[div][dist]) {
        upaSelect.disabled = false;
        geoData[div][dist].forEach(upa => {
            upaSelect.add(new Option(upa, upa));
        });
    } else {
        upaSelect.disabled = true;
    }
    renderDonors();
}

// Cascading Dropdowns for Registration Form
function onRegDivisionChange() {
    const div = document.getElementById('reg-division').value;
    const distSelect = document.getElementById('reg-district');
    const upaSelect = document.getElementById('reg-upazila');

    distSelect.innerHTML = '<option value="">জেলা সিলেক্ট করুন</option>';
    upaSelect.innerHTML = '<option value="">উপজেলা সিলেক্ট করুন</option>';
    upaSelect.disabled = true;

    if (div && geoData[div]) {
        distSelect.disabled = false;
        Object.keys(geoData[div]).forEach(dist => {
            distSelect.add(new Option(dist, dist));
        });
    } else {
        distSelect.disabled = true;
    }
}

function onRegDistrictChange() {
    const div = document.getElementById('reg-division').value;
    const dist = document.getElementById('reg-district').value;
    const upaSelect = document.getElementById('reg-upazila');

    upaSelect.innerHTML = '<option value="">উপজেলা সিলেক্ট করুন</option>';

    if (div && dist && geoData[div][dist]) {
        upaSelect.disabled = false;
        geoData[div][dist].forEach(upa => {
            upaSelect.add(new Option(upa, upa));
        });
    } else {
        upaSelect.disabled = true;
    }
}

// Render Donors
function renderDonors() {
    const searchDiv = document.getElementById('search-division').value;
    const searchDist = document.getElementById('search-district').value;
    const searchUpa = document.getElementById('search-upazila').value;
    const searchBlood = document.getElementById('search-blood-group').value;

    const listContainer = document.getElementById('donor-list');
    listContainer.innerHTML = '';

    const filtered = donors.filter(d => {
        if (searchDiv && d.division !== searchDiv) return false;
        if (searchDist && d.district !== searchDist) return false;
        if (searchUpa && d.upazila !== searchUpa) return false;
        if (searchBlood && d.blood !== searchBlood) return false;
        return true;
    });

    document.getElementById('donor-count').innerText = `${filtered.length} জন`;

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #777; padding: 40px 0;">কোনো রক্তদাতা খুঁজে পাওয়া যায়নি।</div>`;
        return;
    }

    filtered.forEach(d => {
        const { statusText, statusClass } = getDonationStatus(d.lastDate);
        const card = document.createElement('div');
        card.className = 'donor-card';
        card.innerHTML = `
            <div class="blood-badge">${d.blood}</div>
            <div class="donor-name">${escapeHtml(d.name)}</div>
            <div class="donor-info"><i class="fa-solid fa-location-dot icon-red"></i> ${d.upazila}, ${d.district}, ${d.division}</div>
            <div class="donor-info"><i class="fa-solid fa-calendar-day icon-red"></i> শেষ দান: ${d.lastDate || 'তথ্য নেই'}</div>
            <div class="donor-info"><i class="fa-solid fa-ruler-vertical icon-red"></i> উচ্চতা: ${d.height || 'N/A'}, ওজন: ${d.weight ? d.weight + ' কেজি' : 'N/A'}</div>
            <div><span class="status-badge ${statusClass}">${statusText}</span></div>
            
            <div class="action-buttons">
                <a href="tel:${d.phone}" class="btn btn-call"><i class="fa-solid fa-phone"></i> কল করুন</a>
                ${d.whatsapp ? `<a href="https://wa.me/${formatWhatsApp(d.whatsapp)}" target="_blank" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> হোয়াটসঅ্যাপ</a>` : ''}
            </div>

            <div class="edit-actions">
                <button onclick="editDonor('${d.id}')" class="btn-sm"><i class="fa-solid fa-pen-to-square"></i> এডিট</button>
                <button onclick="deleteDonor('${d.id}')" class="btn-sm" style="color: red;"><i class="fa-solid fa-trash"></i> ডিলিট</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Calculate 90 days eligibility
function getDonationStatus(lastDateStr) {
    if (!lastDateStr) return { statusText: "রক্তদানে প্রস্তুত", statusClass: "status-ready" };
    
    const lastDate = new Date(lastDateStr);
    const today = new Date();
    const diffTime = Math.abs(today - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 90) {
        return { statusText: "রক্তদানে প্রস্তুত", statusClass: "status-ready" };
    } else {
        const daysLeft = 90 - diffDays;
        return { statusText: `আর ${daysLeft} দিন পর দিতে পারবেন`, statusClass: "status-waiting" };
    }
}

function formatWhatsApp(val) {
    let clean = val.replace(/[^0-9]/g, '');
    if (clean.length === 11 && clean.startsWith('01')) {
        return '88' + clean;
    }
    return clean;
}

// Form Handlers
function handleFormSubmit(e) {
    e.preventDefault();

    const id = document.getElementById('edit-donor-id').value;
    const name = document.getElementById('reg-name').value;
    const division = document.getElementById('reg-division').value;
    const district = document.getElementById('reg-district').value;
    const upazila = document.getElementById('reg-upazila').value;
    const blood = document.getElementById('reg-blood').value;
    const phone = document.getElementById('reg-phone').value;
    const whatsapp = document.getElementById('reg-whatsapp').value;
    const lastDate = document.getElementById('reg-last-date').value;
    const height = document.getElementById('reg-height').value;
    const weight = document.getElementById('reg-weight').value;

    if (id) {
        // Update Existing
        const index = donors.findIndex(d => d.id === id);
        if (index !== -1) {
            donors[index] = { id, name, division, district, upazila, blood, phone, whatsapp, lastDate, height, weight };
        }
    } else {
        // Create New
        const newDonor = {
            id: Date.now().toString(),
            name, division, district, upazila, blood, phone, whatsapp, lastDate, height, weight
        };
        donors.unshift(newDonor);
    }

    saveToLocalStorage();
    resetForm();
    renderDonors();
    alert(id ? 'প্রোফাইল সফলভাবে আপডেট করা হয়েছে!' : 'রক্তদাতা হিসেবে নিবন্ধন সম্পন্ন হয়েছে!');
}

function editDonor(id) {
    const d = donors.find(item => item.id === id);
    if (!d) return;

    document.getElementById('edit-donor-id').value = d.id;
    document.getElementById('reg-name').value = d.name;
    document.getElementById('reg-division').value = d.division;
    
    onRegDivisionChange();
    document.getElementById('reg-district').value = d.district;
    
    onRegDistrictChange();
    document.getElementById('reg-upazila').value = d.upazila;

    document.getElementById('reg-blood').value = d.blood;
    document.getElementById('reg-phone').value = d.phone;
    document.getElementById('reg-whatsapp').value = d.whatsapp || '';
    document.getElementById('reg-last-date').value = d.lastDate || '';
    document.getElementById('reg-height').value = d.height || '';
    document.getElementById('reg-weight').value = d.weight || '';

    document.getElementById('form-title').innerText = "প্রোফাইল তথ্য আপডেট করুন";
    document.getElementById('btn-submit').innerText = "আপডেট জমা দিন";
    document.getElementById('btn-cancel').style.display = "inline-block";

    scrollToSection('register-section');
}

function deleteDonor(id) {
    if (confirm("আপনি কি নিশ্চিত যে এই প্রোফাইলটি মুছে ফেলতে চান?")) {
        donors = donors.filter(d => d.id !== id);
        saveToLocalStorage();
        renderDonors();
    }
}

function resetForm() {
    document.getElementById('donor-form').reset();
    document.getElementById('edit-donor-id').value = '';
    document.getElementById('reg-district').disabled = true;
    document.getElementById('reg-upazila').disabled = true;
    document.getElementById('form-title').innerText = "রক্তদাতা নিবন্ধন করুন";
    document.getElementById('btn-submit').innerText = "নিবন্ধন জমা দিন";
    document.getElementById('btn-cancel').style.display = "none";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}