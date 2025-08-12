
    // sample dynamic data (replace with API calls)
    const courses = [
      { id: 'c1', title: 'Beginner Driving — Intensive', level:'Beginner', durationDays:28, price:4999, rating:4.8, students:1200, desc:'20 practical hours + 5 theory sessions. Personal instructor.' , tags:['city','manual'] , image:'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0141c2d0d4e43a5d0c2f6fda6df6b6e3'},
      { id: 'c2', title: 'Advanced Road Skills', level:'Advanced', durationDays:14, price:3499, rating:4.7, students:560, desc:'Highway driving, night sessions, defensive techniques.' , tags:['highway','automatic'], image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5c8bd3a7b1c7d2b9b8a1c3b2f11c9fea'},
      { id: 'c3', title: 'License Test Prep', level:'Intermediate', durationDays:7, price:1999, rating:4.9, students:2000, desc:'Mock tests, paperwork help, test-day simulation.' , tags:['test','prep'], image:'https://images.unsplash.com/photo-1517705008121-6a1f1a5b3ab7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=06b85d6b9a5f63a3c3e1a6c7bd4d9a10'},
      { id: 'c4', title: 'Two-Wheeler Basics', level:'Beginner', durationDays:10, price:1499, rating:4.6, students:740, desc:'Balance, braking, and safe riding basics.' , tags:['two-wheeler'], image:'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=60d6d6f29d3c4d6e8d8f6d7e2c3b7f3b'},
      { id: 'c5', title: 'Defensive Driving Workshop', level:'Advanced', durationDays:2, price:899, rating:4.5, students:430, desc:'Short intense workshop about collision avoidance and emergency handling.' , tags:['workshop'], image:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=521a0e6d30f6eb0e2b5b8b7f1c1a2a3b'},
    ];

    const videos = [
      { id:'v1', title:'Clutch Control Basics', src:'https://www.youtube.com/embed/x7X9w_GIm1s' },
      { id:'v2', title:'Defensive Driving Tips', src:'https://www.youtube.com/embed/Jb8D8XYg1-U' },
      { id:'v3', title:'Mock Test Walkthrough', src:'https://www.youtube.com/embed/7cYgkY-7cEE' },
    ];

    const instructors = [
      { name:'Ramesh Kumar', bio:'10+ years trainer, calm & patient.', image:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1d2a9c2b3f4a6b7c8d9e0f1a2b3c4d5e' },
      { name:'Sunita Verma', bio:'Expert in city driving & test prep.', image:'https://images.unsplash.com/photo-1545996124-7c1d9b9a1f6f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b6d5e4c2f1a0b9c8d7e6f5a4b3c2d1e' },
      { name:'Ajay Singh', bio:'Defensive driving specialist.', image:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d' },
      { name:'Pooja Mehta', bio:'Two-wheeler instructor & safety coach.', image:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b' },
    ];

    const reviews = [
      { name:'Rahul S.', rating:5, text:'Superb coaching — I passed on my first try!' },
      { name:'Anita P.', rating:5, text:'Patient instructors and good vehicles.' },
      { name:'Vikram J.', rating:4, text:'Great value for money and flexible slots.' },
    ];

    // utility functions
    const $ = sel => document.querySelector(sel);
    const $$ = sel => Array.from(document.querySelectorAll(sel));
    function formatPrice(n){ return '₹' + n.toLocaleString('en-IN'); }

    // populate courses grid
    const coursesGrid = $('#coursesGrid');
    const resultsCount = $('#resultsCount');
    function createCourseCard(course){
      const card = document.createElement('article');
      card.className = 'relative bg-white rounded-xl shadow p-4 flex flex-col overflow-hidden card-3d';
      card.innerHTML = `
        <div class="card-inner" data-id="${course.id}">
          <div class="card-face card-front">
            <img src="${course.image}" alt="${course.title}" class="w-full h-40 object-cover rounded-md"/>
            <div class="mt-3 flex justify-between items-start gap-3">
              <div>
                <h3 class="text-lg font-semibold">${course.title}</h3>
                <div class="text-sm text-slate-500">${course.level} • ${course.durationDays} days</div>
                <div class="mt-2 text-slate-600">${course.desc.slice(0,80)}...</div>
                <div class="mt-3 flex items-center gap-2">
                  <div class="text-sm font-semibold">${formatPrice(course.price)}</div>
                  <div class="text-sm px-2 py-1 rounded bg-slate-100 text-slate-700">${course.students} students</div>
                </div>
              </div>
              <div class="flex flex-col items-end gap-2">
                <div class="text-sm text-slate-500">Rating</div>
                <div class="font-semibold">${course.rating} ★</div>
                <button class="mt-4 btn-book px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700" data-action="book" data-id="${course.id}">Book</button>
                <button class="mt-2 px-2 py-1 text-xs rounded border border-slate-200" data-action="flip" data-id="${course.id}">Details</button>
              </div>
            </div>
          </div>

          <div class="card-face card-back bg-white p-4 rounded-md" style="display:none">
            <h4 class="font-semibold">${course.title}</h4>
            <div class="text-sm text-slate-600 mt-2">${course.desc}</div>
            <ul class="mt-3 list-disc pl-5 text-slate-600">
              <li>Personal instructor</li><li>Mock test</li><li>Flexible schedule</li>
            </ul>
            <div class="mt-4 flex justify-between items-center">
              <div class="text-lg font-bold">${formatPrice(course.price)}</div>
              <div class="flex gap-2">
                <button class="px-3 py-2 bg-indigo-600 text-white rounded-md" data-action="book" data-id="${course.id}">Enroll</button>
                <button class="px-3 py-2 border rounded-md" data-action="flipback" data-id="${course.id}">Back</button>
              </div>
            </div>
          </div>

        </div>
      `;
      // flip handlers
      const cardInner = card.querySelector('.card-inner');
      const front = card.querySelector('.card-front');
      const back = card.querySelector('.card-back');
      // event delegation
      card.addEventListener('click', (e) => {
        const el = e.target;
        const action = el.dataset.action;
        const id = el.dataset.id;
        if(action === 'book'){
          openBookingModal(course);
        } else if(action === 'flip'){
          cardInner.classList.add('is-flipped');
          front.style.display = 'none';
          back.style.display = 'block';
        } else if(action === 'flipback'){
          cardInner.classList.remove('is-flipped');
          front.style.display = 'block';
          back.style.display = 'none';
        }
      });

      return card;
    }

    function renderCourses(list){
      coursesGrid.innerHTML = '';
      list.forEach(c => coursesGrid.appendChild(createCourseCard(c)));
      resultsCount.textContent = list.length;
      // subtle entrance animation
      gsap.fromTo('#coursesGrid > *',{y:12,opacity:0},{y:0,opacity:1,stagger:0.06,duration:0.5,ease:'power2.out'});
    }

    // initial render
    renderCourses(courses);

    // filters & search
    const searchInput = $('#searchInput');
    const levelFilter = $('#levelFilter');
    const durationFilter = $('#durationFilter');
    const sortBtn = $('#sortBtn');

    function applyFilters(){
      let list = courses.slice();
      const q = searchInput.value.trim().toLowerCase();
      if(q) list = list.filter(c => (c.title + ' ' + c.desc + ' ' + (c.tags||[]).join(' ')).toLowerCase().includes(q));
      if(levelFilter.value) list = list.filter(c => c.level === levelFilter.value);
      if(durationFilter.value){
        if(durationFilter.value === '1-7') list = list.filter(c => c.durationDays <= 7);
        if(durationFilter.value === '8-14') list = list.filter(c => c.durationDays >= 8 && c.durationDays <= 14);
        if(durationFilter.value === '15+') list = list.filter(c => c.durationDays >= 15);
      }
      renderCourses(list);
    }

    searchInput.addEventListener('input', () => { applyFilters(); });
    levelFilter.addEventListener('change', applyFilters);
    durationFilter.addEventListener('change', applyFilters);

    sortBtn.addEventListener('click', () => {
      // rotate between popular / price low-high / price high-low
      const state = sortBtn.dataset.state || 'popular';
      if(state === 'popular'){
        sortBtn.textContent = 'Sort: Price ↑'; sortBtn.dataset.state = 'priceAsc';
        courses.sort((a,b)=>a.price - b.price);
      } else if(state === 'priceAsc'){
        sortBtn.textContent = 'Sort: Price ↓'; sortBtn.dataset.state = 'priceDesc';
        courses.sort((a,b)=>b.price - a.price);
      } else {
        sortBtn.textContent = 'Sort: Popular'; sortBtn.dataset.state = 'popular';
        courses.sort((a,b)=>b.students - a.students);
      }
      applyFilters();
    });

    // video grid
    const videoGrid = $('#videoGrid');
    function renderVideos(){
      videoGrid.innerHTML = '';
      videos.forEach(v => {
        const el = document.createElement('div');
        el.className = 'bg-white rounded-lg shadow p-2';
        el.innerHTML = `<div class="aspect-w-16 aspect-h-9"><iframe src="${v.src}" title="${v.title}" class="w-full h-48 rounded" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="mt-2 font-semibold">${v.title}</div>`;
        videoGrid.appendChild(el);
      });
    }
    renderVideos();

    // instructors
    const instructorsCarousel = $('#instructorsCarousel');
    function renderInstructors(){
      instructorsCarousel.innerHTML = '';
      instructors.forEach(i=>{
        const el = document.createElement('div');
        el.className = 'bg-white rounded-lg shadow p-4 flex flex-col items-center text-center';
        el.innerHTML = `<img src="${i.image}" alt="${i.name}" class="w-28 h-28 object-cover rounded-full"/><div class="mt-3 font-semibold">${i.name}</div><div class="text-sm text-slate-500 mt-1">${i.bio}</div><button class="mt-3 px-3 py-1 bg-indigo-600 text-white rounded-md">Profile</button>`;
        instructorsCarousel.appendChild(el);
      });
      gsap.fromTo('#instructorsCarousel > *',{y:20,opacity:0},{y:0,opacity:1,stagger:0.08,duration:0.6});
    }
    renderInstructors();

    // reviews carousel simple
    const reviewsCarousel = $('#reviewsCarousel');
    function renderReviews(){
      reviewsCarousel.innerHTML = '';
      reviews.forEach(r=>{
        const el = document.createElement('div');
        el.className = 'bg-white rounded-lg shadow p-4';
        el.innerHTML = `<div class="flex items-center gap-3"><div class="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center">${r.name.charAt(0)}</div><div><div class="font-semibold">${r.name}</div><div class="text-sm text-slate-500">${'★'.repeat(r.rating)}</div></div></div><p class="mt-3 text-slate-600">${r.text}</p>`;
        reviewsCarousel.appendChild(el);
      });
    }
    renderReviews();

    // BOOKING modal behavior
    const bookingModal = $('#bookingModal');
    const modalCourseTitle = $('#modalCourseTitle');
    const modalCourseDesc = $('#modalCourseDesc');
    const modalPrice = $('#modalPrice');

    function openBookingModal(course){
      modalCourseTitle.textContent = course.title;
      modalCourseDesc.textContent = course.desc;
      modalPrice.textContent = formatPrice(course.price);
      bookingModal.classList.remove('hidden');
      // animate
      gsap.fromTo('#bookingModal > div',{scale:0.96,opacity:0},{scale:1,opacity:1,duration:0.36,ease:'power2.out'});
    }

    $('#closeModal').addEventListener('click', ()=> bookingModal.classList.add('hidden'));
    // close on backdrop click
    bookingModal.addEventListener('click', (e)=> { if(e.target === bookingModal) bookingModal.classList.add('hidden') });

    // payment / reserve buttons (simulate)
    $('#payNowBtn').addEventListener('click', async ()=>{
      // simulate checkout creation -> redirect to payment gateway
      alert('Starting secure checkout (demo). Replace this with Stripe / Razorpay checkout flow on server.');
      // example: call /api/create-checkout-session and redirect to session.url
    });

    $('#reserveBtn').addEventListener('click', ()=>{
      alert('Seat reserved for 15 minutes. (Demo)');
      bookingModal.classList.add('hidden');
    });

    // attendance modal
    const attendanceModal = $('#attendanceModal');
    $('#attendanceBtn').addEventListener('click', ()=> attendanceModal.classList.remove('hidden'));
    $('#closeAttendance').addEventListener('click', ()=> attendanceModal.classList.add('hidden'));
    $('#attendanceModal').addEventListener('click', (e)=> { if(e.target === attendanceModal) attendanceModal.classList.add('hidden')});
    $('#mockMark').addEventListener('click', ()=> { alert('Attendance marked (demo). Integrate html5-qrcode on server side to record actual attendance.)'); attendanceModal.classList.add('hidden') });

    // simple "explore" scroll
    $('#exploreBtn').addEventListener('click', ()=> { document.getElementById('courses').scrollIntoView({behavior:'smooth'}) });

    // set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // demo: flip promo card
    const promoInner = document.querySelector('#promoCard');
    const flipPromo = $('#flipPromo');
    const flipPromoBack = $('#flipPromoBack');
    if(flipPromo){
      flipPromo.addEventListener('click', ()=>{
        promoInner.classList.add('is-flipped'); promoInner.querySelector('.card-front').style.display='none'; promoInner.querySelector('.card-back').style.display='block';
      });
    }
    if(flipPromoBack){
      flipPromoBack.addEventListener('click', ()=>{
        promoInner.classList.remove('is-flipped'); promoInner.querySelector('.card-front').style.display='block'; promoInner.querySelector('.card-back').style.display='none';
      });
    }

    // small accessibility: keyboard close for modals
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') { bookingModal.classList.add('hidden'); attendanceModal.classList.add('hidden'); }
    });

    // small improvement: lazy-load images (modern browsers)
    document.querySelectorAll('img').forEach(img => img.loading = 'lazy');

    // ready
    console.log('Futuristic courses page ready — replace demo data with real APIs when available.');
  
