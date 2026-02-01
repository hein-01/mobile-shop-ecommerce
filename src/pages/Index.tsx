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
            <a href="#" class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1 cursor-pointer">Phone</a>
            <div class="dropdown-menu absolute top-[72px] -left-20 w-[800px] bg-white shadow-2xl rounded-b-xl overflow-hidden z-[100] border-t-4 border-[#8DC63F] transform transition-all duration-200">
              <div class="flex">
                <div class="w-1/3 bg-gray-50 p-4 border-r border-gray-100 flex flex-col gap-1">
                  <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-[#224D44] text-white shadow-md text-left transition-all">
                    <span class="font-bold">Smartphones</span>
                    <span class="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                  <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all">
                    <span class="font-medium">Tablets</span>
                    <span class="material-symbols-outlined text-[20px] opacity-0 group-hover:opacity-100">chevron_right</span>
                  </button>
                  <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all">
                    <span class="font-medium">Wearables</span>
                    <span class="material-symbols-outlined text-[20px] opacity-0 group-hover:opacity-100">chevron_right</span>
                  </button>
                  <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all">
                    <span class="font-medium">Accessories</span>
                    <span class="material-symbols-outlined text-[20px] opacity-0 group-hover:opacity-100">chevron_right</span>
                  </button>
                </div>
                <div class="w-2/3 p-6 flex flex-col">
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors">
                      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-[#8DC63F] group-hover/item:text-white transition-colors">
                        <span class="material-symbols-outlined">phone_iphone</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-gray-900 font-bold text-sm">iPhones</span>
                        <span class="text-gray-500 text-xs">Latest Series</span>
                      </div>
                    </a>
                    <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors">
                      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-[#8DC63F] group-hover/item:text-white transition-colors">
                        <span class="material-symbols-outlined">android</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-gray-900 font-bold text-sm">Samsung Galaxy</span>
                        <span class="text-gray-500 text-xs">S Series &amp; Foldables</span>
                      </div>
                    </a>
                    <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors">
                      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-[#8DC63F] group-hover/item:text-white transition-colors">
                        <span class="material-symbols-outlined">smartphone</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-gray-900 font-bold text-sm">Google Pixel</span>
                        <span class="text-gray-500 text-xs">AI Powered</span>
                      </div>
                    </a>
                    <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors">
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
          <a href="#" class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1">Audio</a>
          <a href="#" class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1">Tablet</a>
          <a href="#" class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1">Wearables</a>
          <a href="#" class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1">Home Appliances</a>
          <a href="#" class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1">Laptops</a>
          <a href="#" class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1">TV/Entertainment</a>
          <a href="#" class="h-full flex items-center hover:text-[#8DC63F] transition-colors border-b-4 border-transparent hover:border-[#8DC63F] px-1">Support</a>
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
    ${""}
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
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">All Phones</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Accessories</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Wearables</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Sale</a>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="font-bold text-[#111318]">Support</h3>
          <div class="flex flex-col gap-2 text-sm text-slate-500">
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Contact Us</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">FAQs</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Shipping &amp; Returns</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Warranty</a>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="font-bold text-[#111318]">Company</h3>
          <div class="flex flex-col gap-2 text-sm text-slate-500">
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">About Us</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Careers</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-[var(--primary-color)] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 gap-4">
        <p class="text-slate-400 text-sm">© 2024 Mobile Store Inc. All rights reserved.</p>
        <div class="flex gap-4 text-slate-400">
          <a href="#" class="hover:text-[var(--primary-color)] transition-colors"><span class="material-symbols-outlined">share</span></a>
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

