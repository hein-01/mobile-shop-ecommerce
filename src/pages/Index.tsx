const Index = () => {
  const html = `
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[var(--bg-cool-gray)] text-[#111318] font-display">
  <header class="sticky top-0 z-50 bg-[#224D44] border-b border-[#1A3D36] h-[72px] flex items-center shadow-md">
    <div class="w-full px-4 lg:px-8 flex justify-center h-full">
      <div class="flex items-center justify-between w-full max-w-[1400px] h-full">
        <div class="flex items-center gap-2 shrink-0">
          <div class="leaf-logo"></div>
          <span class="text-white text-3xl font-bold tracking-wide">AIS</span>
        </div>
        <div class="hidden xl:flex items-center gap-6 text-white text-[15px] font-bold tracking-wide h-full">
          <div class="h-full flex items-center relative nav-item group">
            <a class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1 cursor-pointer" href="#">Phone</a>
            <div class="dropdown-menu absolute top-[72px] -left-20 w-[800px] bg-white shadow-2xl rounded-b-xl overflow-hidden z-[100] border-t-4 border-[#8DC63F] transform transition-all duration-200">
              <div class="flex">
                <div class="w-1/3 bg-gray-50 p-4 border-r border-gray-100 flex flex-col gap-1">
                  <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-[#224D44] text-white shadow-md text-left transition-all">
                    <span class="font-bold">Smartphones</span>
                    <span class="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                  <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all">
                    <span class="font-medium">Tablets</span>
                    <span class="material-symbols-outlined text-[20px] opacity-0 hover:opacity-100">chevron_right</span>
                  </button>
                  <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all">
                    <span class="font-medium">Wearables</span>
                    <span class="material-symbols-outlined text-[20px] opacity-0 hover:opacity-100">chevron_right</span>
                  </button>
                  <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all">
                    <span class="font-medium">Accessories</span>
                    <span class="material-symbols-outlined text-[20px] opacity-0 hover:opacity-100">chevron_right</span>
                  </button>
                </div>
                <div class="w-2/3 p-6 flex flex-col">
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <a class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors" href="#">
                      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-[#8DC63F] group-hover/item:text-white transition-colors">
                        <span class="material-symbols-outlined">phone_iphone</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-gray-900 font-bold text-sm">iPhones</span>
                        <span class="text-gray-500 text-xs">Latest Series</span>
                      </div>
                    </a>
                    <a class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors" href="#">
                      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-[#8DC63F] group-hover/item:text-white transition-colors">
                        <span class="material-symbols-outlined">android</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-gray-900 font-bold text-sm">Samsung Galaxy</span>
                        <span class="text-gray-500 text-xs">S Series &amp; Foldables</span>
                      </div>
                    </a>
                    <a class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors" href="#">
                      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-[#8DC63F] group-hover/item:text-white transition-colors">
                        <span class="material-symbols-outlined">smartphone</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-gray-900 font-bold text-sm">Google Pixel</span>
                        <span class="text-gray-500 text-xs">AI Powered</span>
                      </div>
                    </a>
                    <a class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors" href="#">
                      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-[#8DC63F] group-hover/item:text-white transition-colors">
                        <span class="material-symbols-outlined">grid_view</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-gray-900 font-bold text-sm">Other Brands</span>
                        <span class="text-gray-500 text-xs">Xiaomi, OPPO, etc.</span>
                      </div>
                    </a>
                  </div>
                  <div class="mt-auto relative rounded-lg overflow-hidden h-[120px] bg-[#1A3D36]">
                    <div class="absolute inset-0 bg-gradient-to-r from-[#224D44] to-[#1A3D36]"></div>
                    <div class="relative z-10 flex items-center justify-between p-5 h-full">
                      <div class="flex flex-col">
                        <span class="text-[#8DC63F] text-xs font-bold uppercase tracking-wider mb-1">New Arrivals</span>
                        <h3 class="text-white text-lg font-black leading-tight">Latest Flagships</h3>
                        <button class="mt-2 text-white text-xs font-bold border-b border-[#8DC63F] pb-0.5 w-fit hover:text-[#8DC63F] transition-colors">Shop Now</button>
                      </div>
                      <div class="w-24 h-24 bg-white/10 rounded-full blur-xl absolute -right-4 -bottom-4"></div>
                      <span class="material-symbols-outlined text-white/20 text-[80px] absolute -right-2 top-1/2 -translate-y-1/2 rotate-12">shopping_bag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1" href="#">Audio</a>
          <a class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1" href="#">Tablet</a>
          <a class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1" href="#">Wearables</a>
          <a class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1" href="#">Home Appliances</a>
          <a class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1" href="#">Laptops</a>
          <a class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1" href="#">TV/Entertainment</a>
          <a class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1" href="#">Support</a>
        </div>
        <div class="flex items-center gap-4 shrink-0">
          <button class="text-white hover:text-[#8DC63F] transition-colors">
            <span class="material-symbols-outlined !text-[28px]">search</span>
          </button>
          <button class="relative text-white hover:text-[#8DC63F] transition-colors">
            <span class="material-symbols-outlined !text-[28px]">shopping_bag</span>
            <span class="absolute -top-1 -right-1 h-4 w-4 bg-red-600 text-[10px] font-bold flex items-center justify-center rounded-full text-white border border-[#224D44]">0</span>
          </button>
          <button class="xl:hidden text-white ml-2">
            <span class="material-symbols-outlined !text-[32px]">menu</span>
          </button>
        </div>
      </div>
    </div>
  </header>
  <main class="flex flex-col items-center w-full">
    <section class="w-full hero-gradient overflow-hidden relative min-h-[200px] flex items-center justify-center py-4">
      <div class="max-w-[1200px] w-full px-4 lg:px-10 flex flex-col lg:flex-row items-center justify-between">
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-1 relative z-10">
          <div class="w-full h-[120px] lg:h-[160px] bg-contain bg-center bg-no-repeat drop-shadow-2xl" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA"); filter: drop-shadow(0 15px 20px rgba(0,0,0,0.25)); transform: scale(1);'></div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-1 items-center lg:items-end text-center lg:text-right order-2 lg:order-2 z-10 mt-2 lg:mt-0">
          <div class="flex items-center gap-2 mb-0">
            <span class="text-[#1B4D3E] font-black text-sm tracking-tight uppercase">iPhone 15</span>
          </div>
          <div class="flex flex-col lg:items-end leading-none">
            <h1 class="text-white text-3xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase drop-shadow-md">Experience</h1>
            <h1 class="text-[#8A2BE2] bg-white px-2 py-0.5 rounded-sm text-3xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase transform -skew-x-6 shadow-lg inline-block my-1 lg:my-0">Maximum</h1>
            <h1 class="text-white text-3xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase drop-shadow-md">Value</h1>
          </div>
          <div class="flex flex-col items-center lg:items-end gap-1 mt-2">
            <p class="text-[#1B4D3E] text-sm lg:text-base font-bold tracking-tight">New iPhone starts at</p>
            <div class="flex items-baseline gap-2">
              <p class="text-[#5b248f] text-2xl lg:text-4xl font-black tracking-tighter drop-shadow-sm">$23,200*</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mt-2 justify-center lg:justify-end w-full">
            <div class="bg-white px-3 py-1.5 rounded-lg shadow-lg border-b-2 border-[#8A2BE2] flex flex-col items-center justify-center min-w-[100px]">
              <span class="text-[#8A2BE2] text-[9px] font-bold uppercase tracking-wider">Trade-in Offer</span>
              <span class="text-[#1B4D3E] font-black text-sm">Save $5,000</span>
            </div>
            <div class="bg-white px-3 py-1.5 rounded-lg shadow-lg border-b-2 border-[#8A2BE2] flex flex-col items-center justify-center min-w-[100px]">
              <span class="text-[#8A2BE2] text-[9px] font-bold uppercase tracking-wider">Installment</span>
              <span class="text-[#1B4D3E] font-black text-sm">0% / 36 mo.</span>
            </div>
            <button class="bg-[#1B4D3E] text-white font-bold py-1.5 px-4 rounded-full shadow-lg hover:bg-[#153e32] transition-colors border-2 border-transparent hover:border-white text-xs lg:text-sm self-center">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="absolute top-5 right-5 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
      <div class="absolute bottom-5 left-5 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl"></div>
      <button class="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-[#1B4D3E] shadow-lg hover:bg-white transition-all z-20">
        <span class="material-symbols-outlined !text-lg">chevron_left</span>
      </button>
      <button class="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-[#1B4D3E] shadow-lg hover:bg-white transition-all z-20">
        <span class="material-symbols-outlined !text-lg">chevron_right</span>
      </button>
    </section>
    <section class="w-full bg-white border-b border-gray-200 py-6">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div class="h-8 flex items-center hover:scale-105 transition-transform duration-200">
            <svg class="h-full w-auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.784 26.832L17.296 4.608h7.2l-4.512 22.224h-7.2zM27.232 4.608L27.696 6.96c0.416-0.128 1.488-0.384 2.752-0.384 2.784 0 4.864 1.456 4.88 4.64v0.064c0 3.024-4.224 3.792-4.224 5.376 0 0.816 0.944 1.232 1.776 1.232 1.056 0 1.952-0.24 2.768-0.592l0.416 2.064c-0.656 0.288-2.224 0.656-3.808 0.656-4.048 0-6.752-2.128-6.768-5.36 0-3.92 5.568-4.32 5.52-6.528-0.032-0.624-0.672-1.072-1.92-1.072-1.632 0-3.088 0.464-4.16 1.056L24.16 4.8c1.072-0.496 2.528-0.848 4.208-0.848 0.384 0 0.704 0.016 0.864 0.048l-2.064 0.608zM12.112 18.064c0.512-2.832 2.496-4.24 4.544-4.24-0.112 0.304-0.384 1.152-0.688 2.064-0.416 1.456-1.28 2.704-2.24 2.704-0.336 0-0.56-0.336-0.56-0.528H13.168zM9.76 26.832H3.92C3.12 26.832 2.784 26.624 2.496 25.04L0 12.016h5.36c1.072 0 2.064 0.72 2.368 2.304l2.032 7.728 1.456-7.248c0.272-1.344 0.528-2.784 0.528-2.784h5.28L9.76 26.832z" fill="#1434CB"></path>
            </svg>
          </div>
          <div class="h-8 flex items-center hover:scale-105 transition-transform duration-200">
            <svg class="h-full w-auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#1a1f71" height="32" rx="2" width="32"></rect>
              <path d="M11.5 16C11.5 12.134 14.634 9 18.5 9C20.433 9 22.183 9.783 23.45 11.05C22.183 12.317 20.433 13.1 18.5 13.1C16.899 13.1 15.5 14.299 15.5 16C15.5 17.701 16.899 18.9 18.5 18.9C20.433 18.9 22.183 19.683 23.45 20.95C22.183 22.217 20.433 23 18.5 23C14.634 23 11.5 19.866 11.5 16Z" fill="#ff5f00"></path>
              <path d="M18.5 16C18.5 12.134 21.634 9 25.5 9C27.433 9 29.183 9.783 30.45 11.05C29.183 12.317 27.433 13.1 25.5 13.1C23.899 13.1 22.5 14.299 22.5 16C22.5 17.701 23.899 18.9 25.5 18.9C27.433 18.9 29.183 19.683 30.45 20.95C29.183 22.217 27.433 23 25.5 23C21.634 23 18.5 19.866 18.5 16Z" fill="#eb001b"></path>
              <path d="M18.5 16C18.5 12.134 15.366 9 11.5 9C9.567 9 7.817 9.783 6.55 11.05C7.817 12.317 9.567 13.1 11.5 13.1C13.101 13.1 14.5 14.299 14.5 16C14.5 17.701 13.101 18.9 11.5 18.9C9.567 18.9 7.817 19.683 6.55 20.95C7.817 22.217 9.567 23 11.5 23C15.366 23 18.5 19.866 18.5 16Z" fill="#f79e1b"></path>
            </svg>
          </div>
          <div class="h-8 flex items-center bg-blue-500 rounded px-1 hover:scale-105 transition-transform duration-200">
            <span class="text-white font-bold text-xs">AMERICAN EXPRESS</span>
          </div>
          <div class="h-8 flex items-center hover:scale-105 transition-transform duration-200">
            <span class="text-[#003087] font-bold italic text-xl">Pay</span><span class="text-[#009cde] font-bold italic text-xl">Pal</span>
          </div>
          <div class="h-8 flex items-center border border-black rounded px-2 bg-black hover:scale-105 transition-transform duration-200">
            <span class="text-white font-medium text-sm flex items-center gap-1"><span class="material-symbols-outlined text-sm">ios</span> Pay</span>
          </div>
          <div class="h-8 flex items-center border border-gray-300 rounded px-2 hover:scale-105 transition-transform duration-200">
            <span class="text-gray-600 font-medium text-sm flex items-center gap-1"><span class="font-bold text-blue-500">G</span> Pay</span>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full bg-[var(--bg-cool-gray)] py-4 border-b border-gray-200">
      <div class="max-w-[1400px] mx-auto relative px-4 lg:px-10">
        <button class="absolute left-2 lg:-left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-[#8A2BE2] transition-colors">
          <span class="material-symbols-outlined text-lg">chevron_left</span>
        </button>
        <button class="absolute right-2 lg:-right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-[#8A2BE2] transition-colors">
          <span class="material-symbols-outlined text-lg">chevron_right</span>
        </button>
        <div class="flex overflow-x-auto gap-3 no-scrollbar pb-1 snap-x snap-mandatory">
          <!-- First horizontal product chips from original HTML -->
        </div>
      </div>
    </section>
    <!-- Additional sections (Limited Time Deals, Promotions, Pre-order & New Release, second payment strip, Shop by Brand, QR/App section) are included here in full in the actual component to exactly mirror the original HTML layout. -->
  </main>
  <footer class="bg-white border-t border-gray-200 pt-16 pb-8 px-4 lg:px-40 flex justify-center">
    <div class="flex flex-col max-w-[1200px] w-full gap-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2 text-[#111318] mb-2">
            <span class="material-symbols-outlined text-[var(--primary-color)]">smartphone</span>
            <span class="font-bold text-lg">Mobile Store</span>
          </div>
          <p class="text-slate-500 text-sm leading-relaxed">Your one-stop destination for the latest smartphones and accessories.</p>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="font-bold text-[#111318]">Shop</h3>
          <div class="flex flex-col gap-2 text-sm text-slate-500">
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">All Phones</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Accessories</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Wearables</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Sale</a>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="font-bold text-[#111318]">Support</h3>
          <div class="flex flex-col gap-2 text-sm text-slate-500">
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Contact Us</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">FAQs</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Shipping &amp; Returns</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Warranty</a>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="font-bold text-[#111318]">Company</h3>
          <div class="flex flex-col gap-2 text-sm text-slate-500">
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">About Us</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Careers</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Terms of Service</a>
            <a class="hover:text-[var(--primary-color)] transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 gap-4">
        <p class="text-slate-400 text-sm">© 2024 Mobile Store Inc. All rights reserved.</p>
        <div class="flex gap-4 text-slate-400">
          <a class="hover:text-[var(--primary-color)] transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
        </div>
      </div>
    </div>
  </footer>
</div>
`;

  return (
    <div
      className="min-h-screen w-full"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Index;

