/* ============ DATA ============ */
const products = [
  {id:1,name:'Samsung 55" Crystal UHD 4K Smart TV',cat:'entertainment',catLabel:'Smart TVs',price:5499,oldPrice:6999,rating:4.8,reviews:212,stock:18,sold:64,img:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=500&auto=format&fit=crop',badge:'sale',desc:'Experience stunning 4K clarity with vibrant colors powered by Crystal Processor 4K.',features:['4K UHD Resolution','Smart TV with built-in apps','PurColor technology','3 HDMI ports']},
  {id:2,name:'LG 350L Double Door Refrigerator',cat:'appliances',catLabel:'Refrigerators',price:4299,oldPrice:5200,rating:4.7,reviews:156,stock:9,sold:41,img:'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=500&auto=format&fit=crop',badge:'hot',desc:'Smart inverter compressor and spacious double-door design built for Ghanaian homes.',features:['Smart Inverter Compressor','350L total capacity','Low noise operation','10-year compressor warranty']},
  {id:3,name:'HP Pavilion 15 Laptop, Core i5, 8GB RAM',cat:'electronics',catLabel:'Laptops',price:6850,oldPrice:7999,rating:4.6,reviews:189,stock:14,sold:58,img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop',badge:'new',desc:'A reliable everyday laptop for work, school, and streaming with fast performance.',features:['Intel Core i5 Processor','8GB RAM / 512GB SSD','15.6" Full HD Display','Up to 10 hrs battery life']},
  {id:4,name:'Samsung Galaxy A55 5G Smartphone',cat:'electronics',catLabel:'Smartphones',price:3299,oldPrice:3899,rating:4.5,reviews:301,stock:27,sold:132,img:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=500&auto=format&fit=crop',badge:'sale',desc:'A premium mid-range smartphone with AMOLED display, all-day battery, and versatile camera.',features:['6.6" Super AMOLED','5000mAh battery','50MP triple camera','5G connectivity']},
  {id:5,name:'1.5HP Split Unit Air Conditioner',cat:'appliances',catLabel:'Air Conditioners',price:3199,oldPrice:3800,rating:4.6,reviews:97,stock:4,sold:23,img:'https://images.unsplash.com/photo-1631545806609-fbf81986b07a?q=80&w=500&auto=format&fit=crop',badge:null,desc:'Energy-efficient split AC designed for quiet, reliable cooling in Ghanaian homes.',features:['Energy-saving inverter','Quiet operation <26dB','Remote control included','1-year installation warranty']},
  {id:6,name:'Hisense 8KG Front Load Washing Machine',cat:'appliances',catLabel:'Washing Machines',price:3650,oldPrice:4300,rating:4.4,reviews:84,stock:11,sold:29,img:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=500&auto=format&fit=crop',badge:null,desc:'8kg capacity with multiple wash programs and gentle care for all fabric types.',features:['8kg load capacity','15 wash programs','Child lock safety','Low water consumption']},
  {id:7,name:'JBL Partybox 110 Bluetooth Speaker',cat:'entertainment',catLabel:'Sound Systems',price:2199,oldPrice:2650,rating:4.9,reviews:267,stock:22,sold:95,img:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=500&auto=format&fit=crop',badge:'hot',desc:'Powerful JBL sound, dynamic light show, and long-lasting battery for any party.',features:['Powerful JBL Pro Sound','Dynamic LED light show','Up to 12 hrs playtime','Splashproof design']},
  {id:8,name:'Philips Smart WiFi LED Bulb (4-Pack)',cat:'smart',catLabel:'Smart Bulbs',price:289,oldPrice:399,rating:4.5,reviews:142,stock:60,sold:210,img:'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=500&auto=format&fit=crop',badge:'sale',desc:'Control your home lighting from anywhere with app-based dimming and scheduling.',features:['16 million colors','Voice assistant compatible','Energy-efficient LED','Easy app setup']},
  {id:9,name:'Hikvision 4-Channel CCTV Camera Kit',cat:'smart',catLabel:'CCTV Cameras',price:1899,oldPrice:2400,rating:4.7,reviews:118,stock:8,sold:37,img:'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=500&auto=format&fit=crop',badge:null,desc:'Full HD night-vision cameras with remote mobile monitoring for home or business.',features:['1080p Full HD recording','Night vision up to 30m','Remote mobile viewing','4-camera kit with DVR']},
  {id:10,name:'TP-Link Archer AX55 WiFi 6 Router',cat:'smart',catLabel:'WiFi Routers',price:899,oldPrice:1150,rating:4.6,reviews:203,stock:33,sold:88,img:'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?q=80&w=500&auto=format&fit=crop',badge:'new',desc:'Next-gen WiFi 6 technology for faster, more reliable coverage throughout your home.',features:['WiFi 6 technology','Covers up to 2,500 sq ft','4 Gigabit LAN ports','Parental controls']},
  {id:11,name:'PlayStation 5 Gaming Console',cat:'entertainment',catLabel:'Gaming Consoles',price:6299,oldPrice:6999,rating:4.9,reviews:341,stock:5,sold:71,img:'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=500&auto=format&fit=crop',badge:'hot',desc:'Next-generation gaming with lightning-fast load times, stunning graphics and haptic feedback.',features:['Ultra-high speed SSD','4K gaming support','DualSense controller included','Backward compatible']},
  {id:12,name:'iPad 10th Gen 64GB WiFi Tablet',cat:'electronics',catLabel:'Tablets',price:3799,oldPrice:4300,rating:4.8,reviews:176,stock:16,sold:102,img:'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=500&auto=format&fit=crop',badge:null,desc:'A powerful do-it-all tablet for work, study, and entertainment with all-day battery life.',features:['10.9" Liquid Retina display','A14 Bionic chip','64GB storage','Up to 10 hrs battery life']},
  {id:13,name:'Dell Inspiron 15 Laptop, Core i3, 8GB RAM',cat:'electronics',catLabel:'Laptops',price:5499,oldPrice:6299,rating:4.4,reviews:67,stock:12,sold:33,img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=500&auto=format&fit=crop',badge:null,desc:'Dependable laptop for everyday computing — browsing, schoolwork and office tasks.',features:['Intel Core i3 Processor','8GB RAM / 256GB SSD','15.6" HD Display','Lightweight design']},
  {id:14,name:'Tecno Spark 20 Smartphone',cat:'electronics',catLabel:'Smartphones',price:1899,oldPrice:2299,rating:4.3,reviews:154,stock:41,sold:188,img:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=500&auto=format&fit=crop',badge:'sale',desc:'Affordable everyday smartphone with smooth display, solid battery and capable camera.',features:['6.6" HD+ Display','5000mAh battery','50MP main camera','Octa-core processor']},
  {id:15,name:'Anker Soundcore Wireless Earbuds',cat:'electronics',catLabel:'Accessories',price:459,oldPrice:599,rating:4.6,reviews:221,stock:75,sold:312,img:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop',badge:'hot',desc:'True wireless earbuds with clear sound and a charging case for all-day listening.',features:['Up to 30 hrs total playtime','IPX5 water resistance','Touch controls','Bluetooth 5.3']},
  {id:16,name:'Midea 20L Digital Microwave Oven',cat:'appliances',catLabel:'Microwaves',price:899,oldPrice:1100,rating:4.5,reviews:76,stock:19,sold:44,img:'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=500&auto=format&fit=crop',badge:null,desc:'Reheat, defrost, and cook with ease using digital controls and multiple power settings.',features:['20L capacity','6 power levels','Digital display & timer','Child safety lock']},
  {id:17,name:'Hisense 120L Single Door Refrigerator',cat:'appliances',catLabel:'Refrigerators',price:1799,oldPrice:2100,rating:4.3,reviews:52,stock:7,sold:19,img:'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop',badge:null,desc:'Compact single-door fridge perfect for small kitchens, dorm rooms, or secondary use.',features:['120L capacity','Adjustable thermostat','Reversible door','Low energy consumption']},
  {id:18,name:'Bruhm 1HP Window Unit Air Conditioner',cat:'appliances',catLabel:'Air Conditioners',price:2399,oldPrice:2800,rating:4.2,reviews:38,stock:6,sold:15,img:'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=500&auto=format&fit=crop',badge:null,desc:'Space-saving window AC for reliable cooling in bedrooms and small living spaces.',features:['1HP cooling capacity','3-speed fan control','Washable filter','Easy window installation']},
  {id:19,name:'Hisense 43" FHD Smart TV',cat:'entertainment',catLabel:'Smart TVs',price:2899,oldPrice:3400,rating:4.6,reviews:143,stock:13,sold:67,img:'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=500&auto=format&fit=crop',badge:'sale',desc:'Full HD picture with built-in streaming apps, perfect for bedrooms and smaller rooms.',features:['43" Full HD display','VIDAA Smart TV platform','Built-in WiFi','2 HDMI ports']},
  {id:20,name:'Xbox Series S 512GB',cat:'entertainment',catLabel:'Gaming Consoles',price:4599,oldPrice:5200,rating:4.7,reviews:98,stock:9,sold:41,img:'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=500&auto=format&fit=crop',badge:'new',desc:'Compact all-digital gaming console with fast load times and smooth next-gen gameplay.',features:['512GB SSD storage','Up to 1440p gaming','Quick Resume feature','Includes wireless controller']},
  {id:21,name:'Sony 2.1Ch Soundbar with Wireless Subwoofer',cat:'entertainment',catLabel:'Sound Systems',price:1599,oldPrice:1950,rating:4.5,reviews:87,stock:17,sold:53,img:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=500&auto=format&fit=crop',badge:null,desc:'Deep bass and clear dialogue from a sleek soundbar and wireless subwoofer combo.',features:['2.1 channel audio','Wireless subwoofer','Bluetooth streaming','HDMI ARC connection']},
  {id:22,name:'Yale Smart Digital Door Lock',cat:'smart',catLabel:'Smart Locks',price:2199,oldPrice:2600,rating:4.4,reviews:61,stock:11,sold:28,img:'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=500&auto=format&fit=crop',badge:null,desc:'Keyless entry with PIN code, smart card, or backup key in one sleek lock.',features:['PIN code & card access','Backup mechanical key','Low battery alert','Easy retrofit installation']},
  {id:23,name:'Ezviz Smart Video Doorbell',cat:'smart',catLabel:'CCTV Cameras',price:749,oldPrice:950,rating:4.5,reviews:94,stock:24,sold:76,img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=500&auto=format&fit=crop',badge:'new',desc:'See and speak to visitors from anywhere with HD video and two-way audio.',features:['1080p HD video','Two-way audio','Motion detection alerts','Night vision']},
  {id:24,name:'TP-Link Deco Mesh WiFi System (2-Pack)',cat:'smart',catLabel:'WiFi Routers',price:1399,oldPrice:1700,rating:4.7,reviews:109,stock:14,sold:62,img:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop',badge:'hot',desc:'Seamless mesh WiFi to eliminate dead zones and blanket your whole home in fast coverage.',features:['Covers up to 3,800 sq ft','Seamless roaming','Easy app setup','Works with Alexa']},
];

const testimonials = [
  {name:'Akosua Mensah',role:'Homeowner, Accra',rating:5,img:'https://i.pravatar.cc/100?img=47',quote:'Bought my refrigerator and TV from Kiaat. Delivery was fast and the prices were better than anywhere else I checked.'},
  {name:'Kwame Owusu',role:'IT Consultant, Kumasi',rating:5,img:'https://i.pravatar.cc/100?img=12',quote:'Ordered a laptop for work and it arrived in two days. Genuine HP product with full warranty documentation. Very impressed.'},
  {name:'Abena Asante',role:'Small Business Owner',rating:4,img:'https://i.pravatar.cc/100?img=32',quote:'I buy phone accessories in bulk for my shop from Kiaat. Wholesale pricing is fair and the team is always responsive on WhatsApp.'},
  {name:'Yaw Boateng',role:'University Student',rating:5,img:'https://i.pravatar.cc/100?img=51',quote:'Got my air conditioner installed within the week. Customer support walked me through everything. Highly recommend.'},
  {name:'Efua Darko',role:'Working Professional',rating:5,img:'https://i.pravatar.cc/100?img=44',quote:'The smart home starter kit was easy to set up. Love that everything came from one trusted store.'},
  {name:'Nana Yeboah',role:'Retail Buyer, Takoradi',rating:4,img:'https://i.pravatar.cc/100?img=15',quote:'Nationwide delivery actually works — I am in Takoradi and got my order in three days. Will definitely order again.'},
];

const blogPosts = [
  {tag:'TV Buying Guide',title:'Best Smart TVs in Ghana for 2026: A Complete Buyer\'s Guide',date:'Jun 10, 2026',read:'6 min read',img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=500&auto=format&fit=crop'},
  {tag:'Energy Saving',title:'7 Energy-Saving Home Appliances That Cut Your Electricity Bill',date:'Jun 3, 2026',read:'5 min read',img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=500&auto=format&fit=crop'},
  {tag:'Laptop Guide',title:'How To Choose The Right Laptop For Work, School Or Gaming',date:'May 27, 2026',read:'7 min read',img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop'},
  {tag:'Smart Living',title:'Smart Home Trends Every Ghanaian Household Should Know',date:'May 19, 2026',read:'4 min read',img:'https://images.unsplash.com/photo-1558002038-1391297a142a?q=80&w=500&auto=format&fit=crop'},
];

const faqData = [
  {q:'How long does delivery take?',a:'Orders within Accra typically arrive within 24–48 hours. Nationwide delivery to other regions takes 2–5 business days. Delivery is free on orders over ₵999, and a flat ₵30 fee applies below that.'},
  {q:'What payment methods do you accept?',a:'We accept MTN Mobile Money, Telecel Cash, AirtelTigo Money, Visa and Mastercard debit/credit cards, and Cash on Delivery for eligible areas.'},
  {q:'Are your products genuine and covered by warranty?',a:'Yes — every product we sell is 100% genuine, sourced from authorized distributors, and comes with the manufacturer\'s warranty plus local after-sales support.'},
  {q:'Can I return or exchange a product?',a:'Absolutely. We offer a 7-day return policy on eligible items that are unused and in their original packaging. Contact our support team or Kiaaty to start a return.'},
  {q:'Do you offer wholesale or bulk pricing?',a:'Yes, we offer competitive wholesale pricing for retail and bulk buyers. Reach out via WhatsApp or our contact form with the items and quantities you need.'},
  {q:'How do I track my order?',a:'After checkout, you\'ll receive an order number. You can track your order status anytime using that number, or just ask Kiaaty for an update.'},
];

const GHANA_REGIONS = ['Greater Accra','Ashanti','Western','Central','Eastern','Volta','Northern','Upper East','Upper West','Bono','Bono East','Ahafo','Western North','Oti','Savannah','North East'];
const MOMO_NETWORKS = ['MTN Mobile Money','Telecel Cash','AirtelTigo Money'];
const BUSINESS_EMAIL = 'kiaattechnologies@gmail.com';

/* ============ STATE ============ */
let cart = [];
let wishlist = [];

const GHS = n => '₵' + Number(n).toLocaleString('en-GH',{minimumFractionDigits:0});

/* ============ PRODUCT CARD ============ */
function starString(r){return '★'.repeat(Math.round(r))+'☆'.repeat(5-Math.round(r));}

function stockLine(p){
  if(p.stock<=6) return `<div class="stock-line low"><i class="fa-solid fa-triangle-exclamation"></i>Only ${p.stock} left</div>`;
  return `<div class="stock-line ok"><i class="fa-solid fa-circle-check"></i>In Stock</div>`;
}

function productCard(p){
  if(!p) return '';
  const off = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : 0;
  const isWished = wishlist.includes(p.id);
  const badgeHtml = p.badge ? `<span class="prod-badge badge-${p.badge}">${p.badge==='sale'?'SALE':p.badge==='new'?'NEW':'HOT'}</span>` : '';
  return `
  <div class="prod-card">
    <div class="prod-img">
      ${badgeHtml}
      <button class="wish-btn ${isWished?'active':''}" onclick="toggleWishlist(${p.id},this)" aria-label="Wishlist"><i class="fa-${isWished?'solid':'regular'} fa-heart"></i></button>
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop'">
      <button class="quick-view" onclick="openQuickView(${p.id})"><i class="fa-solid fa-eye"></i> Quick View</button>
    </div>
    <div class="prod-body">
      <span class="prod-cat">${p.catLabel}</span>
      <h4 class="prod-name">${p.name}</h4>
      <div class="prod-rating"><span class="stars">${starString(p.rating)}</span> ${p.rating} (${p.reviews})</div>
      <div class="prod-price">
        <span class="price-now">${GHS(p.price)}</span>
        ${p.oldPrice?`<span class="price-old">${GHS(p.oldPrice)}</span><span class="price-off">-${off}%</span>`:''}
      </div>
      ${stockLine(p)}
      <span class="sold-line">${p.sold}+ sold this month</span>
      <button class="add-cart-btn" onclick="addToCart(${p.id},this)"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
    </div>
  </div>`;
}

/* ============ CART ============ */
function addToCart(id, btn){
  const existing = cart.find(c=>c.id===id);
  if(existing) existing.qty++;
  else cart.push({id, qty:1});
  updateCartUI();
  showToast('fa-circle-check','Added to cart');
  if(btn){
    btn.classList.add('added');
    btn.innerHTML='<i class="fa-solid fa-check"></i> Added';
    setTimeout(()=>{btn.classList.remove('added');btn.innerHTML='<i class="fa-solid fa-bag-shopping"></i> Add to Cart';},1400);
  }
}
function changeQty(id, delta){
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(c=>c.id!==id);
  updateCartUI();
}
function removeFromCart(id){
  cart = cart.filter(c=>c.id!==id);
  updateCartUI();
  showToast('fa-trash','Removed from cart');
}
function updateCartUI(){
  const total = cart.reduce((s,c)=>s+c.qty,0);
  document.querySelectorAll('#cartCount').forEach(el=>el.textContent=total);
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  if(!body) return;
  if(cart.length===0){
    body.innerHTML=`<div class="drawer-empty"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty.</p><button class="btn btn-primary btn-sm" onclick="closeDrawer('cartDrawer')">Continue Shopping</button></div>`;
    foot.innerHTML='';return;
  }
  let subtotal=0;
  body.innerHTML=cart.map(c=>{
    const p=products.find(pp=>pp.id===c.id);
    subtotal+=p.price*c.qty;
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.name}">
      <div class="cart-item-info">
        <h5>${p.name}</h5><span class="p">${GHS(p.price)}</span>
        <div class="qty-stepper">
          <button onclick="changeQty(${p.id},-1)">−</button>
          <span>${c.qty}</span>
          <button onclick="changeQty(${p.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${p.id})"><i class="fa-solid fa-trash"></i></button>
    </div>`;
  }).join('');
  const delivery = subtotal>=999?0:30;
  foot.innerHTML=`
    <div class="drawer-sub"><span>Subtotal</span><span>${GHS(subtotal)}</span></div>
    <div class="drawer-sub"><span>Delivery</span><span>${delivery===0?'Free':GHS(delivery)}</span></div>
    <div class="drawer-total"><span>Total</span><span>${GHS(subtotal+delivery)}</span></div>
    <button class="btn btn-primary" onclick="openCheckout()">Proceed to Checkout</button>`;
}
updateCartUI();

/* ============ WISHLIST ============ */
function toggleWishlist(id, btn){
  if(wishlist.includes(id)){
    wishlist=wishlist.filter(w=>w!==id);
    if(btn){btn.classList.remove('active');btn.innerHTML='<i class="fa-regular fa-heart"></i>';}
    showToast('fa-heart-circle-minus','Removed from wishlist');
  } else {
    wishlist.push(id);
    if(btn){btn.classList.add('active');btn.innerHTML='<i class="fa-solid fa-heart"></i>';}
    showToast('fa-heart','Added to wishlist');
  }
  document.querySelectorAll('#wishCount').forEach(el=>el.textContent=wishlist.length);
  updateWishlistUI();
}
function updateWishlistUI(){
  const body=document.getElementById('wishBody');
  if(!body) return;
  if(wishlist.length===0){
    body.innerHTML=`<div class="drawer-empty"><i class="fa-solid fa-heart"></i><p>Your wishlist is empty.</p><button class="btn btn-primary btn-sm" onclick="closeDrawer('wishlistDrawer')">Browse Products</button></div>`;return;
  }
  body.innerHTML=wishlist.map(id=>{
    const p=products.find(pp=>pp.id===id);
    return `<div class="wish-item">
      <img src="${p.img}" alt="${p.name}">
      <div class="wish-item-info">
        <h5>${p.name}</h5><span class="p">${GHS(p.price)}</span><br>
        <a class="move-btn" onclick="addToCart(${p.id});toggleWishlist(${p.id})">Move to cart</a>
      </div>
    </div>`;
  }).join('');
}

/* ============ QUICK VIEW ============ */
function openQuickView(id){
  const p=products.find(pp=>pp.id===id);
  if(!p) return;
  const off=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
  const isWished=wishlist.includes(id);
  document.getElementById('qvModal').innerHTML=`
    <button class="qv-close" onclick="closeQuickView()"><i class="fa-solid fa-xmark"></i></button>
    <div class="qv-img"><img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop'"></div>
    <div class="qv-info">
      <span class="prod-cat">${p.catLabel}</span>
      <h3>${p.name}</h3>
      <div class="prod-rating"><span class="stars">${starString(p.rating)}</span> ${p.rating} (${p.reviews} reviews)</div>
      <div class="prod-price"><span class="price-now">${GHS(p.price)}</span>${p.oldPrice?`<span class="price-old">${GHS(p.oldPrice)}</span><span class="price-off">-${off}%</span>`:''}</div>
      ${stockLine(p)}
      <p class="qv-desc">${p.desc}</p>
      <ul class="qv-feat">${p.features.map(f=>`<li><i class="fa-solid fa-circle-check"></i>${f}</li>`).join('')}</ul>
      <div class="qv-actions">
        <button class="add-cart-btn" onclick="addToCart(${p.id},this)"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
        <button class="wish-btn ${isWished?'active':''}" onclick="toggleWishlist(${p.id},this)"><i class="fa-${isWished?'solid':'regular'} fa-heart"></i></button>
      </div>
    </div>`;
  document.getElementById('qvOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeQuickView(){
  document.getElementById('qvOverlay').classList.remove('open');
  document.body.style.overflow='';
}

/* ============ DRAWERS ============ */
function openDrawer(id){
  document.getElementById(id).classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeDrawer(id){
  document.getElementById(id).classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function closeAllDrawers(){
  document.querySelectorAll('.drawer').forEach(d=>d.classList.remove('open'));
  const ov=document.getElementById('drawerOverlay');
  if(ov) ov.classList.remove('open');
  document.body.style.overflow='';
}

/* ============ SEARCH ============ */
function openSearch(){
  openDrawer('searchDrawer');
  setTimeout(()=>{ const el=document.getElementById('searchInput'); if(el) el.focus(); },300);
}
function handleSearch(val){
  const res=document.getElementById('searchResults');
  if(!val.trim()){ res.innerHTML=''; return; }
  const matches=products.filter(p=>p.name.toLowerCase().includes(val.toLowerCase())||p.catLabel.toLowerCase().includes(val.toLowerCase()));
  res.innerHTML=matches.length?matches.map(p=>`
    <div class="search-result-row" onclick="closeDrawer('searchDrawer');openQuickView(${p.id})">
      <img src="${p.img}" alt="">
      <div class="info"><h5>${p.name}</h5><span>${GHS(p.price)}</span></div>
    </div>`).join(''):`<p style="padding:20px 0;color:var(--text-mute);font-size:14px;">No products found for "${val}".</p>`;
}

/* ============ TOAST ============ */
function showToast(icon, msg){
  const wrap=document.getElementById('toastWrap');
  if(!wrap) return;
  const t=document.createElement('div');
  t.className='toast';
  t.innerHTML=`<i class="fa-solid ${icon}"></i> ${msg}`;
  wrap.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(30px)'; setTimeout(()=>t.remove(),300); },2600);
}

/* ============ NEWSLETTER / CONTACT ============ */
function sendMailto(subject, body){
  const a=document.createElement('a');
  a.href=`mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  a.click();
}
function handleNewsletter(e){
  e.preventDefault();
  const email=e.target.querySelector('input[type="email"]').value;
  sendMailto('Newsletter Signup — Kiaat Technologies',`Please subscribe this email to the Kiaat Technologies newsletter:\n${email}`);
  showToast('fa-circle-check','Subscribed! Check your inbox.');
  e.target.reset();
}
function handleContact(e){
  e.preventDefault();
  const name=document.getElementById('cfName').value;
  const phone=document.getElementById('cfPhone').value;
  const email=document.getElementById('cfEmail').value;
  const subject=document.getElementById('cfSubject').value;
  const message=document.getElementById('cfMessage').value;
  const body=`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
  sendMailto(`[Website Contact] ${subject} — Kiaat Technologies`,body);
  showToast('fa-circle-check','Message sent — we\'ll reply within 24 hours.');
  e.target.reset();
}

/* ============ FAQ ============ */
function toggleFaq(i){
  const el=document.getElementById('faqItem'+i);
  if(el) el.classList.toggle('open');
}

/* ============ COUNTDOWN ============ */
(function startCountdown(){
  const target=new Date().getTime()+(2*24*60*60+14*60*60+36*60+52)*1000;
  function tick(){
    const diff=Math.max(0,target-Date.now());
    const pad=n=>String(Math.floor(n)).padStart(2,'0');
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
    set('cd-days',pad(diff/86400000));
    set('cd-hours',pad((diff/3600000)%24));
    set('cd-mins',pad((diff/60000)%60));
    set('cd-secs',pad((diff/1000)%60));
    if(diff>0) setTimeout(tick,1000);
  }
  tick();
})();

/* ============ HERO SLIDER ============ */
(function initHeroSlider(){
  const slider=document.getElementById('heroSlider');
  if(!slider) return;
  const slides=slider.querySelectorAll('.hero-slide');
  const count=slides.length;
  let idx=0, timer=null;
  function renderDots(){
    const dotsEl=document.getElementById('heroDots');
    if(!dotsEl) return;
    dotsEl.innerHTML=Array.from({length:count},(_,i)=>`<span class="dot ${i===idx?'active':''}" onclick="heroGoTo(${i})"></span>`).join('');
  }
  function goTo(i){
    idx=(i+count)%count;
    slider.style.transform=`translateX(-${idx*100}%)`;
    renderDots();
  }
  window.heroChangeSlide=dir=>{ goTo(idx+dir); restartAuto(); };
  window.heroGoTo=i=>{ goTo(i); restartAuto(); };
  function restartAuto(){
    if(timer) clearInterval(timer);
    timer=setInterval(()=>goTo(idx+1),6000);
  }
  renderDots();
  restartAuto();
  const wrap=document.querySelector('.hero-slider-wrap');
  if(wrap){
    wrap.addEventListener('mouseenter',()=>clearInterval(timer));
    wrap.addEventListener('mouseleave',restartAuto);
    let tx=0;
    wrap.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
    wrap.addEventListener('touchend',e=>{ const d=e.changedTouches[0].clientX-tx; if(Math.abs(d)>40){ window.heroChangeSlide(d>0?-1:1); } },{passive:true});
  }
})();

/* ============ DARK MODE ============ */
function toggleTheme(){
  const html=document.documentElement;
  const dark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',dark?'light':'dark');
  document.querySelectorAll('.theme-toggle').forEach(b=>b.innerHTML=dark?'<i class="fa-solid fa-moon"></i>':'<i class="fa-solid fa-sun"></i>');
}

/* ============ MOBILE NAV ============ */
function toggleMobileNav(){
  document.getElementById('mobileNav').classList.toggle('open');
  const ov=document.getElementById('mobileNavOverlay');
  if(ov) ov.classList.toggle('open');
}

/* ============ SCROLL ============ */
window.addEventListener('scroll',()=>{
  const sp=document.getElementById('scrollProgress');
  if(sp){
    const d=document.documentElement;
    const pct=d.scrollHeight-d.clientHeight>0?(d.scrollTop/(d.scrollHeight-d.clientHeight))*100:0;
    sp.style.width=pct+'%';
  }
  const h=document.getElementById('siteHeader');
  if(h) h.style.boxShadow=window.scrollY>10?'0 4px 20px rgba(15,23,42,.07)':'none';
});

/* ============ REVEAL ============ */
const revealObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('in');}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

/* ============ KEYBOARD ESC ============ */
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeAllDrawers(); closeQuickView(); } });

/* ============ CHECKOUT ============ */
let checkoutState = {
  step:1,
  delivery:{fullName:'',phone:'',email:'',region:'',city:'',address:'',notes:''},
  payment:{method:'momo',network:'MTN Mobile Money',mobileNumber:'',cardName:'',cardNumber:'',cardExpiry:'',cardCVV:''},
  orderId:null, orderTotal:0
};

function openCheckout(){
  if(cart.length===0){ showToast('fa-circle-info','Your cart is empty'); return; }
  closeDrawer('cartDrawer');
  checkoutState.step=1;
  let overlay=document.getElementById('checkoutOverlay');
  if(!overlay){
    overlay=document.createElement('div');
    overlay.id='checkoutOverlay';
    overlay.className='checkout-overlay';
    overlay.innerHTML=`
      <div class="checkout-topbar"><div class="checkout-topbar-inner">
        <div class="checkout-brand">Kiaat<span class="accent">.</span></div>
        <div class="checkout-steps" id="checkoutSteps"></div>
        <button class="checkout-close" onclick="closeCheckout()"><i class="fa-solid fa-xmark"></i></button>
      </div></div>
      <div class="checkout-body" id="checkoutBody"></div>`;
    document.body.appendChild(overlay);
  }
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
  renderCheckout();
}
function closeCheckout(){
  const ov=document.getElementById('checkoutOverlay');
  if(ov) ov.classList.remove('open');
  document.body.style.overflow='';
  if(checkoutState.step===4){
    checkoutState={step:1,delivery:{fullName:'',phone:'',email:'',region:'',city:'',address:'',notes:''},payment:{method:'momo',network:'MTN Mobile Money',mobileNumber:'',cardName:'',cardNumber:'',cardExpiry:'',cardCVV:''},orderId:null,orderTotal:0};
  }
}
function renderCheckoutSteps(){
  const steps=[{n:1,l:'Delivery'},{n:2,l:'Payment'},{n:3,l:'Review'},{n:4,l:'Done'}];
  const el=document.getElementById('checkoutSteps');
  if(!el) return;
  el.innerHTML=steps.map(s=>{
    let cls=s.n<checkoutState.step?'done':s.n===checkoutState.step?'active':'';
    return `<div class="checkout-step ${cls}"><div class="checkout-step-dot">${s.n<checkoutState.step?'<i class="fa-solid fa-check"></i>':s.n}</div><span class="checkout-step-label">${s.l}</span></div>`;
  }).join('');
}
function renderOrderSummary(){
  let subtotal=0;
  const items=cart.map(c=>{
    const p=products.find(pp=>pp.id===c.id);subtotal+=p.price*c.qty;
    return `<div class="co-summary-item"><img src="${p.img}" alt="${p.name}"><div class="co-summary-item-info" style="flex:1;min-width:0;"><h6>${p.name}</h6><span>Qty ${c.qty}</span></div><div class="co-summary-item-price">${GHS(p.price*c.qty)}</div></div>`;
  }).join('');
  const delivery=subtotal>=999?0:30;
  checkoutState.orderTotal=subtotal+delivery;
  return `<div class="co-summary"><h5><i class="fa-solid fa-bag-shopping"></i> Order Summary</h5>${items}
    <div class="co-summary-totals">
      <div class="co-summary-row"><span>Subtotal</span><span>${GHS(subtotal)}</span></div>
      <div class="co-summary-row"><span>Delivery</span><span>${delivery===0?'Free':GHS(delivery)}</span></div>
      <div class="co-summary-row total"><span>Total</span><span>${GHS(subtotal+delivery)}</span></div>
    </div>
    <div class="co-trust"><span><i class="fa-solid fa-shield-halved"></i>Secure checkout</span><span><i class="fa-solid fa-truck-fast"></i>Nationwide delivery</span><span><i class="fa-solid fa-rotate-left"></i>7-day returns</span></div>
  </div>`;
}
function renderCheckout(){
  renderCheckoutSteps();
  const body=document.getElementById('checkoutBody');
  if(!body) return;
  if(checkoutState.step===1){
    const d=checkoutState.delivery;
    body.innerHTML=`<div class="checkout-panel">
      <h2>Delivery Details</h2><p class="step-sub">Tell us where to send your order.</p>
      <div class="co-form-row">
        <div class="co-form-group full" id="fg-fullName"><label>Full Name</label><input type="text" value="${d.fullName}" placeholder="e.g. Akosua Mensah" oninput="checkoutState.delivery.fullName=this.value"><span class="co-error">Please enter your full name</span></div>
      </div>
      <div class="co-form-row">
        <div class="co-form-group" id="fg-phone"><label>Phone Number</label><input type="tel" value="${d.phone}" placeholder="+233 XX XXX XXXX" oninput="checkoutState.delivery.phone=this.value"><span class="co-error">Please enter a valid phone number</span></div>
        <div class="co-form-group"><label>Email <span class="opt">(optional)</span></label><input type="email" value="${d.email}" placeholder="you@example.com" oninput="checkoutState.delivery.email=this.value"></div>
      </div>
      <div class="co-form-row">
        <div class="co-form-group" id="fg-region"><label>Region</label><select onchange="checkoutState.delivery.region=this.value"><option value="">Select region</option>${GHANA_REGIONS.map(r=>`<option value="${r}" ${d.region===r?'selected':''}>${r}</option>`).join('')}</select><span class="co-error">Please select your region</span></div>
        <div class="co-form-group" id="fg-city"><label>City / Town</label><input type="text" value="${d.city}" placeholder="e.g. Tema" oninput="checkoutState.delivery.city=this.value"><span class="co-error">Please enter your city</span></div>
      </div>
      <div class="co-form-row">
        <div class="co-form-group full" id="fg-address"><label>Delivery Address</label><textarea rows="2" placeholder="House number, street, landmark..." oninput="checkoutState.delivery.address=this.value">${d.address}</textarea><span class="co-error">Please enter your address</span></div>
      </div>
      <div class="co-form-row">
        <div class="co-form-group full"><label>Delivery Notes <span class="opt">(optional)</span></label><textarea rows="2" placeholder="Gate code, preferred time, etc." oninput="checkoutState.delivery.notes=this.value">${d.notes}</textarea></div>
      </div>
      <div class="co-actions"><span></span><button class="btn btn-primary" onclick="nextStep()">Continue to Payment <i class="fa-solid fa-arrow-right"></i></button></div>
    </div>${renderOrderSummary()}`;
  } else if(checkoutState.step===2){
    const p=checkoutState.payment;
    let sub='';
    if(p.method==='momo') sub=`<div class="pay-sub-fields single"><div class="co-form-group full"><label>Network</label><div class="network-pills">${MOMO_NETWORKS.map(n=>`<span class="network-pill ${p.network===n?'selected':''}" onclick="event.stopPropagation();checkoutState.payment.network='${n}';renderCheckout()">${n}</span>`).join('')}</div></div><div class="co-form-group full" id="fg-mobileNumber"><label>Mobile Money Number</label><input type="tel" value="${p.mobileNumber}" placeholder="+233 XX XXX XXXX" onclick="event.stopPropagation()" oninput="checkoutState.payment.mobileNumber=this.value"><span class="co-error">Please enter your MoMo number</span></div></div>`;
    else if(p.method==='card') sub=`<div class="pay-sub-fields" onclick="event.stopPropagation()"><div class="co-form-group full" id="fg-cardName"><label>Name on Card</label><input type="text" value="${p.cardName}" placeholder="As shown on card" oninput="checkoutState.payment.cardName=this.value"><span class="co-error">Required</span></div><div class="co-form-group full" id="fg-cardNumber"><label>Card Number</label><input type="text" value="${p.cardNumber}" placeholder="•••• •••• •••• ••••" maxlength="19" oninput="let v=this.value.replace(/\\D/g,'').slice(0,16);v=v.replace(/(.{4})/g,'$1 ').trim();this.value=v;checkoutState.payment.cardNumber=v;"><span class="co-error">Please enter a valid card number</span></div><div class="co-form-group" id="fg-cardExpiry"><label>Expiry</label><input type="text" value="${p.cardExpiry}" placeholder="MM/YY" maxlength="5" oninput="let v=this.value.replace(/\\D/g,'').slice(0,4);if(v.length>=3)v=v.slice(0,2)+'/'+v.slice(2);this.value=v;checkoutState.payment.cardExpiry=v;"><span class="co-error">Required</span></div><div class="co-form-group" id="fg-cardCVV"><label>CVV</label><input type="text" value="${p.cardCVV}" placeholder="•••" maxlength="4" oninput="checkoutState.payment.cardCVV=this.value"><span class="co-error">Required</span></div></div>`;
    else sub=`<p style="font-size:13px;color:var(--text-soft);margin-top:12px;">Pay in cash to our delivery rider when your order arrives.</p>`;
    body.innerHTML=`<div class="checkout-panel">
      <h2>Payment Method</h2><p class="step-sub">Choose how you'd like to pay.</p>
      <div class="pay-options">
        <div class="pay-option ${p.method==='momo'?'selected':''}" onclick="checkoutState.payment.method='momo';renderCheckout()"><div class="radio-dot"></div><div class="pay-option-body"><div class="pay-option-title"><i class="fa-solid fa-mobile-screen-button"></i> Mobile Money</div><div class="pay-option-desc">MTN, Telecel or AirtelTigo Money.</div>${p.method==='momo'?sub:''}</div></div>
        <div class="pay-option ${p.method==='card'?'selected':''}" onclick="checkoutState.payment.method='card';renderCheckout()"><div class="radio-dot"></div><div class="pay-option-body"><div class="pay-option-title"><i class="fa-solid fa-credit-card"></i> Debit / Credit Card</div><div class="pay-option-desc">Visa and Mastercard accepted.</div>${p.method==='card'?sub:''}</div></div>
        <div class="pay-option ${p.method==='cod'?'selected':''}" onclick="checkoutState.payment.method='cod';renderCheckout()"><div class="radio-dot"></div><div class="pay-option-body"><div class="pay-option-title"><i class="fa-solid fa-money-bill-wave"></i> Cash on Delivery</div><div class="pay-option-desc">Pay when your order arrives.</div>${p.method==='cod'?sub:''}</div></div>
      </div>
      <div class="co-actions"><button class="btn-back" onclick="prevStep()"><i class="fa-solid fa-arrow-left"></i> Back</button><button class="btn btn-primary" onclick="nextStep()">Review Order <i class="fa-solid fa-arrow-right"></i></button></div>
    </div>${renderOrderSummary()}`;
  } else if(checkoutState.step===3){
    const d=checkoutState.delivery, p=checkoutState.payment;
    const payLabel=p.method==='momo'?`${p.network} — ${p.mobileNumber}`:p.method==='card'?`Card ending ${p.cardNumber.replace(/\s/g,'').slice(-4)}`:'Cash on Delivery';
    body.innerHTML=`<div class="checkout-panel">
      <h2>Review Your Order</h2><p class="step-sub">Double-check everything before placing.</p>
      <div class="review-block"><div class="review-block-head"><h5><i class="fa-solid fa-location-dot"></i> Delivery</h5><a onclick="goToStep(1)">Edit</a></div><p>${d.fullName}<br>${d.phone}${d.email?' · '+d.email:''}<br>${d.address}, ${d.city}, ${d.region}</p>${d.notes?`<p style="margin-top:5px;font-style:italic;color:var(--text-mute)">Note: ${d.notes}</p>`:''}</div>
      <div class="review-block"><div class="review-block-head"><h5><i class="fa-solid fa-wallet"></i> Payment</h5><a onclick="goToStep(2)">Edit</a></div><p>${payLabel}</p></div>
      <div class="review-block"><div class="review-block-head"><h5><i class="fa-solid fa-bag-shopping"></i> Items (${cart.reduce((s,c)=>s+c.qty,0)})</h5><a onclick="closeCheckout()">Edit Cart</a></div>${cart.map(c=>{const prod=products.find(pp=>pp.id===c.id);return `<div class="review-item-row"><span>${prod.name} × ${c.qty}</span><span>${GHS(prod.price*c.qty)}</span></div>`;}).join('')}</div>
      <label class="terms-check"><input type="checkbox" id="termsCheck" onchange="document.getElementById('placeOrderBtn').disabled=!this.checked">I agree to Kiaat Technologies' Terms of Service and confirm delivery details are correct.</label>
      <div class="co-actions"><button class="btn-back" onclick="prevStep()"><i class="fa-solid fa-arrow-left"></i> Back</button><button class="btn btn-primary" id="placeOrderBtn" disabled onclick="placeOrder()">Place Order <i class="fa-solid fa-check"></i></button></div>
    </div>${renderOrderSummary()}`;
  } else {
    const d=checkoutState.delivery;
    const est=d.region==='Greater Accra'?'24–48 hours':'2–5 business days';
    body.innerHTML=`<div class="co-confirm">
      <div class="co-confirm-check"><i class="fa-solid fa-check"></i></div>
      <h2>Order Placed Successfully!</h2>
      <p>Thanks, ${d.fullName.split(' ')[0]||'there'} — we've received your order and we're getting it ready.</p>
      <div class="co-order-card">
        <div class="row"><span>Order Number</span><span>${checkoutState.orderId}</span></div>
        <div class="row"><span>Estimated Delivery</span><span>${est}</span></div>
        <div class="row"><span>Delivery To</span><span>${d.city}, ${d.region}</span></div>
        <div class="row"><span>Total Paid</span><span>${GHS(checkoutState.orderTotal)}</span></div>
      </div>
      <div class="co-confirm-actions"><button class="btn btn-dark" onclick="closeCheckout()">Continue Shopping</button></div>
    </div>`;
  }
}
function nextStep(){
  if(checkoutState.step===1){
    const d=checkoutState.delivery;
    let valid=true;
    [['fg-fullName',d.fullName.trim().length>1],['fg-phone',/^[0-9+\s]{9,15}$/.test(d.phone.trim())],['fg-region',d.region!==''],['fg-city',d.city.trim().length>1],['fg-address',d.address.trim().length>4]].forEach(([id,ok])=>{
      const el=document.getElementById(id); if(!el) return;
      el.classList.toggle('has-error',!ok);
      const inp=el.querySelector('input,select,textarea'); if(inp) inp.classList.toggle('err',!ok);
      if(!ok) valid=false;
    });
    if(!valid){ showToast('fa-triangle-exclamation','Please fill in the required fields'); return; }
    checkoutState.step=2;
  } else if(checkoutState.step===2){
    const p=checkoutState.payment; let valid=true;
    if(p.method==='momo'){
      const ok=/^[0-9+\s]{9,15}$/.test(p.mobileNumber.trim());
      const el=document.getElementById('fg-mobileNumber'); if(el){ el.classList.toggle('has-error',!ok); const inp=el.querySelector('input'); if(inp) inp.classList.toggle('err',!ok); }
      valid=ok;
    } else if(p.method==='card'){
      [['fg-cardName',p.cardName.trim().length>1],['fg-cardNumber',p.cardNumber.replace(/\s/g,'').length>=12],['fg-cardExpiry',/^\d{2}\/\d{2}$/.test(p.cardExpiry.trim())],['fg-cardCVV',/^\d{3,4}$/.test(p.cardCVV.trim())]].forEach(([id,ok])=>{
        const el=document.getElementById(id); if(!el) return;
        el.classList.toggle('has-error',!ok); const inp=el.querySelector('input'); if(inp) inp.classList.toggle('err',!ok);
        if(!ok) valid=false;
      });
    }
    if(!valid){ showToast('fa-triangle-exclamation','Please complete your payment details'); return; }
    checkoutState.step=3;
  }
  renderCheckout();
  document.getElementById('checkoutOverlay').scrollTo({top:0,behavior:'smooth'});
}
function prevStep(){ checkoutState.step=Math.max(1,checkoutState.step-1); renderCheckout(); document.getElementById('checkoutOverlay').scrollTo({top:0,behavior:'smooth'}); }
function goToStep(n){ checkoutState.step=n; renderCheckout(); document.getElementById('checkoutOverlay').scrollTo({top:0,behavior:'smooth'}); }
function placeOrder(){
  checkoutState.orderId=`KT${new Date().getFullYear()}${Math.floor(100000+Math.random()*900000)}`;
  const d=checkoutState.delivery,p=checkoutState.payment;
  const payLabel=p.method==='momo'?`${p.network} — ${p.mobileNumber}`:p.method==='card'?`Card ending ${p.cardNumber.replace(/\s/g,'').slice(-4)}`:'Cash on Delivery';
  const items=cart.map(c=>{const prod=products.find(pp=>pp.id===c.id);return `- ${prod.name} × ${c.qty} = ${GHS(prod.price*c.qty)}`;}).join('\n');
  sendMailto(`New Order ${checkoutState.orderId} — Kiaat Technologies`,`Order: ${checkoutState.orderId}\n\nCustomer: ${d.fullName}\nPhone: ${d.phone}\nEmail: ${d.email||'N/A'}\nAddress: ${d.address}, ${d.city}, ${d.region}\n${d.notes?'Notes: '+d.notes+'\n':''}\nPayment: ${payLabel}\n\nItems:\n${items}\n\nTotal: ${GHS(checkoutState.orderTotal)}`);
  cart=[]; updateCartUI();
  checkoutState.step=4; renderCheckout();
  document.getElementById('checkoutOverlay').scrollTo({top:0,behavior:'smooth'});
}

/* ============ KIAATY CHATBOT ============ */
let kiaatyOpened=false;
function toggleKiaaty(){
  const panel=document.getElementById('kiaatyPanel');
  if(!panel) return;
  const isOpen=panel.classList.contains('open');
  if(isOpen){ panel.classList.remove('open'); return; }
  panel.classList.add('open');
  const badge=document.querySelector('.kiaaty-badge');
  if(badge) badge.style.display='none';
  if(!kiaatyOpened){
    kiaatyOpened=true;
    kiaatyShowTyping();
    setTimeout(()=>{
      kiaatyHideTyping();
      kiaatyAddMessage('bot',"Hi! I'm <b>Kiaaty</b> 👋 I can help you find products, check delivery info, or answer any questions about Kiaat Technologies. What can I help with?");
      kiaatyShowQuickReplies(['📺 Smart TVs','💻 Laptops','🚚 Delivery info','💬 Talk to a human']);
    },900);
  }
  setTimeout(()=>{ const inp=document.getElementById('kiaatyInput'); if(inp) inp.focus(); },350);
}
function kiaatyScrollBottom(){ const b=document.getElementById('kiaatyBody'); if(b) b.scrollTop=b.scrollHeight; }
function kiaatyAddMessage(role,html){
  const body=document.getElementById('kiaatyBody'); if(!body) return;
  const w=document.createElement('div'); w.className='kiaaty-msg '+role;
  if(role==='bot') w.innerHTML=`<div class="kiaaty-msg-avatar"><i class="fa-solid fa-robot"></i></div><div class="kiaaty-msg-bubble">${html}</div>`;
  else w.innerHTML=`<div class="kiaaty-msg-bubble">${html}</div>`;
  body.appendChild(w); kiaatyScrollBottom();
}
function kiaatyShowQuickReplies(opts){
  const body=document.getElementById('kiaatyBody'); if(!body) return;
  const w=document.createElement('div'); w.className='kiaaty-quick-replies';
  w.innerHTML=opts.map(o=>`<span class="kiaaty-chip" onclick="kiaatySendQuick('${o.replace(/'/g,"\\'")}')">${o}</span>`).join('');
  body.appendChild(w); kiaatyScrollBottom();
}
function kiaatyShowTyping(){
  const body=document.getElementById('kiaatyBody'); if(!body) return;
  const w=document.createElement('div'); w.className='kiaaty-msg bot'; w.id='kiaatyTypingMsg';
  w.innerHTML=`<div class="kiaaty-msg-avatar"><i class="fa-solid fa-robot"></i></div><div class="kiaaty-msg-bubble"><div class="kiaaty-typing"><span></span><span></span><span></span></div></div>`;
  body.appendChild(w); kiaatyScrollBottom();
}
function kiaatyHideTyping(){ const el=document.getElementById('kiaatyTypingMsg'); if(el) el.remove(); }
function kiaatySendQuick(text){ const inp=document.getElementById('kiaatyInput'); if(inp) inp.value=text; kiaatySend(); }
function kiaatySend(){
  const inp=document.getElementById('kiaatyInput'); if(!inp) return;
  const text=inp.value.trim(); if(!text) return;
  kiaatyAddMessage('user',text); inp.value='';
  kiaatyShowTyping();
  setTimeout(()=>{ kiaatyHideTyping(); kiaatyRespond(text); },700+Math.random()*400);
}
function kiaatyRec(filterFn,max){
  return products.filter(filterFn).sort((a,b)=>b.rating-a.rating).slice(0,max||2).map(p=>`
    <div class="kiaaty-rec-card">
      <img src="${p.img}" alt="${p.name}">
      <div class="kiaaty-rec-card-info"><h6>${p.name}</h6><span>${GHS(p.price)}</span></div>
      <button onclick="toggleKiaaty();openQuickView(${p.id})">View</button>
    </div>`).join('');
}
function kiaatyWa(msg,label){ return `<a href="https://wa.me/233552195047?text=${encodeURIComponent(msg||'Hi, I need help.')}" target="_blank" class="kiaaty-wa-btn" style="display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;font-weight:700;font-size:13px;padding:10px 16px;border-radius:100px;margin-top:6px;"><i class="fa-brands fa-whatsapp"></i> ${label||'Chat on WhatsApp'}</a>`; }
function kiaatyRespond(raw){
  const t=raw.toLowerCase();
  const has=(...ws)=>ws.some(w=>t.includes(w));
  const region=GHANA_REGIONS.find(r=>t.includes(r.toLowerCase()));
  if(region&&has('deliver','ship','reach')){ kiaatyAddMessage('bot',`Yes, we deliver to <b>${region}</b>! Estimated time: <b>${region==='Greater Accra'?'24–48 hours':'2–5 business days'}</b>. Free on orders over ₵999.`); return; }
  if(has('hello','hi','hey','morning','afternoon')){ kiaatyAddMessage('bot','Hey! 👋 What are you shopping for today?'); kiaatyShowQuickReplies(['📺 Smart TVs','📱 Smartphones','🧊 Fridges','🎮 Gaming']); return; }
  if(has('thank')){ kiaatyAddMessage('bot',"You're very welcome! Anything else I can help with? 😊"); return; }
  if(has('human','agent','representative','talk to someone','customer service')){ kiaatyAddMessage('bot','Our team is happy to help directly on WhatsApp:'); kiaatyAddMessage('bot',kiaatyWa('Hi, I need help from the Kiaat Technologies team.')); return; }
  if(has('delivery','shipping','how long','deliver')){ kiaatyAddMessage('bot','Accra: <b>24–48 hours</b>. Other regions: <b>2–5 business days</b>. We cover all 16 regions. Delivery is free on orders over ₵999, otherwise ₵30.'); return; }
  if(has('warranty','return','refund','guarantee')){ kiaatyAddMessage('bot','All products carry full manufacturer warranty plus our local after-sales support. We have a <b>7-day return policy</b> on eligible unused items.'); return; }
  if(has('payment','pay','momo','mobile money','card','cash')){ kiaatyAddMessage('bot','We accept <b>MTN MoMo, Telecel Cash, AirtelTigo Money</b>, Visa/Mastercard, and <b>Cash on Delivery</b>.'); return; }
  if(has('deal','sale','discount','offer','promo','% off')){ kiaatyAddMessage('bot','We have <b>up to 40% off</b> selected products right now! Check our Deals page.'); kiaatyAddMessage('bot',`<a href="deals.html" style="color:var(--blue);font-weight:700;">→ View All Deals</a>`); return; }
  if(has('wholesale','bulk','business')){ kiaatyAddMessage('bot','We offer competitive wholesale pricing. Send us your list and we\'ll quote you quickly.'); kiaatyAddMessage('bot',kiaatyWa('Hi, I need a wholesale pricing quote.','Request Wholesale Quote')); return; }
  if(has('tv','television','smart tv')){ kiaatyAddMessage('bot','Here are our top-rated Smart TVs:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Smart TVs')); return; }
  if(has('laptop','computer','notebook')){ kiaatyAddMessage('bot','Here are our best laptops:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Laptops')); return; }
  if(has('phone','smartphone')){ kiaatyAddMessage('bot','Check out these popular smartphones:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Smartphones')); return; }
  if(has('tablet','ipad')){ kiaatyAddMessage('bot','Here\'s a great tablet option:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Tablets')); return; }
  if(has('fridge','refrigerator','freezer')){ kiaatyAddMessage('bot','Our top refrigerators:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Refrigerators')); return; }
  if(has('air conditioner','ac ',' ac','cooling')){ kiaatyAddMessage('bot','Our best air conditioners:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Air Conditioners')); return; }
  if(has('washing machine','laundry','washer')){ kiaatyAddMessage('bot','Top pick for laundry:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Washing Machines')); return; }
  if(has('microwave')){ kiaatyAddMessage('bot','A popular microwave:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Microwaves')); return; }
  if(has('speaker','sound system','jbl','bluetooth speaker')){ kiaatyAddMessage('bot','Top sound systems:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Sound Systems')); return; }
  if(has('gaming','playstation','ps5','xbox','console')){ kiaatyAddMessage('bot','Our top gaming consoles:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Gaming Consoles')); return; }
  if(has('camera','cctv','security')){ kiaatyAddMessage('bot','Our CCTV cameras:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='CCTV Cameras')); return; }
  if(has('router','wifi','internet')){ kiaatyAddMessage('bot','Our WiFi routers:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='WiFi Routers')); return; }
  if(has('smart bulb','smart light')){ kiaatyAddMessage('bot','A great smart bulb option:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Smart Bulbs')); return; }
  if(has('smart lock','door lock')){ kiaatyAddMessage('bot','Our smart lock pick:'); kiaatyAddMessage('bot',kiaatyRec(p=>p.catLabel==='Smart Locks')); return; }
  if(has('email','contact','reach you')){ kiaatyAddMessage('bot',`You can email us at <b>${BUSINESS_EMAIL}</b> or use the <a href="contact.html" style="color:var(--blue);font-weight:700;">Contact page</a>.`); return; }
  kiaatyAddMessage('bot',"I'm not sure I caught that — I can help with product recommendations, delivery, payments, warranty, returns, or general questions. Or reach our team directly:");
  kiaatyAddMessage('bot',kiaatyWa('Hi, I have a question about Kiaat Technologies.'));
  kiaatyShowQuickReplies(['📺 Browse TVs','🚚 Delivery info','💬 Talk to a human']);
}
