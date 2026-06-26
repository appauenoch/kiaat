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
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",updateCartUI);}else{updateCartUI();}

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
  // show suggestions, hide results
  const sugg=document.getElementById('searchSuggestions');
  const res=document.getElementById('searchResults');
  if(sugg) sugg.style.display='block';
  if(res) res.innerHTML='';
}
function quickSearch(el){
  const term = typeof el === 'string' ? el : el.textContent;
  const inp=document.getElementById('searchInput');
  if(inp) inp.value=term;
  handleSearch(term);
}
function handleSearch(val){
  const sugg=document.getElementById('searchSuggestions');
  const res=document.getElementById('searchResults');
  if(!val.trim()){
    if(sugg) sugg.style.display='block';
    if(res) res.innerHTML='';
    return;
  }
  if(sugg) sugg.style.display='none';
  if(!res) return;
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
      kiaatyAddMessage('bot',"Hi! I'm <b>Kiaaty</b> 👋 your AI shopping assistant for <b>Kiaat Technologies</b>!<br><br>I know <b>everything</b> about our store — every product, price, brand, delivery timeline, payment method, warranty, return policy, and more. Just ask me anything! 😊");
      kiaatyShowQuickReplies(['🛍️ What do you sell?','💰 Today\'s deals','🚚 Delivery info','💳 Payment methods','🛡️ Warranty & returns','💬 Talk to the team']);
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
  const t = raw.toLowerCase().trim();
  const has = (...ws) => ws.some(w => t.includes(w));
  const exact = (w) => t === w.toLowerCase();

  // ── helpers ──────────────────────────────────────────────────────────────
  function link(href, label){ return `<a href="${href}" style="color:var(--blue);font-weight:700;text-decoration:underline;">${label}</a>`; }
  function bold(s){ return `<b>${s}</b>`; }

  // ── find a product by name keyword ───────────────────────────────────────
  function findProduct(keyword){
    return products.find(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
  }

  // ── price of a specific product ──────────────────────────────────────────
  function productPrice(p){
    if(!p) return '';
    const off = p.oldPrice ? ` <span style="color:var(--orange);font-size:12px;">-${Math.round((1-p.price/p.oldPrice)*100)}%</span>` : '';
    const old = p.oldPrice ? ` <span style="text-decoration:line-through;color:var(--text-mute);font-size:12px;">${GHS(p.oldPrice)}</span>` : '';
    return `${GHS(p.price)}${old}${off}`;
  }

  // ── stock status text ─────────────────────────────────────────────────────
  function stockText(p){
    if(!p) return '';
    return p.stock <= 6 ? `⚠️ Only ${p.stock} left in stock` : `✅ In Stock (${p.stock}+ units)`;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 1. GREETINGS
  // ─────────────────────────────────────────────────────────────────────────
  if(has('hello','hi ','hey ','good morning','good afternoon','good evening','good day','howdy','sup ','what\'s up','whats up') || exact('hi') || exact('hey') || exact('hello')){
    kiaatyAddMessage('bot',"Hey there! 👋 Welcome to <b>Kiaat Technologies</b>! I'm Kiaaty, your personal shopping assistant. I know everything about our store — products, prices, delivery, warranties, payments, returns and more. What can I help you with today?");
    kiaatyShowQuickReplies(['🛍️ Browse categories','💰 See today\'s deals','🚚 Delivery & shipping','📞 Contact the team']);
    return;
  }

  if(has('thank','thanks','appreciate','helpful','great help','well done','you\'re good')){
    kiaatyAddMessage('bot',"You're so welcome! 😊 Happy to help anytime. Is there anything else you'd like to know about our products, delivery, or anything else on the site?");
    return;
  }

  if(has('bye','goodbye','see you','take care','later','ciao')){
    kiaatyAddMessage('bot',"Goodbye! 👋 Thanks for visiting Kiaat Technologies. Come back anytime — we're always here to help you find the best deals in Ghana! 🇬🇭");
    return;
  }

  if(has('how are you','how r u','you okay','you good','are you okay')){
    kiaatyAddMessage('bot',"I'm doing great, thanks for asking! 😄 I'm always ready to help you find amazing electronics and home appliances at the best prices. What are you shopping for today?");
    kiaatyShowQuickReplies(['📺 Smart TVs','💻 Laptops','📱 Phones','🧊 Fridges']);
    return;
  }

  if(has('who are you','what are you','your name','what is kiaaty','tell me about yourself','introduce yourself')){
    kiaatyAddMessage('bot',"I'm <b>Kiaaty</b> 🤖 — the AI shopping assistant for <b>Kiaat Technologies</b>! I know every product in our catalogue, all our prices, delivery timelines, payment options, warranty policies, and much more. Ask me anything about the store and I'll give you an instant, accurate answer. Think of me as your personal tech advisor! 💡");
    kiaatyShowQuickReplies(['What products do you sell?','How does delivery work?','What brands do you carry?']);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 2. ABOUT THE COMPANY
  // ─────────────────────────────────────────────────────────────────────────
  if(has('about kiaat','about the company','who is kiaat','kiaat technologies','what is kiaat','tell me about kiaat','company info','company background','history','founded','since when','how old','how long have you')){
    kiaatyAddMessage('bot',`<b>Kiaat Technologies</b> is Ghana's trusted destination for electronics, smart gadgets, and home appliances. Our tagline is <b>"Strength Meets Innovation"</b> 💪<br><br>
Here's a quick overview:<br>
🗓️ <b>In business since:</b> 2015 — over 10 years serving Ghanaians<br>
👥 <b>Happy customers:</b> 15,000+ and growing<br>
📦 <b>Products available:</b> 2,400+ items across 4 major categories<br>
⭐ <b>Customer rating:</b> 4.9 out of 5<br>
🚚 <b>Delivery coverage:</b> All 16 regions of Ghana<br>
🛡️ <b>Our promise:</b> 100% genuine products, manufacturer warranty, secure payments, and real after-sales support.`);
    return;
  }

  if(has('mission','vision','values','what do you stand for','slogan','tagline','motto','strength meets')){
    kiaatyAddMessage('bot',`Our tagline is <b>"Strength Meets Innovation"</b> — it reflects everything we stand for at Kiaat Technologies:<br><br>
💪 <b>Strength</b> — reliable, durable products that last<br>
💡 <b>Innovation</b> — the latest technology at accessible prices<br>
🤝 <b>Trust</b> — genuine products, honest pricing, real warranty<br>
🇬🇭 <b>Local</b> — built for Ghanaian homes, lifestyles, and budgets`);
    return;
  }

  if(has('how many customer','customers','satisfied','reviews overall','overall rating','average rating')){
    kiaatyAddMessage('bot',"We've served over <b>15,000 happy customers</b> across Ghana! Our overall customer rating is an impressive <b>4.9 out of 5</b> ⭐ — built on years of genuine products, fast delivery, and dependable after-sales support.");
    return;
  }

  if(has('how many product','product count','catalogue','catalog','how much do you sell','all categories')){
    kiaatyAddMessage('bot',`We have over <b>2,400 products</b> across 4 main categories:<br><br>
📱 <b>Electronics</b> — 412 products (phones, laptops, tablets, accessories)<br>
🏠 <b>Home Appliances</b> — 286 products (fridges, ACs, washing machines, microwaves)<br>
🎮 <b>Entertainment</b> — 198 products (TVs, sound systems, gaming consoles)<br>
🏡 <b>Smart Home</b> — 154 products (smart bulbs, CCTV, WiFi routers, smart locks)`);
    kiaatyShowQuickReplies(['📱 Show Electronics','🏠 Show Appliances','🎮 Show Entertainment','🏡 Smart Home']);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 3. LOCATION & CONTACT
  // ─────────────────────────────────────────────────────────────────────────
  if(has('where are you','your location','where is kiaat','physical store','shop address','office','visit you','come to your shop','come in','walk in')){
    kiaatyAddMessage('bot',`Kiaat Technologies is based in <b>Accra, Ghana</b> 📍<br><br>
We operate primarily as an <b>online store</b>, meaning you browse and order here on the website and we deliver to you — no need to travel! We deliver to <b>all 16 regions of Ghana</b>.<br><br>
Need to speak with us directly? Reach us via:<br>
📞 <b>Phone:</b> +233 552 195 047<br>
💬 <b>WhatsApp:</b> +233 552 195 047<br>
📧 <b>Email:</b> kiaattechnologies@gmail.com`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I\'d like to get in touch with Kiaat Technologies.','Chat With Us on WhatsApp'));
    return;
  }

  if(has('phone number','phone','call you','telephone','hotline','reach you by phone')){
    kiaatyAddMessage('bot',`You can call us on <b>+233 552 195 047</b> 📞<br><br>
Our lines are open <b>Monday – Saturday, 8am – 7pm</b>. For faster response outside business hours, send us a WhatsApp message — we monitor it regularly.`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I\'d like to speak with someone at Kiaat Technologies.','WhatsApp Us Now'));
    return;
  }

  if(has('whatsapp','wa ','watsapp','whats app')){
    kiaatyAddMessage('bot',`Our WhatsApp number is <b>+233 552 195 047</b> 💬 — it's our <b>fastest response channel</b>! You can send product photos, ask for quotes, or get order support. We typically reply within minutes during business hours.`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I found you on the Kiaat Technologies website and I have a question.','Open WhatsApp Chat'));
    return;
  }

  if(has('email','e-mail','mail you','send a mail','send email','email address')){
    kiaatyAddMessage('bot',`Our email address is <b>kiaattechnologies@gmail.com</b> 📧<br><br>
We respond to emails within <b>24 hours</b> on business days. For urgent queries, WhatsApp is faster.<br><br>
You can also use the ${link('contact.html','Contact page')} to send us a message directly from the website.`);
    return;
  }

  if(has('business hour','opening hour','open time','close time','when do you open','when are you open','working hour','office hour','what time','operating hour')){
    kiaatyAddMessage('bot',`Our business hours are:<br><br>
🕗 <b>Monday – Friday:</b> 8:00 AM – 7:00 PM<br>
🕘 <b>Saturday:</b> 9:00 AM – 6:00 PM<br>
❌ <b>Sunday:</b> Closed<br><br>
📱 Our <b>WhatsApp</b> is monitored outside business hours — feel free to leave a message and we'll reply first thing the next working day.`);
    return;
  }

  if(has('social media','facebook','instagram','twitter','tiktok','x.com','follow you','follow kiaat','social page')){
    kiaatyAddMessage('bot',`You can find and follow us on social media! Look for the icons at the bottom of any page 👇<br><br>
📘 <b>Facebook</b> — Kiaat Technologies<br>
📸 <b>Instagram</b> — Kiaat Technologies<br>
🐦 <b>X (Twitter)</b> — Kiaat Technologies<br>
🎵 <b>TikTok</b> — Kiaat Technologies<br><br>
Follow us for deals, new arrivals, and tech tips!`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 4. DELIVERY
  // ─────────────────────────────────────────────────────────────────────────
  const matchedRegion = GHANA_REGIONS.find(r => t.includes(r.toLowerCase()));
  if(matchedRegion && has('deliver','ship','reach','send','get here','come here','available')){
    const est = matchedRegion === 'Greater Accra' ? '24–48 hours' : '2–5 business days';
    kiaatyAddMessage('bot',`Yes! We deliver to <b>${matchedRegion}</b> 🚚<br><br>
⏱️ <b>Estimated delivery time:</b> ${est}<br>
💸 <b>Delivery fee:</b> ${matchedRegion === 'Greater Accra' ? 'Free on orders over ₵999; ₵30 flat fee below that' : 'Calculated at checkout based on order size and location'}<br><br>
We cover <b>all 16 regions of Ghana</b> — no matter where you are, we'll get it to you!`);
    return;
  }

  if(has('delivery','shipping','how long','when will','how soon','dispatch','estimated time','delivery time','arrive','get my order')){
    kiaatyAddMessage('bot',`Here's our full delivery breakdown 🚚:<br><br>
🏙️ <b>Accra (Greater Accra):</b> 24–48 hours<br>
🌍 <b>Other regions:</b> 2–5 business days<br>
🇬🇭 <b>Coverage:</b> All 16 regions of Ghana<br><br>
💸 <b>Delivery fees:</b><br>
✅ <b>FREE</b> on orders over ₵999<br>
🏷️ Flat <b>₵30</b> fee on orders below ₵999<br><br>
Orders are typically dispatched within 24 hours of payment confirmation. You'll receive your order number after checkout to track progress.`);
    return;
  }

  if(has('free delivery','free shipping','delivery fee','shipping cost','delivery cost','how much is delivery','delivery charge')){
    kiaatyAddMessage('bot',`🎉 <b>Free delivery</b> on all orders over <b>₵999</b>!<br><br>
For orders below ₵999, a flat fee of <b>₵30</b> applies — nationwide to all 16 regions of Ghana.<br><br>
💡 Tip: Adding more items to your cart to reach ₵999 saves you the delivery fee!`);
    return;
  }

  if(has('track','where is my order','order status','my order','tracking number','track my','check my order')){
    kiaatyAddMessage('bot',`To track your order:<br><br>
1️⃣ After checkout you'll receive an <b>order number</b> (e.g. KT2026XXXXXX)<br>
2️⃣ Keep that number handy<br>
3️⃣ Contact us with it via WhatsApp or phone and we'll give you a real-time update<br><br>
📞 <b>Call/WhatsApp:</b> +233 552 195 047`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I\'d like to track my Kiaat Technologies order.','Track Order on WhatsApp'));
    return;
  }

  if(has('nationwide','all region','every region','which region','regions you cover','deliver everywhere','where do you deliver','delivery area','coverage')){
    kiaatyAddMessage('bot',`We deliver to <b>all 16 regions of Ghana</b> 🇬🇭:<br><br>
Greater Accra · Ashanti · Western · Central · Eastern · Volta · Northern · Upper East · Upper West · Bono · Bono East · Ahafo · Western North · Oti · Savannah · North East<br><br>
No matter where you are in Ghana, we'll get your order to you!`);
    return;
  }

  if(has('same day','express','urgent','fast delivery','next day','quick delivery')){
    kiaatyAddMessage('bot',`For orders placed within Accra, we aim to deliver within <b>24–48 hours</b> — sometimes even same day for urgent orders, depending on stock and time of order.<br><br>
📞 For urgent requests, please call or WhatsApp us directly on <b>+233 552 195 047</b> and we'll do our best to prioritise your delivery.`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I need an urgent/express delivery from Kiaat Technologies.','Request Express Delivery'));
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 5. PAYMENT
  // ─────────────────────────────────────────────────────────────────────────
  if(has('payment','pay','how to pay','payment method','momo','mobile money','mtn','telecel','airteltigo','card','visa','mastercard','cash on delivery','cod','transfer','bank')){
    kiaatyAddMessage('bot',`We accept multiple payment methods for your convenience 💳:<br><br>
📱 <b>Mobile Money:</b><br>
&nbsp;&nbsp;• MTN Mobile Money<br>
&nbsp;&nbsp;• Telecel Cash<br>
&nbsp;&nbsp;• AirtelTigo Money<br><br>
💳 <b>Bank Cards:</b><br>
&nbsp;&nbsp;• Visa debit/credit card<br>
&nbsp;&nbsp;• Mastercard debit/credit card<br><br>
💵 <b>Cash on Delivery</b> — pay our rider when your order arrives (available in eligible areas)<br><br>
All payments are <b>100% secure</b>. Your details are never stored or shared.`);
    return;
  }

  if(has('is it safe','secure','secure payment','payment secure','safe to pay','trust','legit','real','genuine store','scam','fake')){
    kiaatyAddMessage('bot',`Absolutely! Kiaat Technologies is a <b>100% legitimate and trusted</b> store 🛡️<br><br>
✅ We've been in business since <b>2015</b><br>
✅ Over <b>15,000 happy customers</b> across Ghana<br>
✅ All products are <b>genuine, brand-new</b> and sourced from authorized distributors<br>
✅ We provide <b>manufacturer warranty</b> on every item<br>
✅ <b>Secure payment</b> processing — your details are never stored<br>
✅ <b>7-day return policy</b> for peace of mind<br>
✅ Real team available by phone, WhatsApp and email<br><br>
Our <b>4.9/5 customer rating</b> from 15,000+ customers speaks for itself! 🌟`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 6. WARRANTY & RETURNS
  // ─────────────────────────────────────────────────────────────────────────
  if(has('warranty','guarantee','how long is warranty','product warranty','manufacturer warranty','compressor warranty')){
    kiaatyAddMessage('bot',`Every product sold at Kiaat Technologies comes with a <b>manufacturer's warranty</b> 🛡️<br><br>
📋 <b>General electronics:</b> 12 months manufacturer warranty<br>
❄️ <b>Refrigerators (LG/Samsung):</b> Up to <b>10-year compressor warranty</b><br>
📺 <b>Smart TVs:</b> 12–24 months warranty<br>
🌬️ <b>Air conditioners:</b> 12 months + 1-year installation warranty<br>
💻 <b>Laptops:</b> 12 months manufacturer warranty<br><br>
We also provide <b>local after-sales support</b> — so if something goes wrong, our team helps you sort it out right here in Ghana, without you needing to contact an overseas brand directly.`);
    return;
  }

  if(has('return','refund','exchange','send back','damaged','faulty','broken','defective','not working','wrong item','wrong product')){
    kiaatyAddMessage('bot',`We have a simple <b>7-day return policy</b> 🔄<br><br>
📌 <b>Conditions for a return:</b><br>
• Item must be <b>unused</b> and in <b>original packaging</b><br>
• Return must be initiated within <b>7 days</b> of delivery<br>
• Must have original receipt/order number<br><br>
📌 <b>Eligible for return/exchange:</b><br>
• Wrong item delivered<br>
• Item arrived damaged or defective<br>
• Item doesn't match the product description<br><br>
📌 <b>How to start a return:</b><br>
Contact our team via WhatsApp or phone with your order number and we'll guide you through the process.`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I need to return or exchange a product from Kiaat Technologies.','Start a Return on WhatsApp'));
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 7. WHOLESALE / BULK
  // ─────────────────────────────────────────────────────────────────────────
  if(has('wholesale','bulk','resell','reseller','retailer','business order','shop owner','corporate','company order','bulk price','volume discount','quantity discount')){
    kiaatyAddMessage('bot',`We love working with businesses! 🏪<br><br>
Kiaat Technologies offers <b>competitive wholesale pricing</b> for:<br>
• Retail and shop owners<br>
• Corporate / company purchases<br>
• Event and office setups<br>
• Government and institutional bulk orders<br><br>
💡 <b>How it works:</b><br>
1. Send us your list of items + quantities via WhatsApp<br>
2. We respond with a customised quote within hours<br>
3. Agree on price, confirm order and we deliver<br><br>
There's no minimum order — whether it's 5 units or 500, we'll find the right deal for you.`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I\'d like a wholesale/bulk pricing quote from Kiaat Technologies. Here\'s what I need: ','Request a Wholesale Quote'));
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 8. DEALS & DISCOUNTS
  // ─────────────────────────────────────────────────────────────────────────
  if(has('deal','sale','discount','promo','offer','special offer','% off','price cut','markdown','clearance','flash sale','best price','cheapest','affordable','budget')){
    const saleProds = products.filter(p=>p.oldPrice).sort((a,b)=>((b.oldPrice-b.price)/b.oldPrice)-((a.oldPrice-a.price)/a.oldPrice)).slice(0,2);
    kiaatyAddMessage('bot',`🔥 We currently have <b>up to 40% OFF</b> on selected products — including TVs, phones, appliances and smart home devices!<br><br>
All sale items are <b>100% genuine</b> with <b>full warranty</b> — discounts never affect product quality or warranty coverage.<br><br>
Here are our top discounted picks right now:`);
    kiaatyAddMessage('bot', saleProds.map(p=>`
      <div class="kiaaty-rec-card">
        <img src="${p.img}" alt="${p.name}">
        <div class="kiaaty-rec-card-info">
          <h6>${p.name}</h6>
          <span>${productPrice(p)}</span>
        </div>
        <button onclick="toggleKiaaty();openQuickView(${p.id})">View</button>
      </div>`).join(''));
    kiaatyAddMessage('bot',`👉 ${link('deals.html','See all deals on the Deals page →')}`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 9. PRODUCT CATEGORIES
  // ─────────────────────────────────────────────────────────────────────────
  if(has('what do you sell','product','categories','what products','range','stock','inventory','what can i buy','what do you have','show me everything','browse','catalogue')){
    kiaatyAddMessage('bot',`We sell a wide range of quality technology and home products across 4 categories 🛍️:<br><br>
📱 <b>Electronics</b> — Smartphones, Laptops, Tablets, Accessories <br>${link('electronics.html','Browse Electronics →')}<br><br>
🏠 <b>Home Appliances</b> — Fridges, ACs, Washing Machines, Microwaves <br>${link('appliances.html','Browse Appliances →')}<br><br>
🎮 <b>Entertainment</b> — Smart TVs, Soundbars, Gaming Consoles <br>${link('electronics.html#entertainment','Browse Entertainment →')}<br><br>
🏡 <b>Smart Home</b> — Smart Bulbs, CCTV, WiFi Routers, Smart Locks <br>${link('electronics.html#smart','Browse Smart Home →')}`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 10. SPECIFIC PRODUCT CATEGORIES
  // ─────────────────────────────────────────────────────────────────────────
  if(has('smart tv','television','tv ',' tv','4k tv','uhd tv','hisense tv','samsung tv','lg tv','flat screen')){
    kiaatyAddMessage('bot',`We carry a great range of <b>Smart TVs</b> 📺 — from compact 43" bedroom TVs to large 55" 4K displays, from brands like Samsung and Hisense.<br><br>Here are our top picks:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Smart TVs', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html#entertainment','View all Smart TVs →')}`);
    return;
  }

  if(has('laptop','notebook','hp laptop','dell laptop','lenovo','macbook','computer','pc ',' pc')){
    kiaatyAddMessage('bot',`We stock a solid range of <b>laptops</b> 💻 from trusted brands like HP and Dell — ideal for work, study, or everyday use. All come with manufacturer warranty.<br><br>Here are our top picks:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Laptops', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html','View all Laptops →')}`);
    return;
  }

  if(has('smartphone','phone','mobile phone','iphone','samsung phone','tecno','infinix','android','galaxy')){
    kiaatyAddMessage('bot',`We carry popular <b>smartphones</b> 📱 including Samsung, Tecno, Infinix and more — across all budgets, from entry-level to flagship.<br><br>Our top sellers:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Smartphones', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html','View all Smartphones →')}`);
    return;
  }

  if(has('tablet','ipad','android tablet')){
    kiaatyAddMessage('bot',`We stock quality <b>tablets</b> 📲 including the iPad — perfect for school, work, and entertainment.<br><br>Available options:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Tablets', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html','View all Tablets →')}`);
    return;
  }

  if(has('earbuds','earphone','headphone','anker','wireless earphone','airpods','headset','bluetooth earbuds')){
    kiaatyAddMessage('bot',`We carry <b>wireless earbuds & headphones</b> 🎧 from trusted brands like Anker Soundcore — great sound, long battery life, and a comfortable fit.<br><br>Available options:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Accessories', 3));
    return;
  }

  if(has('accessory','accessories','cable','charger','case','cover','mouse','keyboard')){
    kiaatyAddMessage('bot',`We stock a range of <b>accessories</b> including earbuds, headphones, and more to complement your devices.<br><br>Popular accessories:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Accessories', 3));
    return;
  }

  if(has('fridge','refrigerator','freezer','double door','single door','chest freezer','lg fridge','samsung fridge','hisense fridge','350l','120l')){
    kiaatyAddMessage('bot',`We have a great range of <b>refrigerators</b> 🧊 — from compact single-door 120L units to large 350L double-door models. All with smart inverter technology built for Ghana's power conditions.<br><br>Top picks:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Refrigerators', 3));
    kiaatyAddMessage('bot',`👉 ${link('appliances.html#fridges','View all Refrigerators →')}`);
    return;
  }

  if(has('air conditioner','air con','ac unit','split ac','window ac','1.5hp','1hp','aircon','cooling','cool the room')){
    kiaatyAddMessage('bot',`We carry reliable <b>air conditioners</b> ❄️ including split units and window units — energy-efficient models built for Ghana's climate.<br><br>Top picks:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Air Conditioners', 3));
    kiaatyAddMessage('bot',`👉 ${link('appliances.html#ac','View all Air Conditioners →')}`);
    return;
  }

  if(has('washing machine','washer','front load','top load','laundry machine','hisense washing','laundry','8kg')){
    kiaatyAddMessage('bot',`We stock quality <b>washing machines</b> 🫧 with large capacity and multiple wash programs — gentle on all fabric types.<br><br>Available options:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Washing Machines', 3));
    kiaatyAddMessage('bot',`👉 ${link('appliances.html#washing','View all Washing Machines →')}`);
    return;
  }

  if(has('microwave','oven','microwave oven','midea','digital microwave')){
    kiaatyAddMessage('bot',`We have compact <b>microwave ovens</b> 🍲 with digital controls, multiple power levels and child safety lock — perfect for everyday cooking.<br><br>Available options:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Microwaves', 3));
    kiaatyAddMessage('bot',`👉 ${link('appliances.html#microwave','View all Microwaves →')}`);
    return;
  }

  if(has('gaming','playstation','ps5','ps 5','xbox','game console','console','next gen','gaming console')){
    kiaatyAddMessage('bot',`We have the latest <b>gaming consoles</b> 🎮 including PS5 and Xbox Series S — next-generation gaming with lightning-fast load times and stunning graphics.<br><br>Available consoles:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Gaming Consoles', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html#entertainment','View all Gaming Consoles →')}`);
    return;
  }

  if(has('speaker','soundbar','sound system','jbl','bluetooth speaker','subwoofer','sony soundbar','partybox')){
    kiaatyAddMessage('bot',`We stock powerful <b>sound systems</b> 🔊 including JBL Bluetooth speakers, Sony soundbars with wireless subwoofers and more — perfect for home entertainment or parties.<br><br>Top picks:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Sound Systems', 3));
    return;
  }

  if(has('cctv','security camera','camera','hikvision','surveillance','ezviz','doorbell camera','video doorbell','night vision')){
    kiaatyAddMessage('bot',`We carry quality <b>security cameras & CCTV systems</b> 📷 including Hikvision 4-channel kits and Ezviz smart video doorbells — with night vision and remote mobile monitoring.<br><br>Available options:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='CCTV Cameras', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html#smart','View all Security Cameras →')}`);
    return;
  }

  if(has('wifi','router','internet','tp-link','mesh','wifi 6','deco','network','broadband','wireless internet')){
    kiaatyAddMessage('bot',`We carry fast, reliable <b>WiFi routers</b> 📡 including TP-Link WiFi 6 routers and Deco mesh systems — covering small apartments to large homes with zero dead zones.<br><br>Top picks:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='WiFi Routers', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html#smart','View all WiFi Routers →')}`);
    return;
  }

  if(has('smart bulb','smart light','philips bulb','led bulb','colour bulb','color bulb','smart home light','voice control light')){
    kiaatyAddMessage('bot',`We have <b>smart WiFi LED bulbs</b> 💡 — control your lighting from anywhere, change colours, set schedules, and even use voice commands with Alexa or Google Home.<br><br>Available options:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Smart Bulbs', 3));
    return;
  }

  if(has('smart lock','door lock','yale lock','digital lock','keyless','smart door')){
    kiaatyAddMessage('bot',`We carry <b>smart digital door locks</b> 🔐 from Yale — unlock with a PIN, smart card or backup key. Easy retrofit installation, no technician needed.<br><br>Available options:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Smart Locks', 3));
    return;
  }

  if(has('smart home','home automation','smart device','automate','control from phone','smart setup')){
    kiaatyAddMessage('bot',`We have everything you need to make your home <b>smarter</b> 🏡:<br><br>
💡 <b>Smart Bulbs</b> — app-controlled lighting with 16M colours<br>
📷 <b>CCTV Cameras</b> — HD security with remote monitoring<br>
📡 <b>WiFi Routers & Mesh Systems</b> — fast whole-home coverage<br>
🔐 <b>Smart Door Locks</b> — keyless entry via PIN or card<br>
🔔 <b>Smart Video Doorbells</b> — see who's at your door from anywhere<br><br>
All easy to set up and control from your smartphone!`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.cat==='smart', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html#smart','View all Smart Home Products →')}`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 11. SPECIFIC PRODUCT LOOKUPS BY NAME
  // ─────────────────────────────────────────────────────────────────────────
  if(has('samsung 55','55 inch','55"','uhd 4k','crystal uhd')){
    const p = findProduct('Samsung 55');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> is one of our best-selling TVs! 📺<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('lg 350','lg fridge','lg refrigerator','350l')){
    const p = findProduct('LG 350');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> is a customer favourite! 🧊<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('hp pavilion','hp laptop','pavilion 15','core i5 laptop')){
    const p = findProduct('HP Pavilion');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> is one of our most popular laptops! 💻<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('galaxy a55','samsung a55','a55 5g','samsung galaxy')){
    const p = findProduct('Galaxy A55');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — premium mid-range 5G! 📱<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('playstation 5','ps5','playstation5')){
    const p = findProduct('PlayStation 5');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — next-gen gaming at its finest! 🎮<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>`)}<br><br>⚡ Stock is very limited — only ${p.stock} units left!`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('xbox series s','xbox series','xbox s','series s')){
    const p = findProduct('Xbox Series S');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — compact gaming powerhouse! 🎮<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('jbl partybox','partybox 110','jbl 110','partybox')){
    const p = findProduct('JBL Partybox');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — the life of every party! 🎉<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('ipad','ipad 10','10th gen ipad','apple tablet')){
    const p = findProduct('iPad');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — Apple quality at its best! 📱<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('tecno spark','spark 20','tecno spark 20')){
    const p = findProduct('Tecno Spark 20');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — great value smartphone! 📱<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('anker soundcore','soundcore','anker earbuds','wireless earbud')){
    const p = findProduct('Anker Soundcore');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — incredible value wireless earbuds! 🎧<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('dell inspiron','dell laptop','inspiron 15','core i3 laptop')){
    const p = findProduct('Dell Inspiron');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — reliable everyday laptop! 💻<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('hikvision','hikvi','4 channel cctv','4channel')){
    const p = findProduct('Hikvision');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — professional home security! 📷<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('tp-link archer','archer ax55','wifi 6 router','ax55')){
    const p = findProduct('Archer AX55');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — blazing WiFi 6 speeds! 📡<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('philips smart','philips bulb','philips led','smart bulb','4 pack bulb','4-pack')){
    const p = findProduct('Philips Smart');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — smart lighting made easy! 💡<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('yale smart','yale lock','digital door lock','smart door lock')){
    const p = findProduct('Yale Smart');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — keyless security for your home! 🔐<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('ezviz','video doorbell','smart doorbell','ezviz doorbell')){
    const p = findProduct('Ezviz');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — see who's at your door from anywhere! 🔔<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('deco mesh','tp-link deco','mesh wifi','wifi mesh','mesh system')){
    const p = findProduct('Deco Mesh');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — whole-home WiFi coverage! 📡<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('hisense 43','43 inch','43"','hisense fhd')){
    const p = findProduct('Hisense 43');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — perfect for bedrooms! 📺<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('midea microwave','20l microwave','digital microwave')){
    const p = findProduct('Midea');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — quick and convenient cooking! 🍲<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('bruhm','window ac','1hp ac','window unit')){
    const p = findProduct('Bruhm');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — compact and reliable cooling! ❄️<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }
  if(has('sony soundbar','2.1 soundbar','soundbar with subwoofer')){
    const p = findProduct('Sony 2.1');
    if(p){ kiaatyAddMessage('bot',`The <b>${p.name}</b> — cinematic sound at home! 🔊<br><br>💰 Price: ${productPrice(p)}<br>⭐ Rating: ${p.rating}/5 (${p.reviews} reviews)<br>${stockText(p)}<br><br>${p.features.map(f=>`✅ ${f}`).join('<br>')}`); kiaatyAddMessage('bot', kiaatyRec(pp=>pp.id===p.id, 1)); } return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 12. PRICE QUERIES
  // ─────────────────────────────────────────────────────────────────────────
  if(has('how much','price','cost','how much is','how much does','what does it cost','cheapest','most expensive','price range','price list','pricing')){
    const cheapest = [...products].sort((a,b)=>a.price-b.price)[0];
    const expensive = [...products].sort((a,b)=>b.price-a.price)[0];
    kiaatyAddMessage('bot',`Our prices range from <b>${GHS(cheapest.price)}</b> (${cheapest.name}) all the way up to <b>${GHS(expensive.price)}</b> (${expensive.name}).<br><br>
💡 To get the exact price of a specific product, just tell me its name and I'll pull it up instantly! Or browse our pages:<br><br>
📱 ${link('electronics.html','Electronics prices →')}<br>
🏠 ${link('appliances.html','Appliance prices →')}<br>
🔥 ${link('deals.html','Deals & discounted prices →')}`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 13. BRANDS
  // ─────────────────────────────────────────────────────────────────────────
  if(has('brand','brands','which brand','what brand','samsung','lg','sony','hisense','hp','dell','tecno','infinix','anker','jbl','yale','hikvision','tp-link','philips','midea','bruhm','ezviz')){
    kiaatyAddMessage('bot',`We carry <b>20+ trusted global brands</b> including:<br><br>
📱 <b>Electronics:</b> Samsung, HP, Dell, Tecno, Infinix, Anker, Apple<br>
📺 <b>Entertainment:</b> Samsung, Hisense, Sony, JBL, Microsoft (Xbox)<br>
🏠 <b>Appliances:</b> LG, Hisense, Bruhm, Midea<br>
🏡 <b>Smart Home:</b> Philips, Hikvision, Ezviz, TP-Link, Yale<br><br>
All products are <b>100% genuine</b> and sourced directly from authorized distributors.`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 14. HOW TO ORDER / SHOPPING GUIDE
  // ─────────────────────────────────────────────────────────────────────────
  if(has('how to order','how to buy','how to shop','how to purchase','place an order','checkout process','how does it work','ordering process','steps to buy','buying process')){
    kiaatyAddMessage('bot',`Ordering from Kiaat Technologies is simple! Here's how 🛒:<br><br>
<b>Step 1:</b> Browse our products on the website or ask me for a recommendation<br>
<b>Step 2:</b> Click <b>"Add to Cart"</b> or use <b>"Quick View"</b> on any product<br>
<b>Step 3:</b> Open your cart (bag icon top-right) and click <b>"Proceed to Checkout"</b><br>
<b>Step 4:</b> Enter your <b>delivery details</b> (name, phone, region, address)<br>
<b>Step 5:</b> Choose your <b>payment method</b> (MoMo, card, or cash on delivery)<br>
<b>Step 6:</b> Review your order and click <b>"Place Order"</b><br>
<b>Step 7:</b> 🎉 Done! We'll confirm and dispatch your order<br><br>
You can also just call or WhatsApp us and we'll take the order manually!`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I\'d like to place an order with Kiaat Technologies.','Order via WhatsApp Instead'));
    return;
  }

  if(has('add to cart','cart','shopping cart','my cart','view cart','remove from cart')){
    kiaatyAddMessage('bot',`To manage your cart on our website:<br><br>
🛍️ <b>Add items:</b> Click the <b>"Add to Cart"</b> button on any product<br>
👁️ <b>Quick view:</b> Hover over a product and click "Quick View" to see details before adding<br>
🛒 <b>View cart:</b> Click the <b>bag icon</b> in the top-right header<br>
➕➖ <b>Change quantity:</b> Use the + / − buttons in the cart drawer<br>
🗑️ <b>Remove items:</b> Click the trash icon next to any cart item<br>
💳 <b>Checkout:</b> Click "Proceed to Checkout" in the cart drawer`);
    return;
  }

  if(has('wishlist','save','save for later','favourite','favorite')){
    kiaatyAddMessage('bot',`To save products for later:<br><br>
❤️ Click the <b>heart icon</b> on any product card or in the Quick View popup<br>
💛 View saved items by clicking the <b>heart icon</b> in the top-right header<br>
🛒 You can <b>move wishlist items to cart</b> with one click when you're ready to buy<br><br>
Your wishlist is saved during your browsing session!`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 15. WEBSITE NAVIGATION
  // ─────────────────────────────────────────────────────────────────────────
  if(has('page','pages','website','site','navigate','navigation','where to find','how to find','where is the','which page')){
    kiaatyAddMessage('bot',`Here's a quick map of our website 🗺️:<br><br>
🏠 ${link('index.html','Home')} — Featured products, deals, about us, FAQ<br>
📱 ${link('electronics.html','Electronics')} — Phones, laptops, tablets, TVs, gaming, smart home<br>
🏠 ${link('appliances.html','Appliances')} — Fridges, ACs, washing machines, microwaves<br>
🔥 ${link('deals.html','Deals')} — All discounted products, up to 40% off<br>
📞 ${link('contact.html','Contact')} — Reach us by phone, WhatsApp, email or form<br><br>
You can also use the <b>🔍 search icon</b> in the top header to find any product instantly!`);
    return;
  }

  if(has('search','find product','look for','how to search','search bar','search for')){
    kiaatyAddMessage('bot',`To search for a product on our website:<br><br>
🔍 Click the <b>magnifying glass icon</b> in the top-right header<br>
⌨️ Type any product name, brand, or category<br>
✅ Matching products appear instantly — click any result to open it<br><br>
Or just tell me what you're looking for right here and I'll find it for you! 😊`);
    return;
  }

  if(has('dark mode','light mode','theme','night mode','change colour','change color','appearance')){
    kiaatyAddMessage('bot',`You can switch between <b>light and dark mode</b> 🌙☀️ on our website!<br><br>
Look for the <b>moon/sun icon</b> floating on the right side of the screen (bottom-right area). Click it to toggle between light and dark themes. Your preference applies instantly across the whole page!`);
    return;
  }

  if(has('newsletter','subscribe','email update','join newsletter','mailing list','notification')){
    kiaatyAddMessage('bot',`You can subscribe to our newsletter at the <b>bottom of the homepage</b> 📬<br><br>
Benefits of subscribing:<br>
✅ <b>Early access</b> to sales and flash offers<br>
✅ <b>New arrival</b> alerts<br>
✅ <b>Restock notifications</b> on popular items<br>
✅ <b>Exclusive subscriber-only deals</b><br><br>
Just enter your email in the newsletter box at the bottom of ${link('index.html','the homepage →')}`);
    return;
  }

  if(has('blog','article','guide','tip','buying guide','tech tip','review','read')){
    kiaatyAddMessage('bot',`We have a <b>Kiaat Blog</b> with helpful content for shoppers 📝:<br><br>
📺 Best Smart TVs in Ghana for 2026 — A Complete Buyer's Guide<br>
⚡ 7 Energy-Saving Appliances That Cut Your Electricity Bill<br>
💻 How To Choose The Right Laptop For Work, School Or Gaming<br>
🏡 Smart Home Trends Every Ghanaian Household Should Know<br><br>
Find the blog section on the ${link('index.html','homepage →')}`);
    return;
  }

  if(has('faq','frequently asked','common question')){
    kiaatyAddMessage('bot',`We have a <b>FAQ section</b> on our website covering the most common questions! 📋<br><br>
Topics covered:<br>
📦 Delivery timelines and fees<br>
💳 Payment methods<br>
🛡️ Product warranty<br>
🔄 Returns and exchanges<br>
🏪 Wholesale pricing<br>
📍 Order tracking<br><br>
Find it on the ${link('index.html#faq','homepage')} or ${link('contact.html','contact page →')}`);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 16. CAREERS
  // ─────────────────────────────────────────────────────────────────────────
  if(has('job','career','hiring','vacancy','work at kiaat','join your team','employment','internship','apply')){
    kiaatyAddMessage('bot',`Interested in joining the Kiaat Technologies team? We'd love to hear from you! 🙌<br><br>
We're always looking for passionate, talented people to grow with us. To enquire about available positions or send your CV, please reach out directly:<br><br>
📧 <b>Email:</b> kiaattechnologies@gmail.com (Subject: Job Application)<br>
💬 <b>WhatsApp:</b> +233 552 195 047`);
    kiaatyAddMessage('bot', kiaatyWa('Hi, I\'m interested in a career opportunity at Kiaat Technologies.','Enquire About Jobs'));
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 17. ENERGY / POWER QUESTIONS (common in Ghana)
  // ─────────────────────────────────────────────────────────────────────────
  if(has('inverter','energy saving','electricity','power cut','dumsor','generator','unstable power','stabiliser','energy efficient','low power')){
    kiaatyAddMessage('bot',`Great question — we know power reliability matters in Ghana! 🔌<br><br>
We specifically stock <b>inverter models</b> for refrigerators and air conditioners. Here's why they matter:<br><br>
⚡ <b>Inverter compressors</b> use up to 40% less electricity than standard models<br>
🔋 They handle <b>voltage fluctuations</b> better — great for generator use<br>
🔇 They run <b>quieter</b> and last longer<br>
💸 They save you money on your <b>ECG/NEDCO bills</b><br><br>
Look for the <b>"Smart Inverter"</b> tag on our fridges and ACs. I can help you find the right energy-efficient model!`);
    kiaatyShowQuickReplies(['🧊 Inverter Fridges','❄️ Inverter ACs','💬 Talk to an expert']);
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 18. PRODUCT COMPARISONS / RECOMMENDATIONS
  // ─────────────────────────────────────────────────────────────────────────
  if(has('recommend','suggest','best','which one','what should i buy','help me choose','best for','good for','compare','vs ','versus','difference between')){
    kiaatyAddMessage('bot',`I'd love to help you choose the right product! 🎯<br><br>
To give you the best recommendation, could you tell me:<br>
1️⃣ <b>What product type</b> are you looking for? (e.g. TV, fridge, phone)<br>
2️⃣ <b>Your budget</b>? (rough range is fine)<br>
3️⃣ <b>Main use case</b>? (e.g. family use, office, bedroom, gifts)<br><br>
Or pick a category and I'll show you our top-rated options!`);
    kiaatyShowQuickReplies(['📺 Best TVs','💻 Best Laptops','📱 Best Phones','🧊 Best Fridges','🎮 Best Gaming']);
    return;
  }

  if(has('best tv','top tv','best television','top rated tv')){
    kiaatyAddMessage('bot',`Here are our <b>best-selling Smart TVs</b> right now, sorted by customer rating ⭐:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Smart TVs', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html#entertainment','View all Smart TVs →')}`);
    return;
  }
  if(has('best laptop','top laptop')){
    kiaatyAddMessage('bot',`Here are our <b>top-rated laptops</b> ⭐:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Laptops', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html','View all Laptops →')}`);
    return;
  }
  if(has('best phone','top phone','best smartphone','top smartphone')){
    kiaatyAddMessage('bot',`Here are our <b>best-selling smartphones</b> ⭐:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Smartphones', 3));
    kiaatyAddMessage('bot',`👉 ${link('electronics.html','View all Phones →')}`);
    return;
  }
  if(has('best fridge','top fridge','best refrigerator')){
    kiaatyAddMessage('bot',`Here are our <b>top-rated refrigerators</b> ⭐:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Refrigerators', 3));
    kiaatyAddMessage('bot',`👉 ${link('appliances.html#fridges','View all Refrigerators →')}`);
    return;
  }
  if(has('best gaming','top gaming console','best console')){
    kiaatyAddMessage('bot',`Here are our <b>top gaming consoles</b> ⭐:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.catLabel==='Gaming Consoles', 3));
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 19. GIFT IDEAS
  // ─────────────────────────────────────────────────────────────────────────
  if(has('gift','present','birthday','christmas','valentine','surprise','for my wife','for my husband','for my mum','for my dad','for my girlfriend','for my boyfriend','for someone','gift idea')){
    kiaatyAddMessage('bot',`Looking for the perfect gift? 🎁 Great choice — tech gifts are always a hit! Here are some popular gift ideas across different budgets:<br><br>
💰 <b>Under ₵500:</b> Smart Bulb 4-Pack (₵289), Anker Earbuds (₵459)<br>
💰 <b>₵500–₵2,000:</b> Smart Doorbell (₵749), WiFi Router (₵899), Soundbar (₵1,599)<br>
💰 <b>₵2,000–₵4,000:</b> CCTV Kit (₵1,899), Hisense TV (₵2,899), Air Conditioner (₵3,199)<br>
💰 <b>₵4,000+:</b> Laptops, Samsung Galaxy A55, Refrigerators, PS5/Xbox<br><br>
Tell me your <b>budget</b> and who it's for and I'll narrow it down even further!`);
    kiaatyShowQuickReplies(['🎁 Under ₵500','🎁 ₵500–₵2000','🎁 ₵2000–₵4000','🎁 ₵4000+']);
    return;
  }

  if(has('under ₵500','under 500','less than 500','budget under','cheap gift','affordable gift')){
    kiaatyAddMessage('bot',`Great picks under <b>₵500</b> 🎁:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.price<500, 3));
    return;
  }
  if(has('under ₵2000','under 2000','₵500–₵2000','500 to 2000','between 500 and 2000')){
    kiaatyAddMessage('bot',`Popular picks between <b>₵500 and ₵2,000</b> 🎁:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.price>=500&&p.price<=2000, 3));
    return;
  }
  if(has('under ₵4000','under 4000','₵2000–₵4000','2000 to 4000')){
    kiaatyAddMessage('bot',`Great options between <b>₵2,000 and ₵4,000</b> 🎁:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.price>=2000&&p.price<=4000, 3));
    return;
  }
  if(has('over ₵4000','above 4000','₵4000+','premium','high end','flagship','top of the range')){
    kiaatyAddMessage('bot',`Our premium options above <b>₵4,000</b> 💎:`);
    kiaatyAddMessage('bot', kiaatyRec(p=>p.price>=4000, 3));
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 20. TALK TO HUMAN
  // ─────────────────────────────────────────────────────────────────────────
  if(has('talk to human','real person','agent','representative','customer service','speak to someone','connect me','live chat','live support','not a bot')){
    kiaatyAddMessage('bot',`Absolutely! Our human team is available and happy to help 🙋‍♂️<br><br>
The fastest way to reach a real person is via <b>WhatsApp</b> — typical response time is under 5 minutes during business hours (Mon–Sat, 8am–7pm).<br><br>
You can also:<br>
📞 <b>Call us:</b> +233 552 195 047<br>
📧 <b>Email:</b> kiaattechnologies@gmail.com<br>
📝 ${link('contact.html','Fill in our contact form →')}`);
    kiaatyAddMessage('bot', kiaatyWa('Hi! I\'d like to speak with a member of the Kiaat Technologies team.','Connect With Our Team'));
    return;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 21. GENERAL FALLBACK
  // ─────────────────────────────────────────────────────────────────────────
  kiaatyAddMessage('bot',`Hmm, I want to make sure I give you the right answer! 🤔 Could you rephrase that or choose one of the options below? I know everything about Kiaat Technologies — products, prices, delivery, payments, warranty, returns, brands and more!`);
  kiaatyShowQuickReplies(['🛍️ What do you sell?','💰 Today\'s deals','🚚 Delivery info','📞 Contact the team','💳 Payment methods','🛡️ Warranty & returns']);
}
